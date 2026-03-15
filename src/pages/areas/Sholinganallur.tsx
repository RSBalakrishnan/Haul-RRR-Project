import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Phone, CheckCircle, MapPin, Building } from "lucide-react";

const SholinganallurPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Debris Removal Sholinganallur Chennai | Construction Waste" 
        description="Professional debris removal in Sholinganallur, Chennai. Site clearance and demolition waste hauling for OMR residential and IT projects." 
        canonical="https://rrrtransport.in/debris-removal-sholinganallur"
        schema={{
          "@context": "https://schema.org",
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
              "name": "Sholinganallur Debris Removal",
              "item": "https://rrrtransport.in/debris-removal-sholinganallur"
            }
          ]
        }}
      />
      <Navbar />
      
      <main>
        <header className="relative pt-32 pb-20 bg-primary/5 text-center">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="font-display font-bold text-4xl md:text-6xl text-foreground mb-6">
                Debris Removal Sholinganallur
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Supporting the IT corridor with reliable construction waste management and heavy debris transport services.
              </p>
              <a href="tel:+918667611496" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-display font-bold text-lg hover:scale-105 transition-all">
                <Phone size={20} /> Request Site Quote
              </a>
            </motion.div>
          </div>
        </header>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-invert prose-lime max-w-none mb-16">
                <h2 className="text-3xl font-display font-bold text-primary">Premier Debris Removal Sholinganallur Chennai</h2>
                <p>
                  Sholinganallur is a pivotal center on the OMR, housing massive IT parks and sprawling residential townships. RRR Transport provides the necessary logistical support for these developments through expert <strong>debris removal Sholinganallur</strong>. We handle post-construction cleanup, demolition waste hauling, and rubbish removal with high efficiency.
                </p>
                <p>
                   Our <strong>construction debris removal in Sholinganallur</strong> ensures that your site operations are not hampered by waste piles. We cater specifically to the needs of civil engineering firms and interior decorators who require regular site clearances.
                </p>

                <h3 className="text-2xl mt-12 mb-4 font-display font-bold text-foreground">Why Sholinganallur Projects Choose RRR Transport</h3>
                <div className="grid md:grid-cols-2 gap-8 my-10 not-prose">
                   <div className="bg-secondary/20 p-8 rounded-2xl border border-border/50 shadow-xl">
                      <Building className="text-primary mb-4" size={32}/>
                      <h4 className="font-bold mb-2">Elite Fleet</h4>
                      <p className="text-sm text-muted-foreground">Well-maintained Tata 407 4x4 trucks suitable for both main road and site-interior transport.</p>
                   </div>
                   <div className="bg-secondary/20 p-8 rounded-2xl border border-border/50 shadow-xl">
                      <CheckCircle className="text-primary mb-4" size={32}/>
                      <h4 className="font-bold mb-2">Prompt Service</h4>
                      <p className="text-sm text-muted-foreground">Minimal turnaround time ensures construction schedules are never compromised.</p>
                   </div>
                </div>

                <h2 className="text-3xl font-display font-bold text-primary mt-16 mb-6">Demolition Waste Removal Services Sholinganallur</h2>
                <p>
                   As residential plots are being redeveloped into modern apartments in Sholinganallur, our <strong>demolition waste removal Sholinganallur</strong> services offer the most reliable path to a clean plot. We remove bricks, tiles, heavy concrete, and mixed debris effectively.
                </p>

                <h2 className="text-3xl font-display font-bold text-primary mb-6">Service Reach in Sholinganallur</h2>
                <p>
                   We cover every layout in the Sholinganallur area:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 not-prose mb-12 text-sm font-medium">
                  {["OMR Junction", "ECR Link Road", "Semmancheri Road", "Dollar Colony", "Global Hospital Area", "Classic Farms"].map((area) => (
                    <div key={area} className="p-3 bg-secondary/30 rounded-lg border border-border/50 flex items-center gap-2">
                       <MapPin size={14} className="text-primary" /> {area}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/20 p-10 rounded-3xl text-center">
                <h2 className="text-2xl font-display font-bold mb-4">Clearing Your Sholinganallur Site?</h2>
                <p className="text-muted-foreground mb-8">Professional debris hauling and site management for the ELCOT and OMR IT corridor.</p>
                <a href="tel:+918667611496" className="bg-primary text-primary-foreground px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 w-fit mx-auto transition-transform hover:scale-105">
                   <Phone size={24} /> Contact RRR: +91 86676 11496
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SholinganallurPage;
