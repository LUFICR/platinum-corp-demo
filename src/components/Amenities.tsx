import { motion } from "motion/react";
import { Compass, Dumbbell, Sparkles, TreePine, Target, ShieldCheck, HelpCircle, ArrowRight } from "lucide-react";
import { AMENITIES } from "../data";
import { fadeInUp, staggerContainer, fadeInUpChild, viewportConfig } from "../lib/animations";

interface AmenitiesProps {
  onOpenModal: (source: string, preselectedChoice?: string) => void;
}

export default function Amenities({ onOpenModal }: AmenitiesProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case "Compass": return <Compass className="w-4 h-4" />;
      case "Dumbbell": return <Dumbbell className="w-4 h-4" />;
      case "Sparkles": return <Sparkles className="w-4 h-4" />;
      case "TreePine": return <TreePine className="w-4 h-4" />;
      case "Target": return <Target className="w-4 h-4" />;
      case "ShieldCheck": return <ShieldCheck className="w-4 h-4" />;
      default: return <HelpCircle className="w-4 h-4" />;
    }
  };

  return (
    <section id="amenities" className="py-24 sm:py-32 bg-brand-ivory">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase block font-mono">Curated Indulgences</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-navy font-normal leading-tight">
            Rooftop & Ground <span className="italic text-brand-gold font-serif">Lifestyle Experiences</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto" />
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            Elevate your standards of recreation. An expansive dual-tier sky deck meticulously curated for holistic fitness, wellness, and scenic celebrations.
          </p>
        </div>

        {/* Premium Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="amenities-grid"
        >
          {AMENITIES.map((amenity, index) => (
            <motion.div
              key={amenity.id}
              variants={fadeInUpChild}
              className="bg-white border border-brand-gold/15 rounded overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-gold/40 transition-all duration-300 flex flex-col group"
            >
              {/* Image Wrap */}
              <div className="h-52 overflow-hidden relative">
                <img
                  src={amenity.imageUrl}
                  alt={amenity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-brand-navy text-brand-gold flex items-center justify-center">
                    {getIcon(amenity.iconName)}
                  </div>
                  <span className="text-white text-xs tracking-wider font-semibold uppercase font-sans">{amenity.title}</span>
                </div>
              </div>

              {/* Content Box */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4 text-left">
                <p className="text-gray-600 text-xs leading-relaxed font-light">
                  {amenity.description}
                </p>
                <button
                  onClick={() => onOpenModal(`Amenity: ${amenity.title}`, `Specification Detail Pack: ${amenity.title}`)}
                  className="text-brand-navy hover:text-brand-gold text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-300 self-start"
                >
                  Explore Specification <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Callout access banner */}
        <div className="mt-16 bg-brand-navy text-white rounded-md p-6 sm:p-10 border border-brand-gold/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-2xl pointer-events-none" />
          <div className="space-y-2 max-w-xl">
            <span className="inline-block bg-brand-gold text-brand-navy text-[9px] font-bold px-2.5 py-0.5 rounded-sm tracking-widest uppercase font-mono">
              Exclusive Privilege
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-white">
              Request the Complete Rooftop Blueprint Guide
            </h3>
            <p className="text-xs text-gray-300 font-light leading-relaxed">
              Discover localized structural load specifications, security sensor vectors, and configuration dimensions of each active recreational zone.
            </p>
          </div>
          <button
            onClick={() => onOpenModal("Amenities Banner", "Rooftop Blueprint Guide")}
            className="px-6 py-3.5 bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-bold text-xs tracking-wider uppercase rounded-sm transition-all duration-300 shrink-0 w-full md:w-auto hover:scale-[1.02] cursor-pointer"
          >
            Request Blueprint Pack
          </button>
        </div>

      </motion.div>
    </section>
  );
}
