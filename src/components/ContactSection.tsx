import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern-fine opacity-15" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display font-semibold text-sm uppercase tracking-[0.2em]">Get In Touch</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 text-foreground">Contact Us</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Ready to get started? Reach out for a free quote today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-8 flex flex-col gap-6"
          >
            <div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-1">Raja R</h3>
              <p className="text-primary font-display font-semibold">RRR Transport</p>
            </div>

            <div className="flex flex-col gap-4">
              <a href="tel:+918667611496" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Primary</div>
                  <div className="text-foreground font-medium">+91 86676 11496</div>
                </div>
              </a>

              <a href="tel:+918883529782" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Secondary</div>
                  <div className="text-foreground font-medium">+91 88835 29782</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Address</div>
                  <div className="text-foreground font-medium">Perungudi, Chennai - 600096</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Availability</div>
                  <div className="text-foreground font-medium">24/7 Service</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-panel p-8 flex flex-col justify-center gap-6"
          >
            <h3 className="font-display font-bold text-2xl text-foreground">Need a Transport?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Whether it's debris removal, demolition waste, or sand delivery — we're just a call away. Get an instant quote via WhatsApp.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="tel:+918667611496"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-display font-bold text-lg hover:shadow-[0_0_30px_8px_hsl(80_100%_50%/0.3)] transition-all duration-300"
              >
                <Phone size={20} />
                Call Now
              </a>
              <a
                href="https://wa.me/918667611496?text=Hi%2C%20I%20need%20a%20quote%20for%20transport%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[hsl(142,70%,40%)] text-foreground px-8 py-4 rounded-xl font-display font-bold text-lg hover:bg-[hsl(142,70%,45%)] transition-all duration-300"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              All types of Debris & Demolition • Waste Removal • M-Sand & P-Sand Transport
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
