// /api/send-mail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).end();

    const { name = "", city = "", phone = "", website = "" } = req.body || {};
    if (website) return res.status(200).json({ ok: true }); // honeypot
    if (!name || !city || !phone) return res.status(400).json({ ok: false });

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT || 587),
            secure: false,
            auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
        });

        await transporter.sendMail({
            from: `SMART KIDS <no-reply@${req.headers.host || "example.com"}>`,
            to: "kingswayrepair@gmail.com",
            subject: `New Lead — ${name}`,
            text: `Name: ${name}\nCity: ${city}\nPhone: ${phone}`,
        });

        res.setHeader("Location", "/thankyou.html");
        return res.status(302).end();
    } catch (e) {
        res.setHeader("Location", "/thankyou.html?status=error");
        return res.status(302).end();
    }
}