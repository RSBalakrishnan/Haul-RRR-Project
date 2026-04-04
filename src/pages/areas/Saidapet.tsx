import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import InternalLinks from "@/components/InternalLinks";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Phone, CheckCircle, MapPin, Truck } from "lucide-react";

const SaidapetPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Debris Removal Saidapet Chennai | Site Clearance Services" 
        description="Professional debris removal in Saidapet, Chennai. Reliable construction waste transport and demolition site clearance using Tata 407 trucks." 
        canonical="https://rajamanitransport.in/debris-removal-saidapet"
        schema={{
          "@context": "https://schema.org",
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
              "name": "Saidapet Debris Removal",
              "item": "https://rajamanitransport.in/debris-removal-saidapet"
            }
          ]
        }}
      />
      <Navbar />
      
      <main>
        <header className="relative pt-32 pb-20 overflow-hidden bg-primary/5">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="font-display font-bold text-4xl md:text-6xl text-foreground mb-6 text-balance">
                Debris Removal Services in Saidapet
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Expert construction waste management and debris transport for residential and commercial projects in Saidapet.
              </p>
              <a href="tel:+918667611496" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-display font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-primary/20">
                <Phone size={20} /> Call Now: +91 8667611496
              </a>
            </motion.div>
          </div>
        </header>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-invert prose-lime max-w-none mb-16">
                <h2 className="text-3xl font-display font-bold text-primary">Trusted Debris Removal Chennai Saidapet</h2>
                <p>
                  Saidapet is one of the busiest commercial and residential hubs in Chennai, with constant construction and renovation activity. At Rajamani Transport, we specialize in <strong>debris removal Saidapet</strong>, providing a seamless solution for builders and homeowners who need their sites cleared of rubble, masonry, and waste material.
                </p>
                <p>
                  Managing <strong>construction debris removal in Saidapet</strong> requires a partner who understands the local landscape—from the narrow lanes of Dhandeeswaram to the main roads of Phoenix Market City area. Our Tata 407 fleet is perfectly sized to navigate these streets without causing traffic disruptions.
                </p>

                <h3 className="text-2xl mt-12 mb-4 font-display font-bold text-foreground">Our Site Clearance Process in Saidapet</h3>
                <p>
                  We follow a systematic approach to ensure your site is left clean and safe. Whether it's post-demolition cleanup or routine construction waste hauling, we prioritize efficiency:
                </p>
                <ul>
                  <li><strong>Prompt Loading:</strong> Our team assists in the efficient loading of debris to minimize site downtime.</li>
                  <li><strong>Secure Transport:</strong> Using our 4x4 Tata 407 trucks, we ensure waste is transported safely without road spillages.</li>
                  <li><strong>Ethical Disposal:</strong> We dispose of waste at authorized municipal locations across Chennai.</li>
                </ul>

                <h2 className="text-3xl font-display font-bold text-primary mt-16 mb-6">Demolition Waste Removal Saidapet</h2>
                <p>
                  Saidapet's urban density means that demolition projects must be handled with extreme care. Our <strong>demolition waste removal Saidapet</strong> services are designed for safety and speed. We handle concrete blocks, bricks, steel scrap, and tile waste from old building demolitions.
                </p>
                <p>
                  Construction professionals in Saidapet rely on Rajamani Transport because we offer fixed-rate pricing and 24/7 availability. We know that in a fast-paced construction environment, delays in debris removal can stall an entire project.
                </p>

                <div className="bg-card p-8 rounded-2xl border border-border/50 my-12 relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary"><Truck size={24} /> Tata 407: The Perfect Choice for Saidapet</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Commercial trucks are often restricted in certain residential zones of Saidapet during peak hours. However, the Tata 407's compact footprint allows us more flexibility, ensuring we can reach your site when you need us most.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-display font-bold text-primary mb-6">Serving All Parts of Saidapet</h2>
                <p>
                  We provide comprehensive coverage across the entire Saidapet suburb, including:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 not-prose mb-12">
                  {["Dhandeeswaram Nagar", "Madipakkam Road", "Taramani Road", "Vijayanagar Bus Stand", "IIT Colony", "Bhuvaneshwari Nagar"].map((area) => (
                    <div key={area} className="flex items-center gap-2 p-3 bg-secondary/30 rounded-lg border border-border/50 text-sm font-medium">
                      <MapPin size={14} className="text-primary" /> {area}
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-display font-bold text-foreground mb-4">Contact for Best Debris Removal Prices</h3>
                <p>
                  Don't let debris clutter your valuable space. For the most affordable <strong>debris removal Chennai Saidapet</strong> price, call Rajamani Transport today. We offer quotes based on the number of loads or total volume, ensuring transparency in every job.
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/20 p-10 rounded-3xl text-center">
                <h2 className="text-2xl font-display font-bold mb-4">Ready to Clear Your Saidapet Site?</h2>
                <p className="text-muted-foreground mb-8">Available 24/7 for urgent site inspections and debris hauling.</p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <a href="tel:+918667611496" className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-transform hover:scale-105">
                    <Phone size={20} /> Call +91 86676 11496
                  </a>
                  <a href="/debris-removal-chennai" className="liquid-glass nm-flat text-foreground border border-border/50 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-transform hover:scale-105">
                    Main Service Page
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <InternalLinks 
        services={[
          { label: "Debris Removal Chennai", href: "/debris-removal-chennai" },
          { label: "Demolition Waste Removal Chennai", href: "/demolition-waste-removal-chennai" }
        ]}
        locations={[
          { label: "Perungudi Debris Removal", href: "/debris-removal-perungudi" },
          { label: "Medavakkam Debris Removal", href: "/debris-removal-medavakkam" }
        ]}
      />
      <Footer />
    </div>
  );
};

export default SaidapetPage;
