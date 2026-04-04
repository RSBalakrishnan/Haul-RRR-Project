import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import InternalLinks from "@/components/InternalLinks";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";

const ConstructionDebrisPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Construction Debris Removal Chennai" 
        description="Fast and reliable construction debris removal in Chennai. We handle site clearance, waste transport, and rubbish removal using Tata 407 trucks." 
        canonical="https://rajamanitransport.in/construction-debris-removal-chennai"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "serviceType": "Construction Debris Removal",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Rajamani Transport"
              },
              "areaServed": "Chennai",
              "description": "Specialized site clearance and construction waste transport for builders and homeowners."
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
                  "name": "Construction Debris Removal",
                  "item": "https://rajamanitransport.in/construction-debris-removal-chennai"
                }
              ]
            }
          ]
        }}
      />
      <Navbar />
      
      <main>
        <header className="relative pt-32 pb-20 overflow-hidden bg-primary/5">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
              <h1 className="font-display font-bold text-4xl md:text-6xl text-foreground mb-6">
                Construction Debris Removal Chennai
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Specialized site clearance and construction waste transport for builders and homeowners across Chennai.
              </p>
              <a href="tel:+918667611496" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-display font-bold text-lg hover:scale-105 transition-transform">
                <Phone size={20} /> Call Now: +91 8667611496
              </a>
            </motion.div>
          </div>
        </header>

        <section className="py-20 border-t border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-primary mb-8">Professional Site Clearance & Waste Transport</h2>
              <div className="prose prose-invert prose-lime mb-12">
                <p>
                  As one of the leading providers of <strong>construction debris removal Chennai</strong>, Rajamani Transport understands the importance of maintaining a clean and safe work environment. Our dedicated team ensures that your project site is cleared of all rubble, masonry, and waste materials promptly, allowing your crew to stay focused on building.
                </p>
                <p>
                  Whether you are working on a small renovation or a large-scale housing project, we offer flexible scheduling to match your project milestones.
                </p>
              </div>

              <h2 className="text-3xl font-display font-bold text-foreground mb-8">Why Use Tata 407 for Construction Waste?</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-card p-6 rounded-xl border border-border/50">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-primary"><CheckCircle size={18} /> High Payload</h3>
                  <p className="text-muted-foreground">Our 4x4 trucks handle heavy concrete debris and soil with ease.</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border/50">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-primary"><CheckCircle size={18} /> Narrow Access</h3>
                  <p className="text-muted-foreground">The compact size of the Tata 407 allows us to enter tight construction sites.</p>
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-primary mb-8">Our Construction Logistics Services</h2>
              <ul className="space-y-4 mb-12">
                {[
                  "Bulk Debris Transport",
                  "Site Cleaning & Junk Removal",
                  "Scrap Material Hauling",
                  "Brick & Sand Logistics"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-lg text-muted-foreground">
                    <ArrowRight className="text-primary" size={20} />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-primary/10 p-8 rounded-2xl border border-primary/20 text-center">
                <h2 className="text-2xl font-display font-bold mb-4">Request Your Site Inspection</h2>
                <p className="mb-6 text-muted-foreground">Contact us for a competitive quote based on your waste volume.</p>
                <a href="tel:+918667611496" className="text-3xl font-display font-bold text-primary hover:underline">+91 8667611496</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-display font-bold mb-8">Explore Other Services</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/demolition-waste-removal-chennai" className="text-muted-foreground hover:text-primary underline">Demolition Removal</a>
              <a href="/debris-removal-chennai" className="text-muted-foreground hover:text-primary underline">General Debris</a>
              <a href="/m-sand-p-sand-transport-chennai" className="text-muted-foreground hover:text-primary underline">Sand Delivery</a>
            </div>
          </div>
        </section>
      </main>

      <InternalLinks 
        services={[
          { label: "Demolition Waste Removal Chennai", href: "/demolition-waste-removal-chennai" },
          { label: "Tata 407 Transport Chennai", href: "/tata-407-transport-chennai" }
        ]}
        locations={[
          { label: "Velachery Debris Removal", href: "/debris-removal-velachery" },
          { label: "Tambaram Debris Removal", href: "/debris-removal-tambaram" }
        ]}
      />
      <Footer />
    </div>
  );
};

export default ConstructionDebrisPage;
