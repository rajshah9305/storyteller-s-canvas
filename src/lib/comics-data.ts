import emberCover from "@/assets/comic-ember.jpg";
import rootCover from "@/assets/comic-root.jpg";
import compassCover from "@/assets/comic-compass.jpg";

export type Comic = {
  slug: string;
  title: string;
  tagline: string;
  issue: string;
  pages: number;
  minutes: number;
  palette: "ember" | "moss" | "mustard";
  cover: string;
  synopsis: string;
  lesson: string;
  themes: string[];
};

export const COMICS: Comic[] = [
  {
    slug: "the-last-ember",
    title: "The Last Ember",
    tagline: "A blacksmith. A dying flame. A promise she can't put down.",
    issue: "No. 01",
    pages: 64,
    minutes: 22,
    palette: "ember",
    cover: emberCover,
    synopsis:
      "When the forge fires of Kettle Hollow go cold overnight, apprentice smith Wren refuses to let the last living ember die on her watch. What starts as a stubborn vigil turns into a quiet reckoning with the mentor she buried, the town that forgot her, and the craft that still asks something of her.",
    lesson: "Keeping something alive is often lonelier than starting it. Do it anyway.",
    themes: ["Grief", "Craftsmanship", "Inheritance"],
  },
  {
    slug: "root-and-bone",
    title: "Root & Bone",
    tagline: "An herbalist, an orphaned wolf pup, and a garden that remembers.",
    issue: "No. 02",
    pages: 72,
    minutes: 26,
    palette: "moss",
    cover: rootCover,
    synopsis:
      "Odessa has spent forty years healing strangers and keeping her own wounds sealed shut. When a half-starved wolf pup wanders into her glasshouse, she's forced to reconsider what she's willing to let close — and what growing something means when you know it will outlive you.",
    lesson:
      "You cannot tend a garden and stay untouched by it. Being changed is the price of caring.",
    themes: ["Care work", "Aging", "Chosen kin"],
  },
  {
    slug: "cinder-compass",
    title: "Cinder Compass",
    tagline: "A cartographer maps a country that isn't there anymore.",
    issue: "No. 03",
    pages: 80,
    minutes: 30,
    palette: "mustard",
    cover: compassCover,
    synopsis:
      "After the salt wars, Halden walks the cracked flats with a compass that points not north, but toward the last place he was happy. A slow, footsore meditation on memory, borders, and the countries we build inside ourselves after the maps stop working.",
    lesson:
      "Some places only exist because you keep walking back to them. That doesn't make them less real.",
    themes: ["Memory", "Displacement", "Solitude"],
  },
];
