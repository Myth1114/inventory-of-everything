import { Link } from "react-router-dom";
import entries from "../../data/entries";
import worlds from "../../data/world";
import "./DiscoveriesSection.css";

export default function DiscoveriesSection() {
  const discoveries = entries.filter(
    (entry) => entry.featured && entry.status === "published"
  );

  return (
    <section className="home-discoveries section-padding" id="discoveries">
      <div className="container">
        <div className="home-discoveries__heading">
          <div>
            <p className="eyebrow">A CLOSER LOOK · SELECTED ENTRIES</p>

            <h2>
              Small things.
              <br />
              <em>World-changing ideas.</em>
            </h2>
          </div>

          <p className="home-discoveries__lead">
            Every invention has a history. Every material has a story. Explore
            the objects and ideas that helped shape the world we know today.
          </p>
        </div>

        <div className="discovery-list">
          {discoveries.map((discovery, index) => {
            const world = worlds.find(
              (item) => item.slug === discovery.worldSlug
            );

            if (!world) return null;

            const number = String(index + 1).padStart(2, "0");

            return (
              <Link
                className="discovery-card"
                to={`/worlds/${discovery.worldSlug}`}
                key={discovery.id}
              >
                <div className="discovery-card__visual" aria-hidden="true">
                  <span className="discovery-card__index">
                    ENTRY / {number}
                  </span>

                  <span className="discovery-card__symbol">{world.symbol}</span>

                  <span className="discovery-card__world">{world.title}</span>
                </div>

                <div className="discovery-card__content">
                  <div className="discovery-card__meta">
                    <span>FIELD NOTE · {number}</span>
                    <span>{discovery.period}</span>
                  </div>

                  <h3>{discovery.title}</h3>

                  <p>{discovery.summary}</p>

                  <span className="discovery-card__link">
                    EXPLORE THIS WORLD
                    <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="home-discoveries__footer">
          <span>EVERY OBJECT HAS A HISTORY</span>
          <span>THE ARCHIVE IS ALWAYS GROWING ↗</span>
        </div>
      </div>
    </section>
  );
}
