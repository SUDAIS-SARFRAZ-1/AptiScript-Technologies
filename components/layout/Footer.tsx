import Link from "next/link";
import Image from "next/image";
import { BUSINESS_EMAIL, WHATSAPP_LINK, WHATSAPP_NUMBER_DISPLAY } from "@/lib/contact";

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
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={`mailto:${BUSINESS_EMAIL}`}
                  className="text-sm text-muted-foreground hover:text-brand"
                >
                  {BUSINESS_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-brand"
                >
                  {WHATSAPP_NUMBER_DISPLAY} (WhatsApp)
                </a>
              </li>
            </ul>
            {/*
              Business registration number/NTN and city/location are added
              here once available — see prd.md §6.7 and §12 (Risks).
              No placeholder content ships per rules.md §1.
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
