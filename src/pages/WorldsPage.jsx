import { Link } from "react-router-dom";
import worlds from "../data/world";
import "./WorldsPage.css";

export default function WorldsPage() {
  return (
    <main className="worlds-page section-padding">
      <div className="container">
        <header className="worlds-page__heading">
          <p className="eyebrow">THE EXPLORATION INDEX · 001—012</p>

          <h1>
            Twelve worlds.
            <br />
            <em>Infinite discoveries.</em>
          </h1>

          <p className="worlds-page__intro">
            Explore the materials, inventions, systems, and ideas that shape our
            world. Choose a domain and follow your curiosity.
          </p>
        </header>

        <div className="worlds-page__grid">
          {worlds.map((world) => (
            <Link
              key={world.slug}
              to={`/worlds/${world.slug}`}
              className="worlds-page__card"
            >
              <div className="worlds-page__card-top">
                <span>{world.number}</span>
                <span aria-hidden="true">{world.symbol}</span>
              </div>

              <p className="worlds-page__category">{world.category}</p>
              <h2>{world.title}</h2>
              <p className="worlds-page__description">{world.description}</p>

              <span className="worlds-page__card-link">
                EXPLORE WORLD <span aria-hidden="true">↗</span>
              </span>
            </Link>
          ))}
        </div>

        <footer className="worlds-page__footer">
          <span>12 DOMAINS OF HUMAN INGENUITY</span>
          <span>ONE CONNECTED ARCHIVE ↗</span>
        </footer>
      </div>
    </main>
  );
}
