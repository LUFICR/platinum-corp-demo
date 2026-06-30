import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Video, VolumeX, Volume2, Star, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { fadeInLeft, fadeInRight, viewportConfig } from "../lib/animations";

interface VideoTourProps {
  triggerToast: (title: string, desc: string, type?: "success" | "info") => void;
}

export default function VideoTour({ triggerToast }: VideoTourProps) {
  const [videoMuted, setVideoMuted] = useState(true);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Dr. Aditya Kulkarni & Family",
      role: "Senior Consultant Cardiologist, Kokilaben Hospital",
      quote: "The smart layout planning of the 2 BHK unit is incredible. With absolutely zero passage wastage, we got more carpet usability than older projects nearby. The double-height entrance lobby is extremely grand!",
      location: "Verified Purchaser (2 BHK, West Wing)"
    },
    {
      name: "Meera & Sameer Mehta",
      role: "Senior Partner, International Law Practice",
      quote: "Combining adjacent suites into a customized 3 BHK Jodi layout was handled with flawless execution by the design team. The location on the Juhu Circle corridor is perfect for my daily corporate commute to Bandra-Kurla Complex.",
      location: "Verified Purchaser (3 BHK Custom Jodi, 14th Floor)"
    },
    {
      name: "Karan Johar & Devika Singhania",
      role: "Tech Founder & Angel Investor",
      quote: "We looked at multiple developers across Andheri West, but the luxury rooftop setup and automated car parking system at Platinum Crest stand in a class of their own. Vishal and Gurminder are deeply hands-on architects.",
      location: "Verified Purchaser (2 BHK, High Rise Zone)"
    }
  ];

  const handleNext = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const toggleMute = () => {
    const nextMuted = !videoMuted;
    setVideoMuted(nextMuted);
    triggerToast(
      nextMuted ? "Audio Muted" : "Audio Unmuted",
      nextMuted ? "The video narration is muted." : "Enjoy the high-fidelity guided video narration of the project.",
      "info"
    );
  };

  return (
    <section className="py-24 sm:py-32 bg-brand-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,168,128,0.06),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Muted Auto-Playing Luxury Video Frame */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-widest text-brand-gold uppercase block font-mono">Experience The Luxury</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white leading-tight">
                Virtual Site <span className="italic text-brand-gold font-serif">Walkthrough</span> Tour
              </h2>
              <div className="h-0.5 w-16 bg-brand-gold" />
            </div>

            <div className="border border-brand-gold/20 rounded overflow-hidden shadow-2xl relative bg-brand-navy-light max-w-2xl">
              {/* HTML5 Loop Video */}
              <div className="aspect-video w-full relative">
                <video
                  autoPlay
                  loop
                  muted={videoMuted}
                  playsInline
                  className="w-full h-full object-cover brightness-[0.85] contrast-[1.05]"
                >
                  <source
                    src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27dbbeb311457c3253b073bc0a1085baae27cfd&profile_id=165&oauth2_token_id=57447761"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/35 pointer-events-none" />

                {/* Status indicator tag */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
                  <div className="flex items-center gap-1.5 bg-brand-navy/90 backdrop-blur-sm px-2.5 py-1 rounded-sm border border-brand-gold/20">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] uppercase font-mono tracking-widest text-brand-gold">SITE WALKTHROUGH PREVIEW</span>
                  </div>
                  <div className="text-[9px] font-mono tracking-wider text-white/60 uppercase">
                    Upper Juhu Site Rise
                  </div>
                </div>

                {/* Sound Controls Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-20">
                  <div className="space-y-1">
                    <p className="text-white text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-1.5 font-serif italic text-brand-gold">
                      <Video className="w-4 h-4 text-brand-gold" /> Platinum Crest Vision Walkthrough
                    </p>
                    <p className="text-gray-300 text-[9px] leading-tight font-light">
                      {videoMuted ? "Narration muted. Click speaker icon to enable high-fidelity sound." : "Playing guided narration with premium spatial spatial acoustics."}
                    </p>
                  </div>

                  <button
                    onClick={toggleMute}
                    className="p-2.5 bg-brand-gold text-brand-navy hover:bg-brand-gold-light rounded-full transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center border border-white/20"
                    title={videoMuted ? "Unmute Sound" : "Mute Sound"}
                  >
                    {videoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                {/* Ambient caption overlay */}
                {videoMuted && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none p-4 max-w-sm w-full bg-black/50 backdrop-blur-sm rounded border border-white/5">
                    <p className="text-[9px] text-brand-gold uppercase tracking-widest font-mono mb-1 font-semibold">Interactive Ambient Loop</p>
                    <p className="text-[10px] text-white/90 font-light leading-relaxed">
                      &ldquo;Platinum Crest delivers architectural balance and luxury connectivity in Mumbai.&rdquo;
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Quality Specs Grid */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl pt-2">
              <div className="p-3 bg-brand-navy-light rounded border border-white/5 text-center">
                <p className="text-brand-gold font-mono text-sm font-semibold">4K UHD</p>
                <p className="text-[9px] text-gray-400 uppercase tracking-widest">Visual Standard</p>
              </div>
              <div className="p-3 bg-brand-navy-light rounded border border-white/5 text-center">
                <p className="text-brand-gold font-mono text-sm font-semibold">Muted</p>
                <p className="text-[9px] text-gray-400 uppercase tracking-widest">Ambient Flow</p>
              </div>
              <div className="p-3 bg-brand-navy-light rounded border border-white/5 text-center">
                <p className="text-brand-gold font-mono text-sm font-semibold">Live</p>
                <p className="text-[9px] text-gray-400 uppercase tracking-widest">Progress Map</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Testimonials Slider */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-5 space-y-6 text-left"
          >
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-widest text-brand-gold uppercase block font-mono">Elite Resident Reviews</span>
              <h3 className="font-serif text-3xl text-white font-normal leading-tight">What Our Families Say</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Real accounts from corporate partners, doctors, and legal professionals who secured residence at Platinum Crest.
              </p>
            </div>

            {/* Testimonials Window */}
            <div className="relative min-h-[220px]" id="testimonials-container">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-brand-navy-light border border-brand-gold/30 p-6 rounded-md relative flex flex-col justify-between min-h-[200px]"
                >
                  <div className="space-y-4">
                    {/* Stars ratings */}
                    <div className="flex text-brand-gold gap-0.5">
                      <Star className="w-4 h-4 fill-brand-gold" />
                      <Star className="w-4 h-4 fill-brand-gold" />
                      <Star className="w-4 h-4 fill-brand-gold" />
                      <Star className="w-4 h-4 fill-brand-gold" />
                      <Star className="w-4 h-4 fill-brand-gold" />
                    </div>

                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed italic font-light">
                      &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 mt-4">
                    <h5 className="text-white text-xs font-semibold tracking-wide uppercase font-sans">
                      {testimonials[activeTestimonial].name}
                    </h5>
                    <p className="text-[10px] text-brand-gold-light mt-0.5">
                      {testimonials[activeTestimonial].role}
                    </p>
                    <p className="text-[9px] text-emerald-400 mt-1 flex items-center gap-1 font-semibold font-mono uppercase tracking-wider">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {testimonials[activeTestimonial].location}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Testimonial Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 border border-white/10 hover:border-brand-gold hover:text-brand-gold text-white rounded-full flex items-center justify-center transition-all cursor-pointer active:scale-90"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-mono text-gray-400 font-semibold">
                {activeTestimonial + 1} / {testimonials.length}
              </span>
              <button
                onClick={handleNext}
                className="w-10 h-10 border border-white/10 hover:border-brand-gold hover:text-brand-gold text-white rounded-full flex items-center justify-center transition-all cursor-pointer active:scale-90"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
