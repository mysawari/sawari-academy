import Link from "next/link";

export default function BuiltFor() {
  return (
    <section className="px-6 py-24 text-center max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold">
        Built for Vehicle Entrepreneurs
      </h2>
      <p className="mt-6 text-gray-600 text-lg">
        Sawari Academy is for aspiring entrepreneurs, vehicle owners and existing
        operators who want to understand and build businesses within the vehicle
        ecosystem.
      </p>
      <p className="mt-10 text-2xl font-semibold">Explore. Learn. Build.</p>
      <Link
        href="#programs"
        className="inline-block mt-6 rounded-lg bg-black px-8 py-3 text-white font-medium hover:bg-gray-800 transition"
      >
        Explore All Programs
      </Link>
    </section>
  );
}