import React, { useState, FormEvent, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MapPin, 
  ShieldCheck, 
  Calendar, 
  MessageSquare, 
  User, 
  Phone, 
  Building2, 
  ChevronDown, 
  ArrowRight, 
  Sparkles,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { IMAGES } from "../data";
import { fadeInUp, fadeInLeft, fadeInRight, scaleIn, viewportConfig } from "../lib/animations";

interface HeroProps {
  onOpenModal: (source: string, preselectedChoice?: string) => void;
  triggerToast: (title: string, desc: string, type?: "success" | "info") => void;
}

const CAROUSEL_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85",
    title: "Project Exterior Facade",
    caption: "An imposing G+16 luxury residential tower rising in Upper Juhu."
  },
  {
    url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    title: "Sophisticated Living Space",
    caption: "Spacious master suites and living rooms designed for optimal natural light."
  },
  {
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
    title: "Grand AC Entrance Lobby",
    caption: "A magnificent double-height lobby presenting a majestic reception."
  },
  {
    url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=85",
    title: "Bespoke Rooftop Sky Lounge",
    caption: "Breathtaking panoramic views of the western horizon and coastal Juhu line."
  }
];

export default function Hero({ onOpenModal, triggerToast }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  };

  const triggerWhatsApp = (msg: string) => {
    window.open(`https://wa.me/919000000000?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-16 lg:py-24 bg-brand-navy overflow-hidden">
      {/* Premium subtle background radial gradients to ensure depth and contrast without visual noise */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(197,168,128,0.07),transparent_45%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_right,rgba(197,168,128,0.03),transparent_45%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Spacious, High-end Editorial Column */}
          <motion.div 
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            viewport={viewportConfig}
            className="lg:col-span-6 space-y-10 text-white text-left"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 backdrop-blur-md border border-brand-gold/20 text-brand-gold text-[10px] font-bold uppercase tracking-widest rounded-sm">
                <MapPin className="w-3.5 h-3.5" />
                Upper Juhu Enclave, Mumbai
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-[1.15] tracking-wide" id="hero-title">
                A Sanctuary of <br />
                <span className="font-serif italic text-brand-gold">High-Altitude</span> Living
              </h1>

              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg font-light font-sans" id="hero-subtitle">
                Rising 16 storeys in Juhu’s most coveted residential corridor, Platinum Crest presents an architectural masterpiece of automated 1 & 2 BHK spaces, double-height lifestyle lobbies, and panoramic coastal views.
              </p>
            </div>

            {/* High-Contrast Luxury Action Hub */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2" id="hero-actions">
              <button
                onClick={() => onOpenModal("Hero Primary", "Private Site Visit")}
                className="px-8 py-4 bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-bold text-xs tracking-widest uppercase rounded-sm shadow-xl transition-all duration-300 flex items-center justify-center gap-2.5 hover:translate-y-[-1px] active:translate-y-0 cursor-pointer"
              >
                <Calendar className="w-4 h-4" /> Schedule Private View
              </button>
              <button
                onClick={() => onOpenModal("Hero Secondary", "Download Brochure")}
                className="px-8 py-4 bg-transparent hover:bg-white/5 border border-white/20 hover:border-brand-gold text-white hover:text-brand-gold font-bold text-xs tracking-widest uppercase rounded-sm shadow-md transition-all duration-300 flex items-center justify-center gap-2.5 hover:translate-y-[-1px] active:translate-y-0 cursor-pointer"
              >
                Request Digital Brochure <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Statutory Compliance Footer Reference */}
            <div className="flex items-center gap-2.5 text-xs text-gray-400 font-light font-mono pt-2">
              <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
              <span>MahaRERA Regd No: <strong className="text-gray-200 font-medium font-sans">P51800079919</strong> • RERA Approved Project</span>
            </div>

            {/* Elegant Minimalist Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10" id="hero-trust-strip">
              <div>
                <p className="text-brand-gold font-serif text-2xl font-light">G+16</p>
                <p className="text-gray-400 text-[9px] uppercase tracking-wider font-semibold font-sans mt-1">Storeys</p>
              </div>
              <div>
                <p className="text-brand-gold font-serif text-2xl font-light">1 & 2 B</p>
                <p className="text-gray-400 text-[9px] uppercase tracking-wider font-semibold font-sans mt-1">Configurations</p>
              </div>
              <div>
                <p className="text-brand-gold font-serif text-2xl font-light">Luxury</p>
                <p className="text-gray-400 text-[9px] uppercase tracking-wider font-semibold font-sans mt-1">Sky Lounges</p>
              </div>
              <div>
                <p className="text-brand-gold font-serif text-2xl font-light">Elite</p>
                <p className="text-gray-400 text-[9px] uppercase tracking-wider font-semibold font-sans mt-1">Corridor Address</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-fidelity Visual Asset Frame */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            viewport={viewportConfig}
            className="lg:col-span-6 relative h-[450px] sm:h-[550px] lg:h-[600px] rounded overflow-hidden border border-brand-gold/15 shadow-2xl bg-brand-navy-light group"
          >
            {/* Slide Images */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <img
                  src={CAROUSEL_IMAGES[currentSlide].url}
                  alt={CAROUSEL_IMAGES[currentSlide].title}
                  className="w-full h-full object-cover brightness-[0.75] contrast-[1.05]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </AnimatePresence>

            {/* Cinematic Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 pointer-events-none" />

            {/* Floating High-fidelity Tag */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-brand-navy/90 backdrop-blur-sm px-3 py-1.5 rounded-sm border border-brand-gold/20">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-[9px] uppercase font-mono tracking-widest text-brand-gold font-bold">VIP ARCHITECTURAL PORTFOLIO</span>
            </div>

            {/* Carousel Navigation */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-brand-navy/80 border border-white/10 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-all duration-300 cursor-pointer opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-brand-navy/80 border border-white/10 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-all duration-300 cursor-pointer opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Premium Overlay Info Panel */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10 text-left">
              <div className="space-y-1 max-w-md">
                <h3 className="font-serif text-lg sm:text-xl text-white font-normal tracking-wide">
                  {CAROUSEL_IMAGES[currentSlide].title}
                </h3>
                <p className="text-gray-300 text-xs font-light leading-relaxed">
                  {CAROUSEL_IMAGES[currentSlide].caption}
                </p>
              </div>

              {/* Minimal Dot Indicators */}
              <div className="flex items-center gap-1.5 mt-5">
                {CAROUSEL_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1 transition-all duration-300 rounded-full ${
                      idx === currentSlide ? "w-6 bg-brand-gold" : "w-1.5 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
