import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import ExplorationMenu from "./ExplorationMenu";
import "./SiteHeader.css";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <Link
            to="/"
            className="site-header__brand"
            aria-label="The Inventory of Everything — Home"
          >
            <span className="site-header__mark" aria-hidden="true">
              <svg viewBox="0 0 36 36" fill="none">
                <circle
                  cx="18"
                  cy="18"
                  r="13"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <ellipse
                  cx="18"
                  cy="18"
                  rx="6"
                  ry="13"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <path
                  d="M5 18H31M8 11H28M8 25H28"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
            </span>

            <span className="site-header__wordmark">
              <span>THE INVENTORY</span>
              <span>OF EVERYTHING</span>
            </span>
          </Link>

          <div className="site-header__actions">
            <Link
              to="/search"
              className="site-header__search"
              aria-label="Search the archive"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle
                  cx="10.8"
                  cy="10.8"
                  r="6.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="m15.5 15.5 4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span>Search</span>
            </Link>

            <button
              className="site-header__menu-button"
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="exploration-menu-panel"
              aria-haspopup="dialog"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span>{isMenuOpen ? "Close" : "Explore"}</span>

              <span
                className={`site-header__menu-icon ${
                  isMenuOpen ? "is-open" : ""
                }`}
                aria-hidden="true"
              >
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      <ExplorationMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}
