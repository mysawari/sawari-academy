const items = [
  { title: "Vehicle Rental", text: "Self-drive cars, bikes, chauffeur-driven rentals, fleet management and related models." },
  { title: "Car Wash & Detailing", text: "Wash centres, detailing studios, pickup-and-drop services and subscription models." },
  { title: "Workshops & Servicing", text: "Vehicle servicing, repairs, maintenance and specialised automotive services." },
  { title: "Vehicle Insurance", text: "Insurance distribution, renewals, claims assistance and related opportunities." },
  { title: "Pre-Owned Vehicles", text: "Used car and bike sales, brokerage, inspections, marketplaces and transaction services." },
  { title: "Fleet & Mobility", text: "Corporate transport, GPS, roadside assistance, logistics, subscriptions and other mobility businesses." },
];

export default function WhatWeCover() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center">What We Cover</h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <div key={i.title} className="rounded-xl border p-6 hover:shadow-md transition">
            <h3 className="text-xl font-semibold">{i.title}</h3>
            <p className="mt-3 text-gray-600">{i.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}