import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-display text-sm tracking-widest text-ember">ISSUE MISSING</p>
        <h1 className="mt-3 font-display text-7xl text-foreground">404</h1>
        <h2 className="mt-4 font-display text-xl text-foreground">This page went off-panel</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The story you're looking for got lost in the ink. Head back to the newsstand.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center border-[3px] border-ink bg-ember px-5 py-2.5 font-display text-sm text-primary-foreground shadow-panel transition-transform hover:-translate-y-0.5"
          >
            Back to the Newsstand
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-foreground">The page smudged</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try again or head back to the newsstand.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center border-[3px] border-ink bg-ember px-5 py-2.5 font-display text-sm text-primary-foreground shadow-panel transition-transform hover:-translate-y-0.5"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border-[3px] border-ink bg-card px-5 py-2.5 font-display text-sm text-foreground shadow-panel transition-transform hover:-translate-y-0.5"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ember Peak Comics — Grown-up stories with something to say" },
      {
        name: "description",
        content:
          "Ember Peak Comics publishes bold, hand-inked graphic novels for adult readers — stories about grief, courage, craft and the small choices that reshape a life.",
      },
      { name: "author", content: "Ember Peak Comics" },
      { property: "og:title", content: "Ember Peak Comics" },
      {
        property: "og:description",
        content:
          "Grown-up graphic novels with warm ink, sharp questions, and stories that leave a mark.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bungee&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,400&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function SiteHeader() {
  const links = [
    { to: "/", label: "Newsstand" },
    { to: "/comics", label: "Issues" },
    { to: "/about", label: "Studio" },
  ] as const;
  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-ink bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center border-[3px] border-ink bg-ember font-display text-primary-foreground">
            E
          </span>
          <span className="truncate font-display text-base leading-none sm:text-lg">
            Ember Peak <span className="text-ember">Comics</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="px-3 py-1.5 font-display text-xs uppercase tracking-wider text-foreground transition-colors hover:text-ember"
              activeProps={{
                className:
                  "px-3 py-1.5 font-display text-xs uppercase tracking-wider text-ember underline underline-offset-4",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/comics"
            className="ml-2 inline-flex items-center border-[3px] border-ink bg-mustard px-4 py-1.5 font-display text-xs uppercase tracking-wider text-ink shadow-[4px_4px_0_0_var(--ink)] transition-transform hover:-translate-y-0.5"
          >
            Read now
          </Link>
        </nav>
        <Link
          to="/comics"
          className="shrink-0 border-[3px] border-ink bg-mustard px-3 py-1.5 font-display text-[10px] uppercase tracking-wider text-ink shadow-[3px_3px_0_0_var(--ink)] md:hidden"
        >
          Read
        </Link>
      </div>
      <nav className="flex items-center justify-center gap-1 border-t border-ink/15 bg-cream/60 px-2 py-1.5 md:hidden">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            activeOptions={{ exact: l.to === "/" }}
            className="px-3 py-1 font-display text-[10px] uppercase tracking-widest text-foreground/80 hover:text-ember"
            activeProps={{
              className:
                "px-3 py-1 font-display text-[10px] uppercase tracking-widest text-ember underline underline-offset-4",
            }}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-20 border-t-[3px] border-ink bg-ink text-cream">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center border-[3px] border-cream bg-ember font-display text-cream">
              E
            </span>
            <span className="font-display text-lg">Ember Peak Comics</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-cream/70">
            An independent comics studio publishing slow, honest stories for adult readers. Printed
            on paper, drawn by hand, distributed with care.
          </p>
        </div>
        <div>
          <p className="font-display text-xs uppercase tracking-widest text-mustard">Read</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/comics" className="hover:text-ember">
                All issues
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-ember">
                Newsstand
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-ember">
                The studio
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-display text-xs uppercase tracking-widest text-mustard">Studio</p>
          <p className="mt-3 text-sm text-cream/70">
            Made in a small room above a bakery.
            <br />
            Est. 2021. Reader-supported, ad-free.
          </p>
        </div>
      </div>
      <div className="border-t border-cream/15">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-4 text-xs text-cream/60">
          <span>© {new Date().getFullYear()} Ember Peak Comics. All ink reserved.</span>
          <span>Intended for readers 18+.</span>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
