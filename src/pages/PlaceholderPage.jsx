import { Link, useLocation } from "react-router-dom";

const pageDetails = {
  "/search": {
    eyebrow: "THE ARCHIVE SEARCH",
    title: "Find something curious.",
    description:
      "Search across inventions, discoveries, materials, people, and ideas. The archive search will be connected in a later step.",
  },
  "/worlds": {
    eyebrow: "EXPLORE THE ARCHIVE",
    title: "Twelve worlds. Countless connections.",
    description:
      "Explore the major domains of human ingenuity, from everyday objects to scientific principles.",
  },
  "/collections": {
    eyebrow: "CURATED DISCOVERIES",
    title: "Follow a thread of curiosity.",
    description:
      "Discover collections that connect objects, ideas, and events across different worlds.",
  },
  "/timeline": {
    eyebrow: "THE STORY OF TIME",
    title: "Ideas evolve. The world changes.",
    description:
      "Follow the development of inventions, discoveries, and technologies through time.",
  },
  "/connections": {
    eyebrow: "THE KNOWLEDGE NETWORK",
    title: "Everything connects to something.",
    description:
      "Explore the relationships between people, materials, inventions, and scientific ideas.",
  },
  "/about": {
    eyebrow: "ABOUT THE ARCHIVE",
    title: "A place for the stories behind things.",
    description:
      "The Inventory of Everything documents the objects, ideas, and discoveries that shape our world.",
  },
};

export default function PlaceholderPage() {
  const { pathname } = useLocation();
  const page = pageDetails[pathname];

  if (!page) {
    return (
      <main className="container section-padding">
        <p className="eyebrow">404 · NOT IN THE INVENTORY</p>
        <h1>We haven't found that record.</h1>
        <p>This address doesn't match a page in the archive.</p>
        <Link to="/">Return to the archive ↗</Link>
      </main>
    );
  }

  return (
    <main className="placeholder-page section-padding">
      <div className="container">
        <p className="eyebrow">{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <p className="placeholder-page__description">{page.description}</p>
        <p className="placeholder-page__status">
          THIS SECTION IS UNDER CONSTRUCTION
        </p>
        <Link className="placeholder-page__back" to="/">
          ← Return to the homepage
        </Link>
      </div>
    </main>
  );
}
