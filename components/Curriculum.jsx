const modules = [
  {
    n: "01",
    title: "The self-drive rental business model",
    body: "Where the revenue comes from, the major expenses, utilisation, fleet economics, seasonality, and the hidden costs beginners miss.",
  },
  {
    n: "02",
    title: "How much money you actually need to start",
    body: "Starting with 1 car vs. 5 cars vs. a larger fleet, and the trade-offs between purchasing, financing, leasing and working with attached vehicles.",
  },
  {
    n: "03",
    title: "Which cars to add to your fleet",
    body: "The framework we use to score a vehicle on cost, rental rate, demand, mileage, maintenance, parts availability, resale value and downtime.",
  },
  {
    n: "04",
    title: "Real unit economics",
    body: "Monthly revenue minus vehicle cost, maintenance, insurance, marketing, operations and downtime — how to tell if a single car is actually profitable.",
  },
  {
    n: "05",
    title: "How we generate customers",
    body: "The channels that work for a rental business: Search, Maps, SEO, WhatsApp, social, referrals, repeat and travel customers, and partnerships.",
  },
  {
    n: "06",
    title: "How a rental operation actually runs",
    body: "The full customer journey from lead to repeat booking, and exactly where rental businesses commonly lose money inside that process.",
  },
  {
    n: "07",
    title: "Accidents, damage and fraud",
    body: "Verification, documents, security deposits, damage assessment, late returns, non-payment and the operational controls that prevent misuse.",
  },
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="bg-asphalt text-paper">
      <div className="container-content py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-display text-sm font-700 uppercase tracking-plate text-plate-yellow">
            What you&apos;ll learn
          </span>
          <h2 className="mt-3 font-display text-4xl font-800 leading-tight tracking-tight sm:text-5xl">
            Seven modules, built from
            running the business
          </h2>
        </div>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div
            aria-hidden="true"
            className="absolute left-[15px] top-2 hidden h-[calc(100%-1rem)] w-[3px] bg-lane-dark sm:block"
          />
          <ol className="flex flex-col gap-10 sm:gap-12">
            {modules.map((m) => (
              <li key={m.n} className="relative flex gap-6 sm:gap-8">
                <span className="tabular relative z-10 hidden h-8 w-8 shrink-0 items-center justify-center border-2 border-plate-yellow bg-asphalt font-display text-sm font-700 text-plate-yellow sm:flex">
                  {m.n}
                </span>
                <div className="border-l-2 border-asphalt-line pl-5 sm:border-l-0 sm:pl-0">
                  <span className="tabular font-display text-sm font-700 text-plate-yellow sm:hidden">
                    Module {m.n}
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-700 leading-snug tracking-tight sm:mt-0 sm:text-[1.7rem]">
                    {m.title}
                  </h3>
                  <p className="mt-2 max-w-xl font-body leading-relaxed text-paper/65">
                    {m.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
