import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import InternalLinks from "@/components/InternalLinks";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Phone, CheckCircle, MapPin, Clock } from "lucide-react";

const MedavakkamPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Debris Removal Medavakkam Chennai | Site Clearance" 
        description="Professional debris removal services in Medavakkam, Chennai. Fast construction waste hauling and site clearance using Tata 407 trucks. Call +91 8667611496." 
        canonical="https://rajamanitransport.in/debris-removal-medavakkam"
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
              "name": "Medavakkam Debris Removal",
              "item": "https://rajamanitransport.in/debris-removal-medavakkam"
            }
          ]
        }}
      />
      <Navbar />
      
      <main>
        <header className="relative pt-32 pb-20 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="font-display font-bold text-4xl md:text-6xl text-foreground mb-6">
                Debris Removal Services Medavakkam
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Reliable and affordable debris transport solutions for residential and apartment construction in Medavakkam.
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
                <h2 className="text-3xl font-display font-bold text-primary">Local Debris Removal Medavakkam Experts</h2>
                <p>
                  Medavakkam is experiencing a surge in residential developments, making it one of the fastest-growing suburbs in Chennai. Rajamani Transport provides essential <strong>debris removal Medavakkam</strong> services to support this growth. We help property owners and civil contractors clear their sites of unwanted construction debris, ensuring work stays on schedule.
                </p>
                <p>
                  Our specialized <strong>construction debris removal in Medavakkam</strong> covers everything from rubble to waste soil. We understand that apartment builders need high-frequency removal to keep narrow site entrances clear for material deliveries.
                </p>

                <h3 className="text-2xl mt-12 mb-4 font-display font-bold text-foreground">Service Highlights for Medavakkam</h3>
                <p>
                  When you choose Rajamani Transport for your Medavakkam project, you get premium service backed by local knowledge:
                </p>
                <ul className="grid md:grid-cols-2 gap-4 list-none p-0 not-prose flex-wrap">
                   <li className="flex items-center gap-2 bg-secondary/20 p-4 rounded-xl border border-border/50"><Clock size={16} className="text-primary"/> Same-day Site Clearance</li>
                   <li className="flex items-center gap-2 bg-secondary/20 p-4 rounded-xl border border-border/50"><CheckCircle size={16} className="text-primary"/> Fixed Transparent Pricing</li>
                   <li className="flex items-center gap-2 bg-secondary/20 p-4 rounded-xl border border-border/50"><MapPin size={16} className="text-primary"/> Covering Entire Suburban Medavakkam</li>
                   <li className="flex items-center gap-2 bg-secondary/20 p-4 rounded-xl border border-border/50"><CheckCircle size={16} className="text-primary"/> Eco-Friendly Disposal</li>
                </ul>

                <h2 className="text-3xl font-display font-bold text-primary mt-16 mb-6">Professional Demolition Waste Removal Medavakkam</h2>
                <p>
                   Old residential structures are frequently being demolished in Medavakkam to make way for modern flats. Our <strong>demolition waste removal Medavakkam</strong> team uses 4x4 Tata 407 trucks to haul away building waste efficiently. From brick rubble to concrete slabs, we handle the heavy lifting so you don't have to.
                </p>

                <h2 className="text-3xl font-display font-bold text-primary mb-6">Extensive Medavakkam Coverage</h2>
                <p>
                  We serve all major localities within and around Medavakkam:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 not-prose mb-12 text-sm font-medium">
                  {["Sithalapakkam Road", "Babu Nagar", "Jalladianpet Road", "Sai Ganesh Nagar", "United Colony", "Pallikaranai Cut"].map((area) => (
                    <div key={area} className="p-3 bg-secondary/30 rounded-lg border border-border/50 flex items-center gap-2">
                      <MapPin size={14} className="text-primary" /> {area}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/20 p-10 rounded-3xl text-center">
                <h2 className="text-2xl font-display font-bold mb-4">Get Your Construction Waste Cleared Today</h2>
                <p className="text-muted-foreground mb-8">Serving Medavakkam builders with reliable Tata 407 logistics.</p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <a href="tel:+918667611496" className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-transform hover:scale-105">
                    <Phone size={20} /> Call Now
                  </a>
                  <a href="/debris-removal-chennai" className="bg-card text-foreground border border-border/50 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-transform hover:scale-105">
                    Explore Services
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
          { label: "Tambaram Debris Removal", href: "/debris-removal-tambaram" },
          { label: "Velachery Debris Removal", href: "/debris-removal-velachery" }
        ]}
      />
      <Footer />
    </div>
  );
};

export default MedavakkamPage;
