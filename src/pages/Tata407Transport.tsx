import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Truck, ShieldCheck, MapPin } from "lucide-react";

const Tata407TransportPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="font-display font-bold text-4xl md:text-6xl text-foreground mb-6">
              Tata 407 Transport Chennai
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Versatile 4x4 Tata 407 trucks for all your heavy-duty construction and material transport needs in Chennai.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-invert prose-lime">
              <h2 className="text-3xl font-display font-bold text-primary mb-6">Preferred Tata 407 Rental for Construction Logistics</h2>
              <p>
                The Tata 407 is the backbone of Chennai's construction logistics. At RRR Transport, we provide dedicated <strong>Tata 407 transport Chennai</strong> services for various materials, including sand, bricks, and debris. Our drivers are highly experienced in local routes, ensuring timely delivery even during peak traffic hours.
              </p>

              <h3 className="text-2xl font-display font-bold text-foreground mt-12 mb-4 text-center">Why the Tata 407?</h3>
              <div className="grid md:grid-cols-3 gap-6 my-10 not-prose">
                <div className="p-6 bg-card border border-border/50 rounded-xl text-center">
                  <Truck className="mx-auto text-primary mb-4" size={32} />
                  <h4 className="font-bold mb-2">Compact Power</h4>
                  <p className="text-sm text-muted-foreground">Fits in narrow streets where big trucks can't go.</p>
                </div>
                <div className="p-6 bg-card border border-border/50 rounded-xl text-center">
                  <ShieldCheck className="mx-auto text-primary mb-4" size={32} />
                  <h4 className="font-bold mb-2">Heavy Load</h4>
                  <p className="text-sm text-muted-foreground">Handles up to 4-5 tons of construction material.</p>
                </div>
                <div className="p-6 bg-card border border-border/50 rounded-xl text-center">
                  <MapPin className="mx-auto text-primary mb-4" size={32} />
                  <h4 className="font-bold mb-2">4x4 Stability</h4>
                  <p className="text-sm text-muted-foreground">Ideal for muddy construction sites in Chennai.</p>
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

export default Tata407TransportPage;
