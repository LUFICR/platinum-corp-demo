import { NAV_LINKS } from "../data";

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white pt-16 pb-28 sm:pb-16 border-t border-brand-gold/20 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Footer Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex flex-col select-none group">
              <span className="font-serif text-2xl font-semibold tracking-wide text-brand-gold uppercase">
                Platinum Crest
              </span>
              <span className="text-[9px] tracking-[0.25em] text-white/50 uppercase font-sans">
                Upper Juhu, Andheri West
              </span>
            </a>
            <p className="text-xs text-gray-400 font-light leading-relaxed max-w-sm">
              Platinum Crest is an elite luxury landmark, providing G + 16 storeys of modern residences built by experienced engineers and architects. Redefine luxury with spacious homes and bespoke amenities.
            </p>
            <div className="flex flex-col gap-1 text-[11px] text-brand-gold-light font-semibold font-mono">
              <span>MahaRERA ID: P51800079919</span>
              <span className="text-gray-400 text-[9px] font-normal italic font-sans">Verify official documentation at maharera.maharashtra.gov.in</span>
            </div>
          </div>

          {/* Quick links list */}
          <div className="md:col-span-3 space-y-4">
            <h5 className="font-serif text-sm font-medium tracking-wider uppercase text-white border-b border-brand-gold/20 pb-2">
              Quick Navigation
            </h5>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-brand-gold transition-colors font-medium uppercase tracking-wider text-[10px]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Outreach details */}
          <div className="md:col-span-4 space-y-4">
            <h5 className="font-serif text-sm font-medium tracking-wider uppercase text-white border-b border-brand-gold/20 pb-2">
              Outreach Demonstration
            </h5>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              This presentation platform is developed by <strong className="text-brand-gold">BrandForge Media</strong> as an unofficial outreach demo concept. All visuals, models, and specifications are illustrative.
            </p>
            <div className="pt-2 text-xs text-brand-gold-light flex flex-col gap-1 font-mono">
              <span>Demo Created For: Brand Outreach presentation</span>
              <span>Created At: July 2026</span>
            </div>
          </div>
        </div>

        {/* Legal Disclaimers & Copyright */}
        <div className="pt-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <p className="text-[10px] text-gray-500 max-w-3xl leading-relaxed italic mx-auto sm:mx-0 text-center sm:text-left">
              Legal Disclaimer: This is an unofficial outreach demo concept created by BrandForge Media for presentation purposes only. Platinum Crest and Platinum Corp trademarks are held by their respective owners. No content on this page constitutes an official real estate offering or sale contract. Interested buyers are requested to verify all technical plans, pricing, approvals, and carpet measurements directly from official developer registries and the MahaRERA database.
            </p>
            <p className="text-[11px] text-gray-400">
              © 2026 BrandForge Media &amp; Platinum Crest Demo Concept. All Rights Reserved.
            </p>
          </div>
          <div className="flex gap-4 text-xs font-semibold text-brand-gold uppercase tracking-wider whitespace-nowrap">
            <a href="#overview" className="hover:underline">Privacy Policy</a>
            <span className="text-white/20">|</span>
            <a href="#overview" className="hover:underline">Terms of Use</a>
          </div>
        </div>

        <div className="mt-8 text-center border-t border-white/5 pt-4">
          <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase block">
            Demo Website Conceptualized by BrandForge Media
          </span>
        </div>

      </div>
    </footer>
  );
}
