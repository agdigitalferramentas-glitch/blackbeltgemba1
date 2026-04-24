import UrgencyBar from "@/components/sales/UrgencyBar";
import Hero from "@/components/sales/Hero";
import Positioning from "@/components/sales/Positioning";
import Pain from "@/components/sales/Pain";
import Promise from "@/components/sales/Promise";
import Modules from "@/components/sales/Modules";
import Audience from "@/components/sales/Audience";
import SocialProof from "@/components/sales/SocialProof";
import Format from "@/components/sales/Format";
import Mentoring from "@/components/sales/Mentoring";
import Pricing from "@/components/sales/Pricing";
import FAQ from "@/components/sales/FAQ";
import FinalCTA from "@/components/sales/FinalCTA";
import Footer from "@/components/sales/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground font-body">
      <UrgencyBar />
      <Hero />
      <Positioning />
      <Pain />
      <Promise />
      <Modules />
      <Audience />
      <SocialProof />
      <Format />
      <Mentoring />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
