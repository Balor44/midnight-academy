export default function About() {
  return (
    <main className="px-8 md:px-24 py-16 max-w-2xl">
      <h1 className="font-display text-4xl mb-8">About this site</h1>

      <p className="text-lg text-[var(--color-muted)] mb-6">
        Midnight already has excellent official resources — full developer
        docs, a certification-focused Academy, and hands-on Zealy Quests.
        This site isn&apos;t trying to replace any of that.
      </p>

      <p className="text-lg text-[var(--color-muted)] mb-6">
        It exists to cover the gap between reading documentation and
        actually building something: the real errors people hit, the
        step-by-step first project, and worked examples that go slower
        than official docs usually can.
      </p>

      <p className="text-lg text-[var(--color-muted)] mb-6">
        Every lesson here is written while actually building the thing
        it teaches — mistakes, dead ends, and fixes included, not
        edited out.
      </p>

      <p className="font-mono text-sm text-[var(--color-muted)] mt-12">
        status: early build, modules added as they&apos;re completed.
      </p>
    </main>
  );
}