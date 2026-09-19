"use client";
import { useRazorpayPayment } from "@/hooks/useRazorpayPayment";

export default function Header() {
  const { handlePayment, loading } = useRazorpayPayment();

  const links = [
    { label: "Curriculum", href: "#curriculum" },
    { label: "Who it's for", href: "#audience" },
    { label: "Your host", href: "#host" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b-2 border-asphalt bg-paper/95 backdrop-blur">
      <div className="container-content flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-2xl font-800 tracking-tight text-ink">
            MySawari
          </span>
          <span className="hidden font-display text-xs font-600 uppercase tracking-plate text-steel sm:inline">
            Masterclass
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-[0.95rem] font-medium text-ink/70 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

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
