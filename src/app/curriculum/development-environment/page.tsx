import Link from "next/link";

export default function DevEnvironment() {
  return (
    <main className="px-8 md:px-24 py-16 max-w-2xl">
      <Link href="/curriculum" className="font-mono text-sm text-[var(--color-muted)] hover:text-[var(--color-text)]">
        ← back to curriculum
      </Link>

      <p className="font-mono text-sm text-[var(--color-accent)] uppercase tracking-widest mt-8 mb-2">
        Module 03
      </p>
      <h1 className="font-display text-4xl mb-10">Development Environment</h1>

      <p className="text-[var(--color-muted)] mb-8">
        Follow this with a notes doc open. Something will go sideways —
        that&apos;s expected, and it becomes your first real troubleshooting
        content.
      </p>

      <h2 className="font-display text-2xl mt-10 mb-3">What you&apos;re installing</h2>
      <ul className="flex flex-col gap-2 text-[var(--color-muted)] mb-8 font-mono text-sm">
        <li>Lace wallet — holds keys, signs transactions, gets testnet tDUST</li>
        <li>Compact CLI — installs and manages the Compact compiler</li>
        <li>Docker — runs your local ZK proof server</li>
        <li>Compact VS Code extension — syntax highlighting for .compact files</li>
        <li>Node.js + npm — runs the JS/TS SDK side of your app</li>
      </ul>

      <h2 className="font-display text-2xl mt-10 mb-3">Step 1 — Install Lace</h2>
      <p className="text-[var(--color-muted)] mb-6">
        Add the Lace Beta / Midnight Preview extension from the Chrome
        Web Store. Create a wallet, set a password, and write your recovery
        phrase on paper — not a note app.
      </p>

      <h2 className="font-display text-2xl mt-10 mb-3">Step 2 — Install the Compact toolchain</h2>
      <p className="text-[var(--color-muted)] mb-3">Run in your terminal:</p>
      <pre className="font-mono text-xs bg-[var(--color-surface)] p-4 rounded-md overflow-x-auto mb-6">
        curl --proto &apos;=https&apos; --tlsv1.2 -LsSf https://github.com/midnightntwrk/compact/releases/latest/download/compact-installer.sh | sh
      </pre>
      <p className="text-[var(--color-muted)] mb-6">
        Then verify with <code className="font-mono text-[var(--color-verified)]">compact check</code>.
      </p>

      <h2 className="font-display text-2xl mt-10 mb-3">Step 3 — Docker proof server</h2>
      <p className="text-[var(--color-muted)] mb-6">
        Start the local proof server, then point Lace at{" "}
        <code className="font-mono text-[var(--color-verified)]">http://localhost:6300</code>{" "}
        under Settings → Midnight. If you get &quot;connection refused,&quot;
        check that Docker Desktop is actually running before touching any
        config.
      </p>

      <div className="mt-16 pt-8 border-t border-[var(--color-surface)]">
        <span className="font-mono text-sm text-[var(--color-muted)]">
          Next: Module 04 — Your First Project (coming soon)
        </span>
      </div>
    </main>
  );
}