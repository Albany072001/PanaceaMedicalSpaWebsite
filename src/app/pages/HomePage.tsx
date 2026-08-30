import { HeroBanner } from "../components/HeroBanner";
import { AboutSection } from "../components/AboutSection";
import { ServicesSection } from "../components/ServicesSection";
import { ReviewsSection } from "../components/ReviewsSection";

export function HomePage() {
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <ServicesSection />
      <ReviewsSection />
    </>
  );
}
