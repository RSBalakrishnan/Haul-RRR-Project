import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import InternalLinks from "@/components/InternalLinks";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Phone, CheckCircle2, ChevronRight, HardHat } from "lucide-react";

const DemolitionWastePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Demolition Waste Removal Chennai" 
        description="Professional demolition waste removal services in Chennai. We handle building debris, concrete rubble, and site clearance using specialized Tata 407 trucks." 
        canonical="https://rrrtransport.in/demolition-waste-removal-chennai"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "serviceType": "Demolition Waste Removal",
              "provider": {
                "@type": "LocalBusiness",
                "name": "RRR Transport"
              },
              "areaServed": "Chennai",
              "description": "Efficient removal and transport of building demolition waste and rubble."
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://rrrtransport.in/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Demolition Waste Removal",
                  "item": "https://rrrtransport.in/demolition-waste-removal-chennai"
                }
              ]
            }
          ]
        }}
      />
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-10" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="font-display font-bold text-4xl md:text-6xl text-foreground mb-6">
                Demolition Waste Removal Chennai
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Sustainable and efficient demolition waste management solutions for residential and commercial projects across Chennai.
              </p>
              <div className="flex justify-center gap-4">
                <a href="tel:+918667611496" className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-display font-bold text-lg flex items-center gap-2">
                  <Phone size={20} /> Call for Quote
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-20 bg-card/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-invert prose-lime">
              <h2 className="text-3xl font-display font-bold text-primary mb-6">Reliable Building Demolition Waste Removal in Chennai</h2>
              <p>
                Handling <strong>demolition waste removal Chennai</strong> requires specialized equipment and professional expertise. At RRR Transport, we provide end-to-end site clearance services, ensuring that your demolition debris is removed promptly and ethical disposal standards are met. We specialize in handling concrete, steel scrap, wood, and masonry debris from small-to-medium residential demolition sites.
              </p>

              <h3 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Our Tata 407 Demolition Fleet</h3>
              <p>
                Our fleet of Tata 407 trucks is specifically maintained for heavy-duty <strong>construction debris transport Chennai</strong>. These vehicles offer the perfect balance of load capacity and maneuverability, allowing us to enter narrow residential lanes in areas like Velachery and Adyar where larger lorries cannot reach.
              </p>

              <div className="bg-secondary/30 p-8 rounded-2xl my-12 border border-border/50">
                <h4 className="flex items-center gap-2 text-xl font-bold mb-4"><HardHat className="text-primary" /> Safety & Environment</h4>
                <p className="text-muted-foreground">We prioritize safety during all site visits. Our team ensures that demolition waste is loaded securely and transported without spillage, maintaining the cleanliness of your neighborhood.</p>
              </div>

              <h2 className="text-3xl font-display font-bold text-primary mb-6">Service Areas in Chennai</h2>
              <p>Based in Perungudi, we provide rapid response demolition waste removal in:</p>
              <ul className="grid grid-cols-2 gap-4 list-none p-0">
                {["Velachery", "Madipakkam", "Thiruvanmiyur", "Ecr Road", "Omr Road", "Guindy"].map(area => (
                  <li key={area} className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-primary" /> {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <InternalLinks 
        services={[
          { label: "Debris Removal Chennai", href: "/debris-removal-chennai" },
          { label: "Construction Debris Removal Chennai", href: "/construction-debris-removal-chennai" }
        ]}
        locations={[
          { label: "Thoraipakkam Debris Removal", href: "/debris-removal-thoraipakkam" },
          { label: "Sholinganallur Debris Removal", href: "/debris-removal-sholinganallur" }
        ]}
      />
      <Footer />
    </div>
  );
};

export default DemolitionWastePage;
