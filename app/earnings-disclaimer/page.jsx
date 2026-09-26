import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Earnings Disclaimer | MySawari",
  description:
    "Clarifying what the revenue figures shared in the MySawari masterclass do and don't mean for your own results.",
};

export default function EarningsDisclaimer() {
  return (
    <LegalPage title="Earnings Disclaimer" updated="20 September 2026">
      <p>
        This page clarifies how to interpret the revenue figures referenced
        on this website and during the &ldquo;Build a Self-Drive Car Rental
        Business&rdquo; live masterclass (&ldquo;Masterclass&rdquo;),
        including the figure of approximately{" "}
        <strong>₹20 lakh+ in monthly revenue</strong>.
      </p>

      <h2>1. These are our figures, not a promise about yours</h2>
      <p>
        The revenue figures shared are based on the founder&apos;s personal
        experience operating MySawari, a specific self-drive car rental
        business in a specific city, with a specific fleet, cost structure
        and team. They describe what happened in that one business — they
        are not an average, a typical result, or a guarantee, prediction or
        projection of what any other person or business will earn.
      </p>

      <h2>2. Revenue is not profit</h2>
      <p>
        &ldquo;Revenue&rdquo; refers to money collected from rentals before
        expenses such as vehicle cost or EMI, insurance, maintenance,
        marketing, staff, platform fees, and other operating costs. The
        Masterclass discusses unit economics precisely so you can
        understand the difference between revenue and actual profit for
        your own numbers — a topic we cover in detail rather than
        glossing over.
      </p>

      <h2>3. Results depend on factors specific to you</h2>
      <p>Outcomes in a self-drive rental business depend on factors including:</p>
      <ul>
        <li>The city and local demand for self-drive rentals</li>
        <li>Available capital and how vehicles are financed or leased</li>
        <li>Vehicle selection, fleet size and utilisation</li>
        <li>Local competition and pricing</li>
        <li>Marketing execution and customer acquisition costs</li>
        <li>Operational discipline — verification, maintenance, fraud prevention</li>
        <li>Time, effort and consistency put into the business</li>
        <li>General market and economic conditions</li>
      </ul>
      <p>
        Because these factors vary widely from person to person and city to
        city, your results — including the possibility of losses — may
        differ substantially from the figures discussed.
      </p>

      <h2>4. No guarantee of income</h2>
      <p>
        As stated in the Masterclass description itself, this is not a
        guaranteed-income program, a get-rich-quick scheme, or a
        passive-income opportunity. Running a self-drive rental business
        involves capital, customers, vehicles, staff, risk and ongoing
        operational work. We do not guarantee that you will earn any
        specific amount, or any amount at all, as a result of attending the
        Masterclass.
      </p>

      <h2>5. Educational purpose</h2>
      <p>
        The Masterclass is intended to help you understand how the
        self-drive rental business model works — the economics,
        operations, customer acquisition and risks involved — so you can
        make a more informed decision about whether and how to pursue it.
        It does not constitute financial, investment, tax or legal advice.
        Consider consulting a qualified professional before making
        business or financial decisions based on what you learn.
      </p>

      <h2>6. Questions</h2>
      <p>
        If anything in this disclaimer is unclear, contact us at{" "}
        <a href="mailto:hello@sawariacademy.in">
          hello@sawariacademy.in
        </a>{" "}
        before purchasing a seat.
      </p>
    </LegalPage>
  );
}
