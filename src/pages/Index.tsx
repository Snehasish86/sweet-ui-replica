import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import CategoryLinks from "@/components/CategoryLinks";
import BestsellerSection from "@/components/BestsellerSection";
import VideoBanner from "@/components/VideoBanner";
import PromiseSection from "@/components/PromiseSection";
import OccasionBanner from "@/components/OccasionBanner";
import InstagramFeed from "@/components/InstagramFeed";
import SEOContent from "@/components/SEOContent";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroCarousel />
      <CategoryLinks />
      <BestsellerSection />
      <VideoBanner />
      <PromiseSection />
      <OccasionBanner />
      <InstagramFeed />
      <SEOContent />
      <Footer />
    </div>
  );
};

export default Index;
