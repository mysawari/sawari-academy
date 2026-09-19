import { NextResponse } from 'next/server';
import crypto from 'crypto';
import Razorpay from 'razorpay';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await req.json();

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (!isAuthentic) {
      return NextResponse.json({ message: "Invalid Signature" }, { status: 400 });
    }

    // Initialize Razorpay to fetch payment details
    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const payment = await razorpay.payments.fetch(razorpay_payment_id);
    const userEmail = payment.email;

    if (!userEmail) {
      console.error("No email found in payment details.");
      return NextResponse.json({ message: "Payment successful, but no email found to send link." }, { status: 200 });
    }

    // Set up nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const groupLink = process.env.WHATSAPP_GROUP_LINK || "https://chat.whatsapp.com/default-link";

    const mailOptions = {
      from: `"Sawari Academy" <${process.env.SMTP_USER}>`,
      to: userEmail,
      subject: "Welcome to Sawari Academy! Join our WhatsApp Group",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
              background-color: #f4f4f5;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 40px auto;
              background-color: #ffffff;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            }
            .header {
              background-color: #1a1a1a;
              padding: 30px 40px;
              text-align: center;
            }
            .header h1 {
              color: #ffffff;
              margin: 0;
              font-size: 28px;
              letter-spacing: -0.5px;
            }
            .content {
              padding: 40px;
              color: #3f3f46;
              line-height: 1.6;
            }
            .content h2 {
              color: #18181b;
              font-size: 22px;
              margin-top: 0;
              margin-bottom: 20px;
            }
            .button-container {
              text-align: center;
              margin: 35px 0;
            }
            .button {
              display: inline-block;
              background-color: #eab308;
              color: #1a1a1a !important;
              font-weight: bold;
              text-decoration: none;
              padding: 16px 32px;
              border-radius: 6px;
              font-size: 16px;
            }
            .footer {
              background-color: #f8fafc;
              padding: 20px 40px;
              text-align: center;
              color: #64748b;
              font-size: 14px;
              border-top: 1px solid #e2e8f0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>MySawari</h1>
            </div>
            <div class="content">
              <h2>Payment Successful! 🎉</h2>
              <p>Hi there,</p>
              <p>Thank you for reserving your seat for the <strong>MySawari Live Masterclass</strong>. We're thrilled to have you on board!</p>
              <p>To get all the updates, ask questions, and connect before the session begins, please join our exclusive WhatsApp community right away.</p>
              
              <div class="button-container">
                <a href="${groupLink}" class="button">Join the WhatsApp Group</a>
              </div>
              
              <p style="font-size: 14px; color: #71717a;">If the button above doesn't work, you can copy and paste this link into your browser:<br>
              <a href="${groupLink}" style="color: #0284c7;">${groupLink}</a></p>
            </div>
            <div class="footer">
              <p>See you in the masterclass!<br><strong>Mukhlesur Rahman & The MySawari Team</strong></p>
              <p style="margin-top: 15px; font-size: 12px;">If you have any questions, simply reply to this email (hello@sawariacademy.in).</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Payment verified and email sent successfully", isOk: true }, { status: 200 });
  } catch (error) {
    console.error("Error verifying payment or sending email:", error);
    return NextResponse.json({ message: "Internal Server Error", error: error.message }, { status: 500 });
  }
}
