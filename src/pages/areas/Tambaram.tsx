import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import InternalLinks from "@/components/InternalLinks";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Phone, CheckCircle, MapPin, Truck } from "lucide-react";

const TambaramPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Debris Removal Tambaram Chennai | Site Cleanup Services" 
        description="Top-rated debris removal in Tambaram, Chennai. Professional construction waste transport and demolition site clearance using 4x4 Tata 407 trucks." 
        canonical="https://rajamanitransport.in/debris-removal-tambaram"
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
              "name": "Tambaram Debris Removal",
              "item": "https://rajamanitransport.in/debris-removal-tambaram"
            }
          ]
        }}
      />
      <Navbar />
      
      <main>
        <header className="relative pt-32 pb-20 bg-primary/5 text-center">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="font-display font-bold text-4xl md:text-6xl text-foreground mb-6">
                Debris Removal Services in Tambaram
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Gateway to South Chennai's best construction logistics and debris transport services for Tambaram.
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
                <h2 className="text-3xl font-display font-bold text-primary">Expert Debris Removal Tambaram Chennai</h2>
                <p>
                  Tambaram, known as the gateway to Chennai, is a major residential and commercial center with unique logistical requirements. Rajamani Transport specializes in <strong>debris removal Tambaram</strong>, serving both West and East Tambaram regions. Our team helps maintain sites clean by hauling away masonry waste, rubble, and general construction scrap.
                </p>
                <p>
                  Finding <strong>construction debris removal in Tambaram</strong> can be challenging due to the heavy traffic on the GST road. However, we cleverly schedule our site clearances to ensure your waste is removed during the most optimal hours using our compact Tata 407 fleet.
                </p>

                <h3 className="text-2xl mt-12 mb-4 font-display font-bold text-foreground">Specialized Tambaram Demolition Support</h3>
                <p>
                   As old properties make way for new commercial complexes near the Tambaram station and surrounding areas, our <strong>demolition waste removal Tambaram</strong> services provide the heavy-duty support you need. We specialize in bulk waste transport, especially for demolition rubble that needs urgent site clearance.
                </p>

                <div className="bg-secondary/20 p-8 rounded-2xl border border-border/50 my-10 flex flex-col md:flex-row gap-8 items-center not-prose">
                   <div className="bg-primary/20 p-4 rounded-full text-primary">
                     <Truck size={48} />
                   </div>
                   <div>
                     <h4 className="text-xl font-bold mb-2">4x4 Tata 407 Fleet</h4>
                     <p className="text-muted-foreground">Our trucks are designed for high stability, making them ideal for unstable or muddy ground conditions often found in the outskirts of Tambaram.</p>
                   </div>
                </div>

                <h2 className="text-3xl font-display font-bold text-primary mb-6">Comprehensive Local Service in Tambaram</h2>
                <p>
                   We cover all major neighborhoods in the Tambaram zone:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 not-prose mb-12 text-sm font-medium">
                  {["East Tambaram", "West Tambaram", "Selaiyur Road", "Mudichur Road", "Kaduberi", "Poondi"].map((area) => (
                    <div key={area} className="p-3 bg-secondary/30 rounded-lg border border-border/50 flex items-center gap-2">
                       <MapPin size={14} className="text-primary" /> {area}
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-display font-bold text-foreground mb-4">Call for Rapid Quote</h3>
                <p>
                  If you are looking for <strong>debris removal Chennai Tambaram</strong>, look no further. Contact us for standardized pricing and a team that values your project deadlines as much as you do.
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/20 p-10 rounded-3xl text-center">
                <h2 className="text-2xl font-display font-bold mb-4">Need a Site Cleanup in Tambaram?</h2>
                <p className="text-muted-foreground mb-8">Professional debris transport serving South Chennai's major hub 24/7.</p>
                <a href="tel:+918667611496" className="bg-primary text-primary-foreground px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 w-fit mx-auto transition-transform hover:scale-105">
                   <Phone size={24} /> Get Quote: +91 86676 11496
                </a>
              </div>
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
          { label: "Medavakkam Debris Removal", href: "/debris-removal-medavakkam" },
          { label: "Sholinganallur Debris Removal", href: "/debris-removal-sholinganallur" }
        ]}
      />
      <Footer />
    </div>
  );
};

export default TambaramPage;
