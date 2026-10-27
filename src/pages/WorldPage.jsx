import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import worlds from "../data/world";
import categories from "../data/categories";
import entries from "../data/entries";
import "./WorldPage.css";

export default function WorldPage() {
  const { worldSlug } = useParams();

  const [selection, setSelection] = useState({
    worldSlug: null,
    categoryId: "all",
  });

  const world = worlds.find((item) => item.slug === worldSlug);

  const worldCategories = categories.filter(
    (category) => category.worldSlug === worldSlug
  );

  const activeCategoryId =
    selection.worldSlug === worldSlug ? selection.categoryId : "all";

  const worldEntries = entries.filter(
    (entry) => entry.worldSlug === worldSlug && entry.status === "published"
  );

  const filteredEntries =
    activeCategoryId === "all"
      ? worldEntries
      : worldEntries.filter((entry) => entry.categoryId === activeCategoryId);

  const activeCategory = worldCategories.find(
    (category) => category.id === activeCategoryId
  );

  if (!world) {
    return (
      <main className="world-page section-padding">
        <div className="container">
          <p className="eyebrow">WORLD NOT FOUND</p>
          <h1>This world hasn't been discovered yet.</h1>
          <Link to="/worlds" className="world-page__back">
            ← Explore all worlds
          </Link>
        </div>
      </main>
    );
  }

  function selectCategory(categoryId) {
    setSelection({ worldSlug, categoryId });
  }

  return (
    <main className="world-page section-padding">
      <div className="container">
        <nav className="world-page__breadcrumb" aria-label="Breadcrumb">
          <Link to="/">The Inventory</Link>
          <span>/</span>
          <Link to="/worlds">Worlds</Link>
          <span>/</span>
          <span>{world.title}</span>
        </nav>

        <header className="world-page__hero">
          <div className="world-page__identity">
            <span className="world-page__number">{world.number}</span>
            <span className="world-page__symbol" aria-hidden="true">
              {world.symbol}
            </span>
          </div>

          <p className="eyebrow">{world.category}</p>
          <h1>{world.title}</h1>
          <p className="world-page__description">{world.description}</p>

          <div className="world-page__meta">
            <span>
              {worldEntries.length} published{" "}
              {worldEntries.length === 1 ? "entry" : "entries"}
            </span>
            <span>THE INVENTORY OF EVERYTHING</span>
          </div>
        </header>

        <section className="world-page__entries">
          <div className="world-page__section-heading">
            <div>
              <p className="eyebrow">THE ARCHIVE</p>
              <h2>Discoveries in this world</h2>
            </div>
            <span>
              {String(filteredEntries.length).padStart(2, "0")} ENTRIES
            </span>
          </div>

          <nav
            className="world-page__categories"
            aria-label={`${world.title} categories`}
          >
            <button
              type="button"
              className={
                activeCategoryId === "all"
                  ? "world-page__category-button is-active"
                  : "world-page__category-button"
              }
              aria-pressed={activeCategoryId === "all"}
              onClick={() => selectCategory("all")}
            >
              All categories
              <span>{worldEntries.length}</span>
            </button>

            {worldCategories.map((category) => {
              const count = worldEntries.filter(
                (entry) => entry.categoryId === category.id
              ).length;

              return (
                <button
                  type="button"
                  key={category.id}
                  className={
                    activeCategoryId === category.id
                      ? "world-page__category-button is-active"
                      : "world-page__category-button"
                  }
                  aria-pressed={activeCategoryId === category.id}
                  onClick={() => selectCategory(category.id)}
                >
                  {category.title}
                  <span>{count}</span>
                </button>
              );
            })}
          </nav>

          {activeCategory && (
            <p className="world-page__category-description">
              Browsing: {activeCategory.title}
            </p>
          )}

          {filteredEntries.length > 0 ? (
            <div className="world-page__entry-list">
              {filteredEntries.map((entry, index) => (
                <article className="world-page__entry" key={entry.id}>
                  <span className="world-page__entry-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="world-page__entry-content">
                    <p className="world-page__entry-type">{entry.type}</p>
                    <h3>
                      <Link
                        to={`/entries/${entry.id}`}
                        className="world-page__entry-link"
                      >
                        {entry.title}
                      </Link>
                    </h3>
                    <p>{entry.summary}</p>

                    {entry.tags?.length > 0 && (
                      <div className="world-page__tags">
                        {entry.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>

                  <span className="world-page__entry-period">
                    {entry.period}
                  </span>
                </article>
              ))}
            </div>
          ) : (
            <p className="world-page__empty">
              {activeCategory
                ? `No published entries in ${activeCategory.title} yet. New discoveries will appear here as the archive grows.`
                : "This part of the archive is still being assembled. New entries will appear here as discoveries are researched and published."}
            </p>
          )}
        </section>

        <nav
          className="world-page__world-nav"
          aria-label="Explore other worlds"
        >
          <div>
            <p className="eyebrow">KEEP EXPLORING</p>
            <h2>Move between worlds</h2>
          </div>

          <div className="world-page__world-links">
            {worlds.map((item) => (
              <Link
                key={item.slug}
                to={`/worlds/${item.slug}`}
                className={
                  item.slug === world.slug
                    ? "world-page__world-link is-active"
                    : "world-page__world-link"
                }
                aria-current={item.slug === world.slug ? "page" : undefined}
              >
                <span>{item.number}</span>
                {item.title}
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </main>
  );
}
