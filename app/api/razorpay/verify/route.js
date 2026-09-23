import { NextResponse } from 'next/server';
import crypto from 'crypto';
import Razorpay from 'razorpay';
import nodemailer from 'nodemailer';

// Rate limiter for verify endpoint
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // max 3 verify attempts per minute per IP

function isRateLimited(ip) {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  if (!record || now - record.windowStart > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { windowStart: now, count: 1 });
    return false;
  }
  record.count++;
  if (record.count > MAX_REQUESTS) return true;
  return false;
}

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap) {
    if (now - record.windowStart > RATE_LIMIT_WINDOW) {
      rateLimitMap.delete(ip);
    }
  }
}, 5 * 60 * 1000);

export async function POST(req) {
  try {
    // Rate limit by IP
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
               || req.headers.get('x-real-ip')
               || 'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const data = await req.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = data;

    // Validate all required fields exist and are non-empty strings
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature ||
        typeof razorpay_order_id !== 'string' ||
        typeof razorpay_payment_id !== 'string' ||
        typeof razorpay_signature !== 'string') {
      return NextResponse.json(
        { message: "Missing or invalid payment parameters" },
        { status: 400 }
      );
    }

    // Validate Razorpay ID formats to prevent abuse
    if (!razorpay_order_id.startsWith('order_') || !razorpay_payment_id.startsWith('pay_')) {
      return NextResponse.json(
        { message: "Invalid payment parameters" },
        { status: 400 }
      );
    }

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    // Use timing-safe comparison to prevent timing attacks
    const isAuthentic = expectedSignature.length === razorpay_signature.length &&
      crypto.timingSafeEqual(
        Buffer.from(expectedSignature, 'hex'),
        Buffer.from(razorpay_signature, 'hex')
      );

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
              padding: 40px;
              text-align: center;
              border-bottom: 4px solid #eab308;
            }
            .header-logo {
              max-width: 180px;
              height: auto;
              margin-bottom: 10px;
              display: block;
              margin-left: auto;
              margin-right: auto;
            }
            .header h1 {
              color: #ffffff;
              margin: 0;
              font-size: 28px;
              letter-spacing: -0.5px;
              font-weight: 800;
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
              <!-- Replace src with your actual logo URL once hosted -->
              <img src="https://sawariacademy.in/logo.png" alt="SawariAcademy" class="header-logo" onerror="this.style.display='none'" />
              <h1>SawariAcademy</h1>
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
              <p>See you in the masterclass!<br><strong>Mukhlesur Rahman</strong></p>
              <p style="margin-top: 15px; font-size: 12px;">If you have any questions, simply reply to this email (hello@sawariacademy.in).</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error("Payment successful but failed to send email:", emailError?.message || "Unknown error");
      return NextResponse.json({ message: "Payment verified successfully, but email sending failed", isOk: true }, { status: 200 });
    }

    return NextResponse.json({ message: "Payment verified and email sent successfully", isOk: true }, { status: 200 });
  } catch (error) {
    console.error("Error verifying payment or sending email:", error?.message || "Unknown error");
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
