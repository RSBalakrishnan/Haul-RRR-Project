import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface InternalLink {
  label: string;
  href: string;
}

interface InternalLinksProps {
  services: InternalLink[];
  locations: InternalLink[];
}

const InternalLinks = ({ services, locations }: InternalLinksProps) => {
  return (
    <section className="py-12 border-t border-border/50 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-display font-bold text-xl mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full" />
              Expert Services in Chennai
            </h3>
            <div className="grid gap-3">
              {services.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <ChevronRight size={14} className="text-primary/50 group-hover:translate-x-1 transition-transform" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-xl mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full" />
              Serving Locations
            </h3>
            <div className="grid gap-3">
              {locations.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <ChevronRight size={14} className="text-primary/50 group-hover:translate-x-1 transition-transform" />
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="group flex items-center gap-2 text-primary font-bold mt-4 hover:underline"
              >
                <ChevronRight size={14} className="text-primary group-hover:translate-x-1 transition-transform" />
                Contact RRR Transport Chennai
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternalLinks;
