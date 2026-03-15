import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Phone, Mountain, Droplets, CheckCircle } from "lucide-react";

const SandTransportPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="M Sand & P Sand Transport Chennai | Quality Sand Delivery" 
        description="Premium M-Sand and P-Sand delivery in Chennai. We transport high-quality manufactured sand for concrete and plastering directly to your site." 
        canonical="https://rrrtransport.in/m-sand-p-sand-transport-chennai"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "serviceType": "M Sand & P Sand Transport",
              "provider": {
                "@type": "LocalBusiness",
                "name": "RRR Transport"
              },
              "areaServed": "Chennai",
              "description": "High-quality M-Sand and P-Sand delivery services across Chennai."
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
                  "name": "Sand Transport",
                  "item": "https://rrrtransport.in/m-sand-p-sand-transport-chennai"
                }
              ]
            }
          ]
        }}
      />
      <Navbar />
      
      <main>
        <section className="pt-32 pb-20 text-center">
           <h1 className="font-display font-bold text-4xl md:text-6xl text-foreground mb-6">
              M Sand & P Sand Transport Chennai
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto px-4">
              High-quality M-Sand and P-Sand delivery services at your doorstep within Chennai city limits.
            </p>
        </section>

        <section className="py-20 bg-card/5">
          <div className="container mx-auto px-4 max-w-3xl prose prose-invert prose-lime">
            <h2 className="text-3xl font-display font-bold text-primary mb-6">M Sand Transport Chennai - Quality Guaranteed</h2>
            <p>
              Finding the right <strong>M Sand transport Chennai</strong> partner is crucial for the structural integrity of your building. RRR Transport supplies and delivers premium M-Sand for concrete work and P-Sand for plastering. We source directly from crushed stone units to ensure purity and quality.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12 not-prose">
              <div className="p-8 glass-panel border-primary/20">
                <Mountain className="text-primary mb-4" size={40} />
                <h3 className="text-xl font-bold mb-2">M-Sand (Manufactured)</h3>
                <p className="text-sm text-muted-foreground">Perfect for concrete work, providing better strength and workability.</p>
              </div>
              <div className="p-8 glass-panel border-primary/20">
                <Droplets className="text-primary mb-4" size={40} />
                <h3 className="text-xl font-bold mb-2">P-Sand (Plastering)</h3>
                <p className="text-sm text-muted-foreground">Ultra-fine sand for smooth and durable wall plastering.</p>
              </div>
            </div>

            <h3 className="text-2xl font-display font-bold text-foreground">Reliable delivery to:</h3>
            <p>Medavakkam, Sholinganallur, Karapakkam, and Thoraipakkam.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SandTransportPage;
