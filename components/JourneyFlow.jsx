const steps = [
  "Lead",
  "Quotation",
  "Booking",
  "Verification",
  "Handover",
  "Trip",
  "Return",
  "Inspection",
  "Settlement",
  "Repeat",
];

export default function JourneyFlow() {
  return (
    <section className="bg-concrete text-ink">
      <div className="container-content py-20 sm:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <h2 className="font-display text-4xl font-800 leading-[1.05] tracking-tight sm:text-[2.75rem]">
              One trip touches
              ten handoffs
            </h2>
            <p className="mt-5 max-w-sm font-body leading-relaxed text-ink/70">
              This is the full route a booking travels, end to end. I&apos;ll
              show you exactly where rental businesses commonly lose money
              inside it — and where MySawari used to.
            </p>
          </div>

          <div className="flex flex-wrap items-stretch gap-x-2 gap-y-3">
            {steps.map((step, i) => (
              <div key={step} className="flex items-center">
                <div className="border-2 border-ink bg-paper px-4 py-2.5 font-display text-base font-700 tracking-tight text-ink">
                  {step}
                </div>
                {i < steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="mx-1.5 font-display text-lg text-plate-yellow-dim"
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
