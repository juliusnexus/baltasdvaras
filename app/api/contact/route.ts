import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // 1. Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 2. Setup Transporter
    // IMPORTANT: User must provide EMAIL_USER and EMAIL_PASS (or App Password) in .env
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 3. Setup Email Data
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'juliusaud2@gmail.com',
      subject: `Nauja užklausa nuo: ${name}`,
      text: `Vardas: ${name}\nEl. paštas: ${email}\n\nŽinutė:\n${message}`,
      replyTo: email,
    };

    // 4. Send Email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error: any) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please check server logs.' },
      { status: 500 }
    );
  }
}
