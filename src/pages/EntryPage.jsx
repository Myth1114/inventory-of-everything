import React from "react";
import { Link, useParams } from "react-router-dom";
import worlds from "../data/world";
import categories from "../data/categories";
import entries from "../data/entries";
import ReactMarkDown from "react-markdown";
import "./EntryPage.css";

const articleFiles = import.meta.glob("../content/entries/**/*.md", {
  query: "?raw",
  import: "default",
});
export default function EntryPage() {
  const { entryId } = useParams();
  const articleMetadata = entries.find(
    (item) => item.id === entryId && item.status === "published"
  );

  const articlePath = articleMetadata?.contentPath
    ? Object.keys(articleFiles).find((path) =>
        path.endsWith(`/${articleMetadata.contentPath}`)
      )
    : undefined;

  const [article, setArticle] = React.useState("");

  React.useEffect(() => {
    let cancelled = false;

    if (!articlePath) {
      setArticle("");
      return;
    }

    articleFiles[articlePath]().then((content) => {
      if (!cancelled) {
        setArticle(content);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [articlePath]);

  const entry = entries.find(
    (item) => item.id === entryId && item.status === "published"
  );

  if (!entry) {
    return (
      <main className="entry-page section-padding">
        <div className="container">
          <p className="eyebrow">ENTRY NOT FOUND</p>
          <h1>This discovery hasn't entered the archive yet.</h1>
          <Link to="/worlds" className="entry-page__back">
            ← Explore all worlds
          </Link>
        </div>
      </main>
    );
  }

  const world = worlds.find((item) => item.slug === entry.worldSlug);
  const category = categories.find((item) => item.id === entry.categoryId);

  const relatedEntries = (entry.relatedEntryIds || [])
    .map((id) =>
      entries.find((item) => item.id === id && item.status === "published")
    )
    .filter(Boolean);

  return (
    <main className="entry-page section-padding">
      <div className="container">
        <nav className="entry-page__breadcrumb" aria-label="Breadcrumb">
          <Link to="/">The Inventory</Link>
          <span>/</span>
          <Link to="/worlds">Worlds</Link>
          {world && (
            <>
              <span>/</span>
              <Link to={`/worlds/${world.slug}`}>{world.title}</Link>
            </>
          )}
          <span>/</span>
          <span>{entry.title}</span>
        </nav>

        <header className="entry-page__hero">
          <p className="eyebrow">
            {entry.type} {entry.period ? `· ${entry.period}` : ""}
          </p>

          <h1>{entry.title}</h1>

          <p className="entry-page__summary">{entry.summary}</p>

          <div className="entry-page__metadata">
            {world && (
              <Link to={`/worlds/${world.slug}`}>
                {world.symbol} {world.title}
              </Link>
            )}
            {category && <span>{category.title}</span>}
          </div>
        </header>
        {entry.heroImage && (
          <figure className="entry-page__hero-image">
            <img
              src={entry.heroImage}
              alt={`Antique magnetic compass on a historical navigation map`}
              loading="eager"
            />
          </figure>
        )}
        {entry.tags?.length > 0 && (
          <section className="entry-page__tags" aria-label="Entry tags">
            {entry.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </section>
        )}

        <section className="entry-page__body">
          <p className="eyebrow">FROM THE ARCHIVE</p>

          {article ? (
            <div className="entry-page__article">
              <ReactMarkDown
                components={{
                  h1: ({ children }) => <h2>{children}</h2>,
                }}
              >
                {article}
              </ReactMarkDown>
            </div>
          ) : (
            <p>This article is being prepared for the archive.</p>
          )}
        </section>

        {relatedEntries.length > 0 && (
          <section className="entry-page__related">
            <p className="eyebrow">CONNECTED DISCOVERIES</p>
            <h2>Explore the connections</h2>

            <div className="entry-page__related-list">
              {relatedEntries.map((relatedEntry) => (
                <Link
                  key={relatedEntry.id}
                  to={`/entries/${relatedEntry.id}`}
                  className="entry-page__related-link"
                >
                  <span>{relatedEntry.type}</span>
                  <h3>{relatedEntry.title}</h3>
                  <p>{relatedEntry.summary}</p>
                  <span aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {world && (
          <footer className="entry-page__footer">
            <Link to={`/worlds/${world.slug}`}>← Return to {world.title}</Link>
          </footer>
        )}
      </div>
    </main>
  );
}
