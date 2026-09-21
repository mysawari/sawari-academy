export default function LegalPage({ title, updated, children }) {
  return (
    <article className="bg-paper text-ink">
      <div className="container-content py-16 sm:py-20">
        <div className="border-b-2 border-ink/10 pb-8">
          <span className="font-display text-sm font-700 uppercase tracking-plate text-plate-yellow-dim">
            MySawari
          </span>
          <h1 className="mt-3 font-display text-4xl font-800 leading-tight tracking-tight sm:text-5xl">
            {title}
          </h1>
          {updated && (
            <p className="mt-3 font-body text-sm text-ink/50">
              Last updated: {updated}
            </p>
          )}
        </div>

        <div className="legal-prose mx-auto mt-10 max-w-[68ch]">{children}</div>
      </div>
    </article>
  );
}
