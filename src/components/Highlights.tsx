import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Building, Building2, Layout, Clock, Compass, ShieldCheck, Sparkles, Check, ArrowRight } from "lucide-react";
import { HIGHLIGHTS } from "../data";
import { fadeInUp, staggerContainer, fadeInUpChild, viewportConfig } from "../lib/animations";

interface HighlightsProps {
  onOpenModal: (source: string, preselectedChoice?: string) => void;
}

// Curated high-fidelity Unsplash images corresponding to each highlight item
const HIGHLIGHT_IMAGES: Record<string, string> = {
  h1: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80", // G+16 Landmark
  h2: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80", // 1 & 2 Bed Jodi
  h3: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80", // Grand Entrance Lobby
  h4: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=800&q=80", // Automated Car Parking
  h5: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80", // Home Automation
  h6: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80", // 24/7 Security
  h7: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80", // Ground/Rooftop Amenities
};

export default function Highlights({ onOpenModal }: HighlightsProps) {
  const [activeTab, setActiveTab] = useState(0);

  const getIcon = (index: number) => {
    switch (index) {
      case 0: return <Building className="w-4 h-4" />;
      case 1: return <Building2 className="w-4 h-4" />;
      case 2: return <Layout className="w-4 h-4" />;
      case 3: return <Clock className="w-4 h-4" />;
      case 4: return <Compass className="w-4 h-4" />;
      case 5: return <ShieldCheck className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="highlights" className="py-24 sm:py-32 bg-brand-navy text-white relative overflow-hidden text-left">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,168,128,0.06),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Headings */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase block font-mono">Architectural Superiority</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight">
            Elite Project <span className="italic text-brand-gold font-serif">Highlights</span> &amp; Specs
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold" />
          <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
            A meticulous convergence of design intelligence, premium safety protocols, and automated engineering crafted for the Juhu lifestyle corridor.
          </p>
        </div>

        {/* Dynamic Big Interactive Feature Showcase */}
        <div className="bg-brand-navy-light border border-brand-gold/15 rounded-md overflow-hidden mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Interactive Tab List */}
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-[10px] font-mono tracking-widest text-brand-gold uppercase font-bold block">
                  Select a Highlight Spec
                </span>
                <div className="space-y-2">
                  {HIGHLIGHTS.map((item, index) => {
                    const isActive = activeTab === index;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(index)}
                        className={`w-full text-left px-4 py-3.5 rounded transition-all duration-300 flex items-center gap-3 border ${
                          isActive
                            ? "bg-brand-gold text-brand-navy border-brand-gold font-medium"
                            : "bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border-transparent"
                        }`}
                      >
                        <div className={`p-1.5 rounded-sm ${isActive ? "bg-brand-navy text-brand-gold" : "bg-white/10 text-brand-gold"}`}>
                          {getIcon(index)}
                        </div>
                        <span className="text-xs sm:text-sm tracking-wide font-sans">{item.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <p className="text-[10px] text-gray-400 leading-relaxed font-light">
                  Interactive Specification Guide. Tap any parameter to preview architectural reference visualization render.
                </p>
              </div>
            </div>

            {/* Showcase Visual Area */}
            <div className="lg:col-span-7 bg-brand-navy relative min-h-[350px] sm:min-h-[450px] flex flex-col justify-end">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={HIGHLIGHT_IMAGES[HIGHLIGHTS[activeTab].id]}
                    alt={HIGHLIGHTS[activeTab].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover brightness-[0.45] contrast-[1.05]"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Status Indicator Tag */}
              <div className="absolute top-6 left-6 z-20 flex items-center gap-1.5 bg-brand-navy/90 backdrop-blur-sm px-2.5 py-1 rounded-sm border border-brand-gold/20">
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                <span className="text-[9px] uppercase font-mono tracking-widest text-brand-gold">HIGH-FIDELITY SPECIFICATION</span>
              </div>

              {/* Visual Showcase Context Overlay */}
              <div className="p-6 sm:p-10 relative z-10 space-y-4 bg-gradient-to-t from-brand-navy via-brand-navy/50 to-transparent">
                <motion.div
                  key={`text-${activeTab}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-3"
                >
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal tracking-wide">
                    {HIGHLIGHTS[activeTab].title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed max-w-xl">
                    {HIGHLIGHTS[activeTab].description}
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2 text-[10px] font-mono tracking-wider text-brand-gold uppercase">
                    <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-400" /> Premium Grade Materials</span>
                    <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-emerald-400" /> 100% Quality Inspected</span>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </div>

        {/* Visual Bento/Grid of Highlights with Full-Bleed Images & Floating Text Panels */}
        <div className="space-y-6">
          <div className="border-b border-white/10 pb-3">
            <h4 className="font-serif text-xl font-normal text-brand-gold uppercase tracking-widest font-mono text-[11px]">
              Full Specifications Catalog
            </h4>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            id="highlights-grid"
          >
            {HIGHLIGHTS.map((item, index) => (
              <motion.div
                key={item.id}
                variants={fadeInUpChild}
                className="bg-brand-navy-light/40 border border-white/10 rounded-sm overflow-hidden hover:border-brand-gold/40 hover:shadow-[0_8px_30px_rgba(197,168,128,0.12)] transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Visual Image Header */}
                <div className="h-44 overflow-hidden relative bg-brand-navy">
                  <img
                    src={HIGHLIGHT_IMAGES[item.id]}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover brightness-[0.75] group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Subtle Top Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-light/95 via-transparent to-black/30" />
                  
                  {/* Icon badge floating */}
                  <div className="absolute bottom-3 left-4 w-9 h-9 rounded bg-brand-navy text-brand-gold flex items-center justify-center border border-brand-gold/20 shadow-md">
                    {getIcon(index)}
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-brand-navy-light/70">
                  <div className="space-y-1.5">
                    <h5 className="font-serif text-base font-medium text-white group-hover:text-brand-gold transition-colors duration-300">
                      {item.title}
                    </h5>
                    <p className="text-gray-400 text-xs leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-brand-gold font-mono uppercase tracking-widest font-semibold">
                    <span>SPEC #{index + 1}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-sans text-[9px] font-bold">
                      View details <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Global CTA trigger */}
        <div className="text-center mt-16">
          <button
            onClick={() => onOpenModal("Highlights CTA", "Detailed Price Sheet")}
            className="px-8 py-4 bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-bold text-xs tracking-wider uppercase rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02] inline-flex items-center gap-2"
          >
            Request Detailed Price Sheet <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}

