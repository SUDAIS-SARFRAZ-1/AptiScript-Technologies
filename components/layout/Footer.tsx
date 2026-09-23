import Link from "next/link";
import Image from "next/image";

const COMPANY_LINKS = [
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/portfolio", label: "Portfolio" },
];

const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo-mark.png" alt="AptiScript Technologies" width={28} height={28} />
              <span className="text-base font-semibold tracking-tight">AptiScript</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Building Next Generation Software — a full-service software house for web, mobile, backend, and cloud.
            </p>
            {/*
              Business contact details (email, phone/WhatsApp) and registration
              number/location are added here once provided — see prd.md §6.7.
              No placeholder contact info ships per rules.md §1.
            */}
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-3 space-y-2">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-brand">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Get Started</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-brand">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-brand">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {year} AptiScript Technologies. All rights reserved.
          </p>
          <ul className="flex gap-4">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-xs text-muted-foreground hover:text-brand">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
