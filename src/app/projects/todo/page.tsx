import Link from "next/link";

export default function Todo() {
  return (
    <main className="px-8 md:px-24 py-16 max-w-2xl">
      <Link href="/projects" className="font-mono text-sm text-[var(--color-muted)] hover:text-[var(--color-text)]">
        ← back to projects
      </Link>

      <p className="font-mono text-sm text-[var(--color-accent)] uppercase tracking-widest mt-8 mb-2">
        Project 02
      </p>
      <h1 className="font-display text-4xl mb-4">Todo App</h1>
      <p className="text-[var(--color-muted)] mb-10">
        Counter taught you a single, unstructured value. This project teaches you to store a{" "}
        <em>collection</em> — the pattern behind almost every real app, on-chain or not.
      </p>

      <h2 className="font-display text-2xl mt-10 mb-3">What you&apos;ll learn</h2>
      <ul className="flex flex-col gap-2 text-[var(--color-muted)] mb-10">
        <li>Storing a list-like structure in public ledger state</li>
        <li>CRUD as circuits: create, read, update, delete, each as its own entry point</li>
        <li>Why you design your data shape around what needs to be provably true, not just what&apos;s convenient</li>
      </ul>

      <h2 className="font-display text-2xl mt-10 mb-3">The contract</h2>
      <p className="text-[var(--color-muted)] mb-4">
        Save this as{" "}
        <code className="font-mono text-[var(--color-verified)]">contracts/todo.compact</code>:
      </p>
      <pre className="font-mono text-xs bg-[var(--color-surface)] p-4 rounded-md overflow-x-auto mb-10 leading-relaxed">
{`pragma language_version >= 0.23;

import CompactStandardLibrary;

export ledger taskCount: Uint<32>;
export ledger completedCount: Uint<32>;

export circuit addTask(): [] {
    taskCount = taskCount + 1;
}

export circuit completeTask(): [] {
    completedCount = completedCount + 1;
}`}
      </pre>

      <h2 className="font-display text-2xl mt-10 mb-3">Why this is simplified, on purpose</h2>
      <p className="text-[var(--color-muted)] mb-10">
        A real todo app needs actual task text and per-task IDs, which means arrays or maps in{" "}
        <code className="font-mono text-[var(--color-verified)]">ledger</code>{""} state, a step beyond
        Compact&apos;s simplest types. This version tracks counts only, so you can focus on the{" "}
        <em>CRUD-as-circuits</em> pattern first. Once you&apos;re comfortable with this, look up{" "}
        Compact&apos;s <code className="font-mono text-[var(--color-verified)]">Map</code> and{" "}
        <code className="font-mono text-[var(--color-verified)]">Vector</code> types in the official
        docs to extend it into a real per-task list.
      </p>

      <h2 className="font-display text-2xl mt-10 mb-3">Build it yourself</h2>
      <pre className="font-mono text-xs bg-[var(--color-surface)] p-4 rounded-md overflow-x-auto mb-6">
{`compact compile contracts/todo.compact contracts/managed/todo`}
      </pre>
      <p className="text-[var(--color-muted)] mb-10">
        Deploy, then call <code className="font-mono text-[var(--color-verified)]">addTask()</code>{" "}
        three times and <code className="font-mono text-[var(--color-verified)]">completeTask()</code>{" "}
        once. Read the ledger back and confirm{" "}
        <code className="font-mono text-[var(--color-verified)]">taskCount</code> is 3 and{" "}
        <code className="font-mono text-[var(--color-verified)]">completedCount</code> is 1.
      </p>

      <div className="mt-16 pt-8 border-t border-[var(--color-surface)]">
        <Link href="/projects/voting" className="font-mono text-sm text-[var(--color-accent)]">
          Next: Project 03 — Private Voting →
        </Link>
      </div>
    </main>
  );
}

