import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import AcquisitionSection from "@/components/AcquisitionSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative bg-background min-h-screen overflow-hidden">
      {/* Global gradient mesh background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Top-left emerald glow */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px] animate-drift" />
        {/* Center-right teal glow */}
        <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-emerald-glow/6 blur-[100px] animate-drift-delayed" />
        {/* Bottom-left accent */}
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[100px] animate-drift" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(152 60% 42% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(152 60% 42% / 0.3) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Decorative SVG shapes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Large rotating ring */}
        <svg className="absolute -top-20 -right-20 w-[500px] h-[500px] opacity-[0.04] animate-spin-slow" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="none" stroke="hsl(152 60% 42%)" strokeWidth="0.5" strokeDasharray="8 4" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="hsl(152 60% 42%)" strokeWidth="0.3" strokeDasharray="4 8" />
        </svg>
        {/* Abstract leaf shape */}
        <svg className="absolute bottom-40 -left-10 w-[300px] h-[300px] opacity-[0.05] animate-drift-delayed" viewBox="0 0 100 100">
          <path d="M50 10 Q80 30 70 60 Q60 90 50 90 Q40 90 30 60 Q20 30 50 10Z" fill="none" stroke="hsl(152 60% 42%)" strokeWidth="0.5" />
          <path d="M50 20 Q70 35 63 58 Q56 80 50 80 Q44 80 37 58 Q30 35 50 20Z" fill="hsl(152 60% 42% / 0.03)" />
        </svg>
        {/* Diamond grid */}
        <svg className="absolute top-2/3 right-1/4 w-[200px] h-[200px] opacity-[0.04] animate-drift" viewBox="0 0 100 100">
          <polygon points="50,10 90,50 50,90 10,50" fill="none" stroke="hsl(152 60% 42%)" strokeWidth="0.5" />
          <polygon points="50,25 75,50 50,75 25,50" fill="none" stroke="hsl(152 60% 42%)" strokeWidth="0.3" />
        </svg>
      </div>

      <div className="relative z-10">
        <HeroSection />
        <ValueProposition />
        <AcquisitionSection />
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
