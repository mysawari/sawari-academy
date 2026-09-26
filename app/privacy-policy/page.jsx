import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy | MySawari",
  description: "How MySawari collects, uses and protects your information.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" updated="20 September 2026">
      <p>
        This Privacy Policy explains how MySawari (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects, uses, shares and
        protects information when you visit this website or enroll in the
        &ldquo;Build a Self-Drive Car Rental Business&rdquo; live
        masterclass (&ldquo;Masterclass&rdquo;).
      </p>

      <h2>1. Information we collect</h2>
      <h3>Information you give us</h3>
      <ul>
        <li>Full name</li>
        <li>Email address</li>
        <li>Phone number (WhatsApp/Telegram, for group access)</li>
        <li>
          Any message you send us through the{" "}
          <a href="/contact-us">Contact Us</a> page or by email
        </li>
      </ul>
      <h3>Information collected automatically</h3>
      <ul>
        <li>Device and browser type, and approximate location (from IP)</li>
        <li>Pages visited, time on page and referring website</li>
        <li>Cookie identifiers — see our <a href="/cookie-policy">Cookie Policy</a></li>
      </ul>
      <h3>Information from our payment partner</h3>
      <p>
        We do <strong>not</strong> collect or store your card number, UPI
        ID, or net-banking credentials. Payments are processed directly by
        Razorpay, and we only receive confirmation that a payment was
        successful, the amount paid, and a transaction reference — not your
        full payment instrument details.
      </p>

      <h2>2. How we use your information</h2>
      <ul>
        <li>To confirm your purchase and send your seat/receipt by email</li>
        <li>To send the live class link and/or the group invite (WhatsApp/Telegram)</li>
        <li>To send reminders about the scheduled session</li>
        <li>To respond to support requests sent via email or our Contact Us page</li>
        <li>To improve this website and the Masterclass based on aggregate usage patterns</li>
        <li>To meet legal, tax and accounting obligations (e.g. invoicing, GST records)</li>
      </ul>
      <p>
        We do not sell your personal information to third parties, and we
        do not use it to send unrelated marketing without your consent.
      </p>

      <h2>3. Who we share information with</h2>
      <table>
        <thead>
          <tr>
            <th>Recipient</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Razorpay</td>
            <td>Processing your payment securely</td>
          </tr>
          <tr>
            <td>Email/communication service providers</td>
            <td>Sending confirmation, receipts and class access details</td>
          </tr>
          <tr>
            <td>Analytics providers</td>
            <td>Understanding aggregate website traffic and usage</td>
          </tr>
          <tr>
            <td>Government or regulatory authorities</td>
            <td>Where required by applicable law</td>
          </tr>
        </tbody>
      </table>
      <p>
        We require these providers to handle your information securely and
        only for the purposes described above.
      </p>

      <h2>4. Cookies</h2>
      <p>
        We use cookies and similar technologies to run this website and
        understand how it&apos;s used. You can control cookies through your
        browser settings and the cookie banner on this site. See our full{" "}
        <a href="/cookie-policy">Cookie Policy</a> for details.
      </p>

      <h2>5. Data retention</h2>
      <p>
        We retain enrolment and payment-related records for as long as
        required to meet our accounting, tax and legal obligations under
        Indian law (typically several years), and delete or anonymise other
        personal information when it is no longer needed for the purposes
        described in this Policy.
      </p>

      <h2>6. Data security</h2>
      <p>
        We use reasonable administrative and technical safeguards to
        protect your information, including transmitting data over
        encrypted (HTTPS) connections and relying on PCI-DSS compliant
        payment processing through Razorpay. No method of transmission or
        storage is completely secure, and we cannot guarantee absolute
        security.
      </p>

      <h2>7. Your rights</h2>
      <p>You may ask us to:</p>
      <ul>
        <li>Confirm what personal information we hold about you</li>
        <li>Correct inaccurate information</li>
        <li>Delete your information, subject to our legal retention obligations</li>
        <li>Stop sending you non-essential communications</li>
      </ul>
      <p>
        To exercise any of these rights, contact us at{" "}
        <a href="mailto:hello@sawariacademy.in">
          hello@sawariacademy.in
        </a>
        . We will respond within a reasonable timeframe.
      </p>

      <h2>8. Children&apos;s privacy</h2>
      <p>
        This Masterclass and website are not directed at individuals under
        18, and we do not knowingly collect personal information from
        children.
      </p>

      <h2>9. Changes to this Policy</h2>
      <p>
        We may update this Privacy Policy periodically. Material changes
        will be reflected by updating the &ldquo;Last updated&rdquo; date
        at the top of this page.
      </p>

      <h2>10. Contact us</h2>
      <p>
        For any privacy-related questions, write to{" "}
        <a href="mailto:hello@sawariacademy.in">
          hello@sawariacademy.in
        </a>{" "}
        or use our <a href="/contact-us">Contact Us</a> page.
      </p>
    </LegalPage>
  );
}
