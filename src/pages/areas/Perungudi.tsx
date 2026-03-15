import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Phone, CheckCircle, MapPin, HardHat } from "lucide-react";

const PerungudiPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Debris Removal Perungudi Chennai | Site Clearance" 
        description="Reliable debris removal services in Perungudi, Chennai. Construction waste hauling and building demolition rubbish removal for OMR projects." 
        canonical="https://rrrtransport.in/debris-removal-perungudi"
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
              "name": "Perungudi Debris Removal",
              "item": "https://rrrtransport.in/debris-removal-perungudi"
            }
          ]
        }}
      />
      <Navbar />
      
      <main>
        <header className="relative pt-32 pb-20 overflow-hidden bg-primary/5">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
              <h1 className="font-display font-bold text-4xl md:text-6xl text-foreground mb-6">
                Debris Removal in Perungudi, OMR
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Specialized debris transport and demolition waste management for the IT hubs and residential layouts of Perungudi.
              </p>
              <a href="tel:+918667611496" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-display font-bold text-lg hover:scale-105 transition-all">
                <Phone size={20} /> Call Now: +91 8667611496
              </a>
            </motion.div>
          </div>
        </header>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-invert prose-lime max-w-none mb-16">
                <h2 className="text-3xl font-display font-bold text-primary">Primary Debris Removal Perungudi</h2>
                <p>
                  As Perungudi continues to grow as a major tech and residential destination on the OMR, the demand for efficient site management has never been higher. RRR Transport is proud to be the leading provider of <strong>debris removal Perungudi</strong>, helping builders keep their construction sites pristine and compliant with environmental standards.
                </p>
                <p>
                  Our base in Perungudi allows us to provide the fastest response times for <strong>construction debris removal Perungudi</strong>. We understand the specific logistical needs of the OMR corridor, where timely site clearance is essential to avoid blocking secondary access roads.
                </p>

                <h3 className="text-2xl mt-12 mb-4 font-display font-bold text-foreground">Why Perungudi Builders Trust Us</h3>
                <p>
                  The industrial and rapid growth of the OMR requires a transport partner who is both reliable and well-equipped. We offer a distinctive advantage for Perungudi projects:
                </p>
                <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
                  <div className="p-6 bg-secondary/20 rounded-xl border border-border/50">
                    <h4 className="font-bold mb-2 flex items-center gap-2 text-primary"><CheckCircle size={18} /> Fast Mobilization</h4>
                    <p className="text-sm text-muted-foreground">Local presence means we can deploy trucks within hours of your call.</p>
                  </div>
                  <div className="p-6 bg-secondary/20 rounded-xl border border-border/50">
                    <h4 className="font-bold mb-2 flex items-center gap-2 text-primary"><HardHat size={18} /> Industrial Capacity</h4>
                    <p className="text-sm text-muted-foreground">Handling everything from office interior waste to large-scale site rubble.</p>
                  </div>
                </div>

                <h2 className="text-3xl font-display font-bold text-primary mt-16 mb-6">Demolition Waste Removal Services Perungudi</h2>
                <p>
                  Whether you are renovating an old IT office or clearing a residential plot, our <strong>demolition waste removal Perungudi</strong> services are tailored to your needs. We move concrete, broken tiles, timber scrap, and heavy soil using our versatile Tata 407 vehicles.
                </p>

                <h2 className="text-3xl font-display font-bold text-primary mb-6">Serving the Entire OMR Region</h2>
                <p>
                  From the Perungudi toll to Kandanchavadi, we cover every corner:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 not-prose mb-12">
                  {["Kandanchavadi", "Tidal Park Area", "Kottivakkam Road", "Kallukuttai", "MGR Road", "Industrial Estate"].map((area) => (
                    <div key={area} className="flex items-center gap-2 p-3 bg-secondary/30 rounded-lg border border-border/50 text-sm font-medium">
                      <MapPin size={14} className="text-primary" /> {area}
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-display font-bold text-foreground mb-4">Get the Best Quotes Today</h3>
                <p>
                  Experience the most efficient <strong>debris removal Chennai Perungudi</strong>. Reach out to RRR Transport for a site evaluation and a competitive quote that fits your project budget.
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/20 p-10 rounded-3xl text-center">
                <h2 className="text-2xl font-display font-bold mb-4">Need Rapid Clearance in Perungudi?</h2>
                <p className="text-muted-foreground mb-8">Serving the IT Corridor 24/7 with dedicated construction transport.</p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <a href="tel:+918667611496" className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-transform hover:scale-105">
                    <Phone size={20} /> Call +91 86676 11496
                  </a>
                  <a href="/debris-removal-chennai" className="bg-card text-foreground border border-border/50 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-transform hover:scale-105">
                    Main Service Page
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PerungudiPage;
