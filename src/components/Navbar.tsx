import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/rrr-logo.jpeg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Debris Removal", href: "/debris-removal-chennai" },
  { label: "Construction Debris", href: "/construction-debris-removal-chennai" },
  { label: "Tata 407", href: "/tata-407-transport-chennai" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4",
      isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50 py-3" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 md:gap-6 group">
          <img
            src={logo}
            alt="RRR Transport Logo"
            className="w-8 h-8 md:w-10 md:h-10 object-contain transition-all duration-300 group-hover:scale-110 group-hover:[filter:drop-shadow(0_0_6px_rgba(208,255,67,0.9))_drop-shadow(0_0_16px_rgba(208,255,67,0.6))]"
          />
          <div className="flex items-center gap-2 md:gap-4">
            <div className="flex items-center gap-0.5 md:gap-1 select-none">
              <span className="text-2xl md:text-4xl font-black tracking-widest text-gradient-lime">R</span>
              <span className="text-3xl md:text-5xl font-black text-red-500">R</span>
              <span className="text-2xl md:text-4xl font-black tracking-widest text-gradient-lime">R</span>
            </div>
            <span className="text-[10px] md:text-xl tracking-[0.2em] md:tracking-[0.35em] font-semibold text-white select-none">TRANSPORT</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium">
              {link.label}
            </a>
          ))}
          <a href="tel:+918667611496" className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:shadow-[0_0_20px_5px_hsl(80_100%_50%/0.3)] transition-all duration-300">
            <Phone size={16} />
            Call Now
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-border/30"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-primary transition-colors py-2 text-sm">
                  {link.label}
                </a>
              ))}
              <a href="tel:+918667611496" className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-lg font-semibold text-sm">
                <Phone size={16} />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
