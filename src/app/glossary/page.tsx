const terms = [
  {
    term: "Ledger state",
    definition: "Public, on-chain contract data. Anyone can read it, forever. Declared in Compact with the export ledger keyword.",
  },
  {
    term: "Witness",
    definition: "Private, off-chain data supplied to a circuit. Never touches the chain unless explicitly disclosed. Declared with the witness keyword.",
  },
  {
    term: "Disclose()",
    definition: "The function that deliberately moves a private value (or a computation on one) into public ledger state. Compact will not let you write private data to the ledger without it — a built-in guardrail against accidental leaks.",
  },
  {
    term: "Circuit",
    definition: "Midnight's term for a contract function. A circuit can be a private computation, a public one, or a mix, depending on what it discloses.",
  },
  {
    term: "Selective disclosure",
    definition: "The core idea behind Midnight: revealing only the specific fact that's needed (e.g. \"this person is over 18\") without revealing the underlying private data that proves it.",
  },
  {
    term: "Shielded / Unshielded",
    definition: "Shielded refers to private balances and state; unshielded refers to public ones. Most Midnight wallets track both separately.",
  },
  {
    term: "DUST",
    definition: "The resource used to pay for transaction execution on Midnight, generated gradually over time based on how much NIGHT a wallet holds. Distinct from NIGHT, the network's utility token.",
  },
  {
    term: "Zero-knowledge proof (ZK proof)",
    definition: "A cryptographic method for proving a statement is true without revealing the private information behind it. Compact generates these automatically from your contract code.",
  },
  {
    term: "Proof server",
    definition: "The local (or remote) service that generates zero-knowledge proofs for your transactions. Runs via Docker during development.",
  },
  {
    term: "Compact",
    definition: "Midnight's contract language: a statically-typed, TypeScript-flavored DSL designed so developers can write privacy-preserving logic without personally understanding the underlying proof math.",
  },
  {
    term: "Preview / Preprod",
    definition: "Midnight's public test networks. Preprod is generally the more stable, production-like testnet; Preview trails closer to in-development features.",
  },
  {
    term: "Nullifier",
    definition: "A cryptographic value used to prove something hasn't happened before (e.g. this wallet hasn't voted yet) without revealing which specific identity is making the claim.",
  },
];

export default function Glossary() {
  return (
    <main className="px-6 md:px-24 py-16 max-w-3xl">
      <h1 className="font-display text-4xl mb-4">Glossary</h1>
      <p className="text-[var(--color-muted)] mb-12">
        Midnight-specific terms, in plain language. If a term from a lesson or project confused you, it's probably here.
      </p>

      <dl className="flex flex-col">
        {terms.map((t) => (
          <div key={t.term} className="py-5 border-b border-[var(--color-surface)]">
            <dt className="font-mono text-[var(--color-verified)] mb-2">{t.term}</dt>
            <dd className="text-[var(--color-muted)]">{t.definition}</dd>
          </div>
        ))}
      </dl>
    </main>
  );
}

