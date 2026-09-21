import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "About Us | MySawari",
  description:
    "About MySawari and the founder behind the self-drive rental masterclass.",
};

export default function AboutUs() {
  return (
    <LegalPage title="About Us">
      <p>
        MySawari began as a self-drive car rental operation, built vehicle
        by vehicle into a business generating approximately ₹20 lakh+ in
        monthly revenue. Along the way, we dealt with fleet sourcing,
        pricing, customer acquisition, verification, damage and fraud,
        maintenance, hiring and the day-to-day operational work of running
        a rental company.
      </p>
      <p>
        This live masterclass exists to compress those lessons into a
        practical, honest roadmap for people considering a similar
        business — the economics, the systems, and the problems that
        don&apos;t show up in a highlight reel.
      </p>

      <h2>Our founder</h2>
      <p>
        <strong>Mukhlesur Rahman</strong> is the founder of MySawari. He has
        directly handled customer acquisition, vehicle owner relationships,
        sales, operations, pricing, accidents, damage claims, fraud
        prevention, maintenance and hiring while scaling the business.
      </p>

      <h2>What we believe</h2>
      <ul>
        <li>
          Real numbers over hype — the Masterclass covers unit economics in
          detail, not just headline revenue figures.
        </li>
        <li>
          Operations matter as much as growth — a fleet without systems for
          verification, maintenance and collections is a liability, not an
          asset.
        </li>
        <li>
          Informed decisions beat fast decisions — we&apos;d rather you
          spend 90 minutes understanding the business than lakhs learning
          it the hard way.
        </li>
      </ul>

      <h2>Get in touch</h2>
      <p>
        Have a question before enrolling? Visit our{" "}
        <a href="/contact-us">Contact Us</a> page or write to us at{" "}
        <a href="mailto:support@mysawari.example.com">
          support@mysawari.example.com
        </a>
        .
      </p>
    </LegalPage>
  );
}
