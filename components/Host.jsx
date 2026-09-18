export default function Host() {
  return (
    <section id="host" className="bg-concrete text-ink">
      <div className="container-content py-20 sm:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.55fr_1fr]">
          <div className="flex flex-col items-start">
            <div className="flex h-28 w-28 items-center justify-center border-2 border-ink bg-plate-yellow font-display text-4xl font-800 text-asphalt">
              MR
            </div>
            <h3 className="mt-5 font-display text-2xl font-800 tracking-tight">
              Mukhlesur Rahman
            </h3>
            <p className="font-body text-sm text-ink/60">
              Founder — MySawari
            </p>
          </div>

          <div>
            <span className="font-display text-sm font-700 uppercase tracking-plate text-plate-yellow-dim">
              Your host
            </span>
            <p className="mt-3 font-body text-xl leading-relaxed text-ink/85">
              I built MySawari as a self-drive car rental business and scaled
              it to approximately ₹20 lakh+ in monthly revenue.
            </p>
            <p className="mt-4 max-w-xl font-body leading-relaxed text-ink/65">
              Along the way I&apos;ve dealt with customer acquisition, vehicle
              owners, sales teams, operations, pricing, accidents, damage,
              fraud, maintenance and hiring — the problems that don&apos;t
              show up in the business videos online. This masterclass is my
              attempt to compress those lessons into a practical roadmap for
              anyone considering this business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
