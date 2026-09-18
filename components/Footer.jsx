export default function Footer() {
  return (
    <footer className="bg-paper text-ink">
      <div className="container-content py-10">
        <div className="flex flex-col gap-6 border-t-2 border-ink/10 pt-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span className="font-display text-lg font-800 tracking-tight">
              MySawari
            </span>
            <p className="mt-1 font-body text-sm text-ink/50">
              Live Masterclass, hosted by Mukhlesur Rahman
            </p>
          </div>
          <p className="max-w-xl font-body text-xs leading-relaxed text-ink/45">
            Revenue figures mentioned are based on the experience of
            MySawari and are provided for educational purposes only.
            Business performance varies by city, capital, pricing, demand,
            execution, competition, fleet structure and other factors. No
            income or profit is guaranteed.
          </p>
        </div>
      </div>
    </footer>
  );
}
