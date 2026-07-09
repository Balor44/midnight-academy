import Link from "next/link";

export default function BlockchainBasics() {
  return (
    <main className="px-8 md:px-24 py-16 max-w-2xl">
      <Link href="/curriculum" className="font-mono text-sm text-[var(--color-muted)] hover:text-[var(--color-text)]">
        ← back to curriculum
      </Link>

      <p className="font-mono text-sm text-[var(--color-accent)] uppercase tracking-widest mt-8 mb-2">
        Module 02
      </p>
      <h1 className="font-display text-4xl mb-10">Blockchain Basics</h1>

      <p className="text-[var(--color-muted)] mb-8">
        If you&apos;ve built on Ethereum or Solana before, skim this one —
        it&apos;s written for readers who have never touched a blockchain.
      </p>

      <h2 className="font-display text-2xl mt-10 mb-3">Wallets</h2>
      <p className="text-[var(--color-muted)] mb-6">
        A wallet is a keypair: a private key that proves it&apos;s you, and
        a public address safe to share. Your wallet is your identity and
        your signature — not a place money is literally &quot;stored.&quot;
      </p>

      <h2 className="font-display text-2xl mt-10 mb-3">Transactions</h2>
      <p className="text-[var(--color-muted)] mb-6">
        A signed instruction — move this, call this contract, update this
        state. On most chains, transaction contents are fully public. On
        Midnight, a transaction can carry a proof that something is true
        without revealing the private inputs behind it.
      </p>

      <h2 className="font-display text-2xl mt-10 mb-3">Blocks &amp; validators</h2>
      <p className="text-[var(--color-muted)] mb-6">
        Transactions bundle into blocks, each referencing the one before
        it. Midnight uses AURA to decide which validator produces each
        block, and GRANDPA as a separate layer that formally confirms
        blocks can&apos;t be reverted.
      </p>

      <h2 className="font-display text-2xl mt-10 mb-3">The concept to remember</h2>
      <p className="text-[var(--color-muted)] mb-6">
        Every other chain has one kind of state: public. A Midnight
        contract can hold three — <span className="redact">ledger</span>{" "}
        (public, on-chain), <span className="redact">private</span> (stays
        on the user&apos;s machine), and <span className="redact">witness</span>{" "}
        (private evidence that justifies a state change, without the
        evidence itself being recorded). Nearly every Midnight-specific bug
        you&apos;ll hit later traces back to mixing these up.
      </p>

      <div className="mt-16 pt-8 border-t border-[var(--color-surface)]">
        <Link href="/curriculum/development-environment" className="font-mono text-sm text-[var(--color-accent)]">
          Next: Module 03 — Development Environment →
        </Link>
      </div>
    </main>
  );
}