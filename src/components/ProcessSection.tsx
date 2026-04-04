import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PhoneCall, ClipboardList, Truck, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: PhoneCall, step: "01", title: "Get in Touch", desc: "Call us or WhatsApp to discuss your requirements and get an instant quote." },
  { icon: ClipboardList, step: "02", title: "Schedule Job", desc: "We plan the logistics, confirm timing, and assign the right vehicle for your job." },
  { icon: Truck, step: "03", title: "Execute & Transport", desc: "Our Tata 407 4×4 arrives on-site, loads up, and transports materials safely." },
  { icon: CheckCircle2, step: "04", title: "Job Complete", desc: "Site cleared, materials delivered. We ensure everything is done to your satisfaction." },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern-fine opacity-15" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display font-semibold text-sm uppercase tracking-[0.2em]">How It Works</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 text-foreground">Our Process</h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-primary/30 via-primary/60 to-primary/30" />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="w-24 h-24 mx-auto rounded-2xl liquid-glass nm-convex flex items-center justify-center mb-6 relative z-10 transition-transform duration-500 hover:scale-110">
                <step.icon size={32} className="text-primary" />
              </div>
              <span className="text-primary font-display font-bold text-sm">{step.step}</span>
              <h3 className="font-display font-bold text-xl text-foreground mt-1 mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
