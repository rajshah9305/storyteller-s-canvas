import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { COMICS } from "@/lib/comics-data";

export const Route = createFileRoute("/comics")({
  component: ComicsLayout,
});

function ComicsLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId !== "/comics" && m.routeId.startsWith("/comics"));
  if (isChild) return <Outlet />;
  return <ComicsIndex />;
}

function ComicsIndex() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <header className="mb-12 max-w-3xl">
        <p className="font-display text-xs uppercase tracking-widest text-ember">The shelf</p>
        <h1 className="mt-2 font-display text-5xl text-ink sm:text-6xl">Every issue, in order.</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Three issues, published across two years. Each one stands alone, but they share a quiet
          through-line: what it costs to keep caring.
        </p>
      </header>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {COMICS.map((c) => (
          <Link
            key={c.slug}
            to="/comics/$slug"
            params={{ slug: c.slug }}
            className="group flex flex-col border-[3px] border-ink bg-card shadow-panel transition-transform hover:-translate-y-1"
          >
            <div className="border-b-[3px] border-ink">
              <img
                src={c.cover}
                alt={`Cover for ${c.title}`}
                width={1024}
                height={1280}
                loading="lazy"
                className="block h-72 w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center justify-between font-display text-[10px] uppercase tracking-widest text-muted-foreground">
                <span className="border-[2px] border-ink bg-mustard px-2 py-0.5 text-ink">
                  {c.issue}
                </span>
                <span>{c.minutes} min</span>
              </div>
              <h2 className="mt-3 font-display text-2xl text-ink">{c.title}</h2>
              <p className="mt-2 font-serif text-sm italic text-ember">{c.tagline}</p>
              <p className="mt-3 line-clamp-4 text-sm text-foreground/80">{c.synopsis}</p>
              <span className="mt-4 font-display text-xs uppercase tracking-wider text-ink underline underline-offset-4 group-hover:text-ember">
                Read issue →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
