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
      <section className="max-w-4xl py-24 border-t border-[var(--color-surface)]">
        <p className="font-mono text-sm tracking-widest uppercase text-[var(--color-accent)] mb-4">
          How it works
        </p>
        <h2 className="font-display text-3xl mb-12">From zero to a deployed contract.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <span className="font-mono text-[var(--color-accent)] text-sm">01</span>
            <h3 className="text-lg mt-2 mb-2">Learn the fundamentals</h3>
            <p className="text-[var(--color-muted)] text-sm">
              Five modules, zero assumptions. What Midnight is, how blockchains work, and a real environment setup, errors included.
            </p>
          </div>
          <div>
            <span className="font-mono text-[var(--color-accent)] text-sm">02</span>
            <h3 className="text-lg mt-2 mb-2">Build real contracts</h3>
            <p className="text-[var(--color-muted)] text-sm">
              Five guided projects, each teaching one new idea, from a simple counter to selective-disclosure identity checks.
            </p>
          </div>
          <div>
            <span className="font-mono text-[var(--color-accent)] text-sm">03</span>
            <h3 className="text-lg mt-2 mb-2">Ship something real</h3>
            <p className="text-[var(--color-muted)] text-sm">
              See what&apos;s actually being built on Midnight right now, and where to take your own project next.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-4xl py-24 border-t border-[var(--color-surface)]">
        <p className="font-mono text-sm tracking-widest uppercase text-[var(--color-accent)] mb-4">
          What&apos;s here
        </p>
        <h2 className="font-display text-3xl mb-12">Everything you need, in one place.</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link href="/curriculum" className="block border border-[var(--color-surface)] rounded-lg p-6 hover:border-[var(--color-accent)] transition">
            <h3 className="text-lg mb-2">Curriculum</h3>
            <p className="text-[var(--color-muted)] text-sm">Five modules from zero to a deployed contract.</p>
          </Link>
          <Link href="/projects" className="block border border-[var(--color-surface)] rounded-lg p-6 hover:border-[var(--color-accent)] transition">
            <h3 className="text-lg mb-2">Projects</h3>
            <p className="text-[var(--color-muted)] text-sm">Five guided builds, each teaching one new concept.</p>
          </Link>
          <Link href="/glossary" className="block border border-[var(--color-surface)] rounded-lg p-6 hover:border-[var(--color-accent)] transition">
            <h3 className="text-lg mb-2">Glossary</h3>
            <p className="text-[var(--color-muted)] text-sm">Every Midnight-specific term, in plain language.</p>
          </Link>
          <Link href="/videos" className="block border border-[var(--color-surface)] rounded-lg p-6 hover:border-[var(--color-accent)] transition">
            <h3 className="text-lg mb-2">Videos</h3>
            <p className="text-[var(--color-muted)] text-sm">Official talks and walkthroughs, embedded directly.</p>
          </Link>
        </div>
      </section>

      <section className="max-w-4xl py-24 border-t border-[var(--color-surface)] text-center">
        <h2 className="font-display text-3xl mb-6">Ready to build something private?</h2>
        <p className="text-[var(--color-muted)] mb-8 max-w-xl mx-auto">
          Start with Module 01. No blockchain experience required, no cryptography background needed.
        </p>
        <Link
          href="/curriculum/what-is-midnight"
          className="inline-block bg-[var(--color-accent)] text-[var(--color-bg)] px-6 py-3 rounded-md font-medium hover:opacity-90 transition"
        >
          Start learning
        </Link>
      </section>
    </main>
  );
}