import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">
          AptiScript Technologies
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Building Next Generation Software
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          A full-service software house delivering custom web and mobile applications, backend
          systems, and cloud solutions — end to end, by a 10-person team covering the whole
          development lifecycle.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-full bg-brand px-6 py-3 text-center text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-dark"
          >
            Get a Quote
          </Link>
          <Link
            href="/portfolio"
            className="rounded-full border border-border px-6 py-3 text-center text-sm font-semibold text-foreground transition-colors hover:border-brand hover:text-brand"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
