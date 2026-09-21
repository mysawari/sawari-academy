import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Refund & Cancellation Policy | MySawari",
  description:
    "Refund and cancellation terms for the MySawari live masterclass.",
};

export default function RefundPolicy() {
  return (
    <LegalPage title="Refund & Cancellation Policy" updated="20 September 2026">
      <p>
        This policy explains when refunds and cancellations apply to a seat
        purchased for the &ldquo;Build a Self-Drive Car Rental
        Business&rdquo; live masterclass (&ldquo;Masterclass&rdquo;). It
        applies alongside our{" "}
        <a href="/terms-and-conditions">Terms &amp; Conditions</a>.
      </p>

      <h2>1. Why our policy is strict on digital seats</h2>
      <p>
        The Masterclass is a live, capacity-limited digital session. The
        ₹199 fee is intentionally kept low to filter for genuinely
        interested participants and reserves you a seat that could
        otherwise go to someone else. Because access details (the class
        link and group invite) are issued immediately after payment, we
        treat a completed purchase similarly to other instantly-delivered
        digital services.
      </p>

      <h2>2. Cancellations by you</h2>
      <ul>
        <li>
          <strong>Before the class link/group invite is sent:</strong> if
          you request a cancellation and we have not yet sent your access
          details, we will issue a full refund.
        </li>
        <li>
          <strong>After the class link/group invite is sent:</strong>{" "}
          the seat is considered delivered, and the fee is generally
          non-refundable, since you have received the means to access the
          live session regardless of whether you attend.
        </li>
        <li>
          <strong>No-shows:</strong> if you do not attend the live session
          at the scheduled time, the fee is non-refundable. We are unable
          to offer a private replay of the live session in place of
          attendance.
        </li>
      </ul>

      <h2>3. If we cancel or reschedule</h2>
      <p>If MySawari cancels or reschedules a session, you can choose:</p>
      <ul>
        <li>A transfer to the next available session date, at no extra cost, or</li>
        <li>A full refund to your original payment method.</li>
      </ul>
      <p>
        We will communicate any cancellation or rescheduling by email
        and/or the session group as early as possible.
      </p>

      <h2>4. Technical issues during the live session</h2>
      <p>
        If a session is significantly disrupted or cut short due to a
        technical failure on our end (for example, the platform we use to
        host the live session goes down), we will offer affected
        participants either a seat at a rescheduled session or a
        pro-rated/full refund, depending on how much of the session was
        missed. Please report technical issues to us during or immediately
        after the session so we can verify and act on them.
      </p>
      <p>
        We are not responsible for issues on your end, such as an unstable
        internet connection, an outdated browser, or joining from a device
        that does not support the video platform used.
      </p>

      <h2>5. Duplicate or failed payments</h2>
      <p>
        If you are charged more than once for the same seat, or if a
        payment is deducted from your account but not confirmed by
        Razorpay, contact us with your transaction reference at{" "}
        <a href="mailto:support@mysawari.example.com">
          support@mysawari.example.com
        </a>{" "}
        and we will verify with Razorpay and refund any duplicate or
        unconfirmed charge.
      </p>

      <h2>6. How refunds are processed</h2>
      <p>
        Approved refunds are issued to the original payment method through
        Razorpay. Depending on your bank or payment provider, refunds
        typically reflect within 5–10 business days of approval.
      </p>

      <h2>7. How to request a refund or cancellation</h2>
      <p>
        Email{" "}
        <a href="mailto:support@mysawari.example.com">
          support@mysawari.example.com
        </a>{" "}
        with the subject line &ldquo;Refund request&rdquo;, along with your
        full name, the email used at checkout, and your Razorpay
        transaction/order ID. We aim to respond within 2 business days.
      </p>

      <h2>8. Changes to this policy</h2>
      <p>
        We may revise this policy from time to time; the &ldquo;Last
        updated&rdquo; date above reflects the latest version. The policy
        in effect at the time of your purchase governs that purchase.
      </p>
    </LegalPage>
  );
}
