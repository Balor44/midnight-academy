const modules = [
  { number: "01", title: "What is Midnight?", status: "read", href: "/curriculum/what-is-midnight" },
  { number: "02", title: "Blockchain Basics", status: "read", href: "/curriculum/blockchain-basics" },
  { number: "03", title: "Development Environment", status: "read", href: "/curriculum/development-environment" },
  { number: "04", title: "Your First Project", status: "read", href: "/curriculum/your-first-project" },
  { number: "05", title: "Folder Structure", status: "read", href: "/curriculum/folder-structure" },
];

export default function Curriculum() {
  return (
    <main className="px-8 md:px-24 py-16 max-w-3xl">
      <h1 className="font-display text-4xl mb-4">Curriculum</h1>
      <p className="text-[var(--color-muted)] mb-12">
        Follow these in order. Each one builds on the last.
      </p>

      <ul className="flex flex-col">
        {modules.map((m) => {
          const row = (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-5">
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="font-mono text-[var(--color-accent)]">
                  {m.number}
                </span>
                <span className="text-lg">{m.title}</span>
              </div>
              <span
                className={
                  m.status === "ready"
                    ? "font-mono text-xs uppercase text-[var(--color-verified)]"
                    : "font-mono text-xs uppercase text-[var(--color-muted)]"
                }
              >
                {m.status}
              </span>
            </div>
          );

          return (
            <li key={m.number} className="border-b border-[var(--color-surface)]">
              {m.href ? (
                <a href={m.href} className="block hover:opacity-70 transition">
                  {row}
                </a>
              ) : (
                row
              )}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
