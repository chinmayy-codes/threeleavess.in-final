import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="float-particle absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-primary/30" />
        <div className="float-particle-delayed absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-primary/20" />
        <div className="float-particle absolute bottom-1/3 left-1/3 w-1.5 h-1.5 rounded-full bg-emerald-glow/25" />
        <div className="float-particle-delayed absolute top-2/3 right-1/3 w-2 h-2 rounded-full bg-primary/15" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6 font-sans font-medium">
            Premium Domain For Sale
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="text-5xl sm:text-7xl lg:text-8xl font-serif font-bold mb-6 glow-text gradient-text"
        >
          threeleaves.in
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl sm:text-2xl text-foreground/80 font-serif font-light mb-4"
        >
          A premium, brandable domain for visionary brands.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="text-muted-foreground text-base max-w-lg mx-auto mb-10 font-sans"
        >
          This domain is available for acquisition. Own a name that speaks elegance, growth, and purpose.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-sans font-semibold text-base tracking-wide hover:brightness-110 transition-all duration-300 emerald-glow"
          >
            Make an Offer
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-sans font-medium text-base tracking-wide glow-border text-foreground/90 hover:bg-primary/10 transition-all duration-300"
          >
            Contact Owner
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
