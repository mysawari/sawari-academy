"use client";
import { useRazorpayPayment } from "@/hooks/useRazorpayPayment";

export default function Hero() {
  const { handlePayment, loading } = useRazorpayPayment();

  return (
    <section id="top" className="relative overflow-hidden bg-asphalt text-paper">
      {/* lane-marking spine, decorative */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 bg-lane-dark opacity-70 lg:block"
      />

      <div className="container-content relative py-20 sm:py-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="plate-badge">Live · 90-Minute Masterclass · ₹199</span>

          <h1 className="mt-7 font-display text-[2.75rem] font-800 leading-[1.05] tracking-tight sm:text-6xl">
            Build a self-drive rental
            <br className="hidden sm:block" /> business that runs on
            <br className="hidden sm:block" /> systems, not luck.
          </h1>

          <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-paper/75">
            I scaled MySawari to approximately ₹20 lakh+ in monthly revenue.
            In this live session I&apos;m breaking down the fleet economics,
            customer acquisition and operations that got it there — no
            theory, no copied advice.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <button
              onClick={handlePayment}
              disabled={loading}
              className="bg-plate-yellow px-8 py-3.5 font-display text-lg font-700 tracking-tight text-asphalt transition-transform hover:-translate-y-0.5 hover:bg-white disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {loading ? "Processing..." : "Reserve my seat — ₹199"}
            </button>
            <span className="font-body text-sm text-paper/55">
              Hosted by Mukhlesur Rahman, Founder — MySawari
            </span>
          </div>
        </div>

        {/* dashboard readout strip */}
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 divide-y divide-asphalt-line border-2 border-asphalt-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <Readout value="₹20L+" label="Monthly revenue at MySawari" />
          <Readout value="90 min" label="Live, plus Q&A" />
          <Readout value="₹199" label="One-time entry fee" />
        </div>
      </div>
    </section>
  );
}

function Readout({ value, label }) {
  return (
    <div className="flex flex-col items-center gap-1.5 px-6 py-6 text-center">
      <span className="tabular font-display text-4xl font-800 text-plate-yellow">
        {value}
      </span>
      <span className="font-body text-xs text-paper/60">{label}</span>
    </div>
  );
}
