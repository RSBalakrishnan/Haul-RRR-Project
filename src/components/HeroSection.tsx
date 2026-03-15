import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-section-407.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Lime glow backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full lime-glow opacity-40" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,hsl(var(--background))_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen pt-20">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 glass-panel px-4 py-2 w-fit"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-sm font-medium text-muted-foreground">Chennai's Trusted Logistics Partner</span>
            </motion.div>

            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-balance">
              <span className="text-foreground">Debris & Demolition</span>
              <br />
              <span className="text-gradient-lime">Removal</span>
              <br />
              <span className="text-foreground">Services Chennai</span>
            </h1>

            <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
              Professional debris removal, solid waste removal, and building demolition services. Providing reliable scrap and rubbish removal across Chennai using our Tata 407 fleet.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href="tel:+918667611496"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-display font-bold text-lg hover:shadow-[0_0_30px_8px_hsl(80_100%_50%/0.3)] transition-all duration-300 hover:scale-105"
              >
                <Phone size={20} />
                Call Now
              </a>
              <a
                href="https://wa.me/918667611496?text=Hi%2C%20I%20need%20a%20quote%20for%20transport%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 glass-panel px-8 py-4 rounded-xl font-display font-bold text-lg text-foreground hover:border-primary/50 hover:shadow-[0_0_20px_5px_hsl(80_100%_50%/0.15)] transition-all duration-300 hover:scale-105"
              >
                <MessageCircle size={20} />
                Get Quote
              </a>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex gap-8 mt-6"
            >
              {[
                { value: "25k+", label: "Jobs Done" },
                { value: "35km", label: "Coverage" },
                { value: "24/7", label: "Available" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display font-bold text-2xl text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1.2, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative flex items-center justify-center lg:scale-125 xl:scale-150 origin-center"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-[800px]"
            >
              <img
                src={heroImage}
                alt="Tata 407 4x4 Truck"
                className="w-full h-auto drop-shadow-[0_20px_60px_rgba(208,255,67,0.3)] object-contain"
              />
            </motion.div>

            {/* Background decorative element for the image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-[120px] -z-10 rounded-full scale-110" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
