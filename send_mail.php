// /api/send-mail.js (Node serverless function on Vercel)
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name = "", city = "", phone = "", website = "" } = req.body || {};

  // Honeypot
  if (website) return res.status(200).json({ ok: true });

  if (!name || !city || !phone) {
    return res.status(400).json({ ok: false, error: "Missing fields" });
  }

  try {
    // Use your SMTP (domain mailbox recommended). Example with generic SMTP:
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,   // e.g. mail.yourdomain.com
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    const from = `SMART KIDS <no-reply@${req.headers.host || "example.com"}>`;
    const to = "hello@smart-kids.xxyz";
    const subject = `New Lead — STEM Workshop: ${name}`;
    const text = [
      "New workshop enquiry",
      "",
      `Name:  ${name}`,
      `City:  ${city}`,
      `Phone: ${phone}`,
      "",
      `IP: ${req.headers["x-forwarded-for"] || req.socket.remoteAddress || "n/a"}`,
      `UA: ${req.headers["user-agent"] || "n/a"}`
    ].join("\n");

    await transporter.sendMail({ from, to, subject, text });

    // Redirect to thank you
    res.setHeader("Location", "/thankyou.html");
    return res.status(302).end();
  } catch (err) {
    console.error(err);
    // Redirect with error flag (optional)
    res.setHeader("Location", "/thankyou.html?status=error");
    return res.status(302).end();
  }
}