import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import VisitingCard from "@/components/VisitingCard";
import Footer from "@/components/Footer";
import WhyChooseSection, { FloatingContactRail } from "@/components/WhyChooseSection";

const Index = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <VisitingCard />
      <ServicesSection />
      <WhyChooseSection />
      <ContactSection />
      <Footer />
      <FloatingContactRail />
    </div>
  );
};

export default Index;
