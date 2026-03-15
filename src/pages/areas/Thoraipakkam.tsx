import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Phone, CheckCircle, MapPin, Building2 } from "lucide-react";

const ThoraipakkamPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Debris Removal Thoraipakkam Chennai | Site Clearance" 
        description="Professional construction debris removal in Thoraipakkam, OMR. Expert demolition waste transport and rubbish removal services. Call +91 8667611496." 
        canonical="https://rrrtransport.in/debris-removal-thoraipakkam"
      />
      <Navbar />
      
      <main>
        <header className="relative pt-32 pb-20 bg-primary/5 text-center">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}>
              <h1 className="font-display font-bold text-4xl md:text-6xl text-foreground mb-6">
                Debris Removal in Thoraipakkam
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Dedicated debris transport and commercial site clearance serving the vibrant OMR corridor at Thoraipakkam.
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
                <h2 className="text-3xl font-display font-bold text-primary">Efficient Debris Removal Thoraipakkam OMR</h2>
                <p>
                   Thoraipakkam is the heartbeat of the IT corridor on Old Mahabalipuram Road (OMR). RRR Transport provides high-performance <strong>debris removal Thoraipakkam</strong> services for both corporate office renovations and large residential complexes. We ensure your construction site stays clutter-free, reducing safety risks and improving operational flow.
                </p>
                <p>
                   Our <strong>construction debris removal in Thoraipakkam</strong> is tailored for the high-density urban environment of the OMR. We specialize in same-day site clearance for interior fit-out projects and building expansions.
                </p>

                <div className="grid md:grid-cols-2 gap-8 my-12 not-prose">
                   <div className="bg-secondary/20 p-8 rounded-2xl border border-border/50">
                      <Building2 className="text-primary mb-4" size={32}/>
                      <h4 className="font-bold mb-2">Commercial Focus</h4>
                      <p className="text-sm text-muted-foreground text-balance">Specialized in office renovation waste and interior debris hauling for OMR IT parks.</p>
                   </div>
                   <div className="bg-secondary/20 p-8 rounded-2xl border border-border/50">
                      <CheckCircle className="text-primary mb-4" size={32}/>
                      <h4 className="font-bold mb-2">Compliant Disposal</h4>
                      <p className="text-sm text-muted-foreground text-balance">Ensuring all debris is disposed of at authorized Chennai corporation sites.</p>
                   </div>
                </div>

                <h2 className="text-3xl font-display font-bold text-primary mt-16 mb-6">Demolition Waste Transport Thoraipakkam</h2>
                <p>
                   Large building sites in Thoraipakkam often produce massive volumes of concrete and masonry waste. Our <strong>demolition waste removal Thoraipakkam</strong> services are equipped with Tata 407 4x4 trucks that can handle heavy loads while maintaining excellent site accessibility.
                </p>

                <h2 className="text-3xl font-display font-bold text-primary mb-6">Serving Thoraipakkam & Beyond</h2>
                <p>
                   Our service area includes all major layouts around Thoraipakkam:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 not-prose mb-12 text-sm font-medium">
                  {["Kandanchavadi Road", "MCN Nagar", "OMR Toll Area", "Okkiyam Thoraipakkam", "Rajiv Gandhi Salai", "CTP Layout"].map((area) => (
                    <div key={area} className="p-3 bg-secondary/30 rounded-lg border border-border/50 flex items-center gap-2">
                       <MapPin size={14} className="text-primary" /> {area}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/20 p-10 rounded-3xl text-center">
                <h2 className="text-2xl font-display font-bold mb-4">Clearing Your Site in Thoraipakkam?</h2>
                <p className="text-muted-foreground mb-8">Professional transport partner for OMR's construction and renovation needs.</p>
                <a href="tel:+918667611496" className="bg-primary text-primary-foreground px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 w-fit mx-auto transition-transform hover:scale-105">
                   <Phone size={24} /> Call +91 86676 11496
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

export default ThoraipakkamPage;
