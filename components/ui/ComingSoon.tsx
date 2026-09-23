export function ComingSoon({ title, note }: { title: string; note?: string }) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h1>
      <p className="mt-4 text-muted-foreground">
        {note ?? "This page is being built next — content is coming soon."}
      </p>
    </section>
  );
}
