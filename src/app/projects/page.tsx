import Link from "next/link";

const projects = [
  { number: "01", title: "Counter", concept: "State & deployment", status: "read", href: "/projects/counter" },
  { number: "02", title: "Todo App", concept: "CRUD & storage", status: "read", href: "/projects/todo" },
  { number: "03", title: "Private Voting", concept: "Private votes, verification", status: "read", href: "/projects/voting" },
  { number: "04", title: "Messaging", concept: "Encrypted communication", status: "read", href: "/projects/messaging" },
  { number: "05", title: "Identity", concept: "Selective disclosure", status: "read", href: "/projects/identity" },
];

export default function Projects() {
  return (
    <main className="px-8 md:px-24 py-16 max-w-3xl">
      <h1 className="font-display text-4xl mb-4">Mini Projects</h1>
      <p className="text-[var(--color-muted)] mb-12">
        Each project introduces exactly one new idea, building on the fundamentals from the Curriculum.
      </p>

      <ul className="flex flex-col">
        {projects.map((p) => {
          const row = (
           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-5">
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="font-mono text-[var(--color-accent)]">{p.number}</span>
                <div>
                  <div className="text-lg">{p.title}</div>
                  <div className="text-[var(--color-muted)] text-sm">{p.concept}</div>
                </div>
              </div>
              <span
                className={
                  p.status === "ready"
                    ? "font-mono text-xs uppercase text-[var(--color-verified)]"
                    : "font-mono text-xs uppercase text-[var(--color-muted)]"
                }
              >
                {p.status}
              </span>
            </div>
          );
          return (
            <li key={p.number} className="border-b border-[var(--color-surface)]">
              {p.href ? (
                <Link href={p.href} className="block hover:opacity-70 transition">
                  {row}
                </Link>
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

