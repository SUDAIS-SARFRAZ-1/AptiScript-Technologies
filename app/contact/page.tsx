import type { Metadata } from "next";
import { BUSINESS_EMAIL, WHATSAPP_LINK, WHATSAPP_NUMBER_DISPLAY } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Contact Us</h1>
      <p className="mt-4 text-muted-foreground">
        The full quote-request form is being built next. In the meantime, reach us directly:
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <a
          href={`mailto:${BUSINESS_EMAIL}`}
          className="rounded-full bg-brand px-6 py-3 text-center text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-dark"
        >
          Email {BUSINESS_EMAIL}
        </a>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border px-6 py-3 text-center text-sm font-semibold text-foreground transition-colors hover:border-brand hover:text-brand"
        >
          WhatsApp {WHATSAPP_NUMBER_DISPLAY}
        </a>
      </div>
    </section>
  );
}
