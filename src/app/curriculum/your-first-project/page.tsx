import Link from "next/link";

export default function FirstProject() {
  return (
    <main className="px-8 md:px-24 py-16 max-w-2xl">
      <Link href="/curriculum" className="font-mono text-sm text-[var(--color-muted)] hover:text-[var(--color-text)]">
        ← back to curriculum
      </Link>

      <p className="font-mono text-sm text-[var(--color-accent)] uppercase tracking-widest mt-8 mb-2">
        Module 04
      </p>
      <h1 className="font-display text-4xl mb-4">Your First Project</h1>
      <p className="text-[var(--color-muted)] mb-10">
        This module is written from a real deploy, on real Windows hardware,
        including every environment issue that actually came up. If you hit
        the same ones, that&apos;s normal — not a sign you did something wrong.
      </p>

      <h2 className="font-display text-2xl mt-10 mb-3">The contract</h2>
      <p className="text-[var(--color-muted)] mb-4">
        Clone the official starter and install dependencies:
      </p>
      <pre className="font-mono text-xs bg-[var(--color-surface)] p-4 rounded-md overflow-x-auto mb-6">
        git clone https://github.com/midnightntwrk/example-hello-world.git{"\n"}
        cd example-hello-world{"\n"}
        yarn install
      </pre>

      <p className="text-[var(--color-muted)] mb-4">
        Then write <code className="font-mono text-[var(--color-verified)]">contracts/hello-world.compact</code>:
      </p>
      <pre className="font-mono text-xs bg-[var(--color-surface)] p-4 rounded-md overflow-x-auto mb-6">
        pragma language_version 0.23;{"\n\n"}
        export ledger message: Opaque{"<"}&quot;string&quot;{">"};{"\n\n"}
        export circuit storeMessage(newMessage: Opaque{"<"}&quot;string&quot;{">"}): [] {"{"}{"\n"}
        {" "}message = disclose(newMessage);{"\n"}
        {"}"}
      </pre>

      <p className="text-[var(--color-muted)] mb-10">
        <code className="font-mono text-[var(--color-verified)]">ledger</code> declares public,
        on-chain state. Circuit inputs are private by default — the
        {" "}<code className="font-mono text-[var(--color-verified)]">disclose()</code> call is a
        deliberate guardrail: the compiler refuses to let private data touch
        public state unless you say so explicitly. That guardrail, sitting
        right there in working code, is the whole idea of programmable
        privacy from Module 01, made concrete.
      </p>

      <h2 className="font-display text-2xl mt-10 mb-3">If you&apos;re on Windows: read this first</h2>
      <p className="text-[var(--color-muted)] mb-6">
        The Compact toolchain expects a Linux-like environment. On Windows,
        that means WSL2 — not plain PowerShell. Budget real time for this
        part; it can be the longest step in the whole tutorial.
      </p>

      <div className="flex flex-col gap-4 mb-10">
        <div className="border-l-2 border-[var(--color-accent)] pl-4">
          <p className="font-mono text-sm text-[var(--color-accent)] mb-1">Snag: &quot;WSL is not supported&quot; / stuck on WSL1</p>
          <p className="text-[var(--color-muted)] text-sm">
            Some machines silently install WSL as version 1. Check with{" "}
            <code className="font-mono">wsl -l -v</code>. If it shows 1, run{" "}
            <code className="font-mono">wsl --set-version Ubuntu 2</code>.
          </p>
        </div>
        <div className="border-l-2 border-[var(--color-accent)] pl-4">
          <p className="font-mono text-sm text-[var(--color-accent)] mb-1">Snag: WSL2 refuses to start — virtualization disabled</p>
          <p className="text-[var(--color-muted)] text-sm">
            This is a BIOS/firmware setting, not a Windows setting. Restart
            into BIOS (on HP: tap F10 at boot), find Virtualization Technology
            (VTx) under System Options, enable it, save and exit.
          </p>
        </div>
        <div className="border-l-2 border-[var(--color-accent)] pl-4">
          <p className="font-mono text-sm text-[var(--color-accent)] mb-1">Snag: &quot;cannot execute binary file&quot; on sudo, after apt upgrade</p>
          <p className="text-[var(--color-muted)] text-sm">
            Real-time antivirus (Windows Defender or third-party) can corrupt
            WSL2&apos;s virtual disk during heavy install operations. Add
            an exclusion for <code className="font-mono">%LocalAppData%\Packages</code> in
            Windows Security → Virus &amp; threat protection → Exclusions,
            then wipe and reinstall: <code className="font-mono">wsl --unregister Ubuntu</code>,{" "}
            <code className="font-mono">wsl --install -d Ubuntu</code>.
          </p>
        </div>
        <div className="border-l-2 border-[var(--color-accent)] pl-4">
          <p className="font-mono text-sm text-[var(--color-accent)] mb-1">Snag: yarn install fails with EPERM on /mnt/c/...</p>
          <p className="text-[var(--color-muted)] text-sm">
            Never run a Node project from the Windows-mounted drive
            (<code className="font-mono">/mnt/c/...</code>) inside WSL — permission
            models clash across that boundary. Clone the project into
            Linux&apos;s own filesystem instead, e.g.{" "}
            <code className="font-mono">~/example-hello-world</code>.
          </p>
        </div>
        <div className="border-l-2 border-[var(--color-accent)] pl-4">
          <p className="font-mono text-sm text-[var(--color-accent)] mb-1">Snag: compact update fails to unpack the compiler</p>
          <p className="text-[var(--color-muted)] text-sm">
            A minimal Ubuntu install may be missing archive tools. Run{" "}
            <code className="font-mono">sudo apt-get install -y xz-utils tar gzip zstd unzip</code>,
            then delete the broken partial version folder before retrying:{" "}
            <code className="font-mono">rm -rf ~/.compact/versions/[version]</code>.
          </p>
        </div>
      </div>

      <h2 className="font-display text-2xl mt-10 mb-3">Compiling</h2>
      <pre className="font-mono text-xs bg-[var(--color-surface)] p-4 rounded-md overflow-x-auto mb-10">
        compact compile contracts/hello-world.compact contracts/managed/hello-world
      </pre>

      <h2 className="font-display text-2xl mt-10 mb-3">Running the local devnet</h2>
      <p className="text-[var(--color-muted)] mb-4">
        The starter repo includes a script that brings up a full local
        stack — node, indexer, and proof server together — via Docker:
      </p>
      <pre className="font-mono text-xs bg-[var(--color-surface)] p-4 rounded-md overflow-x-auto mb-6">
        yarn env:up
      </pre>
      <p className="text-[var(--color-muted)] mb-4">
        In a second terminal, once that&apos;s healthy:
      </p>
      <pre className="font-mono text-xs bg-[var(--color-surface)] p-4 rounded-md overflow-x-auto mb-10">
        yarn test:local
      </pre>

      <p className="text-[var(--color-muted)] mb-10">
        This deploys your contract to the local devnet, calls{" "}
        <code className="font-mono text-[var(--color-verified)]">storeMessage</code>, and
        verifies it worked — including generating a real local wallet and a
        real zero-knowledge proof. A passing result looks like two green
        checks: <span className="text-[var(--color-verified)] font-mono text-sm">Deploys the contract</span>{" "}
        and <span className="text-[var(--color-verified)] font-mono text-sm">Stores Hello World!</span>
      </p>

      <div className="mt-16 pt-8 border-t border-[var(--color-surface)]">
        <span className="font-mono text-sm text-[var(--color-muted)]">
          Next: Module 05 — Folder Structure (coming soon)
        </span>
      </div>
    </main>
  );
}