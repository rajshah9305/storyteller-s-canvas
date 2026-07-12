import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-lantern.jpg";
import { COMICS } from "@/lib/comics-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ember Peak Comics — Newsstand" },
      {
        name: "description",
        content:
          "Hand-inked graphic novels for grown-up readers. Slow, honest stories about grief, craft, memory and the small choices that reshape a life.",
      },
    ],
    links: [
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" },
    ],
  }),
  component: Index,
});

const TICKER_ITEMS = [
  "Issue 01 shipping now",
  "Hand-inked in a small room",
  "Reader-supported, ad-free",
  "New chapter every full moon",
  "Printed on recycled newsprint",
  "For readers 18 and up",
];

function Index() {
  const featured = COMICS[0];
  const rest = COMICS.slice(1);

  return (
    <div>
      {/* Ticker */}
      <div className="overflow-hidden border-b-[3px] border-ink bg-mustard">
        <div className="flex whitespace-nowrap py-2 ticker">
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((t, i) => (
            <span key={i} className="mx-6 font-display text-xs uppercase tracking-widest text-ink">
              ★ {t}
            </span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden border-b-[3px] border-ink">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:gap-10 sm:py-16 md:grid-cols-[1.05fr_1fr] md:py-20 lg:py-24">
          <div className="flex flex-col justify-center">
            <span className="rise inline-flex w-fit items-center gap-2 border-[3px] border-ink bg-cream px-3 py-1 font-display text-[10px] uppercase tracking-widest">
              <span className="h-2 w-2 rounded-full bg-ember" /> Issue No. 01 — Out now
            </span>
            <h1 className="rise-delay-1 mt-5 font-display text-[2.25rem] leading-[1] text-ink sm:text-6xl md:text-7xl">
              Comics for grown-ups
              <span className="block text-ember">who still want to feel something.</span>
            </h1>
            <p className="rise-delay-2 mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              Ember Peak is a small studio publishing hand-inked graphic novels about grief, craft,
              memory, and the quiet weight of being a person. No capes. No franchises. Just stories
              that stay with you.
            </p>
            <div className="rise-delay-3 mt-7 flex flex-wrap gap-3">
              <Link
                to="/comics"
                className="inline-flex items-center gap-2 border-[3px] border-ink bg-ember px-5 py-3 font-display text-xs uppercase tracking-wider text-primary-foreground shadow-panel transition-all duration-200 hover:-translate-y-0.5 hover:shadow-panel-lg sm:px-6 sm:text-sm"
              >
                Browse the shelf →
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border-[3px] border-ink bg-card px-5 py-3 font-display text-xs uppercase tracking-wider text-ink shadow-panel transition-all duration-200 hover:-translate-y-0.5 hover:shadow-panel-lg sm:px-6 sm:text-sm"
              >
                About the studio
              </Link>
            </div>

            <dl className="rise-delay-3 mt-10 grid max-w-md grid-cols-3 gap-4 border-t-2 border-dashed border-ink/30 pt-6">
              <div>
                <dt className="text-[10px] uppercase tracking-wider text-muted-foreground sm:text-xs">
                  Issues
                </dt>
                <dd className="font-display text-xl text-ink sm:text-2xl">03</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-wider text-muted-foreground sm:text-xs">
                  Pages inked
                </dt>
                <dd className="font-display text-xl text-ink sm:text-2xl">216</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-wider text-muted-foreground sm:text-xs">
                  Readers
                </dt>
                <dd className="font-display text-xl text-ink sm:text-2xl">4.2k</dd>
              </div>
            </dl>
          </div>

          <div className="fade-in relative mt-2 md:mt-0">
            <div
              className="absolute -left-3 -top-3 h-full w-full border-[3px] border-ink bg-moss transition-transform duration-500 sm:-left-4 sm:-top-4"
              aria-hidden
            />
            <img
              src={heroImg}
              alt="Cover art of Lantern of Dusk — a hooded traveler holding a glowing lantern on a windswept ridge at sunset"
              width={1600}
              height={1200}
              fetchPriority="high"
              decoding="async"
              className="relative block h-auto w-full border-[3px] border-ink object-cover"
            />
            <div className="absolute -bottom-4 -right-3 border-[3px] border-ink bg-mustard px-3 py-1.5 font-display text-[10px] uppercase tracking-widest text-ink shadow-panel wiggle sm:-bottom-5 sm:-right-5 sm:px-4 sm:py-2 sm:text-xs">
              New this month
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto strip */}
      <section className="border-b-[3px] border-ink bg-ink text-cream">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 md:grid-cols-3">
          {[
            {
              k: "01",
              h: "Slow-drawn, on purpose",
              b: "Every page is inked by hand. We publish fewer issues so each one can carry more.",
            },
            {
              k: "02",
              h: "Stories that ask something",
              b: "We only greenlight scripts that leave a reader with a real question about their own life.",
            },
            {
              k: "03",
              h: "For adult readers",
              b: "Grief, work, memory, mortality — treated with the honesty grown-ups can hold.",
            },
          ].map((c) => (
            <div key={c.k} className="border-l-2 border-mustard pl-5">
              <div className="font-display text-3xl text-ember">{c.k}</div>
              <h3 className="mt-2 font-display text-xl text-cream">{c.h}</h3>
              <p className="mt-2 text-sm text-cream/70">{c.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured issue */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-10">
          <div className="min-w-0">
            <p className="font-display text-xs uppercase tracking-widest text-ember">
              Featured issue
            </p>
            <h2 className="mt-2 font-display text-3xl text-ink sm:text-5xl">
              This month on the peak
            </h2>
          </div>
          <Link
            to="/comics"
            className="font-display text-xs uppercase tracking-wider text-ink underline underline-offset-4 hover:text-ember sm:text-sm"
          >
            See all issues →
          </Link>
        </div>

        <article className="grid gap-8 md:grid-cols-[1fr_1.25fr]">
          <Link to="/comics/$slug" params={{ slug: featured.slug }} className="group block">
            <div className="relative">
              <div
                className="absolute -left-3 -top-3 h-full w-full border-[3px] border-ink bg-ember transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
                aria-hidden
              />
              <img
                src={featured.cover}
                alt={`Cover art for ${featured.title}`}
                width={1024}
                height={1280}
                loading="lazy"
                className="relative block h-auto w-full border-[3px] border-ink object-cover"
              />
            </div>
          </Link>
          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-2 font-display text-xs uppercase tracking-widest text-muted-foreground">
              <span className="border-[2px] border-ink bg-mustard px-2 py-0.5 text-ink">
                {featured.issue}
              </span>
              <span>{featured.pages} pages</span>
              <span>·</span>
              <span>{featured.minutes} min read</span>
            </div>
            <h3 className="mt-4 font-display text-4xl text-ink sm:text-5xl">{featured.title}</h3>
            <p className="mt-3 font-serif text-xl italic text-ember">{featured.tagline}</p>
            <p className="mt-5 text-base text-foreground/80">{featured.synopsis}</p>

            <blockquote className="mt-6 border-l-4 border-ember bg-cream p-5 font-serif text-lg italic text-ink">
              "{featured.lesson}"
              <footer className="mt-2 font-sans text-xs not-italic uppercase tracking-widest text-muted-foreground">
                — what this issue leaves you with
              </footer>
            </blockquote>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/comics/$slug"
                params={{ slug: featured.slug }}
                className="inline-flex items-center border-[3px] border-ink bg-ember px-5 py-2.5 font-display text-sm uppercase tracking-wider text-primary-foreground shadow-panel transition-transform hover:-translate-y-0.5"
              >
                Read issue 01
              </Link>
              <div className="flex flex-wrap gap-2">
                {featured.themes.map((t) => (
                  <span key={t} className="border-[2px] border-ink bg-card px-3 py-1 text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* More issues */}
      <section className="border-y-[3px] border-ink bg-cream halftone">
        <div className="mx-auto max-w-7xl bg-cream/90 px-4 py-20 backdrop-blur-sm">
          <div className="mb-10">
            <p className="font-display text-xs uppercase tracking-widest text-ember">
              The catalogue
            </p>
            <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">More from the shelf</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {rest.map((c) => (
              <Link
                key={c.slug}
                to="/comics/$slug"
                params={{ slug: c.slug }}
                className="group grid grid-cols-[110px_minmax(0,1fr)] gap-4 border-[3px] border-ink bg-card p-4 shadow-panel transition-transform hover:-translate-y-1 sm:grid-cols-[minmax(0,0.9fr)_1.1fr] sm:gap-5 sm:p-5"
              >
                <img
                  src={c.cover}
                  alt={`Cover art for ${c.title}`}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="h-full w-full border-[3px] border-ink object-cover"
                />
                <div className="flex min-w-0 flex-col">
                  <span className="font-display text-[10px] uppercase tracking-widest text-ember">
                    {c.issue}
                  </span>
                  <h3 className="mt-1 truncate font-display text-2xl text-ink">{c.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-foreground/80">{c.synopsis}</p>
                  <div className="mt-auto flex flex-wrap gap-1 pt-3">
                    {c.themes.map((t) => (
                      <span
                        key={t}
                        className="border border-ink/40 px-2 py-0.5 text-[10px] uppercase tracking-wider"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Signup */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center">
        <p className="font-display text-xs uppercase tracking-widest text-ember">The dispatch</p>
        <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
          A letter with every new issue.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          One email per issue. Behind-the-page notes, inked spreads, and a short essay from the
          studio. No noise, no tracking, unsubscribe with a single click.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const email = new FormData(form).get("email");
            if (typeof email === "string" && email.includes("@")) {
              form.reset();
              const status = form.querySelector("[data-status]") as HTMLElement | null;
              if (status)
                status.textContent = `Thanks — we'll write to ${email} with the next issue.`;
            }
          }}
          className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@somewhere.com"
            className="min-w-0 flex-1 border-[3px] border-ink bg-card px-4 py-3 font-sans text-base text-ink shadow-panel outline-none placeholder:text-muted-foreground focus:bg-cream"
          />
          <button
            type="submit"
            className="border-[3px] border-ink bg-ember px-6 py-3 font-display text-sm uppercase tracking-wider text-primary-foreground shadow-panel transition-transform hover:-translate-y-0.5"
          >
            Send me the dispatch
          </button>
        </form>
        <p data-status className="mt-3 text-sm text-moss" aria-live="polite" />
      </section>
    </div>
  );
}
