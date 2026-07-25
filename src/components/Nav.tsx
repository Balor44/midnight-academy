"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/curriculum", label: "Curriculum" },
  { href: "/projects", label: "Projects" },
  { href: "/glossary", label: "Glossary" },
  { href: "/videos", label: "Videos" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative px-6 md:px-24 py-6 border-b border-[var(--color-surface)]">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-display text-lg">
          <Image src="/midnight-logo.svg" alt="Midnight logo" width={24} height={24} />
          Midnight Academy
        </Link>

        <nav className="hidden sm:flex gap-8 font-mono text-sm text-[var(--color-muted)]">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-[var(--color-text)] transition">
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden font-mono text-sm text-[var(--color-text)] border border-[var(--color-surface)] rounded-md px-3 py-1"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="sm:hidden flex flex-col gap-4 mt-6 font-mono text-sm text-[var(--color-muted)]">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="hover:text-[var(--color-text)] transition"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

