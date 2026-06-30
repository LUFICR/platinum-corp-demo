import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, MessageSquare, Info } from "lucide-react";
import { FAQS } from "../data";
import { fadeInUp, viewportConfig } from "../lib/animations";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const triggerWhatsApp = () => {
    const msg = "Hi, I have a few custom questions about the payment plans and approvals for Platinum Crest.";
    window.open(`https://wa.me/919000000000?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-brand-ivory border-t border-brand-gold/15 text-left">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase block font-mono">Frequently Asked Questions</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-navy font-normal leading-tight">
            Queries & <span className="italic text-brand-gold font-serif">Statutory Disclosures</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto" />
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            Transparent responses to standard pricing, configurations, and RERA certifications for the Upper Juhu landmark.
          </p>
        </div>

        {/* Accordions Cluster */}
        <div className="space-y-4" id="faq-accordions">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                custom={idx * 0.08}
                className="bg-white border border-brand-gold/15 rounded-md overflow-hidden transition-all duration-300 shadow-sm"
              >
                {/* Accordion header */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 font-serif text-sm sm:text-base font-medium text-brand-navy hover:text-brand-gold transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-gold transition-transform duration-300 shrink-0 ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Accordion body panels */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-gray-50">
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA help prompt */}
        <div className="mt-12 text-center p-6 bg-white border border-brand-gold/15 rounded-md shadow-sm max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-9 h-9 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0">
              <Info className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-serif font-medium text-sm text-brand-navy">Have specific payment structure queries?</h4>
              <p className="text-xs text-gray-500 font-light">Contact our certified executive directly for commercial structures.</p>
            </div>
          </div>
          <button
            onClick={triggerWhatsApp}
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] tracking-wider uppercase rounded-sm flex items-center gap-1.5 shrink-0 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Advisor
          </button>
        </div>

      </motion.div>
    </section>
  );
}
