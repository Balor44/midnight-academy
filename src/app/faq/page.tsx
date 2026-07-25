const faqs = [
  {
    q: "Do I need to understand cryptography or zero-knowledge proofs to build on Midnight?",
    a: "No. That's the entire point of Compact. You write ordinary-looking logic and use disclose() deliberately; the compiler generates the actual zero-knowledge circuits for you.",
  },
  {
    q: "What's the actual difference between a witness and disclose()?",
    a: "A witness supplies private data into a circuit. disclose() is the explicit action that moves a value (or a computation involving one) from private into public ledger state. Data stays private by default; disclose() is an opt-in, not an opt-out.",
  },
  {
    q: "Why does the Compact toolchain need Docker?",
    a: "Docker runs the local proof server, which generates the actual zero-knowledge proofs for your transactions during development. Without it running, deployments and circuit calls will fail to produce valid proofs.",
  },
  {
    q: "I'm on Windows and the toolchain install keeps failing. What's going on?",
    a: "The Compact toolchain expects a Linux-like environment. On Windows, you need WSL2 specifically, not WSL1, and not plain PowerShell/Command Prompt. Module 04 documents a real, full troubleshooting trail for this, worth reading if you're stuck.",
  },
  {
    q: "My deployment to Preview or Preprod hangs or times out. Is that normal?",
    a: "Currently, yes, this can happen. A fresh wallet with no saved sync state re-runs a full genesis sync every time, which can take a long time on public testnets. Persisting wallet state between runs avoids repeating this cost. This is an active, evolving part of the toolchain, not something you're doing wrong.",
  },
  {
    q: "What's the difference between local devnet, Preview, and Preprod?",
    a: "Local devnet (\"undeployed\") runs entirely on your machine, resets easily, and is fastest for iterating. Preview and Preprod are Midnight's public test networks; Preprod is generally the more stable of the two.",
  },
  {
    q: "Can I build something privacy-preserving without any prior blockchain experience?",
    a: "Yes, that's exactly who this platform is for. Start at Module 01 and go in order. Every module assumes nothing you haven't already covered.",
  },
  {
    q: "Where should I go once I finish the Curriculum and Projects here?",
    a: "Midnight's own official docs and Academy for depth, the Community Hub for open content and DApp requests, and the Aliit Fellowship if you want to contribute back to the ecosystem directly.",
  },
];

export default function FAQ() {
  return (
    <main className="px-6 md:px-24 py-16 max-w-3xl">
      <h1 className="font-display text-4xl mb-4">FAQ</h1>
      <p className="text-[var(--color-muted)] mb-12">
        Questions that came up while building this platform, and while learning Midnight from zero.
      </p>

      <div className="flex flex-col">
        {faqs.map((f) => (
          <div key={f.q} className="py-6 border-b border-[var(--color-surface)]">
            <h2 className="text-lg mb-2">{f.q}</h2>
            <p className="text-[var(--color-muted)]">{f.a}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

