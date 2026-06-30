import { useState, useEffect, FormEvent, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, FileText, Lock, ShieldCheck, Check } from "lucide-react";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalSource: string;
  modalLayoutChoice: string;
  triggerToast: (title: string, desc: string, type?: "success" | "info") => void;
}

export default function BrochureModal({
  isOpen,
  onClose,
  modalSource,
  modalLayoutChoice,
  triggerToast
}: BrochureModalProps) {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setProgress(0);
      setForm({ name: "", phone: "", email: "" });
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isOpen]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) {
      triggerToast("Information Required", "Please enter your details to proceed.", "info");
      return;
    }

    setSubmitted(true);

    let currentProgress = 0;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      currentProgress += 10;
      setProgress(currentProgress);
      if (currentProgress >= 100) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        triggerToast(
          "Download Initiated",
          `The premium brochures and layouts for ${modalLayoutChoice || "Platinum Crest"} have been sent to ${form.email} and queued for local download.`,
          "success"
        );
        setTimeout(() => {
          onClose();
        }, 1200);
      }
    }, 120);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          {/* Elegant dark overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-navy/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="bg-brand-navy text-white rounded-md p-6 sm:p-8 max-w-lg w-full relative border border-brand-gold/40 shadow-2xl overflow-hidden"
            id="brochure-modal"
          >
            {/* Ambient gold glow in top right */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-brand-gold/10 rounded-full blur-2xl pointer-events-none" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors p-1 rounded-full hover:bg-white/5"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div>
                <span className="inline-flex items-center gap-1.5 text-[10px] bg-brand-gold/10 text-brand-gold border border-brand-gold/30 px-3 py-1 font-bold tracking-widest uppercase rounded-sm font-mono">
                  <Lock className="w-3 h-3" /> Secure Privilege Access
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-white mt-3">
                  Download {modalLayoutChoice || "Project Portfolio"}
                </h3>
                <p className="text-xs text-gray-300 mt-1 font-light leading-relaxed">
                  Enter your details below to receive direct priority access. A verified document pack containing digital floor specs, layout measures, and price sheet will be instantly dispatched.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-8 space-y-6">
                  <div className="relative w-20 h-20 mx-auto">
                    {/* SVG Progress Circle */}
                    <svg className="w-20 h-20 transform -rotate-90">
                      <circle
                        cx="40"
                        cy="40"
                        r="34"
                        className="stroke-brand-navy-light fill-none"
                        strokeWidth="3"
                      />
                      <circle
                        cx="40"
                        cy="40"
                        r="34"
                        className="stroke-brand-gold fill-none transition-all duration-300"
                        strokeWidth="3"
                        strokeDasharray={`${2 * Math.PI * 34}`}
                        strokeDashoffset={`${2 * Math.PI * 34 * (1 - progress / 100)}`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center font-mono text-sm font-semibold text-brand-gold">
                      {progress}%
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-serif text-lg font-medium text-white">
                      {progress < 100 ? "Assembling Luxury Portfolio..." : "Verification Successful"}
                    </h4>
                    <p className="text-xs text-gray-400 font-light max-w-xs mx-auto">
                      {progress < 100
                        ? "Compiling RERA statutory records, draft blueprints, and area index breakdowns."
                        : "Your project portfolio is ready. Dispatching file securely to email."
                      }
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                      Your Full Name <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Enter full name"
                      className="w-full bg-brand-navy-light border border-white/10 rounded-sm py-2.5 px-3.5 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                      Verified Mobile Number <span className="text-brand-gold">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-semibold border-r border-white/10 pr-2">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        maxLength={10}
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "") })}
                        placeholder="10-digit mobile number"
                        className="w-full bg-brand-navy-light border border-white/10 rounded-sm py-2.5 pl-[4.5rem] pr-3.5 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-brand-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                      Primary Email Address <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="client@domain.com"
                      className="w-full bg-brand-navy-light border border-white/10 rounded-sm py-2.5 px-3.5 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-bold text-xs tracking-wider uppercase rounded-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer mt-2 shadow-lg"
                  >
                    <FileText className="w-4 h-4" /> Download Complete Brochure
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-400 pt-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
                    <span>Your privacy is guaranteed in compliance with MahaRERA policies.</span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
