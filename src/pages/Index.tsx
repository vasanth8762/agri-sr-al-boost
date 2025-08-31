import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import ClassificationSection from "@/components/ClassificationSection";
import GallerySection from "@/components/GallerySection";
import BenefitsSection from "@/components/BenefitsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div id="home">
        <HeroSection />
      </div>
      <AboutSection />
      <FeaturesSection />
      <ClassificationSection />
      <GallerySection />
      <BenefitsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
