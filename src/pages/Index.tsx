import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import JumpNav from "@/components/JumpNav";
import TrustSection from "@/components/TrustSection";
import GemstoneSelector from "@/components/GemstoneSelector";
import CrystalPairingGuide from "@/components/CrystalPairingGuide";
import HowToWear from "@/components/HowToWear";
import CareTimeline from "@/components/CareTimeline";
import FAQ from "@/components/FAQ";
import AuthenticitySection from "@/components/AuthenticitySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <JumpNav />
      <TrustSection />
      <GemstoneSelector />
      <CrystalPairingGuide />
      <div id="how-to-wear">
        <HowToWear />
      </div>
      <div id="care">
        <CareTimeline />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <AuthenticitySection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
