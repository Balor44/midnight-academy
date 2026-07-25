import Link from "next/link";
export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col justify-center px-8 md:px-24"
      style={{ backgroundImage: "url('/pattern-redact.svg')", backgroundRepeat: "repeat" }}
    >
      <div className="max-w-3xl">
        <p className="font-mono text-sm tracking-widest uppercase text-[var(--color-accent)] mb-6">
          Midnight Academy
        </p>

        <h1 className="font-display text-5xl md:text-7xl leading-tight mb-8">
          Learn to build <span className="redact">confidential</span> apps
          <br />
          on a <span className="redact">public</span> blockchain.
        </h1>

        <p className="text-lg text-[var(--color-muted)] max-w-xl mb-10">
          Midnight lets you choose exactly what&apos;s public and what stays
          private — and prove it&apos;s true without revealing it. This is
          the guided, step-by-step path to actually building on it.
        </p>

        <p className="font-mono text-sm text-[var(--color-muted)] mb-10">
          hover the highlighted words above to reveal them — that&apos;s the
          whole idea of this chain.
        </p>

        <div className="flex gap-4">
          <Link
            href="/curriculum/what-is-midnight"
            className="bg-[var(--color-accent)] text-[var(--color-bg)] px-6 py-3 rounded-md font-medium hover:opacity-90 transition"
          >
            Start learning
          </Link>
          <Link
            href="/curriculum"
            className="border border-[var(--color-muted)] px-6 py-3 rounded-md font-medium hover:border-[var(--color-text)] transition"
          >
            See the curriculum
          </Link>
        </div>
      </div>
    </main>
  );
}