import { Link } from "react-router-dom";
import worlds from "../../data/world";
import "./WorldsSection.css";

export default function WorldsSection() {
  return (
    <section className="home-worlds section-padding" id="worlds">
      <div className="container">
        <div className="home-worlds__heading">
          <div>
            <p className="eyebrow">THE EXPLORATION INDEX · 001—012</p>

            <h2>
              Twelve worlds. <em>Infinite discoveries.</em>
            </h2>
          </div>

          <p className="home-worlds__lead">
            Everything we know belongs to a story. Start with a world, follow a
            question, and see where it takes you.
          </p>
        </div>

        <div className="world-grid">
          {worlds.map((world, index) => (
            <Link
              className={`world-card world-card--${(index % 4) + 1}`}
              to={`/worlds/${world.slug}`}
              key={world.slug}
            >
              <div className="world-card__top">
                <span className="world-card__number">{world.number}</span>

                <span className="world-card__symbol" aria-hidden="true">
                  {world.symbol}
                </span>
              </div>

              <div className="world-card__body">
                <p className="world-card__category">{world.category}</p>

                <h3>{world.title}</h3>

                <p className="world-card__description">{world.description}</p>
              </div>

              <div className="world-card__bottom">
                <span>ENTER THIS WORLD</span>
                <span className="world-card__arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="home-worlds__footer">
          <span>12 DOMAINS OF HUMAN INGENUITY</span>
          <span>
            ONE CONNECTED ARCHIVE <span aria-hidden="true">↗</span>
          </span>
        </div>
      </div>
    </section>
  );
}
