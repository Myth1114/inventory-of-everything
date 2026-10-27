import DiscoveriesSection from "../sections/home/DiscoveriesSection";
import HeroSection from "../sections/home/HeroSection";
import IntroSection from "../sections/home/IntroSection";
import TimelineSection from "../sections/home/TimelineSection";
import WorldsSection from "../sections/home/WorldsSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <WorldsSection />
      <DiscoveriesSection />
      <TimelineSection />
    </main>
  );
}
