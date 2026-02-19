import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import AcquisitionSection from "@/components/AcquisitionSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <ValueProposition />
      <AcquisitionSection />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
