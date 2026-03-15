import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FleetSection from "@/components/FleetSection";
import ProcessSection from "@/components/ProcessSection";
import CoverageSection from "@/components/CoverageSection";
import ContactSection from "@/components/ContactSection";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";

const Index = () => {


  useEffect(() => {

    const timer = setTimeout(() => {

      const fleet = document.querySelector("#fleet");

      if (!fleet) return;

      fleet.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }, 2700);

    return () => clearTimeout(timer);

  }, []);



  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <FleetSection />
      <ProcessSection />
      <CoverageSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;