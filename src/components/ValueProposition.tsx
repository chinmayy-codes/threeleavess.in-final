import { motion } from "framer-motion";
import { Sparkles, Globe, TrendingUp } from "lucide-react";

const cards = [
  {
    icon: Sparkles,
    title: "Memorable & Brandable",
    description:
      "\"Three Leaves\" is evocative, elegant, and instantly memorable — a name that sticks with customers and tells a story.",
  },
  {
    icon: Globe,
    title: "Versatile Industry Fit",
    description:
      "Perfect for eco-conscious brands, wellness startups, fintech, premium tea companies, or any venture that values growth.",
  },
  {
    icon: TrendingUp,
    title: "Strong .in TLD Potential",
    description:
      "India's digital economy is booming. A premium .in domain positions you at the forefront of this massive market.",
  },
];

const ValueProposition = () => {
  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase font-sans font-medium mb-3">
            Why This Domain
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-foreground">
            A Name Worth Owning
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card p-8 group hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
