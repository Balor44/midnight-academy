import Link from "next/link";

export default function Messaging() {
  return (
    <main className="px-8 md:px-24 py-16 max-w-2xl">
      <Link href="/projects" className="font-mono text-sm text-[var(--color-muted)] hover:text-[var(--color-text)]">
        ← back to projects
      </Link>

      <p className="font-mono text-sm text-[var(--color-accent)] uppercase tracking-widest mt-8 mb-2">
        Project 04
      </p>
      <h1 className="font-display text-4xl mb-4">Messaging</h1>
      <p className="text-[var(--color-muted)] mb-10">
        Voting taught you to keep a choice private while disclosing an aggregate. Messaging asks a
        different question: how do you keep an entire piece of content private, forever, while still
        proving on-chain that something was sent?
      </p>

      <h2 className="font-display text-2xl mt-10 mb-3">What you&apos;ll learn</h2>
      <ul className="flex flex-col gap-2 text-[var(--color-muted)] mb-10">
        <li>The difference between hiding a value from the chain and hiding it from everyone except the recipient</li>
        <li>Why a message&apos;s content should usually live in private state, not be disclosed at all</li>
        <li>Using a public counter as proof-of-activity without proof-of-content</li>
      </ul>

      <h2 className="font-display text-2xl mt-10 mb-3">The contract</h2>
      <p className="text-[var(--color-muted)] mb-4">
        Save this as{" "}
        <code className="font-mono text-[var(--color-verified)]">contracts/messaging.compact</code>:
      </p>
      <pre className="font-mono text-xs bg-[var(--color-surface)] p-4 rounded-md overflow-x-auto mb-10 leading-relaxed">
{`pragma language_version >= 0.23;

import CompactStandardLibrary;

witness getMessageContent(): Opaque<"string">;

export ledger messageCount: Uint<32>;

export circuit sendMessage(): [] {
    const content = getMessageContent();
    messageCount = messageCount + 1;
}`}
      </pre>

      <h2 className="font-display text-2xl mt-10 mb-3">The important part is what&apos;s missing</h2>
      <p className="text-[var(--color-muted)] mb-10">
        Look closely: <code className="font-mono text-[var(--color-verified)]">content</code>{" "}
        is read from the witness, but never disclosed anywhere. It&apos;s used inside the circuit and then
        simply not written to <code className="font-mono text-[var(--color-verified)]">ledger</code>{" "}
        state. That&apos;s the whole trick: private data doesn&apos;t need a special
        &quot;hide me&quot; instruction, it just needs you to never call{" "}
        <code className="font-mono text-[var(--color-verified)]">disclose()</code> on it. The chain only
        ever learns that a message-sending event happened, via the incremented counter, never what was said.
      </p>

      <h2 className="font-display text-2xl mt-10 mb-3">Where a real version goes further</h2>
      <p className="text-[var(--color-muted)] mb-10">
        A production messaging app would also need actual encrypted delivery to a specific recipient (so
        only they can read the content off-chain), not just &quot;nobody on-chain sees it.&quot; That&apos;s
        a real cryptography problem beyond this exercise, worth researching once this pattern feels natural.
      </p>

      <h2 className="font-display text-2xl mt-10 mb-3">Build it yourself</h2>
      <pre className="font-mono text-xs bg-[var(--color-surface)] p-4 rounded-md overflow-x-auto mb-6">
{`compact compile contracts/messaging.compact contracts/managed/messaging`}
      </pre>
      <p className="text-[var(--color-muted)] mb-10">
        Deploy, call <code className="font-mono text-[var(--color-verified)]">sendMessage()</code>{" "}
        a few times with different witness content each time, and confirm{" "}
        <code className="font-mono text-[var(--color-verified)]">messageCount</code>{" "}
        goes up correctly, while nothing about the actual message text appears anywhere in the ledger state
        you read back.
      </p>

      <div className="mt-16 pt-8 border-t border-[var(--color-surface)]">
        <Link href="/projects/identity" className="font-mono text-sm text-[var(--color-accent)]">
          Next: Project 05 — Identity →
        </Link>
      </div>
    </main>
  );
}

