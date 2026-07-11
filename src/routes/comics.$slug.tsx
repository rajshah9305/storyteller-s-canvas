import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { COMICS } from "@/lib/comics-data";

export const Route = createFileRoute("/comics/$slug")({
  loader: ({ params }) => {
    const comic = COMICS.find((c) => c.slug === params.slug);
    if (!comic) throw notFound();
    return { comic };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Issue not found — Ember Peak" }, { name: "robots", content: "noindex" }] };
    }
    const { comic } = loaderData;
    return {
      meta: [
        { title: `${comic.title} — Ember Peak Comics` },
        { name: "description", content: comic.tagline },
        { property: "og:title", content: `${comic.title} — Ember Peak Comics` },
        { property: "og:description", content: comic.tagline },
        { property: "og:image", content: comic.cover },
        { name: "twitter:image", content: comic.cover },
      ],
    };
  },
  component: IssuePage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <p className="font-display text-xs uppercase tracking-widest text-ember">Issue missing</p>
      <h1 className="mt-3 font-display text-4xl text-ink">We couldn't find that issue</h1>
      <Link
        to="/comics"
        className="mt-6 inline-flex border-[3px] border-ink bg-ember px-5 py-2.5 font-display text-sm uppercase tracking-wider text-primary-foreground shadow-panel"
      >
        Back to the shelf
      </Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <h1 className="font-display text-3xl text-ink">Something smudged</h1>
      <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
      <button
        onClick={reset}
        className="mt-6 inline-flex border-[3px] border-ink bg-ember px-5 py-2.5 font-display text-sm uppercase tracking-wider text-primary-foreground shadow-panel"
      >
        Try again
      </button>
    </div>
  ),
});

function IssuePage() {
  const { comic } = Route.useLoaderData();
  const others = COMICS.filter((c) => c.slug !== comic.slug);

  return (
    <article>
      <div className="border-b-[3px] border-ink bg-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1fr_1.2fr]">
          <div className="relative">
            <div className="absolute -left-3 -top-3 h-full w-full border-[3px] border-ink bg-ember" aria-hidden />
            <img
              src={comic.cover}
              alt={`Cover for ${comic.title}`}
              width={1024}
              height={1280}
              className="relative block h-auto w-full border-[3px] border-ink object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-2 font-display text-xs uppercase tracking-widest">
              <span className="border-[2px] border-ink bg-mustard px-2 py-0.5 text-ink">{comic.issue}</span>
              <span className="text-muted-foreground">{comic.pages} pages · {comic.minutes} min read</span>
            </div>
            <h1 className="mt-4 font-display text-5xl leading-[1.02] text-ink sm:text-6xl">{comic.title}</h1>
            <p className="mt-3 font-serif text-xl italic text-ember">{comic.tagline}</p>
            <p className="mt-6 text-lg text-foreground/80">{comic.synopsis}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {comic.themes.map((t: string) => (
                <span key={t} className="border-[2px] border-ink bg-card px-3 py-1 text-xs uppercase tracking-wider">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="mx-auto grid max-w-5xl gap-10 px-4 py-20 md:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="font-display text-xs uppercase tracking-widest text-ember">What it leaves you with</p>
          <h2 className="mt-2 font-display text-3xl text-ink">The lesson</h2>
        </div>
        <blockquote className="border-l-4 border-ember bg-cream p-6 font-serif text-2xl italic leading-snug text-ink">
          "{comic.lesson}"
        </blockquote>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { k: "Pages", v: comic.pages },
            { k: "Read time", v: `${comic.minutes} min` },
            { k: "Format", v: "Print + digital" },
          ].map((s) => (
            <div key={s.k} className="border-[3px] border-ink bg-card p-5 shadow-panel">
              <p className="font-display text-xs uppercase tracking-widest text-muted-foreground">{s.k}</p>
              <p className="mt-1 font-display text-3xl text-ink">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t-[3px] border-ink bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <p className="font-display text-xs uppercase tracking-widest text-mustard">Keep reading</p>
          <h2 className="mt-2 font-display text-3xl text-cream">Other issues on the shelf</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/comics/$slug"
                params={{ slug: o.slug }}
                className="group grid grid-cols-[100px_1fr] gap-4 border-[3px] border-cream/20 bg-ink/60 p-4 transition-colors hover:border-ember"
              >
                <img
                  src={o.cover}
                  alt=""
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="h-full w-full border-[2px] border-cream/30 object-cover"
                />
                <div className="min-w-0">
                  <span className="font-display text-[10px] uppercase tracking-widest text-mustard">{o.issue}</span>
                  <h3 className="mt-1 truncate font-display text-xl text-cream group-hover:text-ember">{o.title}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-cream/70">{o.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
