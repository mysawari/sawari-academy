const stages = [
  { name: "Discover", text: "Explore business opportunities." },
  { name: "Validate", text: "Understand demand, competition and economics." },
  { name: "Launch", text: "Build the initial systems." },
  { name: "Operate", text: "Manage customers, teams and processes." },
  { name: "Scale", text: "Expand vehicles, locations and revenue." },
];

export default function LearningStages() {
  return (
    <section className="bg-gray-50 px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Learn at Different Stages
      </h2>
      <div className="mt-12 max-w-6xl mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {stages.map((s, idx) => (
          <div key={s.name} className="rounded-xl bg-white border p-6">
            <span className="text-sm font-semibold text-gray-400">0{idx + 1}</span>
            <h3 className="mt-2 text-xl font-semibold">{s.name}</h3>
            <p className="mt-2 text-gray-600 text-sm">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}