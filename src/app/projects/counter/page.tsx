import Link from "next/link";

export default function Counter() {
  return (
    <main className="px-8 md:px-24 py-16 max-w-2xl">
      <Link href="/projects" className="font-mono text-sm text-[var(--color-muted)] hover:text-[var(--color-text)]">
        ← back to projects
      </Link>

      <p className="font-mono text-sm text-[var(--color-accent)] uppercase tracking-widest mt-8 mb-2">
        Project 01
      </p>
      <h1 className="font-display text-4xl mb-4">Counter</h1>
      <p className="text-[var(--color-muted)] mb-10">
        The smallest possible stateful contract. If Module 04&apos;s{" "}
        <code className="font-mono text-[var(--color-verified)]">hello-world.compact</code>{" "}
        taught you to store a value, this teaches you to change one, on-chain, and read it back after each change.
      </p>

      <h2 className="font-display text-2xl mt-10 mb-3">What you&apos;ll learn</h2>
      <ul className="flex flex-col gap-2 text-[var(--color-muted)] mb-10">
        <li>How public ledger state updates across multiple transactions, not just one</li>
        <li>The difference between deploying a contract and calling a circuit on an already-deployed one</li>
        <li>Reading current state before deciding what the next state should be</li>
      </ul>

      <h2 className="font-display text-2xl mt-10 mb-3">The contract</h2>
      <p className="text-[var(--color-muted)] mb-4">
        Save this as <code className="font-mono text-[var(--color-verified)]">contracts/counter.compact</code>:
      </p>
      <pre className="font-mono text-xs bg-[var(--color-surface)] p-4 rounded-md overflow-x-auto mb-10 leading-relaxed">
{`pragma language_version >= 0.23;

import CompactStandardLibrary;

export ledger count: Uint<32>;

export circuit increment(): [] {
    count = count + 1;
}

export circuit reset(): [] {
    count = 0;
}`}
      </pre>

      <h2 className="font-display text-2xl mt-10 mb-3">Notice what&apos;s different from Module 04</h2>
     <p className="text-[var(--color-muted)] mb-10">
        There&apos;s no <code className="font-mono text-[var(--color-verified)]">witness</code>{" "}
        and no <code className="font-mono text-[var(--color-verified)]">disclose()</code>{" "}
        here, on purpose. Not every contract needs privacy;{" "}
        <code className="font-mono text-[var(--color-verified)]">count</code>{" "}
        is public by design, since a counter that hides its own value isn&apos;t useful.
        Knowing when <em>not</em> to reach for privacy is as important as knowing how to use it.
      </p>

      <h2 className="font-display text-2xl mt-10 mb-3">Build it yourself</h2>
      <p className="text-[var(--color-muted)] mb-4">Same workflow as Module 04:</p>
      <pre className="font-mono text-xs bg-[var(--color-surface)] p-4 rounded-md overflow-x-auto mb-6">
{`compact compile contracts/counter.compact contracts/managed/counter`}
      </pre>
      <p className="text-[var(--color-muted)] mb-10">
        Then deploy and call <code className="font-mono text-[var(--color-verified)]">increment()</code>{" "}
        a few times in a row before reading the ledger state back. Watch{" "}
        <code className="font-mono text-[var(--color-verified)]">count</code> go up by exactly 1 each time,
        never more, even if you call it rapidly, since Midnight processes transactions against state sequentially.
      </p>

      <div className="mt-16 pt-8 border-t border-[var(--color-surface)]">
        <span className="font-mono text-sm text-[var(--color-muted)]">
          Next: Project 02 — Todo App (coming soon)
        </span>
      </div>
    </main>
  );
}

