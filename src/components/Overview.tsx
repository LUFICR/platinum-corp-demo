import { motion } from "motion/react";
import { MapPin, Layers, Sparkles, Building, Download, ArrowRight } from "lucide-react";
import { IMAGES } from "../data";
import { fadeInUp, viewportConfig } from "../lib/animations";

interface OverviewProps {
  onOpenModal: (source: string, preselectedChoice?: string) => void;
}

export default function Overview({ onOpenModal }: OverviewProps) {
  return (
    <section id="overview" className="py-24 sm:py-32 bg-brand-ivory border-b border-brand-gold/10">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Master Bedroom Suite / Interior Mock */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-brand-gold/10 -translate-x-4 translate-y-4 rounded" />
            <div className="relative border border-brand-gold/25 overflow-hidden shadow-2xl rounded">
              <img
                src={IMAGES.overview}
                alt="Platinum Crest Premium Master Bedroom Suite Interiors"
                className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-6 text-white">
                <span className="text-[10px] font-bold tracking-widest text-brand-gold uppercase font-mono">Luxury Interiors</span>
                <h4 className="font-serif text-lg font-medium mt-1">Sovereign Living Spaces</h4>
              </div>
            </div>
          </div>

          {/* Right Column: Descriptions & Highlights */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest text-brand-gold uppercase block font-mono">The Master Plan</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-brand-navy font-normal leading-tight">
                Luxury Living, <span className="italic font-serif text-brand-gold">Perfect Location</span>
              </h2>
              <div className="h-0.5 w-20 bg-brand-gold" />
            </div>

            <div className="space-y-4 text-brand-navy-light/80 text-sm sm:text-base leading-relaxed font-light">
              <p>
                Welcome to <strong>Platinum Crest</strong>, an address curated specifically for those who demand architectural sophistication and elite positioning. Set in the highly coveted neighborhood of Upper Juhu, Andheri West, this G + 16-storey masterpiece strikes the perfect balance between global lifestyle standard and structural integrity.
              </p>
              <p>
                Every micro-dimension of these boutique 1 & 2 Bed suites has been engineered to maximize natural light ventilation, standing balconies, and private utility alcoves. Offering customized Jodi configurations, the residences adapt effortlessly to your space aspirations. Experience a higher orbit of luxury overlooking the coastal breezes of western Mumbai.
              </p>
            </div>

            {/* Feature Overview Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4" id="overview-features">
              <div className="p-5 bg-white border border-brand-gold/15 rounded-sm hover:border-brand-gold/50 hover:shadow-md transition-all duration-300">
                <div className="text-brand-gold mb-2.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-medium text-brand-navy text-sm uppercase tracking-wider">Premium Location</h4>
                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed font-light">Prime Juhu corridor placing western high streets, elite colleges, and cafes minutes away.</p>
              </div>

              <div className="p-5 bg-white border border-brand-gold/15 rounded-sm hover:border-brand-gold/50 hover:shadow-md transition-all duration-300">
                <div className="text-brand-gold mb-2.5">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-medium text-brand-navy text-sm uppercase tracking-wider">Smart Space Planning</h4>
                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed font-light">Zero-wastage passages, dedicated wardrobe niches, and high-performance cross airflow.</p>
              </div>

              <div className="p-5 bg-white border border-brand-gold/15 rounded-sm hover:border-brand-gold/50 hover:shadow-md transition-all duration-300">
                <div className="text-brand-gold mb-2.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-medium text-brand-navy text-sm uppercase tracking-wider">Lifestyle Amenities</h4>
                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed font-light">Premium multi-activity sky deck, net cricket, stargazing zone, and glass lobby.</p>
              </div>

              <div className="p-5 bg-white border border-brand-gold/15 rounded-sm hover:border-brand-gold/50 hover:shadow-md transition-all duration-300">
                <div className="text-brand-gold mb-2.5">
                  <Building className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-medium text-brand-navy text-sm uppercase tracking-wider">Trusted Builder Promise</h4>
                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed font-light">Platinum Corp brand promise. High corporate governance and on-time structural handovers.</p>
              </div>
            </div>

            {/* Dynamic CTA trigger */}
            <div className="pt-4">
              <button
                onClick={() => onOpenModal("Overview CTA", "Complete Project Presentation")}
                className="px-6 py-3.5 border border-brand-navy hover:bg-brand-navy hover:text-white text-brand-navy font-bold text-xs tracking-wider uppercase rounded-sm transition-all duration-300 flex items-center gap-2 cursor-pointer hover:shadow-lg"
              >
                <Download className="w-4 h-4" /> Download Complete Project Presentation
              </button>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
