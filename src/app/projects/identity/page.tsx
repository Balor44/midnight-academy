import Link from "next/link";

export default function Identity() {
  return (
    <main className="px-8 md:px-24 py-16 max-w-2xl">
      <Link href="/projects" className="font-mono text-sm text-[var(--color-muted)] hover:text-[var(--color-text)]">
        ← back to projects
      </Link>

      <p className="font-mono text-sm text-[var(--color-accent)] uppercase tracking-widest mt-8 mb-2">
        Project 05
      </p>
      <h1 className="font-display text-4xl mb-4">Identity</h1>
      <p className="text-[var(--color-muted)] mb-10">
        This is the project everything else has been building toward: selective disclosure applied to
        who you are, not just what you did. Prove a fact about yourself without revealing the rest.
      </p>

      <h2 className="font-display text-2xl mt-10 mb-3">What you&apos;ll learn</h2>
      <ul className="flex flex-col gap-2 text-[var(--color-muted)] mb-10">
        <li>Proving a threshold about a private credential, without revealing the credential itself</li>
        <li>Why &quot;is this true&quot; and &quot;what is the value&quot; are different questions on-chain</li>
        <li>How this same pattern generalizes to age checks, credit checks, and verified credentials</li>
      </ul>

      <h2 className="font-display text-2xl mt-10 mb-3">The contract</h2>
      <p className="text-[var(--color-muted)] mb-4">
        Save this as{" "}
        <code className="font-mono text-[var(--color-verified)]">contracts/identity.compact</code>:
      </p>
      <pre className="font-mono text-xs bg-[var(--color-surface)] p-4 rounded-md overflow-x-auto mb-10 leading-relaxed">
{`pragma language_version >= 0.23;

import CompactStandardLibrary;

witness getBirthYear(): Uint<16>;

export ledger isVerifiedAdult: Boolean;

export circuit verifyAge(currentYear: Uint<16>, minimumAge: Uint<16>): [] {
    const age = currentYear - getBirthYear();
    isVerifiedAdult = disclose(age >= minimumAge);
}`}
      </pre>

      <h2 className="font-display text-2xl mt-10 mb-3">Notice the shape of this</h2>
      <p className="text-[var(--color-muted)] mb-10">
        This should look familiar. It&apos;s structurally the same pattern as Module 04&apos;s credit-score
        check: a private fact (birth year, or a repayment score) compared against a public threshold, with
        only the pass/fail verdict disclosed. Once you recognize this shape, you&apos;ll start seeing it
        everywhere privacy-preserving identity and credentials come up.
      </p>

      <h2 className="font-display text-2xl mt-10 mb-3">Where a real version goes further</h2>
      <p className="text-[var(--color-muted)] mb-10">
        A production identity system needs the birth year itself to be independently verified, typically by
        a trusted issuer signing a credential, rather than a user simply asserting it as a witness. That&apos;s
        the &quot;verified credentials&quot; layer, a genuinely deep topic worth researching once this basic
        pattern feels natural to you.
      </p>

      <h2 className="font-display text-2xl mt-10 mb-3">Build it yourself</h2>
      <pre className="font-mono text-xs bg-[var(--color-surface)] p-4 rounded-md overflow-x-auto mb-6">
{`compact compile contracts/identity.compact contracts/managed/identity`}
      </pre>
      <p className="text-[var(--color-muted)] mb-10">
        Deploy, call <code className="font-mono text-[var(--color-verified)]">verifyAge()</code>{" "}
        with a witness birth year that makes someone under 18, and again with one that makes someone over.
        Confirm <code className="font-mono text-[var(--color-verified)]">isVerifiedAdult</code>{" "}
        flips correctly, with the actual birth year never appearing in ledger state either time.
      </p>

      <div className="mt-16 pt-8 border-t border-[var(--color-surface)]">
        <p className="text-[var(--color-muted)] text-sm">
          That&apos;s the full mini-project set. From here, the natural next step is combining these
          patterns into something bigger, like the credit-scoring lending concept explored in the{" "}
          
           <a href="https://github.com/Balor44/private-credit-score" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">
            Private Credit Score project
          </a>
          .
        </p>
      </div>
    </main>
  );
}

