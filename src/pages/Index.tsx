import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import GemstoneSelector from "@/components/GemstoneSelector";
import HowToWear from "@/components/HowToWear";
import CareTimeline from "@/components/CareTimeline";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrustSection />
      <GemstoneSelector />
      <div id="how-to-wear">
        <HowToWear />
      </div>
      <div id="care">
        <CareTimeline />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
