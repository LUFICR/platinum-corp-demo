import { motion } from "motion/react";
import { ShieldCheck, Info, Sparkles } from "lucide-react";
import { BUYER_TRUSTS } from "../data";
import { fadeInUp, scaleIn, viewportConfig } from "../lib/animations";

interface BuyerTrustProps {
  onOpenModal: (source: string, preselectedChoice?: string) => void;
}

export default function BuyerTrust({ onOpenModal }: BuyerTrustProps) {
  return (
    <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(197,168,128,0.06),transparent_50%)]" />
      
      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase block font-mono">Buyer Protection</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal">
            Statutory Transparency & <span className="italic text-brand-gold font-serif">Trust</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto" />
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            We stand for 100% compliant property acquisitions. Your physical assets and legal title registries are insulated with absolute statutory backing.
          </p>
        </div>

        {/* Trust factors cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="trust-grid">
          {BUYER_TRUSTS.map((trust, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              custom={idx * 0.15}
              className="bg-brand-navy-light border border-white/10 rounded-sm p-6 flex flex-col sm:flex-row gap-5 hover:border-brand-gold/40 transition-all duration-300 group text-left"
            >
              <div className="w-12 h-12 bg-brand-gold/10 text-brand-gold flex items-center justify-center rounded-full shrink-0 group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] text-brand-gold font-bold tracking-widest uppercase block font-mono">{trust.subtitle}</span>
                <h4 className="font-serif text-lg font-medium text-white group-hover:text-brand-gold transition-colors duration-300">{trust.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-light">{trust.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Site pickup banner */}
        <div className="mt-12 p-6 bg-brand-gold/10 border border-brand-gold/20 rounded flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-brand-gold/20 text-brand-gold rounded-full flex items-center justify-center shrink-0">
              <Info className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h5 className="font-serif font-medium text-base sm:text-lg text-white">Complimentary Site Visit Transit</h5>
              <p className="text-xs text-gray-300 font-light">Free private chauffeur pick up & drop-off service from your residence anywhere in Mumbai can be scheduled.</p>
            </div>
          </div>
          <button
            onClick={() => onOpenModal("Trust Pickup CTA", "Chauffeur Pickup Registration")}
            className="px-6 py-3 bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-bold text-xs tracking-wider uppercase rounded-sm transition-all duration-300 whitespace-nowrap cursor-pointer hover:scale-[1.02]"
          >
            Request Private Pickup
          </button>
        </div>

      </motion.div>
    </section>
  );
}
