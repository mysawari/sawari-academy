const points = [
  "Business models",
  "Investment requirements",
  "Unit economics",
  "Customer acquisition",
  "Operations",
  "Systems",
  "Risks",
  "Scaling",
];

export default function Opportunities() {
  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Business Opportunities Around Vehicles
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Every vehicle creates multiple business opportunities around it.
          </p>
          <p className="mt-4 text-gray-600">
            At Sawari Academy, we explore how these businesses actually work — including:
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-3">
          {points.map((p) => (
            <li key={p} className="rounded-lg bg-white border px-4 py-3 font-medium">
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}