import "./HeroSection.css";

function Artifact({ type, label, className }) {
  return (
    <div className={`hero-artifact ${className}`} aria-label={label}>
      {type === "compass" && (
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <circle cx="60" cy="60" r="48" />
          <circle cx="60" cy="60" r="37" />
          <path d="M60 18 L69 60 L60 102 L51 60 Z" />
          <path d="M18 60 H102 M60 18 V102" />
          <circle cx="60" cy="60" r="5" />
        </svg>
      )}

      {type === "book" && (
        <svg viewBox="0 0 140 110" aria-hidden="true">
          <path d="M12 23 Q42 12 70 30 V94 Q42 76 12 86 Z" />
          <path d="M70 30 Q98 12 128 23 V86 Q98 76 70 94 Z" />
          <path d="M70 30 V94" />
          <path d="M23 39 Q43 32 58 41 M23 52 Q43 45 58 54 M82 41 Q101 32 117 39 M82 54 Q101 45 117 52" />
        </svg>
      )}

      {type === "gear" && (
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <path d="M52 7 H68 L72 20 L84 25 L96 18 L107 29 L100 41 L105 53 L118 57 V73 L105 77 L100 89 L107 101 L96 112 L84 105 L72 110 L68 123 H52 L48 110 L36 105 L24 112 L13 101 L20 89 L15 77 L2 73 V57 L15 53 L20 41 L13 29 L24 18 L36 25 L48 20 Z" />
          <circle cx="60" cy="65" r="25" />
          <circle cx="60" cy="65" r="10" />
        </svg>
      )}

      {type === "bulb" && (
        <svg viewBox="0 0 120 140" aria-hidden="true">
          <path d="M60 12 C34 12 18 32 18 57 C18 76 29 87 39 99 H81 C91 87 102 76 102 57 C102 32 86 12 60 12 Z" />
          <path d="M42 99 H78 M43 109 H77 M48 119 H72" />
          <path d="M60 34 V72 M44 48 L60 72 L76 48" />
        </svg>
      )}

      {type === "flask" && (
        <svg viewBox="0 0 120 140" aria-hidden="true">
          <path d="M44 12 H76 M49 12 V52 L20 105 Q15 120 34 124 H86 Q105 120 100 105 L71 52 V12" />
          <path d="M31 92 Q60 78 89 92 L99 110 Q101 121 85 121 H35 Q19 121 22 110 Z" />
          <circle cx="48" cy="103" r="4" />
          <circle cx="69" cy="111" r="3" />
        </svg>
      )}

      {type === "chip" && (
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <rect x="29" y="29" width="62" height="62" rx="5" />
          <rect x="42" y="42" width="36" height="36" rx="2" />
          <path d="M43 7 V29 M60 7 V29 M77 7 V29 M43 91 V113 M60 91 V113 M77 91 V113 M7 43 H29 M7 60 H29 M7 77 H29 M91 43 H113 M91 60 H113 M91 77 H113" />
        </svg>
      )}
    </div>
  );
}

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
          aria-label="A collection of objects representing human knowledge and invention"
        >
          <div className="home-hero__visual-label">A WORLD OF DISCOVERIES</div>

          <div className="hero-scene">
            <div className="hero-scene__orbit hero-scene__orbit--one" />
            <div className="hero-scene__orbit hero-scene__orbit--two" />
            <div className="hero-scene__core">
              <span>THE</span>
              <strong>INVENTORY</strong>
              <span>OF EVERYTHING</span>
            </div>

            <Artifact
              type="compass"
              label="Compass"
              className="hero-artifact--compass"
            />
            <Artifact
              type="book"
              label="Open book"
              className="hero-artifact--book"
            />
            <Artifact
              type="gear"
              label="Gear"
              className="hero-artifact--gear"
            />
            <Artifact
              type="bulb"
              label="Light bulb"
              className="hero-artifact--bulb"
            />
            <Artifact
              type="flask"
              label="Scientific flask"
              className="hero-artifact--flask"
            />
            <Artifact
              type="chip"
              label="Microchip"
              className="hero-artifact--chip"
            />

            <span className="hero-scene__particle hero-scene__particle--one" />
            <span className="hero-scene__particle hero-scene__particle--two" />
            <span className="hero-scene__particle hero-scene__particle--three" />
            <span className="hero-scene__particle hero-scene__particle--four" />
          </div>

          <p className="home-hero__visual-caption">
            OBJECTS. IDEAS. DISCOVERIES.
          </p>
        </div>
      </div>
    </section>
  );
}
