import { motion } from "framer-motion";
import { Shield, Zap, UserCheck } from "lucide-react";

const AcquisitionSection = () => {
  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase font-sans font-medium mb-3">
            Invest in Your Brand
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-foreground mb-6">
            Acquisition Opportunity
          </h2>
          <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto mb-10">
            Serious offers are invited for this premium domain. Secure a brand-defining name before someone else does.
          </p>
        </motion.div>

        {/* Price badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card inline-block px-10 py-6 mb-14 glow-border"
        >
          <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase font-sans mb-1">
            Starting At
          </p>
          {/* ✏️ Edit the price below */}
          <p className="text-4xl sm:text-5xl font-serif font-bold gradient-text">
            $100
          </p>
          <p className="text-muted-foreground text-sm font-sans mt-2">
            or make your best offer
          </p>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-8 justify-center items-center"
        >
          {[
            { icon: UserCheck, label: "Direct Owner" },
            { icon: Zap, label: "Fast Transfer" },
            { icon: Shield, label: "Secure Transaction" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 text-muted-foreground">
              <item.icon className="w-5 h-5 text-primary/70" />
              <span className="font-sans text-sm">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AcquisitionSection;
