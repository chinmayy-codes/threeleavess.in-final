import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_evpiwp6",
        "template_nhfvjo9",
        e.currentTarget,
        {
          publicKey: "dFgOT4OjLZH_cUbdM",
        },
      );

      setSubmitted(true);
      e.currentTarget.reset();
    } catch (error) {
      console.error("Failed to send email", error);
      alert("Something went wrong sending your message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase font-sans font-medium mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-foreground">
            Make Your Move
          </h2>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-12 text-center glow-border"
            >
              <CheckCircle className="w-14 h-14 text-primary mx-auto mb-5" />
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-3">
                Message Received
              </h3>
              <p className="text-muted-foreground font-sans">
                Thank you for your interest. We'll respond within 24 hours.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              onSubmit={handleSubmit}
              className="glass-card p-8 sm:p-10 space-y-6"
            >
              <div>
                <label className="block text-sm font-sans font-medium text-foreground/80 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground font-sans text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-sans font-medium text-foreground/80 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  maxLength={255}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground font-sans text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-sans font-medium text-foreground/80 mb-2">
                  Offer Amount{" "}
                  <span className="text-muted-foreground">(optional)</span>
                </label>
                <input
                  type="text"
                  name="offer"
                  maxLength={50}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground font-sans text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                  placeholder="$100"
                />
              </div>

              <div>
                <label className="block text-sm font-sans font-medium text-foreground/80 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  maxLength={1000}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground font-sans text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-none"
                  placeholder="Tell us about your brand and how you plan to use this domain..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-sans font-semibold text-base tracking-wide hover:brightness-110 transition-all duration-300 emerald-glow disabled:opacity-60"
              >
                {loading ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    Submit Inquiry <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactForm;
