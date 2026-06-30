import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Calendar, MessageSquare } from "lucide-react";
import { NAV_LINKS } from "../data";

interface HeaderProps {
  onOpenModal: (source: string, preselectedChoice?: string) => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerWhatsApp = () => {
    const msg = "Hi, I am interested in Platinum Crest, Upper Juhu. Please share the pricing and layout floor plans.";
    window.open(`https://wa.me/919000000000?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b ${
        scrolled
          ? "bg-brand-navy/98 backdrop-blur-md shadow-xl h-16 border-brand-gold/15"
          : "bg-brand-navy/90 backdrop-blur-md h-20 border-brand-gold/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        
        {/* Brand Logo Area */}
        <a href="#" className="flex flex-col select-none group" id="brand-logo">
          <span className="font-serif text-lg sm:text-xl font-semibold tracking-wide text-brand-gold group-hover:text-white transition-colors duration-300 uppercase">
            Platinum Crest
          </span>
          <span className="text-[8px] tracking-[0.25em] text-white/50 font-sans uppercase">
            By Platinum Corp
          </span>
        </a>

        {/* Desktop Navigation Link Cluster */}
        <nav className="hidden lg:flex items-center space-x-8" id="desktop-nav">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-brand-gold font-sans font-medium text-xs tracking-wider transition-all duration-300 uppercase hover:-translate-y-[1px]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Header Right Action CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <button
            onClick={() => onOpenModal("Header Booking", "Site Visit Booking")}
            className="px-5 py-2.5 bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-bold text-xs tracking-wider uppercase rounded-sm shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            id="header-cta-visit"
          >
            Book Site Visit
          </button>
        </div>

        {/* Mobile Hamburg Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-brand-gold hover:text-white focus:outline-none p-2 rounded-full hover:bg-white/5 transition-colors"
          id="mobile-menu-toggle"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
        </button>
      </div>

      {/* Mobile Nav Slide-Down Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="lg:hidden bg-brand-navy border-b border-brand-gold/20 overflow-hidden"
            id="mobile-drawer"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-white/80 hover:text-brand-gold hover:bg-white/5 text-xs font-semibold tracking-wider uppercase rounded transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 px-3 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenModal("Mobile Drawer Visit", "Priority Site Visit");
                  }}
                  className="w-full py-3 bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-bold text-xs tracking-wider uppercase rounded-sm transition-all text-center"
                >
                  Book Private Site Visit
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    triggerWhatsApp();
                  }}
                  className="w-full py-3 border border-brand-gold/30 text-brand-gold hover:bg-brand-gold/10 font-bold text-xs tracking-wider uppercase rounded-sm transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" /> WhatsApp Advisor
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
