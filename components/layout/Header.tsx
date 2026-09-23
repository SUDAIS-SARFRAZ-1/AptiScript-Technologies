"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/tech-stack", label: "Tech Stack" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/75">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
          <Image src="/logo-mark.png" alt="AptiScript Technologies" width={32} height={32} priority />
          <span className="text-lg font-semibold tracking-tight">AptiScript</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand ${
                pathname === link.href ? "text-brand" : "text-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-dark"
          >
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-border bg-background px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-md px-2 py-2 text-sm font-medium ${
                  pathname === link.href ? "bg-muted text-brand" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 rounded-full bg-brand px-5 py-2 text-center text-sm font-semibold text-brand-foreground"
            >
              Get a Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
