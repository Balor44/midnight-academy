import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 md:px-24 py-6 border-b border-[var(--color-surface)]">
    <Link href="/" className="flex items-center gap-3 font-display text-lg">
        <Image src="/midnight-logo.svg" alt="Midnight logo" width={24} height={24} />
        Midnight Academy
      </Link>
     <nav className="flex flex-wrap justify-center gap-4 sm:gap-8 font-mono text-xs sm:text-sm text-[var(--color-muted)]">
        <Link href="/curriculum" className="hover:text-[var(--color-text)] transition">
          Curriculum
        </Link>
        <Link href="/projects" className="hover:text-[var(--color-text)] transition">
          Projects
        </Link>
        <Link href="/videos" className="hover:text-[var(--color-text)] transition">
          Videos
        </Link>
        <Link href="/about" className="hover:text-[var(--color-text)] transition">
          About
        </Link>
      </nav>
    </header>
  );
}