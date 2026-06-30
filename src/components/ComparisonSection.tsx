import { motion } from "motion/react";
import { Check, X, Calendar, Sparkles } from "lucide-react";
import { fadeInUp, viewportConfig } from "../lib/animations";

interface ComparisonProps {
  onOpenModal: (source: string, preselectedChoice?: string) => void;
}

export default function ComparisonSection({ onOpenModal }: ComparisonProps) {
  const comparisonData = [
    {
      factor: "Accurate Carpet Dimensioning",
      online: "Truncated or generic schematic templates",
      tour: "Physical laser measurement with on-site coordinator",
      isPositive: true
    },
    {
      factor: "Vastu & Airflow Auditing",
      online: "Static descriptive compass vectors",
      tour: "Live cardinal alignment validation & wind-tunnel checking",
      isPositive: true
    },
    {
      factor: "Construction Quality Standard",
      online: "Illustrative rendered visuals and claims",
      tour: "Direct inspection of concrete casting, wiring, and fitments",
      isPositive: true
    },
    {
      factor: "Statutory MahaRERA Auditing",
      online: "Unverified registry copy download queues",
      tour: "Interactive review of land title deed archives",
      isPositive: true
    },
    {
      factor: "Early Builder Pricing Offers",
      online: "Inflationary secondary portal list pricing",
      tour: "Face-to-face commercial structure and payment customizations",
      isPositive: true
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-white border-b border-brand-gold/10 text-left">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase block font-mono">Decision Intelligence</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-navy font-normal leading-tight">
            Online Research vs. <span className="italic text-brand-gold font-serif">Physical Audits</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto" />
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            While digital sheets provide initial baselines, physical site inspections unlock accurate dimensions, actual light profiles, and direct commercial customizability.
          </p>
        </div>

        {/* Responsive Table Cluster */}
        <div className="hidden md:block overflow-hidden border border-brand-gold/15 rounded-md shadow-lg" id="comparison-table">
          <table className="w-full text-left border-collapse bg-white">
            <thead>
              <tr className="bg-brand-navy text-white text-xs uppercase tracking-wider font-mono border-b border-brand-gold/20">
                <th className="py-5 px-6 font-semibold">Evaluation Factor</th>
                <th className="py-5 px-6 font-semibold text-gray-400">Online Portals</th>
                <th className="py-5 px-6 font-semibold text-brand-gold">Physical Walkthrough Advantage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-brand-ivory/35 transition-colors duration-200">
                  <td className="py-4.5 px-6 font-semibold text-brand-navy">{row.factor}</td>
                  <td className="py-4.5 px-6 text-gray-500 font-light flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{row.online}</span>
                  </td>
                  <td className="py-4.5 px-6 text-brand-navy font-semibold bg-brand-gold/5 border-l border-brand-gold/10">
                    <div className="flex items-start gap-2 text-brand-navy-light">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{row.tour}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Scannable Cards Representation */}
        <div className="md:hidden space-y-4" id="comparison-mobile-cards">
          {comparisonData.map((row, idx) => (
            <div key={idx} className="bg-brand-ivory border border-brand-gold/15 rounded-md p-5 space-y-3">
              <h4 className="font-serif font-medium text-sm text-brand-navy border-b border-gray-100 pb-2">{row.factor}</h4>
              <div className="space-y-2">
                <div className="flex gap-2 text-xs text-gray-500">
                  <X className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-400 block uppercase tracking-widest text-[9px] font-mono">Online Data</strong>
                    <span className="font-light">{row.online}</span>
                  </div>
                </div>
                <div className="flex gap-2 text-xs text-brand-navy">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-gold-dark block uppercase tracking-widest text-[9px] font-mono">On-Site Walkthrough</strong>
                    <span className="font-semibold">{row.tour}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Booking site tour prompt */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenModal("Comparison CTA", "Priority Guided Site Tour")}
            className="px-8 py-4 bg-brand-navy hover:bg-brand-navy-light text-white font-bold text-xs tracking-wider uppercase rounded-sm shadow-md transition-all duration-300 flex items-center justify-center gap-2 mx-auto cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-brand-gold" /> Schedule Private Site Walkthrough Tour
          </button>
        </div>

      </motion.div>
    </section>
  );
}
