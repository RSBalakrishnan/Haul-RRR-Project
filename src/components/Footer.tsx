import { Phone } from "lucide-react";
import logo from "@/assets/rrr-logo.jpeg";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="RRR Transport Logo"
              className="w-10 h-10  object-cover transition-all duration-300 hover:scale-110 hover:shadow-[0_0_12px_4px_rgba(208,255,67,0.7)]"
            />
            <span className="font-display font-bold text-lg text-foreground">RRR Transport</span>
          </div>

          <p className="text-muted-foreground text-sm text-center">
            Perungudi, Chennai - 600096 • All types of Debris, Demolition, Waste Removal & Sand Transport
          </p>



          <a
            href="tel:+918667611496"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
          >
            <Phone size={14} />
            +91 86676 11496
          </a>
        </div>
        <div className="text-center mt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} RRR Transport. All rights reserved.
        </div>
      </div>
    </footer>
  );
};




export default Footer;
