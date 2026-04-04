import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

const areas = [

  // NORTH & CENTRAL
  { name: "T Nagar", top: "10%", left: "45%" },
  { name: "Anna Nagar", top: "5%", left: "35%" },
  { name: "Saidapet", top: "22%", left: "45%" },

  // NORTH WEST
  { name: "Vadapalani", top: "18%", left: "22%" },
  { name: "Ashok Nagar", top: "20%", left: "28%" },

  // WEST
  { name: "Velachery", top: "40%", left: "20%" },

  // SOUTH WEST
  { name: "Chromepet", top: "70%", left: "22%" },
  { name: "Pallavaram", top: "65%", left: "26%" },
  { name: "Tambaram", top: "80%", left: "30%" },
  { name: "Tambaram East", top: "78%", left: "38%" },

  // SOUTH
  { name: "Medavakkam", top: "72%", left: "50%" },
  { name: "Madipakkam", top: "55%", left: "35%" },
  { name: "Pallikaranai", top: "65%", left: "45%" },

  // SOUTH EAST
  { name: "Navalur", top: "78%", left: "65%" },
  { name: "Siruseri", top: "88%", left: "70%" },
  { name: "Kelambakkam", top: "95%", left: "72%" },

  // EAST (OMR IT corridor & ECR)
  { name: "Sholinganallur", top: "60%", left: "72%" },
  { name: "Thoraipakkam", top: "48%", left: "70%" },
  { name: "ECR", top: "60%", left: "80%" },

  // NORTH EAST
  { name: "Adyar", top: "25%", left: "60%" },
  { name: "Taramani", top: "35%", left: "58%" },
  { name: "Guindy", top: "30%", left: "42%" },

  // FAR WEST
  { name: "Porur", top: "40%", left: "8%" },

  // FAR NORTH WEST
  { name: "Poonamallee", top: "35%", left: "0%" }

];

const CoverageSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="coverage" className="relative py-24 overflow-hidden">

      <div className="container mx-auto px-4 relative z-10" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em]">
            Service Area
          </span>

          <h2 className="font-bold text-4xl md:text-5xl mt-3">
            Coverage Map
          </h2>

          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            35km service radius around Perungudi covering major areas of Chennai
          </p>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >

          <div className="p-8 relative liquid-glass nm-flat rounded-3xl shadow-lg">

            <div className="relative aspect-square max-w-md mx-auto">

              {/* 35km outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-0 rounded-full bg-primary/5" />

              {/* 20km ring */}
              <div className="absolute inset-[21%] rounded-full border border-primary/40" />
              <div className="absolute inset-[21%] rounded-full bg-primary/5" />

              {/* 10km ring */}
              <div className="absolute inset-[36%] rounded-full border border-primary/50" />
              <div className="absolute inset-[36%] rounded-full bg-primary/5" />

              {/* 5km ring */}
              <div className="absolute inset-[43%] rounded-full border border-primary/60" />
              <div className="absolute inset-[43%] rounded-full bg-primary/10" />


              {/* center - Perungudi */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">

                  <div className="w-4 h-4 rounded-full bg-primary z-10" />

                  <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary animate-ping opacity-75" />

                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-background border px-3 py-1 text-xs font-bold text-primary rounded-lg shadow">
                    <MapPin size={12} className="inline mr-1" />
                    Perungudi
                  </div>

                </div>
              </div>


              {/* area labels */}
              {areas.map((area) => (
                <div
                  key={area.name}
                  className="absolute text-xs text-muted-foreground font-medium text-center"
                  style={{ top: area.top, left: area.left }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 mb-1 mx-auto" />
                  {area.name}
                </div>
              ))}


              {/* distance labels */}
              <div className="absolute top-[5%] right-[5%] text-[10px] text-primary/70">
                35km
              </div>

              <div className="absolute top-[25%] right-[18%] text-[10px] text-primary/70">
                20km
              </div>

              <div className="absolute top-[40%] right-[32%] text-[10px] text-primary/70">
                10km
              </div>

              <div className="absolute top-[48%] right-[40%] text-[10px] text-primary/70">
                5km
              </div>

            </div>


            {/* bottom stats */}
            <div className="mt-10 flex flex-wrap justify-center gap-8 text-center">

              <div>
                <div className="text-2xl font-bold text-primary">35km</div>
                <div className="text-xs text-muted-foreground">
                  Service Radius
                </div>
              </div>

              <div>
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-xs text-muted-foreground">
                  Areas Covered
                </div>
              </div>

              <div>
                <div className="text-2xl font-bold text-primary">30min</div>
                <div className="text-xs text-muted-foreground">
                  Avg Response
                </div>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default CoverageSection;