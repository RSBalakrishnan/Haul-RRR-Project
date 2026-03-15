import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FleetSection from "@/components/FleetSection";
import ProcessSection from "@/components/ProcessSection";
import CoverageSection from "@/components/CoverageSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Best Debris Removal Chennai | Building Demolition & Transport" 
        description="RRR Transport provides professional debris removal, building demolition waste management, and construction transport in Chennai. Reliable Tata 407 fleet for all site clearance needs." 
        canonical="https://rrrtransport.in/"
      />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <FleetSection />
      <ProcessSection />
      <CoverageSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;