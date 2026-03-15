import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Contact RRR Transport Chennai" 
        description="Get a free quote for debris removal, demolition waste, and sand transport in Chennai. Contact RRR Transport at +91 8667611496." 
        canonical="https://rrrtransport.in/contact"
      />
      <Navbar />
      
      <main>
        <header className="relative pt-32 pb-20 overflow-hidden text-center bg-primary/5">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
              <h1 className="font-display font-bold text-4xl md:text-6xl text-foreground mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ready to clear your site? Contact Chennai's most reliable transport partner today.
              </p>
            </motion.div>
          </div>
        </header>

        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
              <div className="space-y-12">
                <h2 className="text-3xl font-display font-bold text-foreground">Contact Details</h2>
                
                <div className="space-y-8">
                  <div className="flex gap-6 items-start group">
                    <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg mb-1">Phone Number</h3>
                      <a href="tel:+918667611496" className="text-2xl font-display font-bold text-primary hover:underline">+91 86676 11496</a>
                      <p className="text-sm text-muted-foreground mt-1">Available 24/7 for emergency bookings</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start group">
                    <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg mb-1">Service Area</h3>
                      <p className="text-lg text-foreground">Perungudi, Chennai - 600096</p>
                      <p className="text-sm text-muted-foreground mt-1">Serving 35km radius including Velachery & OMR</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start group">
                    <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg mb-1">Business Hours</h3>
                      <p className="text-lg text-foreground">Monday - Sunday</p>
                      <p className="text-lg text-foreground">Open 24 Hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-10 rounded-2xl border border-border/50 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <Clock size={120} />
                </div>
                <h2 className="text-2xl font-display font-bold mb-6 text-primary">Need an Urgent Quote?</h2>
                <p className="text-muted-foreground mb-8">
                  For the fastest response, call us directly or message us on WhatsApp with your location and debris volume details.
                </p>
                <div className="space-y-4">
                  <a href="tel:+918667611496" className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-primary/20 transition-all">
                    <Phone size={20} /> Call Now
                  </a>
                  <a href="https://wa.me/918667611496" target="_blank" className="flex items-center justify-center gap-2 w-full bg-emerald-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-emerald-600 transition-all">
                    WhatsApp Message
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/20 border-t border-border/50">
          <div className="container mx-auto px-4 text-center">
             <h2 className="text-2xl font-display font-bold mb-6">Serving Major Locations</h2>
             <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
                <span>Velachery</span>
                <span>Perungudi</span>
                <span>Adyar</span>
                <span>Medavakkam</span>
                <span>Tambaram</span>
                <span>OMR Road</span>
             </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
