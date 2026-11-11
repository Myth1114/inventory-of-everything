const magneticCompassHero = new URL(
  "../assets/entries/magnetic-compass/hero.jpeg",
  import.meta.url
).href;
const concreteHero = new URL(
  "../assets/entries/concrete/hero.jpeg",
  import.meta.url
).href;
const paperHero = new URL("../assets/entries/paper/hero.jpeg", import.meta.url)
  .href;
const glassHero = new URL("../assets/entries/glass/hero.jpeg", import.meta.url)
  .href;
const copperHero = new URL(
  "../assets/entries/copper/hero.jpeg",
  import.meta.url
).href;

const entries = [
  {
    id: "printing-press",
    contentPath: "communication/printing-press.md",
    title: "Printing Press",
    type: "invention",
    worldSlug: "communication",
    categoryId: "books-publishing",
    period: "c. 1440s",
    summary:
      "A printing technology that helped make written information reproducible at a much larger scale.",
    tags: ["printing", "books", "communication"],
    relatedEntryIds: ["concrete", "magnetic-compass"],
    featured: true,
    status: "published",
  },

  {
    id: "concrete",
    contentPath: "matter-materials/concrete.md",
    title: "Concrete",
    type: "material",
    worldSlug: "matter-materials",
    categoryId: "composites",
    period: "Ancient origins",
    summary:
      "A building material made by combining a binder with aggregates and water, used in many forms across history.",
    tags: ["construction", "materials", "buildings"],
    relatedEntryIds: ["printing-press"],
    featured: true,
    status: "published",
    heroImage: concreteHero,
    images: [
      {
        id: "concrete-hero",
        src: concreteHero,
        alt: "Historical reconstruction of an early Neolithic lime-bound floor.",
        caption:
          "An imagined reconstruction of a Neolithic lime-plastered floor from the southern Levant, an early precursor to later cementitious building materials.",
        credit:
          "AI-generated historical reconstruction; not an authentic archaeological photograph.",
        kind: "hero",
      },
    ],
  },
  {
    id: "magnetic-compass",
    contentPath: "transport-navigation/magnetic-compass.md",
    title: "Magnetic Compass",
    type: "invention",
    worldSlug: "transport-navigation",
    categoryId: "navigation-mapping",
    period: "Ancient origins",
    summary:
      "A navigation instrument that uses a magnetic element aligned with Earth's magnetic field.",
    tags: ["navigation", "magnetism", "travel"],
    relatedEntryIds: ["printing-press"],
    featured: true,
    status: "published",
    heroImage: magneticCompassHero,
    images: [
      {
        id: "magnetic-compass-hero",
        src: magneticCompassHero,
        alt: "Historical reconstruction of an ancient Chinese south-pointing spoon compass.",
        caption:
          "A reconstruction of the early Chinese south-pointing spoon compass tradition.",
        credit:
          "AI-generated historical reconstruction; not an authentic surviving artifact.",
        kind: "hero",
      },
    ],
  },
  {
    id: "paper",
    contentPath: "communication/paper.md",
    title: "Paper",
    type: "invention",
    worldSlug: "communication",
    categoryId: "writing-scripts",
    period: "Western Han dynasty, China",
    summary:
      "A lightweight sheet material made from processed plant fibres, transforming how people recorded, preserved, and shared knowledge.",
    tags: ["papermaking", "communication", "writing", "knowledge"],
    relatedEntryIds: ["printing-press"],
    featured: true,
    status: "published",
    heroImage: paperHero,
    images: [
      {
        id: "paper-hero",
        src: paperHero,
        alt: "Historical reconstruction of an early Chinese papermaking workshop.",
        caption:
          "An imagined reconstruction of early Chinese papermaking during the Western Han dynasty.",
        credit:
          "AI-generated historical reconstruction; not an authentic historical photograph.",
        kind: "hero",
      },
    ],
  },
  {
    id: "glass",
    contentPath: "matter-materials/glass.md",
    title: "Glass",
    type: "material",
    worldSlug: "matter-materials",
    categoryId: "glass-ceramics",
    period: "Third millennium BCE",
    summary:
      "A versatile amorphous material that evolved from rare ancient ornaments into an essential part of architecture, science, and modern technology.",
    tags: ["glassmaking", "materials", "architecture", "optics"],
    relatedEntryIds: ["concrete"],
    featured: false,
    status: "published",
    heroImage: glassHero,
    images: [
      {
        id: "glass-hero",
        src: glassHero,
        alt: "Historical reconstruction of an early opaque blue glass bead.",
        caption:
          "An imagined reconstruction representing early glass objects from the ancient Near East.",
        credit:
          "AI-generated historical reconstruction; not an authentic archaeological photograph.",
        kind: "hero",
      },
    ],
  },
  {
    id: "copper",
    contentPath: "matter-materials/copper.md",
    title: "Copper",
    type: "material",
    worldSlug: "matter-materials",
    categoryId: "metals-alloys",
    period: "Neolithic, before 5000 BCE",
    summary:
      "One of the first metals worked by humans, copper transformed tools, craftsmanship, trade, and eventually the development of metallurgy.",
    tags: ["copper", "metallurgy", "metals", "bronze"],
    relatedEntryIds: ["concrete", "glass"],
    featured: false,
    status: "published",
    heroImage: copperHero,
    images: [
      {
        id: "copper-hero",
        src: copperHero,
        alt: "Historical reconstruction of an early hand-hammered native copper awl.",
        caption:
          "An imagined reconstruction representing early Neolithic native copperworking.",
        credit:
          "AI-generated historical reconstruction; not an authentic archaeological photograph.",
        kind: "hero",
      },
    ],
  },
];

export default entries;
