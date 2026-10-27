const magneticCompassHero = new URL(
  "../assets/entries/magnetic-compass/hero.webp",
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
        alt: "An antique brass compass resting on an aged navigation map.",
        caption: "A magnetic compass, an enduring instrument of navigation.",
        credit: "Custom 3D render created for The Inventory of Everything.",
        kind: "hero",
      },
    ],
  },
];

export default entries;
