import Link from "next/link";

export default function FolderStructure() {
  return (
    <main className="px-8 md:px-24 py-16 max-w-2xl">
      <Link href="/curriculum" className="font-mono text-sm text-[var(--color-muted)] hover:text-[var(--color-text)]">
        ← back to curriculum
      </Link>

      <p className="font-mono text-sm text-[var(--color-accent)] uppercase tracking-widest mt-8 mb-2">
        Module 05
      </p>
      <h1 className="font-display text-4xl mb-4">Understanding the Folder Structure</h1>
      <p className="text-[var(--color-muted)] mb-10">
        Most tutorials skip this. It matters — knowing what each folder is
        for is what lets you debug confidently instead of guessing.
      </p>

      <h2 className="font-display text-2xl mt-10 mb-3">Your project, top level</h2>
      <pre className="font-mono text-xs bg-[var(--color-surface)] p-4 rounded-md overflow-x-auto mb-6 leading-relaxed">
        example-hello-world/{"\n"}
        ├── contracts/{"\n"}
        │ ├── hello-world.compact{"\n"}
        │ └── managed/{"\n"}
        ├── src/{"\n"}
        ├── docker-compose.yml{"\n"}
        └── package.json
      </pre>

      <h2 className="font-display text-2xl mt-10 mb-3">contracts/hello-world.compact</h2>
      <p className="text-[var(--color-muted)] mb-6">
        The one file you actually hand-wrote. Everything else in this
        module is generated from it or supports it.
      </p>

      <h2 className="font-display text-2xl mt-10 mb-3">contracts/managed/</h2>
      <p className="text-[var(--color-muted)] mb-4">
        Created the moment you ran <code className="font-mono text-[var(--color-verified)]">compact compile</code>.
        This is the compiler&apos;s output, not something you edit by hand:
      </p>
      <pre className="font-mono text-xs bg-[var(--color-surface)] p-4 rounded-md overflow-x-auto mb-4 leading-relaxed">
        managed/hello-world/{"\n"}
        ├── compiler/{"\n"}
        ├── contract/{"\n"}
        ├── keys/{"\n"}
        └── zkir/
      </pre>
      <ul className="flex flex-col gap-3 mb-10">
        <li className="text-[var(--color-muted)]">
          <code className="font-mono text-[var(--color-verified)]">compiler/</code> — JSON output describing your contract&apos;s structure, for other tools to read.
        </li>
        <li className="text-[var(--color-muted)]">
          <code className="font-mono text-[var(--color-verified)]">contract/</code> — the TypeScript/JavaScript API a DApp actually imports and calls.
        </li>
        <li className="text-[var(--color-muted)]">
          <code className="font-mono text-[var(--color-verified)]">keys/</code> — the proving and verifying keys that make zero-knowledge proofs possible. Never commit these to a public repo for a real deployment.
        </li>
        <li className="text-[var(--color-muted)]">
          <code className="font-mono text-[var(--color-verified)]">zkir/</code> — Zero-Knowledge Intermediate Representation, the bridge between your Compact source and the ZK proving backend.
        </li>
      </ul>

      <h2 className="font-display text-2xl mt-10 mb-3">src/</h2>
      <p className="text-[var(--color-muted)] mb-6">
        The JavaScript/TypeScript side — code that actually talks to your
        deployed contract: deployment scripts, wallet setup, and (in this
        starter) the test file that deployed and called{" "}
        <code className="font-mono text-[var(--color-verified)]">storeMessage</code>{" "}
        in Module 04.
      </p>

      <h2 className="font-display text-2xl mt-10 mb-3">docker-compose.yml</h2>
      <p className="text-[var(--color-muted)] mb-6">
        Defines the three containers <code className="font-mono">yarn env:up</code> started
        for you: the local node, the indexer, and the proof server. If a
        deploy ever fails mysteriously, checking whether all three are
        healthy here is the first thing to try.
      </p>

      <h2 className="font-display text-2xl mt-10 mb-3">package.json</h2>
      <p className="text-[var(--color-muted)] mb-6">
        The usual Node project manifest — but pay attention to its{" "}
        <code className="font-mono">scripts</code> section specifically. That&apos;s
        where commands like <code className="font-mono">env:up</code> and{" "}
        <code className="font-mono">test:local</code> are actually defined; when in
        doubt about what a project&apos;s custom commands do, read this file
        before searching online.
      </p>

      <h2 className="font-display text-2xl mt-10 mb-3">The rule of thumb</h2>
      <p className="text-[var(--color-muted)] mb-10">
        If you wrote it by hand, it&apos;s source. If a tool generated it,
        it&apos;s an artifact — safe to delete and regenerate, and generally
        shouldn&apos;t be hand-edited. In this project: <code className="font-mono text-[var(--color-verified)]">contracts/hello-world.compact</code> and{" "}
        <code className="font-mono text-[var(--color-verified)]">src/</code> are source.{" "}
        <code className="font-mono text-[var(--color-verified)]">contracts/managed/</code>{" "}
        is an artifact — if it ever looks broken or stale, deleting it and
        re-running <code className="font-mono">compact compile</code> is usually the
        right move, not trying to hand-fix it.
      </p>

      <div className="mt-16 pt-8 border-t border-[var(--color-surface)]">
        <span className="font-mono text-sm text-[var(--color-muted)]">
          That&apos;s the core fundamentals. Next: mini-projects, building on what you know.
        </span>
      </div>
    </main>
  );
}