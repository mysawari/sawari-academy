import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import crypto from 'crypto';

// Simple in-memory rate limiter (use Redis in production for multi-instance)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5; // max 5 orders per minute per IP

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

// Periodically clean up old entries to prevent memory leaks
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap) {
    if (now - record.windowStart > RATE_LIMIT_WINDOW) {
      rateLimitMap.delete(ip);
    }
  }
}, 5 * 60 * 1000); // Clean every 5 minutes

export async function POST(req) {
  try {
    // Rate limit by IP
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
               || req.headers.get('x-real-ip')
               || 'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: 19900, // amount in smallest currency unit (paise)
      currency: "INR",
      receipt: "receipt_" + crypto.randomUUID(),
    };

    const order = await razorpay.orders.create(options);

    // Only return the fields the client needs — never expose full Razorpay object
    return NextResponse.json({
      id: order.id,
      amount: order.amount,
      currency: order.currency,
    }, { status: 200 });
  } catch (error) {
    console.error("Razorpay order error:", error?.message || "Unknown error");
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}
