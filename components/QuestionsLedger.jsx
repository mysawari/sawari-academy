const questions = [
  "How much capital does it actually take to start?",
  "Which cars should you choose, and which should you avoid?",
  "Should you buy, finance or lease vehicles?",
  "How much can one car realistically generate a month?",
  "How many days does a car need to stay booked to break even?",
  "How do you get customers consistently, without ad spend running away?",
  "What happens when a customer damages the vehicle?",
  "How do you manage 10, 20, 50+ vehicles without losing control?",
];

export default function QuestionsLedger() {
  return (
    <section className="bg-concrete text-ink">
      <div className="container-content py-20 sm:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="font-display text-4xl font-800 leading-[1.05] tracking-tight sm:text-[2.75rem]">
              Can a self-drive
              rental business
              actually make money?
            </h2>
            <p className="mt-5 max-w-md font-body leading-relaxed text-ink/70">
              You&apos;ve probably seen self-drive rentals operating in your
              city. This masterclass exists to answer the questions that
              come after that — the ones that decide whether the business
              works.
            </p>
          </div>

          <ul className="divide-y-2 divide-ink/10 border-y-2 border-ink/10">
            {questions.map((q, i) => (
              <li key={q} className="flex gap-5 py-4">
                <span className="tabular mt-0.5 shrink-0 font-display text-sm font-700 text-plate-yellow-dim">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-body leading-snug text-ink/85">{q}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
