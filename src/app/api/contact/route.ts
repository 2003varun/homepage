import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Name, email, subject, and message are required fields.' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service is not configured. Missing API key.' },
        { status: 500 }
      );
    }

    const toEmail = process.env.CONTACT_EMAIL_TO || 'sales@q-dat.com';
    // Use onboarding@resend.dev for testing if you don't have a verified domain yet on Resend.
    // If you have a verified domain (e.g., q-dat.com), change this to noreply@q-dat.com
    const fromEmail = process.env.CONTACT_EMAIL_FROM || 'onboarding@resend.dev';

    const { data, error } = await resend.emails.send({
      from: `Q-DAT Website Form <${fromEmail}>`,
      to: [toEmail],
      subject: `New Contact Inquiry: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <br />
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
      reply_to: email, // Let the sales team reply directly to the sender
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Contact Form Processing Error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
