import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import InternalLinks from "@/components/InternalLinks";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Phone, CheckCircle2, ChevronRight } from "lucide-react";

const DebrisRemovalPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Professional Debris Removal Chennai" 
        description="Reliable debris removal in Chennai handling construction waste, demolition rubble, and site clearance with Tata 407 trucks." 
        canonical="https://rajamanitransport.in/debris-removal-chennai"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "serviceType": "Debris Removal",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Rajamani Transport"
              },
              "areaServed": "Chennai",
              "description": "Professional removal of construction and demolition debris using Tata 407 trucks."
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://rajamanitransport.in/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Debris Removal Chennai",
                  "item": "https://rajamanitransport.in/debris-removal-chennai"
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
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="font-display font-bold text-4xl md:text-6xl text-foreground mb-6">
                Professional Debris Removal Chennai
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Reliable construction debris and demolition waste removal services across Chennai using our dedicated Tata 407 4x4 fleet.
              </p>
              <a
                href="tel:+918667611496"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-display font-bold text-lg hover:scale-105 transition-transform"
              >
                <Phone size={20} />
                Call Now: +91 8667611496
              </a>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-invert prose-lime">
              <h2 className="text-3xl font-display font-bold text-primary mb-6">Expert Construction Debris Removal in Chennai</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Are you looking for reliable <strong>debris removal Chennai</strong> services? Rajamani Transport is your trusted partner for all construction waste management needs. Managing a construction site is complex, and the accumulation of debris can lead to delays and safety hazards. Our specialized <strong>construction debris removal Chennai</strong> solutions are designed to keep your project moving smoothly.
              </p>

              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Why Choose Rajamani Transport for Demolition Waste?</h3>
              <p className="mb-6">
                We understand the unique challenges of waste disposal in an urban environment like Chennai. Our <strong>demolition waste removal Chennai</strong> services utilize our versatile Tata 407 trucks, which are perfectly sized to navigate tight Chennai streets while carrying heavy loads of debris, bricks, concrete, and soil.
              </p>
              
              <ul className="grid md:grid-cols-2 gap-4 mb-10 list-none p-0">
                {[
                  "Prompt Site Clearance",
                  "Standardized Pricing",
                  "Eco-friendly Disposal",
                  "Tata 407 4x4 Reliability",
                  "Covering Velachery & Perungudi",
                  "Priority Commercial Service"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-muted-foreground bg-background/50 p-3 rounded-lg border border-border/50">
                    <CheckCircle2 size={18} className="text-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-display font-bold text-primary mb-6">Our Comprehensive Waste Removal Services</h2>
              <p className="mb-6">
                Whether it's a small home renovation or a large-scale building demolition, Rajamani Transport provides tailored solutions for:
              </p>
              <div className="space-y-6 mb-12">
                <div className="liquid-glass nm-flat p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-foreground mb-2">Construction Waste Transport</h4>
                  <p className="text-muted-foreground">Prompt removal of tiles, concrete blocks, plaster, and other masonry materials directly from your site to authorized disposal areas.</p>
                </div>
                <div className="liquid-glass nm-flat p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-foreground mb-2">Rubbish & Scrap Removal</h4>
                  <p className="text-muted-foreground">Efficient clearing of general renovation rubbish and construction scrap that clutters your valuable site space.</p>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-primary mb-6">Service Area Coverage</h2>
              <p className="mb-6">
                Based in Perungudi, we serve a wide region within a 35km radius, including major hubs like:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                {["Velachery", "Perungudi", "Tambaram", "Medavakkam", "Sholinganallur", "Adyar"].map((area) => (
                  <div key={area} className="flex items-center gap-2 font-medium text-foreground">
                    <ChevronRight size={16} className="text-primary" />
                    {area}
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Contact Us Today</h3>
              <p className="mb-8">
                Don't let debris slow down your progress. For the best <strong>debris removal Chennai</strong> has to offer, call Rajamani Transport today. We provide quick quotes and reliable service using our Tata 407 trucks.
              </p>
              
              <div className="bg-primary/10 border border-primary/20 p-8 rounded-2xl text-center">
                <h4 className="text-2xl font-display font-bold text-foreground mb-2">Get a Free Quote</h4>
                <p className="text-muted-foreground mb-6">Available 24/7 for urgent site clearances.</p>
                <a
                  href="tel:+918667611496"
                  className="font-display font-bold text-3xl text-primary hover:underline"
                >
                  +91 8667611496
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <InternalLinks 
        services={[
          { label: "Construction Debris Removal Chennai", href: "/construction-debris-removal-chennai" },
          { label: "Tata 407 Transport Chennai", href: "/tata-407-transport-chennai" }
        ]}
        locations={[
          { label: "Medavakkam Debris Removal", href: "/debris-removal-medavakkam" },
          { label: "Tambaram Debris Removal", href: "/debris-removal-tambaram" }
        ]}
      />
      <Footer />
    </div>
  );
};

export default DebrisRemovalPage;
