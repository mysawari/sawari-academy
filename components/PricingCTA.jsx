const takeaways = [
  "Whether this business suits you",
  "How much capital you may need",
  "What vehicles to consider",
  "How the unit economics work",
  "How customers can be acquired",
  "What systems you'll need as you scale",
  "What risks you need to prepare for",
  "How a rental company can be scaled",
];

export default function PricingCTA() {
  return (
    <section id="pricing" className="bg-asphalt text-paper">
      <div className="container-content py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-800 leading-[1.05] tracking-tight sm:text-5xl">
            ₹199 could save you lakhs
            in wrong decisions.
          </h2>
          <p className="mt-5 font-body leading-relaxed text-paper/70">
            Before buying your first rental vehicle, taking an EMI, leasing
            multiple cars or investing lakhs into this business — spend 90
            minutes understanding how it actually works.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-10 border-2 border-asphalt-line p-8 sm:grid-cols-2 sm:p-10 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <ul className="flex flex-col gap-3">
            {takeaways.slice(0, 4).map((t) => (
              <Takeaway key={t} text={t} />
            ))}
          </ul>

          <div className="flex flex-col items-center gap-3 border-y-2 border-asphalt-line py-8 lg:border-x-2 lg:border-y-0 lg:px-10 lg:py-0">
            <span className="font-display text-sm font-700 uppercase tracking-plate text-paper/50">
              Live masterclass
            </span>
            <span className="tabular font-display text-6xl font-800 text-plate-yellow">
              ₹199
            </span>
            <span className="font-body text-sm text-paper/55">
              ~90 minutes + live Q&amp;A
            </span>
            <a
              href="#"
              className="mt-3 w-full bg-plate-yellow px-8 py-3.5 text-center font-display text-lg font-700 tracking-tight text-asphalt transition-transform hover:-translate-y-0.5 hover:bg-white"
            >
              Reserve my seat
            </a>
            <span className="font-body text-xs text-paper/40">
              Kept small so the room stays focused on participants who are
              genuinely interested.
            </span>
          </div>

          <ul className="flex flex-col gap-3">
            {takeaways.slice(4).map((t) => (
              <Takeaway key={t} text={t} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Takeaway({ text }) {
  return (
    <li className="flex items-start gap-3">
      <span
        aria-hidden="true"
        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border-2 border-plate-yellow font-display text-[0.7rem] font-700 text-plate-yellow"
      >
        ✓
      </span>
      <span className="font-body text-[0.95rem] leading-snug text-paper/75">
        {text}
      </span>
    </li>
  );
}
