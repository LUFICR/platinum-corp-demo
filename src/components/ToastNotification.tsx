import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, AlertCircle, X } from "lucide-react";

interface ToastProps {
  toast: {
    visible: boolean;
    title: string;
    desc: string;
    type: "success" | "info";
  } | null;
  onClose: () => void;
}

export default function ToastNotification({ toast, onClose }: ToastProps) {
  return (
    <AnimatePresence>
      {toast && toast.visible && (
        <motion.div
          initial={{ opacity: 0, y: -40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 350 }}
          id="toast-notification"
          className="fixed top-6 left-4 right-4 md:left-auto md:right-6 md:w-[420px] z-[99999] bg-brand-charcoal text-white rounded-md shadow-2xl border-l-4 border-brand-gold p-4 overflow-hidden border border-white/5"
        >
          <div className="flex gap-3">
            <div className="flex-shrink-0 text-brand-gold mt-0.5">
              {toast.type === "success" ? (
                <CheckCircle2 className="w-5 h-5" />
              ) : (
                <AlertCircle className="w-5 h-5 text-brand-gold-light" />
              )}
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-xs tracking-wider text-brand-gold-light uppercase font-mono">
                {toast.title}
              </h4>
              <p className="text-gray-300 text-xs mt-1 leading-relaxed font-light">
                {toast.desc}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors self-start p-0.5"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <motion.div
            key={`${toast.title}-${toast.type}`}
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 5, ease: "linear" }}
            className="absolute bottom-0 left-0 h-[3px] bg-brand-gold"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
