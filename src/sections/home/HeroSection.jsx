import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="home-hero">
      <div className="container home-hero__inner">
        <div className="home-hero__copy">
          <p className="eyebrow">A living archive of human ingenuity</p>

          <h1>
            Everything
            <br />
            has a <em>story.</em>
          </h1>

          <p className="home-hero__description">
            From the simplest everyday object to the discoveries that changed
            how we live. Explore the ideas, materials, inventions, and people
            behind our world.
          </p>

          <form
            className="home-search"
            action="/search"
            method="get"
            role="search"
          >
            <label className="sr-only" htmlFor="archive-search">
              Search the archive
            </label>

            <input
              id="archive-search"
              type="search"
              name="q"
              placeholder="Search inventions, objects, ideas..."
            />

            <button type="submit" aria-label="Search archive">
              ↗
            </button>
          </form>

          <p className="home-hero__note">12 WORLDS · COUNTLESS CONNECTIONS</p>
        </div>

        <div
          className="home-hero__visual"
          aria-label="The discovery stage will feature a 3D composition of everyday objects"
        >
          <div className="home-hero__visual-label">
            OBJECTS. IDEAS. DISCOVERIES.
          </div>

          <div className="home-hero__orb" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <p className="home-hero__visual-caption">
            The world, piece by piece.
          </p>
        </div>
      </div>
    </section>
  );
}
