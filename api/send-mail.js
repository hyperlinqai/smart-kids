import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res.status(405).end("Method Not Allowed");
    }

    // Parse body from either JSON or HTML form post
    let name = "", city = "", phone = "", website = "";
    const ctype = String(req.headers["content-type"] || "");

    try {
        if (ctype.includes("application/json")) {
            const body = req.body || {};
            name = String(body.name || "").trim();
            city = String(body.city || "").trim();
            phone = String(body.phone || "").trim();

        } else {
            const raw = await readRawBody(req);
            const params = new URLSearchParams(raw);
            name = String(params.get("name") || "").trim();
            city = String(params.get("city") || "").trim();
            phone = String(params.get("phone") || "").trim();

        }
    } catch (err) {
        console.error("Body parse error", err);
        res.setHeader("Location", "/thankyou.html?status=bad_body&utm_source=website&utm_medium=form&utm_campaign=lead");
        return res.status(302).end();
    }

    // Honeypot
    if (website) {
        const utmParams = "?utm_source=website&utm_medium=form&utm_campaign=lead";
        res.setHeader("Location", "/thankyou.html" + utmParams);
        return res.status(302).end();
    }

    if (!name || !city || !phone) {
        res.setHeader("Location", "/index.html#book");
        return res.status(302).end();
    }

    try {
        const from = `SMART KIDS <no-reply@${req.headers.host || "example.com"}>`;
        const to = "kingswayrepair@gmail.com"; // change to your recipient
        const subject = `New Lead — ${name}`;
        const text = `Name: ${name}\nCity: ${city}\nPhone: ${phone}`;

        await resend.emails.send({
            from,
            to,
            subject,
            text,
        });

        const utmParams = "?utm_source=website&utm_medium=form&utm_campaign=lead";
        res.setHeader("Location", "/thankyou.html" + utmParams);
        return res.status(302).end();
    } catch (e) {
        console.error("Mail send error", e);
        res.setHeader("Location", "/thankyou.html?status=error&utm_source=website&utm_medium=form&utm_campaign=lead");
        return res.status(302).end();
    }
}

// Helper: read raw request body for form posts
function readRawBody(req) {
    return new Promise((resolve, reject) => {
        const chunks = [];
        req.on("data", (c) => chunks.push(c));
        req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
        req.on("error", reject);
    });
}