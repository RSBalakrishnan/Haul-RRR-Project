import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/30 pt-20 pb-10 border-t border-border/50">
      <div className="container mx-auto px-4 text-center">
        <div className="grid md:grid-cols-3 gap-12 mb-16 text-left">
          <div className="col-span-1">
            <h3 className="font-display font-bold text-2xl text-foreground mb-4">RRR Transport</h3>
            <p className="text-muted-foreground max-w-sm mb-6">
              Professional debris removal Chennai, building demolition, and construction waste transport. Trusted Tata 407 logistics partner since 2018.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-lg text-foreground mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="/debris-removal-chennai" className="text-muted-foreground hover:text-primary transition-colors">Debris Removal Chennai</a></li>
              <li><a href="/demolition-waste-removal-chennai" className="text-muted-foreground hover:text-primary transition-colors">Demolition Waste Removal</a></li>
              <li><a href="/construction-debris-removal-chennai" className="text-muted-foreground hover:text-primary transition-colors">Construction Waste Transport</a></li>
              <li><a href="/tata-407-transport-chennai" className="text-muted-foreground hover:text-primary transition-colors">Tata 407 Transport</a></li>
              <li><a href="/m-sand-p-sand-transport-chennai" className="text-muted-foreground hover:text-primary transition-colors">M-Sand & P-Sand Delivery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="/debris-removal-chennai" className="text-muted-foreground hover:text-primary transition-colors">Site Clearance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg text-foreground mb-6">Service Areas</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="/debris-removal-velachery" className="text-muted-foreground hover:text-primary transition-colors">Velachery</a></li>
              <li><a href="/debris-removal-perungudi" className="text-muted-foreground hover:text-primary transition-colors">Perungudi</a></li>
              <li><a href="/debris-removal-medavakkam" className="text-muted-foreground hover:text-primary transition-colors">Medavakkam</a></li>
              <li><a href="/debris-removal-tambaram" className="text-muted-foreground hover:text-primary transition-colors">Tambaram</a></li>
              <li><a href="/debris-removal-thoraipakkam" className="text-muted-foreground hover:text-primary transition-colors">Thoraipakkam</a></li>
              <li><a href="/debris-removal-sholinganallur" className="text-muted-foreground hover:text-primary transition-colors">Sholinganallur</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+918667611496" className="flex items-center gap-2 text-primary font-bold text-xl hover:underline">
                  <Phone size={20} />
                  +91 86676 11496
                </a>
              </li>
              <li className="text-muted-foreground text-sm">
                Perungudi, Chennai - 600096
              </li>
              <li>
                <a href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">Emergency Site Clearance</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} RRR Transport Chennai. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
