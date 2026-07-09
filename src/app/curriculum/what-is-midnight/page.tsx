import Link from "next/link";

export default function WhatIsMidnight() {
  return (
    <main className="px-8 md:px-24 py-16 max-w-2xl">
      <Link href="/curriculum" className="font-mono text-sm text-[var(--color-muted)] hover:text-[var(--color-text)]">
        ← back to curriculum
      </Link>

      <p className="font-mono text-sm text-[var(--color-accent)] uppercase tracking-widest mt-8 mb-2">
        Module 01
      </p>
      <h1 className="font-display text-4xl mb-10">
        What is Midnight, and why does it exist?
      </h1>

      <p className="text-[var(--color-muted)] mb-6">
        Most public blockchains have one privacy setting: none. Every
        balance, every contract call, every piece of state is visible to
        anyone who looks. That rules out huge categories of real activity —
        payroll, medical records, identity, B2B contracts — anywhere a fact
        needs to be verified without being published to the world forever.
      </p>

      <p className="text-[var(--color-muted)] mb-6">
        Midnight&apos;s bet: privacy doesn&apos;t have to be all-or-nothing.
        Its core idea is <span className="redact">programmable privacy</span>
        {" "}— a developer decides, field by field, what&apos;s public and
        what&apos;s shielded, using zero-knowledge proofs so the network can
        still verify a claim is true without seeing the data behind it.
      </p>

      <h2 className="font-display text-2xl mt-12 mb-4">
        Three ideas that matter most
      </h2>

      <ul className="flex flex-col gap-4 mb-10">
        <li>
          <strong>Selective disclosure.</strong>{" "}
          <span className="text-[var(--color-muted)]">
            An app can reveal exactly the fact needed — e.g. &quot;this user
            is over 18&quot; — without revealing the birthdate that proves it.
          </span>
        </li>
        <li>
          <strong>Zero-knowledge proofs, made ordinary.</strong>{" "}
          <span className="text-[var(--color-muted)]">
            Midnight&apos;s contract language, Compact, is designed so a web
            developer can write privacy-preserving logic without personally
            understanding the underlying proof math.
          </span>
        </li>
        <li>
          <strong>Dual-component architecture.</strong>{" "}
          <span className="text-[var(--color-muted)]">
            Shielded (private) and unshielded (public) state are separated
            at the protocol level, not bolted on afterward.
          </span>
        </li>
      </ul>

      <h2 className="font-display text-2xl mt-12 mb-4">Check your understanding</h2>
      <ol className="list-decimal list-inside flex flex-col gap-3 text-[var(--color-muted)]">
        <li>What does &quot;selective disclosure&quot; mean, in a sentence?</li>
        <li>Why does Compact exist — what does it remove for a web developer?</li>
        <li>Name one real use case awkward on a fully public chain, and awkward on a fully private one.</li>
      </ol>

      <div className="mt-16 pt-8 border-t border-[var(--color-surface)]">
        <Link href="/curriculum/blockchain-basics" className="font-mono text-sm text-[var(--color-accent)]">
          Next: Module 02 — Blockchain Basics →
        </Link>
      </div>
    </main>
  );
}