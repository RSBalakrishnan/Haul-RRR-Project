import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import truckFleet1 from "@/assets/truck-fleet-1.png";
import truckFleet2 from "@/assets/truck-fleet-2.png";
import truckFleet3 from "@/assets/truck-fleet-3.png";

const trucks = [
  { image: truckFleet1, name: "Tata 407 4×4 — Sand Carrier", desc: "M-Sand & P-Sand delivery", capacity: "1 + 1 Unit" },
  { image: truckFleet2, name: "Tata 407 4×4 — Demolition Unit", desc: "Debris & demolition waste", capacity: "1 + 1 Unit" },
  { image: truckFleet3, name: "Tata 407 4×4 — Solid wastes Carrier", desc: "Solid wastes removal", capacity: "1 + 1 Unit" },
];

const FleetSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="fleet" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display font-semibold text-sm uppercase tracking-[0.2em]">Our Fleet</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 text-foreground">Tata 407 4×4 Fleet</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Our well-maintained Tata 407 4×4 trucks are built for heavy-duty construction logistics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {trucks.map((truck, i) => (
            <motion.div
              key={truck.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="glass-panel-hover overflow-hidden group"
            >
              <div className="relative h-56 overflow-hidden bg-secondary/30 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10" />
                <img
                  src={truck.image}
                  alt={`${truck.name} - RRR Transport construction debris removal vehicle`}
                  width={400}
                  height={300}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain scale-110 group-hover:scale-125 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-bold text-lg text-foreground">{truck.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{truck.desc}</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-semibold">
                    {truck.capacity}
                  </span>
                  <span className="text-xs px-3 py-1.5 rounded-full bg-secondary text-muted-foreground border border-border/50">
                    4×4
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
