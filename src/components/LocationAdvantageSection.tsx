import { useState } from "react";
import { motion } from "motion/react";
import { Clock, MapPin, MessageSquare, Compass } from "lucide-react";
import { LOCATION_ADVANTAGES } from "../data";
import { fadeInUp, fadeInLeft, fadeInRight, viewportConfig } from "../lib/animations";
import InteractiveMap from "./InteractiveMap";

interface LocationAdvantageProps {
  onOpenModal: (source: string, preselectedChoice?: string) => void;
}

export default function LocationAdvantageSection({ onOpenModal }: LocationAdvantageProps) {
  const [activeTab, setActiveTab] = useState(0);

  const triggerWhatsApp = (msg: string) => {
    window.open(`https://wa.me/919000000000?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="location" className="py-24 sm:py-32 bg-brand-ivory relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none" />

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase block font-mono">Unmatched Proximity</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-navy font-normal leading-tight">
            Connected to the Best of <span className="italic text-brand-gold font-serif">Andheri West</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto" />
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            Sovereign positioning close to the elite Juhu corridor, putting prime medical networks, top-tier schools, high streets, and metropolitan transport systems within minutes of your gate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start" id="location-panel text-left">
          
          {/* Tabbed Proximity List Column */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Tab Category Buttons */}
            <div className="flex flex-wrap gap-2 border-b border-brand-gold/15 pb-4">
              {LOCATION_ADVANTAGES.map((cat, idx) => (
                <button
                  key={cat.category}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2.5 text-[10px] sm:text-xs font-bold tracking-wider uppercase rounded-sm transition-all duration-300 cursor-pointer border ${
                    activeTab === idx
                      ? "bg-brand-navy text-brand-gold border-brand-gold"
                      : "bg-white text-brand-navy-light/80 hover:bg-gray-150 border-gray-200/50"
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>

            {/* List Detail Panel */}
            <div className="bg-white border border-brand-gold/15 rounded-md p-6 shadow-md min-h-[310px] flex flex-col justify-between">
              <div className="space-y-4">
                <h4 className="font-serif text-lg font-medium text-brand-navy uppercase tracking-wide border-l-4 border-brand-gold pl-3">
                  {LOCATION_ADVANTAGES[activeTab].category}
                </h4>
                <p className="text-xs text-gray-400 font-light italic">
                  Approximate transit times under standard traffic conditions:
                </p>
                
                <div className="space-y-3 pt-2">
                  {LOCATION_ADVANTAGES[activeTab].items.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-50 last:border-b-0 hover:bg-brand-ivory/40 px-2 transition-colors duration-200"
                    >
                      <span className="text-xs sm:text-sm font-medium text-brand-navy">{item.name}</span>
                      <span className="flex items-center gap-1.5 text-xs text-brand-gold-dark font-mono font-semibold">
                        <Clock className="w-3.5 h-3.5 text-brand-gold" /> {item.distance}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <button
                  onClick={() => triggerWhatsApp(`Hi, please send me the Google Map location link and coordinates for Platinum Crest, Upper Juhu.`)}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-wider uppercase rounded-sm flex items-center justify-center gap-2 shadow-md transition-colors duration-300 cursor-pointer hover:scale-[1.01]"
                >
                  <MessageSquare className="w-4 h-4" /> Dispatch Coordinates to WhatsApp
                </button>
              </div>
            </div>
          </motion.div>

          {/* Luxury Graphic Align Map Column */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-6 w-full"
          >
            <InteractiveMap />

            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onOpenModal("Map Direction Site", "Direction Coordinates Page")}
                className="flex-1 py-3 bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-bold text-xs tracking-wider uppercase rounded-sm transition-all duration-300 text-center hover:shadow-lg cursor-pointer"
              >
                View Road Route Maps
              </button>
              <button
                onClick={() => onOpenModal("Map Brochure Site", "Location Report Download")}
                className="flex-1 py-3 border border-brand-navy/20 hover:bg-white/10 hover:text-brand-gold text-brand-navy font-bold text-xs tracking-wider uppercase rounded-sm transition-all duration-300 text-center cursor-pointer bg-white"
              >
                Download Proximity Report
              </button>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
