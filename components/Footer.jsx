"use client";

import { useRazorpayPayment } from "@/hooks/useRazorpayPayment";

const explore = [
  { label: "Curriculum", href: "/#curriculum" },
  { label: "Who it's for", href: "/#audience" },
  { label: "Your host", href: "/#host" },
  { label: "Reserve a seat — ₹199", isPayment: true },
];

const company = [
  { label: "About us", href: "/about-us" },
  { label: "Contact us", href: "/contact-us" },
  { label: "Earnings disclaimer", href: "/earnings-disclaimer" },
];

const legal = [
  { label: "Terms & conditions", href: "/terms-and-conditions" },
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Refund & cancellation policy", href: "/refund-cancellation-policy" },
  { label: "Cookie policy", href: "/cookie-policy" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const { handlePayment, loading } = useRazorpayPayment();

  return (
    <footer className="bg-paper text-ink">
      <div className="container-content pt-16">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 border-t-2 border-ink/10 pt-12 sm:grid-cols-4 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          {/* Brand + contact */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-1">
            <span className="font-display text-xl font-800 tracking-tight">
              MySawari
            </span>
            <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-ink/60">
              A live masterclass on building and scaling a self-drive
              car-rental business, hosted by founder Mukhlesur Rahman.
            </p>
            <ul className="mt-5 flex flex-col gap-2 font-body text-sm text-ink/65">
              <li>
                <a
                  href="mailto:support@mysawari.example.com"
                  className="hover:text-ink"
                >
                  support@mysawari.example.com
                </a>
              </li>
              <li>
                <a href="tel:+911234567890" className="hover:text-ink">
                  +91 12345 67890
                </a>
              </li>
              <li className="text-ink/50">
                MySawari, [Registered Business Address],
                [City, State, PIN — India]
              </li>
            </ul>
          </div>

          <FooterColumn title="Explore" links={explore} onPayment={handlePayment} loading={loading} />
          <FooterColumn title="Company" links={company} />
          <FooterColumn title="Legal" links={legal} />
        </div>

        <div className="mt-14 border-t-2 border-ink/10 py-6">
          <p className="max-w-3xl font-body text-xs leading-relaxed text-ink/45">
            Revenue figures mentioned (including &ldquo;₹20 lakh+ monthly
            revenue&rdquo;) are based on the experience of MySawari and are
            shared for educational purposes only. Business performance
            varies by city, capital, pricing, demand, execution, competition,
            fleet structure and other factors. No income, profit or business
            outcome is guaranteed. See our{" "}
            <a href="/earnings-disclaimer" className="underline hover:text-ink/70">
              full earnings disclaimer
            </a>
            .
          </p>
        </div>

        <div className="flex flex-col gap-3 border-t-2 border-ink/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-xs text-ink/45">
            © {year} MySawari. All rights reserved.
          </p>
          <p className="font-body text-xs text-ink/45">
            Payments secured &amp; processed via Razorpay.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links, onPayment, loading }) {
  return (
    <div>
      <span className="font-display text-sm font-700 uppercase tracking-plate text-ink/45">
        {title}
      </span>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((link, i) => (
          <li key={link.href || i}>
            {link.isPayment ? (
              <button
                onClick={onPayment}
                disabled={loading}
                className="font-body text-sm text-ink/65 transition-colors hover:text-ink text-left"
              >
                {loading ? "Processing..." : link.label}
              </button>
            ) : (
              <a
                href={link.href}
                className="font-body text-sm text-ink/65 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
