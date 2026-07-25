import Link from "next/link";

export default function Voting() {
  return (
    <main className="px-8 md:px-24 py-16 max-w-2xl">
      <Link href="/projects" className="font-mono text-sm text-[var(--color-muted)] hover:text-[var(--color-text)]">
        ← back to projects
      </Link>

      <p className="font-mono text-sm text-[var(--color-accent)] uppercase tracking-widest mt-8 mb-2">
        Project 03
      </p>
      <h1 className="font-display text-4xl mb-4">Private Voting</h1>
      <p className="text-[var(--color-muted)] mb-10">
        This is where Module 04&apos;s witness pattern stops being an abstract exercise and becomes something
        genuinely useful: a vote that&apos;s publicly countable, but privately cast.
      </p>

      <h2 className="font-display text-2xl mt-10 mb-3">What you&apos;ll learn</h2>
      <ul className="flex flex-col gap-2 text-[var(--color-muted)] mb-10">
        <li>Separating a vote&apos;s tally (public) from a voter&apos;s choice (private)</li>
        <li>Preventing double-voting without exposing who voted for what</li>
        <li>Why the shape of your public state should reveal exactly the result, and nothing more</li>
      </ul>

      <h2 className="font-display text-2xl mt-10 mb-3">The contract</h2>
      <p className="text-[var(--color-muted)] mb-4">
        Save this as{" "}
        <code className="font-mono text-[var(--color-verified)]">contracts/voting.compact</code>:
      </p>
      <pre className="font-mono text-xs bg-[var(--color-surface)] p-4 rounded-md overflow-x-auto mb-10 leading-relaxed">
{`pragma language_version >= 0.23;

import CompactStandardLibrary;

witness getVoterChoice(): Boolean;

export ledger yesVotes: Uint<32>;
export ledger noVotes: Uint<32>;

export circuit castVote(): [] {
    if (disclose(getVoterChoice())) {
        yesVotes = yesVotes + 1;
    } else {
        noVotes = noVotes + 1;
    }
}`}
      </pre>

      <h2 className="font-display text-2xl mt-10 mb-3">Read this contract closely</h2>
      <p className="text-[var(--color-muted)] mb-10">
        Notice what&apos;s <em>not</em> in <code className="font-mono text-[var(--color-verified)]">ledger</code>{" "}
        state: there&apos;s no list of who voted, and no record tying any specific voter to yes or no. Only two
        running counts exist on-chain. The vote itself, cast inside{" "}
        <code className="font-mono text-[var(--color-verified)]">getVoterChoice()</code>, stays private to the
        voter, only the tally increment is disclosed.
      </p>

      <h2 className="font-display text-2xl mt-10 mb-3">The honest limitation here</h2>
      <p className="text-[var(--color-muted)] mb-10">
        This simplified version doesn&apos;t yet prevent one wallet from calling{" "}
        <code className="font-mono text-[var(--color-verified)]">castVote()</code> multiple times. A real voting
        system needs a way to prove &quot;this voter hasn&apos;t voted yet&quot; without revealing{" "}
        <em>which</em> voter is calling, typically via a nullifier pattern. That&apos;s a genuinely harder
        problem, and a good next thing to research once this version makes sense to you.
      </p>

      <h2 className="font-display text-2xl mt-10 mb-3">Build it yourself</h2>
      <pre className="font-mono text-xs bg-[var(--color-surface)] p-4 rounded-md overflow-x-auto mb-6">
{`compact compile contracts/voting.compact contracts/managed/voting`}
      </pre>
      <p className="text-[var(--color-muted)] mb-10">
        Deploy, call <code className="font-mono text-[var(--color-verified)]">castVote()</code> a few times with
        your witness returning different values, and confirm{" "}
        <code className="font-mono text-[var(--color-verified)]">yesVotes</code> and{" "}
        <code className="font-mono text-[var(--color-verified)]">noVotes</code> update correctly, with no way to
        recover which specific call produced which result just from reading the chain.
      </p>

      <div className="mt-16 pt-8 border-t border-[var(--color-surface)]">
        <Link href="/projects/messaging" className="font-mono text-sm text-[var(--color-accent)]">
          Next: Project 04 — Messaging →
        </Link>
      </div>
    </main>
  );
}

