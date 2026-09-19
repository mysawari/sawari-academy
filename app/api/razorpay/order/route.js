import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(req) {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: 19900, // amount in smallest currency unit (paise)
      currency: "INR",
      receipt: "receipt_order_" + Math.floor(Math.random() * 1000000),
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    console.error("Razorpay order error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
