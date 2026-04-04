import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FleetSection from "@/components/FleetSection";
import ProcessSection from "@/components/ProcessSection";
import CoverageSection from "@/components/CoverageSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import InternalLinks from "@/components/InternalLinks";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Best Debris Removal Chennai | Building Demolition & Transport" 
        description="Rajamani Transport provides professional debris removal, building demolition waste management, and construction transport in Chennai. Reliable Tata 407 fleet for all site clearance needs." 
        canonical="https://rajamanitransport.in/"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LocalBusiness",
              "@id": "https://rajamanitransport.in/#organization",
              "name": "Rajamani Transport",
              "url": "https://rajamanitransport.in/",
              "telephone": "+918667611496",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Perungudi",
                "addressLocality": "Chennai",
                "addressRegion": "TN",
                "postalCode": "600096",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 12.9654,
                "longitude": 80.2461
              },
              "priceRange": "₹₹",
              "openingHours": "Mo-Su 00:00-23:59",
              "image": "https://rajamanitransport.in/assets/rrr-logo.jpeg"
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much does debris removal cost in Chennai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Costs typically depend on the volume of waste and transport distance. Using our Tata 407 fleet, we offer competitive fixed rates starting from ₹2,000 per load within 35km of Perungudi."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you serve all areas in Chennai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we primarily serve Velachery, Perungudi, Medavakkam, Tambaram, Thoraipakkam, and Sholinganallur, but we cover any location within a 35km radius of South Chennai."
                  }
                }
              ]
            }
          ]
        }}
      />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <FleetSection />
      <ProcessSection />
      <CoverageSection />
      <FAQSection />
      <ContactSection />
      <InternalLinks 
        services={[
          { label: "Debris Removal Chennai", href: "/debris-removal-chennai" },
          { label: "Demolition Waste Removal Chennai", href: "/demolition-waste-removal-chennai" }
        ]}
        locations={[
          { label: "Velachery Debris Removal", href: "/debris-removal-velachery" },
          { label: "Perungudi Debris Removal", href: "/debris-removal-perungudi" }
        ]}
      />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;