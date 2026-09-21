import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Terms & Conditions | MySawari",
  description:
    "Terms and conditions for enrolling in the MySawari live masterclass.",
};

export default function TermsAndConditions() {
  return (
    <LegalPage title="Terms & Conditions" updated="20 September 2026">
      <p>
        These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your
        purchase and use of the &ldquo;Build a Self-Drive Car Rental
        Business&rdquo; live masterclass (&ldquo;Masterclass&rdquo;) offered
        by MySawari (&ldquo;MySawari&rdquo;, &ldquo;we&rdquo;,
        &ldquo;us&rdquo;, &ldquo;our&rdquo;). By purchasing a seat, you agree
        to be bound by these Terms.
      </p>

      <h2>1. Who we are</h2>
      <p>
        MySawari is operated by [Legal Entity Name], registered at
        [Registered Business Address, City, State, PIN, India]. You can
        reach us at{" "}
        <a href="mailto:support@mysawari.example.com">
          support@mysawari.example.com
        </a>{" "}
        or through our{" "}
        <a href="/contact-us">Contact Us</a> page.
      </p>

      <h2>2. What you are buying</h2>
      <p>
        The Masterclass is a live, online, instructor-led session of
        approximately 90 minutes, followed by a live question-and-answer
        segment. It is a one-time, single-attendee digital service, not a
        physical product. No physical goods are shipped or delivered.
      </p>
      <p>
        The Masterclass fee is <strong>₹199 (Indian Rupees One Hundred
        Ninety-Nine only)</strong> per seat, inclusive of applicable taxes
        unless stated otherwise at checkout.
      </p>

      <h2>3. How access is delivered</h2>
      <p>
        We do not maintain a user account system for this Masterclass. Once
        your payment is successfully processed by our payment partner,
        Razorpay, you will receive a confirmation email at the email address
        you provide at checkout, containing:
      </p>
      <ul>
        <li>Payment confirmation and receipt details, and</li>
        <li>
          The live class link and/or an invite to the WhatsApp/Telegram
          group used to coordinate the session and share reminders.
        </li>
      </ul>
      <p>
        It is your responsibility to provide an accurate, active email
        address at checkout and to check your spam or promotions folder if
        the confirmation email does not appear within 30 minutes of
        payment. If you do not receive it, contact us before the scheduled
        session so we can resend access details.
      </p>

      <h2>4. Eligibility</h2>
      <p>
        The Masterclass is intended for individuals aged 18 years or older
        who are capable of entering into a binding contract under
        applicable Indian law. By purchasing a seat, you confirm that you
        meet this requirement.
      </p>

      <h2>5. Nature of the content</h2>
      <p>
        The Masterclass shares operational lessons, frameworks and figures
        drawn from the founder&apos;s personal experience building and
        scaling MySawari. It is provided for general educational and
        informational purposes only and does not constitute financial,
        legal, tax, investment or professional business advice specific to
        your circumstances.
      </p>
      <p>
        Any revenue, profit or growth figures referenced during the
        Masterclass reflect MySawari&apos;s own results and are not
        promises, guarantees or projections of what you will achieve. See
        our <a href="/earnings-disclaimer">Earnings Disclaimer</a> for full
        details.
      </p>

      <h2>6. Your responsibilities</h2>
      <ul>
        <li>
          You agree to attend the live session using the access details
          sent to you, and to keep those details confidential.
        </li>
        <li>
          Recording, screen-capturing, re-broadcasting, reselling or
          publicly redistributing the Masterclass, in whole or in part,
          without our written permission is not permitted.
        </li>
        <li>
          You agree to engage respectfully with the host and other
          participants during the live session and any associated group.
        </li>
      </ul>

      <h2>7. Rescheduling and cancellation by us</h2>
      <p>
        Live sessions occasionally need to be rescheduled due to
        circumstances beyond our control (technical issues, host
        unavailability, insufficient enrolment, etc.). If we reschedule or
        cancel a session, we will notify enrolled participants by email or
        the group used for the session and offer either a new session date
        or a refund, as described in our{" "}
        <a href="/refund-cancellation-policy">
          Refund &amp; Cancellation Policy
        </a>
        .
      </p>

      <h2>8. Payments</h2>
      <p>
        All payments are processed securely through Razorpay. MySawari does
        not collect or store your card, UPI or net-banking credentials on
        its own servers. See our{" "}
        <a href="/privacy-policy">Privacy Policy</a> for more on how payment
        data is handled.
      </p>

      <h2>9. Intellectual property</h2>
      <p>
        All materials shared during the Masterclass — including
        presentation slides, frameworks, templates and recordings (if any)
        — remain the intellectual property of MySawari. You may use what
        you learn to run your own business, but you may not repackage,
        resell or publicly republish the Masterclass content itself.
      </p>

      <h2>10. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, MySawari and its founder
        will not be liable for any indirect, incidental or consequential
        loss arising from business decisions made after attending the
        Masterclass. The Masterclass is educational in nature; outcomes
        depend on factors specific to your market, capital, execution and
        circumstances.
      </p>

      <h2>11. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time to reflect changes in
        the Masterclass format, applicable law, or our operations. The
        &ldquo;Last updated&rdquo; date at the top of this page reflects
        the most recent revision. Continued purchase or attendance after an
        update constitutes acceptance of the revised Terms.
      </p>

      <h2>12. Governing law</h2>
      <p>
        These Terms are governed by the laws of India. Any disputes arising
        out of or in connection with these Terms will be subject to the
        exclusive jurisdiction of the courts of [City, State], India.
      </p>

      <h2>13. Contact</h2>
      <p>
        Questions about these Terms can be sent to{" "}
        <a href="mailto:support@mysawari.example.com">
          support@mysawari.example.com
        </a>{" "}
        or via our <a href="/contact-us">Contact Us</a> page.
      </p>
    </LegalPage>
  );
}
