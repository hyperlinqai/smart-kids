export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, city, phone } = body ?? {}

    if (!name || !city || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const adminEmail = process.env.LEADS_TO_EMAIL || 'shoaib.narmadatech@gmail.com'

    const html = `
      <h2>New Lead</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>City:</strong> ${city}</p>
      <p><strong>Phone:</strong> ${phone}</p>
    `

    const { error } = await resend.emails.send({
      from: 'leads@homenest.dev',
      to: adminEmail,
      subject: 'New Lead from HomeNest',
      html,
    })

    if (error) {
      return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unexpected error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}


