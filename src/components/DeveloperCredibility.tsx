import { motion } from "motion/react";
import { DEVELOPERS } from "../data";
import { fadeInUp, viewportConfig } from "../lib/animations";

export default function DeveloperCredibility() {
  return (
    <section id="developer" className="py-24 sm:py-32 bg-brand-ivory border-b border-brand-gold/10">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase block font-mono">The Visionaries</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-navy font-normal leading-tight">
            Backed by Veteran <span className="italic text-brand-gold font-serif">Real Estate Leadership</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto" />
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            Platinum Corp is guided by an executive leadership team of certified structural civil engineers, master planners, and pioneering architects with a track record of central-suburb delivery.
          </p>
        </div>

        {/* Profile cards layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto" id="developer-bios">
          {DEVELOPERS.map((leader, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              custom={index * 0.2}
              className="bg-white border border-brand-gold/15 rounded-md p-6 shadow-md hover:shadow-xl hover:border-brand-gold/30 transition-all duration-300 flex flex-col md:flex-row gap-6 group text-left"
            >
              {/* Image Frame */}
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-sm overflow-hidden shrink-0 mx-auto border border-brand-gold/20 relative bg-gray-50">
                <img
                  src={leader.imageUrl}
                  alt={leader.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Leader biographical specs */}
              <div className="space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <h3 className="font-serif text-lg font-medium text-brand-navy">{leader.name}</h3>
                  <p className="text-xs text-brand-gold-dark font-semibold uppercase tracking-wider font-mono">{leader.role}</p>
                  <p className="text-[10px] text-gray-400 font-mono tracking-wider font-medium uppercase">{leader.experience}</p>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed font-light pt-2 border-t border-gray-50">
                  {leader.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
