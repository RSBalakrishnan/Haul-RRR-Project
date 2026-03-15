import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring" }}
        href="https://wa.me/918667611496?text=Hi%2C%20I%20need%20a%20quote%20for%20transport%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[hsl(142,70%,40%)] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_20px_5px_hsl(142,70%,40%/0.4)]"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} className="text-foreground" />
      </motion.a>
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2.2, type: "spring" }}
        href="tel:+918667611496"
        className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse-glow"
        aria-label="Call Now"
      >
        <Phone size={24} className="text-primary-foreground" />
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
