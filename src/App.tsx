import { useState, useEffect } from "react";
import { Phone, MessageSquare, Calendar } from "lucide-react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Highlights from "./components/Highlights";
import Amenities from "./components/Amenities";
import FloorPlans from "./components/FloorPlans";
import LocationAdvantageSection from "./components/LocationAdvantageSection";
import BuyerTrust from "./components/BuyerTrust";
import DeveloperCredibility from "./components/DeveloperCredibility";
import ComparisonSection from "./components/ComparisonSection";
import VideoTour from "./components/VideoTour";
import CTASection from "./components/CTASection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import BrochureModal from "./components/BrochureModal";
import ToastNotification from "./components/ToastNotification";

export default function App() {
  // Global Brochure/Booking Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState("Brochure Download");
  const [modalLayoutChoice, setModalLayoutChoice] = useState("");

  // Premium Toast Notification State
  const [toast, setToast] = useState<{
    visible: boolean;
    title: string;
    desc: string;
    type: "success" | "info";
  } | null>(null);

  // Auto-dismiss Toast Timer
  useEffect(() => {
    if (toast && toast.visible) {
      const timer = setTimeout(() => {
        setToast((prev) => (prev ? { ...prev, visible: false } : null));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Centralized Modal Open Trigger
  const handleOpenModal = (source: string, preselectedChoice = "") => {
    setModalSource(source);
    setModalLayoutChoice(preselectedChoice);
    setModalOpen(true);
  };

  // Centralized Toast Trigger
  const triggerToast = (title: string, desc: string, type: "success" | "info" = "success") => {
    setToast({ visible: true, title, desc, type });
  };

  const triggerWhatsApp = (msg: string) => {
    window.open(`https://wa.me/919000000000?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const triggerCall = () => {
    window.open("tel:+919000000000", "_self");
  };

  return (
    <div className="bg-brand-navy min-h-screen font-sans antialiased text-gray-900 selection:bg-brand-gold selection:text-brand-navy">
      
      {/* Sticky Premium Navigation Header */}
      <Header onOpenModal={handleOpenModal} />

      {/* Main Core Content Layout */}
      <main className="relative">
        
        {/* Hero Segment */}
        <Hero onOpenModal={handleOpenModal} triggerToast={triggerToast} />

        {/* Project Masterplan & Overview */}
        <Overview onOpenModal={handleOpenModal} />

        {/* Golden Specifications & Highlights */}
        <Highlights onOpenModal={handleOpenModal} />

        {/* Curated Ground & Rooftop Amenities */}
        <Amenities onOpenModal={handleOpenModal} />

        {/* Interactive Drafting Floor Plans */}
        <FloorPlans onOpenModal={handleOpenModal} />

        {/* Location Proximities & Route Alignment Maps */}
        <LocationAdvantageSection onOpenModal={handleOpenModal} />

        {/* Regulatory Protection & Buyer Trust */}
        <BuyerTrust onOpenModal={handleOpenModal} />

        {/* Real Estate Developer Leadership Bio */}
        <DeveloperCredibility />

        {/* SaaS-Style Physical Audits Decision Contrast */}
        <ComparisonSection onOpenModal={handleOpenModal} />

        {/* Muted Auto-Playing Walks Tour & Client Endorsements */}
        <VideoTour triggerToast={triggerToast} />

        {/* Promotional Limited Availability Band */}
        <CTASection onOpenModal={handleOpenModal} />

        {/* Frequently Asked Questions Accordions */}
        <FAQSection />

        {/* Site Offices Addresses & Sales Enquiries Form */}
        <ContactSection triggerToast={triggerToast} />

      </main>

      {/* Corporate Disclaimer & Navigation Footer */}
      <Footer />

      {/* --- FLOATING DESKTOP WHATSAPP LAUNCHER --- */}
      <div className="fixed bottom-24 sm:bottom-8 right-4 sm:right-6 z-40 flex flex-col items-end gap-2" id="floating-triggers">
        <div className="hidden sm:block bg-brand-navy text-brand-gold font-bold text-[9px] px-2.5 py-1 tracking-widest uppercase rounded shadow-md border border-brand-gold/20 font-mono">
          Interactive Layouts
        </div>
        <button
          onClick={() => triggerWhatsApp("Hi Platinum Crest, please send me the floor plans and location details on WhatsApp.")}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 relative group border-2 border-white cursor-pointer"
          aria-label="Contact us on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 animate-pulse" />
          <span className="absolute right-16 bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap uppercase tracking-wider hidden sm:inline-block">
            Get Floor Plans
          </span>
        </button>
      </div>

      {/* --- STICKY MOBILE COMPACT NAVIGATION CTA BAND --- */}
      <div className="fixed bottom-0 left-0 right-0 bg-brand-navy border-t border-brand-gold/30 p-2.5 grid grid-cols-3 gap-2 z-40 lg:hidden shadow-[0_-5px_15px_rgba(0,0,0,0.3)]">
        <button
          onClick={triggerCall}
          className="py-3 bg-brand-navy-light text-brand-gold font-bold text-[10px] tracking-wider uppercase rounded-sm flex items-center justify-center gap-1.5 border border-brand-gold/20"
        >
          <Phone className="w-3.5 h-3.5" /> Call Sales
        </button>
        <button
          onClick={() => triggerWhatsApp("Hi, I want to request pricing and availability of Platinum Crest on WhatsApp.")}
          className="py-3 bg-emerald-600 text-white font-bold text-[10px] tracking-wider uppercase rounded-sm flex items-center justify-center gap-1.5"
        >
          <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
        </button>
        <button
          onClick={() => handleOpenModal("Mobile Sticky CTA", "Priority site walkthrough")}
          className="py-3 bg-brand-gold text-brand-navy font-bold text-[10px] tracking-wider uppercase rounded-sm flex items-center justify-center gap-1.5"
        >
          <Calendar className="w-3.5 h-3.5" /> Book Visit
        </button>
      </div>

      {/* Global Interactive Privilege Brochure Modal */}
      <BrochureModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        modalSource={modalSource}
        modalLayoutChoice={modalLayoutChoice}
        triggerToast={triggerToast}
      />

      {/* Global Auto-Dismiss Notification Toast */}
      <ToastNotification toast={toast} onClose={() => setToast((prev) => (prev ? { ...prev, visible: false } : null))} />

    </div>
  );
}
