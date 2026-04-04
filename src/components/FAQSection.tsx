import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is debris removal?",
    answer: "Debris removal involves the collection and disposal of construction waste, demolition remains, and organic debris from building sites to ensure safety and cleanliness."
  },
  {
    question: "How much does debris removal cost in Chennai?",
    answer: "Costs typically depend on the volume of waste and transport distance. Using our Tata 407 fleet, we offer competitive fixed rates starting from ₹2,000 per load within 35km of Perungudi."
  },
  {
    question: "Do you provide demolition waste transport?",
    answer: "Yes, Rajamani Transport specializes in demolition waste removal Chennai. We handle concrete, bricks, soil, and mixed masonry waste."
  },
  {
    question: "What vehicles do you use?",
    answer: "We use high-performance Tata 407 4x4 trucks. These are ideal for navigating Chennai's narrow streets while carrying heavy demolition loads."
  },
  {
    question: "Do you provide M-Sand & P-Sand delivery?",
    answer: "Yes, besides debris removal Chennai, we transport high-quality M-Sand and P-Sand for construction projects across Velachery and surrounding areas."
  },
  {
    question: "What areas in Chennai do you cover?",
    answer: "We primarily serve South Chennai, including Perungudi, Velachery, Tambaram, Medavakkam, and Sholinganallur, covering a 35km radius."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-card/20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-display font-semibold text-sm uppercase tracking-widest">Common Questions</span>
          <h2 className="font-display font-bold text-4xl mt-3 text-foreground">FAQ for Debris Removal</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="liquid-glass nm-flat overflow-hidden transition-all duration-300 border border-border/50 rounded-xl"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="font-display font-bold text-lg text-foreground">{faq.question}</span>
                {openIndex === i ? <Minus className="text-primary" /> : <Plus className="text-primary" />}
              </button>

              <motion.div
                initial={false}
                animate={{ height: openIndex === i ? "auto" : 0, opacity: openIndex === i ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </div>
    </section>
  );
};

export default FAQSection;
