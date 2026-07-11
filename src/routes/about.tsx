import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "The Studio — Ember Peak Comics" },
      {
        name: "description",
        content:
          "Ember Peak Comics is a two-person studio publishing hand-inked graphic novels for adult readers.",
      },
      { property: "og:title", content: "The Studio — Ember Peak Comics" },
      {
        property: "og:description",
        content: "How we work, what we believe, and why our issues take so long to make.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="border-b-[3px] border-ink bg-cream halftone">
        <div className="mx-auto max-w-4xl bg-cream/90 px-4 py-20 text-center">
          <p className="font-display text-xs uppercase tracking-widest text-ember">The studio</p>
          <h1 className="mt-3 font-display text-5xl leading-tight text-ink sm:text-6xl">
            Two people, one drafting table, no rush.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-foreground/80">
            Ember Peak was founded above a bakery in 2021 by a writer and an inker who were tired of
            comics that treat adult readers like teenagers. We publish slowly on purpose, and only
            when we have something worth saying.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-2">
        {[
          {
            name: "Wren Alcott",
            role: "Writer, editor",
            bio: "Wren writes the scripts and sends the letters. Before Ember Peak she spent a decade as a hospice social worker; that work is somewhere in every issue we make.",
          },
          {
            name: "Halden Rooke",
            role: "Illustrator, inker",
            bio: "Halden draws every panel by hand on bristol board, then scans and colours in the studio. He grew up reading Moebius and repairing his grandfather's fountain pens.",
          },
        ].map((p) => (
          <article key={p.name} className="border-[3px] border-ink bg-card p-6 shadow-panel-lg">
            <div className="grid h-16 w-16 place-items-center border-[3px] border-ink bg-ember font-display text-2xl text-primary-foreground">
              {p.name[0]}
            </div>
            <h2 className="mt-4 font-display text-2xl text-ink">{p.name}</h2>
            <p className="font-display text-xs uppercase tracking-widest text-ember">{p.role}</p>
            <p className="mt-3 text-foreground/80">{p.bio}</p>
          </article>
        ))}
      </section>

      <section className="border-y-[3px] border-ink bg-ink text-cream">
        <div className="mx-auto max-w-5xl px-4 py-20">
          <p className="font-display text-xs uppercase tracking-widest text-mustard">
            The rules we work by
          </p>
          <h2 className="mt-2 font-display text-4xl text-cream sm:text-5xl">Our five rules</h2>
          <ol className="mt-10 space-y-6">
            {[
              [
                "Draw it by hand.",
                "Every panel starts on paper. Digital only after the ink is dry.",
              ],
              [
                "Never write down to the reader.",
                "If a subject is too heavy for a 14-year-old, that's usually a sign it belongs in one of our books.",
              ],
              [
                "Publish only when finished.",
                "No deadlines that hurt the work. Full moons are a soft target, not a promise.",
              ],
              ["Keep the studio small.", "Two people can be honest with each other. Ten cannot."],
              [
                "Answer every letter.",
                "If a reader writes, one of us writes back. That's the whole business model.",
              ],
            ].map(([h, b], i) => (
              <li
                key={h}
                className="grid grid-cols-[auto_1fr] gap-5 border-b border-cream/15 pb-6 last:border-b-0"
              >
                <span className="font-display text-4xl text-ember">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-xl text-cream">{h}</h3>
                  <p className="mt-1 text-cream/70">{b}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h2 className="font-display text-4xl text-ink">Come read with us.</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Three issues are on the shelf. A fourth is on the drafting table.
        </p>
        <Link
          to="/comics"
          className="mt-8 inline-flex border-[3px] border-ink bg-ember px-6 py-3 font-display text-sm uppercase tracking-wider text-primary-foreground shadow-panel transition-transform hover:-translate-y-0.5"
        >
          Browse the shelf →
        </Link>
      </section>
    </div>
  );
}
