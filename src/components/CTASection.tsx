import { motion } from "motion/react";
import { Phone, MessageSquare, Calendar } from "lucide-react";
import { scaleIn, viewportConfig } from "../lib/animations";

interface CTASectionProps {
  onOpenModal: (source: string, preselectedChoice?: string) => void;
}

export default function CTASection({ onOpenModal }: CTASectionProps) {
  const triggerWhatsApp = (msg: string) => {
    window.open(`https://wa.me/919000000000?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const triggerCall = () => {
    window.open("tel:+919000000000", "_self");
  };

  return (
    <section className="py-20 bg-brand-charcoal text-white relative overflow-hidden border-y border-brand-gold/15 text-left">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.05),transparent_60%)]" />
      
      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* CTA Text Column */}
          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs font-bold tracking-widest text-brand-gold uppercase block font-mono">Limited Inventory Scheme</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight">
              Secure Your High-Altitude Sanctuary <br className="hidden sm:inline" />
              Before the <span className="italic text-brand-gold font-serif">Official Price Escalation</span>
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm font-light max-w-xl leading-relaxed">
              Register today to lock in customized floor merger privileges, structural floor modifications, interest-rate lock schemes, and launch pricing brackets. Handovers are strictly scheduled and insured.
            </p>
          </div>

          {/* CTA Buttons Column */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row gap-4 justify-start lg:justify-end">
            <button
              onClick={() => onOpenModal("CTA Band Site Tour", "Guided Walkthrough booking")}
              className="px-6 py-4 bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-bold text-xs tracking-wider uppercase rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] cursor-pointer"
            >
              <Calendar className="w-4 h-4" /> Book Guided Tour
            </button>
            <button
              onClick={() => triggerWhatsApp("Hi, I want to book a site visit at Platinum Crest on priority.")}
              className="px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-wider uppercase rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp Coordinator
            </button>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
