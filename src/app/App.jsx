import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SiteHeader from "../components/navigation/SiteHeader";
import HomePage from "../pages/HomePage";
import WorldsPage from "../pages/WorldsPage";
import WorldPage from "../pages/WorldPage";
import PlaceholderPage from "../pages/PlaceholderPage";
import EntryPage from "../pages/EntryPage";

const placeholderPaths = [
  "/search",
  "/collections",
  "/timeline",
  "/connections",
  "/about",
];
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}
export default function App() {
  return (
    <>
      <ScrollToTop />
      <SiteHeader />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/worlds" element={<WorldsPage />} />
        <Route path="/worlds/:worldSlug" element={<WorldPage />} />
        <Route path="/entries/:entryId" element={<EntryPage />} />

        {placeholderPaths.map((path) => (
          <Route key={path} path={path} element={<PlaceholderPage />} />
        ))}

        <Route path="*" element={<PlaceholderPage />} />
      </Routes>
    </>
  );
}
