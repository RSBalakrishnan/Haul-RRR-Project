import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trash2, Building2, Mountain, Truck } from "lucide-react";

const services = [
  {
    icon: Trash2,
    title: "Debris & Waste Removal",
    description: "Complete debris removal, demolition waste, and solid waste removal services. We handle scrap and rubbish efficiently and responsibly.",
    features: ["Debris removal", "Solid waste", "Scrap removal"],
  },
  {
    icon: Building2,
    title: "Building Demolition",
    description: "Professional building demolition removal with safety-first approach. From small residential structures to commercial site clearance.",
    features: ["Safe demolition", "Debris clearance", "Structure removal"],
  },
  {
    icon: Mountain,
    title: "Sand Transport",
    description: "Reliable M-Sand and P-Sand delivery for construction. Specialized in transport logistics for heavy materials across Chennai.",
    features: ["M-Sand delivery", "P-Sand delivery", "Bulk transport"],
  },
  {
    icon: Truck,
    title: "Contract Logistics",
    description: "Dedicated scrap removal and waste transport solutions for ongoing projects. Flexible contracts tailored to your schedule.",
    features: ["Scrap disposal", "Flexible terms", "Priority service"],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern-fine opacity-20" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display font-semibold text-sm uppercase tracking-[0.2em]">What We Do</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 text-foreground">Our Services</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Complete construction logistics solutions powered by our Tata 407 4×4 fleet
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-panel-hover p-6 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-500">
                <service.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((f) => (
                  <span key={f} className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground border border-border/50">
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
