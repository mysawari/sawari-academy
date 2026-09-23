import { useState } from "react";

export function useRazorpayPayment() {
  const [loading, setLoading] = useState(false);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (e) => {
    e?.preventDefault();
    setLoading(true);

    const res = await loadRazorpayScript();
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      setLoading(false);
      return;
    }

    try {
      // 1. Create order
      const orderData = await fetch("/api/razorpay/order", {
        method: "POST",
      }).then((t) => t.json());

      if (orderData.error) {
        alert("Error creating order: " + orderData.error);
        setLoading(false);
        return;
      }

      // 2. Initialize Razorpay Checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Sawari Academy",
        description: "Live Masterclass",
        order_id: orderData.id,
        handler: async function (response) {
          try {
            // 3. Verify Payment and Send Email
            const verifyRes = await fetch("/api/razorpay/verify", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });
            const verifyData = await verifyRes.json();
            if (verifyRes.ok) {
              alert("Payment successful! Please check your email for the WhatsApp group link.");
            } else {
              alert("Payment verification failed. " + verifyData.message);
            }
          } catch (err) {
            alert("An error occurred during verification.");
          }
        },
        theme: {
          color: "#eab308", // match plate-yellow
        },
        hidden: {
          contact: false,
          email: false
        },
        prefill: {
          email: "" // adding this back sometimes forces the "Optional" label to disappear
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (err) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { handlePayment, loading };
}
