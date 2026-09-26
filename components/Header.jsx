"use client";
import { useRazorpayPayment } from "@/hooks/useRazorpayPayment";

export default function Header() {
  const { handlePayment, loading } = useRazorpayPayment();


  return (
    <header className="sticky top-0 z-50 border-b-2 border-asphalt bg-paper/95 backdrop-blur">
      <div className="container-content flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-2xl font-800 tracking-tight text-ink">
            Sawari
          </span>
          <span className="hidden font-display text-xs font-600 uppercase tracking-plate text-steel sm:inline">
            Academy
          </span>
        </a>


        <button
          onClick={handlePayment}
          disabled={loading}
          className="plate-badge shrink-0 transition-transform hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {loading ? "Processing..." : "Reserve · ₹199"}
        </button>
      </div>
    </header>
  );
}
