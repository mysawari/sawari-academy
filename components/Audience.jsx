const fitFor = [
  {
    title: "You want to start a self-drive rental business",
    body: "Even if you don't currently own a rental vehicle.",
  },
  {
    title: "You already own one or more cars",
    body: "And want to know whether renting them out actually makes business sense.",
  },
  {
    title: "You already run a small rental business",
    body: "But want to improve bookings, tighten operations, and scale it properly.",
  },
  {
    title: "You're weighing a new business opportunity",
    body: "And want the real economics before you put money into it.",
  },
];

const notFor = [
  "Guaranteed income",
  "Get-rich-quick schemes",
  "Passive income without operations",
  "A business that needs zero effort",
  "Overnight success",
];

export default function Audience() {
  return (
    <section id="audience" className="bg-paper text-ink">
      <div className="container-content py-20 sm:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10">
          <div>
            <span className="inline-flex items-center gap-2 border-2 border-plate-green px-3 py-1 font-display text-sm font-700 uppercase tracking-plate text-plate-green">
              Right fit
            </span>
            <h2 className="mt-4 font-display text-3xl font-800 leading-tight tracking-tight sm:text-4xl">
              Who this masterclass is for
            </h2>
            <ul className="mt-7 flex flex-col gap-6">
              {fitFor.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-plate-green"
                  />
                  <div>
                    <p className="font-body font-semibold text-ink">
                      {item.title}
                    </p>
                    <p className="mt-1 font-body text-[0.95rem] leading-relaxed text-ink/65">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-2 border-ink/12 bg-concrete/60 p-8 sm:p-10">
            <span className="inline-flex items-center gap-2 border-2 border-ink/30 px-3 py-1 font-display text-sm font-700 uppercase tracking-plate text-ink/60">
              Not the fit
            </span>
            <h2 className="mt-4 font-display text-3xl font-800 leading-tight tracking-tight text-ink/80 sm:text-4xl">
              What this isn&apos;t
            </h2>
            <ul className="mt-7 flex flex-col gap-4">
              {notFor.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 font-body text-[0.95rem] text-ink/55"
                >
                  <span aria-hidden="true" className="text-ink/35">
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-7 font-body text-sm leading-relaxed text-ink/50">
              A rental business involves capital, customers, vehicles, staff
              and real operational work. I&apos;ll show you both the
              opportunity and the problems — then you decide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
