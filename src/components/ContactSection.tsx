import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { MapPin, Building2, ShieldCheck, Briefcase, User, Phone, Mail, Building, Check, ArrowRight } from "lucide-react";
import { fadeInUp, fadeInLeft, fadeInRight, viewportConfig } from "../lib/animations";

interface ContactSectionProps {
  triggerToast: (title: string, desc: string, type?: "success" | "info") => void;
}

export default function ContactSection({ triggerToast }: ContactSectionProps) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "2 BHK",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) {
      triggerToast("Verification Required", "Please fill in all required inputs to register.", "info");
      return;
    }

    setSubmitted(true);
    triggerToast(
      "Enquiry Successfully Filed!",
      `Dear ${form.name}, your interest in the ${form.requirement} layout has been routed to our Juhu site manager. We will connect shortly.`,
      "success"
    );
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-gray-150 text-left">
      {/* Background aesthetics */}
      <div className="absolute top-[40%] left-[-15%] w-[450px] h-[450px] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none" />

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Physical office address and statutory RERA */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-widest text-brand-gold uppercase block font-mono">Connect Directly</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-brand-navy font-normal leading-tight">
                Get in Touch with our <span className="italic text-brand-gold font-serif">Relationship Desk</span>
              </h2>
              <div className="h-0.5 w-16 bg-brand-gold" />
              <p className="text-gray-500 text-sm font-light leading-relaxed pt-2">
                Our premium Juhu relationship executives are prepared to answer commercial queries, schedule on-site walkthroughs, and assist you with customized layout adjustments.
              </p>
            </div>

            {/* Coordinates details blocks */}
            <div className="space-y-4" id="contact-coordinates">
              
              <div className="p-4 bg-brand-ivory border border-brand-gold/15 rounded flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-navy text-brand-gold flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-semibold text-xs text-brand-navy uppercase tracking-wider font-mono">Site Office Address</h5>
                  <p className="text-xs text-gray-600 mt-1.5 font-light leading-relaxed">Upper Juhu, Andheri West, Mumbai, Maharashtra 400053.</p>
                </div>
              </div>

              <div className="p-4 bg-brand-ivory border border-brand-gold/15 rounded flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-navy text-brand-gold flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-semibold text-xs text-brand-navy uppercase tracking-wider font-mono">Project Scope</h5>
                  <p className="text-xs text-gray-600 mt-1.5 font-light leading-relaxed">Platinum Crest Premium Residences (Elite G + 16 Tower Rise).</p>
                </div>
              </div>

              <div className="p-4 bg-brand-ivory border border-brand-gold/15 rounded flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-navy text-brand-gold flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-semibold text-xs text-brand-navy uppercase tracking-wider font-mono">MahaRERA Registration Number</h5>
                  <p className="text-xs text-brand-gold-dark font-mono font-bold mt-1.5">P51800079919</p>
                </div>
              </div>

              <div className="p-4 bg-brand-ivory border border-brand-gold/15 rounded flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-navy text-brand-gold flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-semibold text-xs text-brand-navy uppercase tracking-wider font-mono">Presentation Outreach Concept</h5>
                  <p className="text-xs text-gray-600 mt-1.5 font-light leading-relaxed">Concept engineered by BrandForge Media (Development Proposal Outreach).</p>
                </div>
              </div>

            </div>

            <p className="text-[10px] text-gray-400 italic leading-relaxed">
              Disclaimer: This is an unofficial conceptual visualization platform created for Outreach Presentation. All data records, floor templates, and specs should be audited with formal legal advisors.
            </p>
          </motion.div>

          {/* Right Column: Lead Capture Box */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-7"
          >
            <div className="bg-brand-navy text-white rounded p-6 sm:p-10 border border-brand-gold/25 shadow-2xl relative overflow-hidden" id="contact-form-container">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-[80px]" />
              
              <h3 className="font-serif text-2xl text-white font-normal mb-1">
                Register Your Priority Enquiry
              </h3>
              <p className="text-xs text-gray-300 mb-8 font-light">
                Submit your credentials and preference choice. Our lead site coordinator will contact you with specific price details and availability options.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 bg-brand-gold/15 rounded-full flex items-center justify-center mx-auto border border-brand-gold text-brand-gold">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-xl font-medium">Thank You For Your Registration</h4>
                  <p className="text-xs text-gray-300 max-w-md mx-auto leading-relaxed font-light">
                    Dear <strong className="text-brand-gold font-medium">{form.name}</strong>, we have received your submission details. Our lead relations advisor will contact you on <strong className="text-brand-gold font-mono">+91 {form.phone}</strong> and email <strong className="text-brand-gold">{form.email}</strong> to review available inventory configurations for <strong className="text-brand-gold">{form.requirement}</strong> choices.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-brand-gold underline text-xs font-bold hover:text-brand-gold-light mt-4 uppercase tracking-wider font-mono"
                  >
                    Submit another request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                        Full Name <span className="text-brand-gold">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold/60" />
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Your name"
                          className="w-full bg-brand-navy-light border border-white/10 rounded-sm py-2.5 pl-10 pr-4 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-brand-gold transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                        Mobile Phone <span className="text-brand-gold">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold/60" />
                        <span className="absolute left-9 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-semibold border-r border-white/10 pr-2">
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          pattern="[0-9]{10}"
                          maxLength={10}
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "") })}
                          placeholder="10-digit number"
                          className="w-full bg-brand-navy-light border border-white/10 rounded-sm py-2.5 pl-22 pr-4 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-brand-gold transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                        Email Address <span className="text-brand-gold">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold/60" />
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="yourname@domain.com"
                          className="w-full bg-brand-navy-light border border-white/10 rounded-sm py-2.5 pl-10 pr-4 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-brand-gold transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                        Requirement Choice <span className="text-brand-gold">*</span>
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold/60" />
                        <select
                          value={form.requirement}
                          onChange={(e) => setForm({ ...form, requirement: e.target.value })}
                          className="w-full bg-brand-navy-light border border-white/10 rounded-sm py-2.5 pl-10 pr-10 text-white text-sm focus:outline-none focus:border-brand-gold transition-colors appearance-none cursor-pointer"
                        >
                          <option value="1 BHK">1 BHK Residence Suite (415 sq.ft.)</option>
                          <option value="2 BHK">2 BHK Luxury Suite (560 sq.ft.)</option>
                          <option value="Jodi Option">Premium Combined Jodi (975+ sq.ft.)</option>
                          <option value="General Enquiry">General Project Enquiry</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                      Message / Custom Preferences (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Specify preferred floor ranges, direction compliance, or private tour timings..."
                      className="w-full bg-brand-navy-light border border-white/10 rounded-sm py-2.5 px-3.5 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-brand-gold transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-bold text-xs tracking-wider uppercase rounded-sm shadow-xl transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                  >
                    Submit Secured Enquiry <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
