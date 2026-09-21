import LegalPage from "@/components/LegalPage";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | MySawari",
  description: "Get in touch with the MySawari team.",
};

export default function ContactUs() {
  return (
    <>
      <LegalPage title="Contact Us">
        <p>
          Have a question about the Masterclass, a payment, or your access
          details? Reach us through any of the channels below — we
          typically respond within 1–2 business days.
        </p>

        <h2>Business details</h2>
        <table>
          <tbody>
            <tr>
              <th>Legal entity</th>
              <td>[Legal Entity Name]</td>
            </tr>
            <tr>
              <th>Registered address</th>
              <td>
                [Registered Business Address, City, State, PIN — India]
              </td>
            </tr>
            <tr>
              <th>Support email</th>
              <td>
                <a href="mailto:support@mysawari.example.com">
                  support@mysawari.example.com
                </a>
              </td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>
                <a href="tel:+911234567890">+91 12345 67890</a>
              </td>
            </tr>
            <tr>
              <th>Support hours</th>
              <td>Monday–Saturday, 10:00 AM–6:00 PM IST</td>
            </tr>
          </tbody>
        </table>
      </LegalPage>

      <section className="bg-concrete text-ink">
        <div className="container-content py-16 sm:py-20">
          <div className="mx-auto max-w-xl">
            <h2 className="font-display text-2xl font-800 tracking-tight">
              Send us a message
            </h2>
            <p className="mt-2 font-body text-sm leading-relaxed text-ink/60">
              This opens your email client with the details filled in, sent
              directly to our support inbox.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
