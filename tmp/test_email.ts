import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

async function test() {
  console.log('Using email:', process.env.EMAIL_USER);
  console.log('Using pass:', process.env.EMAIL_PASS ? '********' : 'NOT FOUND');

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'juliusaud2@gmail.com',
    subject: 'Test Email',
    text: 'This is a test email.',
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Email error:', error);
  }
}

test();
