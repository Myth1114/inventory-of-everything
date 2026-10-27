import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const primaryLinks = [
  {
    number: "01",
    title: "Explore all worlds",
    description: "Browse the twelve domains of human ingenuity.",
    to: "/worlds",
  },
  {
    number: "02",
    title: "Curated collections",
    description: "Follow a theme across objects, ideas, and eras.",
    to: "/collections",
  },
  {
    number: "03",
    title: "Timeline",
    description: "Discover how inventions and ideas evolved.",
    to: "/timeline",
  },
  {
    number: "04",
    title: "Connections",
    description: "Explore the relationships between things.",
    to: "/connections",
  },
];

export default function ExplorationMenu({ isOpen, onClose }) {
  const menuRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    menuRef.current?.querySelector("[data-menu-first]")?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !menuRef.current) return;

      const focusableElements = Array.from(
        menuRef.current.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((element) => element.getClientRects().length > 0);

      if (focusableElements.length === 0) return;

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="exploration-menu">
      <section
        ref={menuRef}
        id="exploration-menu-panel"
        className="exploration-menu__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="exploration-menu-title"
      >
        <div className="exploration-menu__top">
          <Link to="/" className="exploration-menu__brand" onClick={onClose}>
            THE INVENTORY
            <span>OF EVERYTHING</span>
          </Link>

          <button
            className="exploration-menu__close"
            type="button"
            onClick={onClose}
            aria-label="Close exploration menu"
          >
            <span aria-hidden="true">×</span>
            <span>Close</span>
          </button>
        </div>

        <div className="exploration-menu__content">
          <div className="exploration-menu__intro">
            <p className="eyebrow">THE EXPLORATION INDEX</p>

            <h2 id="exploration-menu-title">
              Where curiosity
              <br />
              <em>leads.</em>
            </h2>

            <p>
              Every object is a doorway. Every discovery connects to something
              else.
            </p>
          </div>

          <nav
            className="exploration-menu__links"
            aria-label="Explore the archive"
          >
            {primaryLinks.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                className="exploration-menu__link"
                onClick={onClose}
                data-menu-first={index === 0 ? "" : undefined}
              >
                <span className="exploration-menu__number">{item.number}</span>

                <span className="exploration-menu__link-copy">
                  <span className="exploration-menu__link-title">
                    {item.title}
                  </span>
                  <span className="exploration-menu__description">
                    {item.description}
                  </span>
                </span>

                <span className="exploration-menu__arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
          </nav>
        </div>

        <footer className="exploration-menu__footer">
          <span>OBJECTS. IDEAS. DISCOVERIES.</span>

          <Link to="/about" onClick={onClose}>
            About the archive ↗
          </Link>
        </footer>
      </section>
    </div>
  );
}
