const videos = [
  {
    title: "Midnight Dev Tutorial Part 1: Set Up Your Environment on Windows",
    description: "Official DevRel walkthrough of environment setup — a good companion to Module 03 and 04.",
    youtubeId: "-8-XzILhQDA",
  },
];

export default function Videos() {
  return (
    <main className="px-8 md:px-24 py-16 max-w-3xl">
      <h1 className="font-display text-4xl mb-4">Videos</h1>
      <p className="text-[var(--color-muted)] mb-12">
        Official talks, walkthroughs, and community calls — embedded
        directly from Midnight&apos;s own channels. Nothing here is
        re-uploaded; these are the real, original sources.
      </p>

      <div className="flex flex-col gap-12">
        {videos.map((v) => (
          <div key={v.youtubeId}>
            <div className="aspect-video w-full mb-4 bg-[var(--color-surface)] rounded-md overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={'https://www.youtube.com/embed/${v.youtubeId}'}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <h2 className="font-display text-xl mb-2">{v.title}</h2>
            <p className="text-[var(--color-muted)] text-sm">{v.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-[var(--color-surface)]">
        <p className="text-[var(--color-muted)] text-sm">
          More on the{" "}
          <a href="https://www.youtube.com/@midnight.network" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">
            official Midnight YouTube channel
          </a>
          .
        </p>
      </div>
    </main>
  );
}