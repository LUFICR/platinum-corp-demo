import { motion } from "motion/react";
import { Info, HelpCircle } from "lucide-react";
import { FLOOR_PLANS } from "../data";
import { fadeInUp, viewportConfig } from "../lib/animations";

interface FloorPlansProps {
  onOpenModal: (source: string, preselectedChoice?: string) => void;
}

export default function FloorPlans({ onOpenModal }: FloorPlansProps) {
  return (
    <section id="floor-plans" className="py-24 sm:py-32 bg-white border-y border-brand-gold/10">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase block font-mono">Meticulous Drafting</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-navy font-normal leading-tight">
            Intelligent <span className="italic text-brand-gold font-serif">Floor Plans</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto" />
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            Engineered for maximum carpet efficiency. Zero passage wastage layouts featuring cross ventilation, wide living room layouts, and dedicated utility niches.
          </p>
        </div>

        {/* Floor Plan Card Cluster */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="floor-plans-grid">
          {FLOOR_PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              custom={index * 0.15}
              className={`bg-brand-ivory border ${
                plan.isPopular
                  ? "border-brand-gold border-2 shadow-2xl scale-[1.02] md:scale-[1.04]"
                  : "border-brand-gold/20 shadow-md"
              } rounded-md p-6 flex flex-col justify-between relative overflow-hidden group text-left`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-brand-gold text-brand-navy font-bold text-[9px] px-3.5 py-1 tracking-wider uppercase font-mono">
                  Most Demanded
                </div>
              )}

              <div className="space-y-5">
                <div>
                  <span className="text-[10px] text-brand-gold font-bold uppercase tracking-wider block font-mono">Configuration</span>
                  <h3 className="font-serif text-xl font-medium text-brand-navy mt-0.5">{plan.title}</h3>
                </div>

                {/* Elegant Blueprint Grid Graphic Representation */}
                <div className="h-48 bg-white border border-brand-navy/10 rounded flex flex-col items-center justify-center p-4 relative overflow-hidden select-none">
                  {/* Subtle Grid Lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f3f3_1px,transparent_1px),linear-gradient(to_bottom,#f3f3f3_1px,transparent_1px)] bg-[size:16px_16px] opacity-70" />
                  
                  {/* Inner blueprint diagram bounding box */}
                  <div className="relative z-10 w-full h-full border border-dashed border-brand-gold/40 flex flex-col items-center justify-center bg-brand-gold/5 rounded p-3 text-center">
                    <span className="font-mono text-xs font-bold text-brand-gold-dark tracking-widest uppercase">
                      {plan.carpetArea} Carpet
                    </span>
                    <p className="text-[10px] text-gray-400 italic mt-0.5">
                      {plan.balconyText}
                    </p>
                    
                    {/* Architectural block layouts */}
                    <div className="mt-3 grid grid-cols-3 gap-1.5 w-44 h-16 pointer-events-none text-center">
                      <div className="border border-brand-navy/15 bg-white/40 rounded flex items-center justify-center text-[8px] text-gray-500 uppercase font-mono">Living</div>
                      <div className="border border-brand-navy/15 bg-white/40 rounded flex items-center justify-center text-[8px] text-gray-500 uppercase font-mono">Bed</div>
                      <div className="border border-brand-gold/30 bg-brand-gold/10 rounded flex items-center justify-center text-[8px] text-brand-gold-dark uppercase font-semibold font-mono">Suite</div>
                    </div>
                  </div>

                  <div className="absolute bottom-2 right-2 text-[8px] font-mono text-gray-400 uppercase tracking-widest">
                    Draft Spec v2.0
                  </div>
                </div>

                {/* Core specifications and area details */}
                <div className="space-y-2 pt-1">
                  <p className="text-gray-600 text-xs leading-relaxed font-light">
                    {plan.description}
                  </p>
                  <div className="flex justify-between items-center pt-2.5 border-t border-brand-navy/5">
                    <span className="text-xs text-gray-500 font-light">Agreement Carpet Area:</span>
                    <span className="text-xs font-semibold text-brand-navy font-mono">{plan.carpetArea}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500 font-light">Tentative Pricing:</span>
                    <span className="text-xs font-semibold text-brand-gold-dark font-mono">{plan.priceStart}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-6 mt-4">
                <button
                  onClick={() => onOpenModal(`Request Floor Plan: ${plan.title}`, plan.title)}
                  className="py-2.5 px-3 bg-brand-navy hover:bg-brand-navy-light text-white font-bold text-[10px] tracking-wider uppercase rounded-sm text-center shadow-sm transition-all duration-300 cursor-pointer"
                >
                  Request Layout
                </button>
                <button
                  onClick={() => onOpenModal(`Check Pricing: ${plan.title}`, `Pricing Sheets: ${plan.title}`)}
                  className="py-2.5 px-3 border border-brand-gold hover:bg-brand-gold/10 text-brand-navy font-bold text-[10px] tracking-wider uppercase rounded-sm text-center transition-all duration-300 cursor-pointer"
                >
                  Verify Pricing
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Informative statutory note */}
        <div className="mt-12 text-center text-xs text-gray-500 font-light flex items-center justify-center gap-1.5">
          <Info className="w-4 h-4 text-brand-gold shrink-0" />
          <span>
            Jodi configurations can be customized to combine adjacent units into expansive 3 BHK or 4 BHK layouts.{" "}
            <button
              onClick={() => onOpenModal("Jodi Request", "3 BHK / Jodi Layout Mergers")}
              className="text-brand-gold hover:text-brand-gold-dark underline font-bold uppercase tracking-wider ml-1 transition-colors font-mono"
            >
              Consult Floor Planner
            </button>
          </span>
        </div>

      </motion.div>
    </section>
  );
}
