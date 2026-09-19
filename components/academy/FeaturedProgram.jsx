import Link from "next/link";

export default function FeaturedProgram() {
  return (
    <section id="programs" className="px-6 py-20">
      <div className="max-w-4xl mx-auto rounded-2xl border p-10 md:p-14 text-center shadow-sm">
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Featured Program
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold">
          Self-Drive Rental Business Blueprint
        </h2>
        <p className="mt-5 text-gray-600 text-lg">
          Learn how the self-drive rental business works — from vehicle selection
          and customer acquisition to operations, fleet economics and scaling.
        </p>
        <p className="mt-4 text-gray-500 italic">
          Based on practical lessons from building MySawari.
        </p>
        <Link
          href="/workshop"
          className="inline-block mt-8 rounded-lg bg-black px-8 py-3 text-white font-medium hover:bg-gray-800 transition"
        >
          Explore the Program
        </Link>
      </div>
    </section>
  );
}