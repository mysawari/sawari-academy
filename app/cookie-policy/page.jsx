import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Cookie Policy | MySawari",
  description: "How MySawari uses cookies and similar technologies.",
};

export default function CookiePolicy() {
  return (
    <LegalPage title="Cookie Policy" updated="20 September 2026">
      <p>
        This Cookie Policy explains what cookies are, how MySawari uses
        them on this website, and the choices available to you. It should
        be read alongside our{" "}
        <a href="/privacy-policy">Privacy Policy</a>.
      </p>

      <h2>1. What are cookies</h2>
      <p>
        Cookies are small text files placed on your device when you visit a
        website. They help the website function, remember your
        preferences, and understand how the site is used. Similar
        technologies (such as local storage, used for our cookie-consent
        preference) work in a comparable way.
      </p>

      <h2>2. Categories of cookies we use</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Purpose</th>
            <th>Can you disable it?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Strictly necessary</td>
            <td>
              Core site functionality, such as remembering your
              cookie-consent choice and securing checkout with Razorpay.
            </td>
            <td>No — required for the site to work correctly.</td>
          </tr>
          <tr>
            <td>Performance &amp; analytics</td>
            <td>
              Understanding aggregate traffic, popular pages and how
              visitors reach the site, so we can improve it.
            </td>
            <td>
              Yes — decline via the cookie banner or your browser settings.
            </td>
          </tr>
          <tr>
            <td>Payment gateway</td>
            <td>
              Set by Razorpay during checkout to process your payment
              securely and prevent fraud.
            </td>
            <td>
              These are set by Razorpay directly and are required to
              complete a purchase.
            </td>
          </tr>
        </tbody>
      </table>

      <h2>3. Third-party cookies</h2>
      <p>
        Some cookies on this site are set by third parties we work with,
        such as Razorpay (payments) and analytics providers. These third
        parties have their own privacy and cookie policies governing how
        they use the information collected through their cookies.
      </p>

      <h2>4. Managing your cookie preferences</h2>
      <p>
        When you first visit this site, a banner lets you accept or decline
        non-essential cookies. You can also control or delete cookies at
        any time through your browser settings — most browsers let you
        block cookies from specific sites, block third-party cookies
        entirely, or clear all cookies when you close the browser. Note
        that blocking strictly necessary cookies may affect your ability to
        complete a purchase.
      </p>

      <h2>5. Changes to this policy</h2>
      <p>
        We may update this Cookie Policy from time to time to reflect
        changes in the cookies we use or for legal reasons. The &ldquo;Last
        updated&rdquo; date above reflects the latest revision.
      </p>

      <h2>6. Contact us</h2>
      <p>
        Questions about our use of cookies can be sent to{" "}
        <a href="mailto:privacy@mysawari.example.com">
          privacy@mysawari.example.com
        </a>
        .
      </p>
    </LegalPage>
  );
}
