import Link from "next/link";

export default function AcademyHero() {
  return (
    <section className="px-6 py-24 text-center max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
        Learn. Build. Scale.
        <span className="block mt-2">In the Vehicle Economy.</span>
      </h1>
      <p className="mt-6 text-lg md:text-xl text-gray-600">
        Practical knowledge for entrepreneurs building businesses around vehicles.
      </p>
      <p className="mt-4 text-gray-500">
        Vehicle rentals. Car washing. Workshops. Insurance. Pre-owned vehicles.
        Fleet services. Mobility businesses. And more.
      </p>
      <Link
        href="#programs"
        className="inline-block mt-10 rounded-lg bg-black px-8 py-3 text-white font-medium hover:bg-gray-800 transition"
      >
        Explore Programs
      </Link>
    </section>
  );
}