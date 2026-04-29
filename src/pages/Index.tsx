import { lazy, Suspense } from "react";
import UrgencyBar from "@/components/sales/UrgencyBar";
import Hero from "@/components/sales/Hero";

// Below-the-fold: code-split para reduzir o bundle inicial
const Positioning = lazy(() => import("@/components/sales/Positioning"));
const Pain = lazy(() => import("@/components/sales/Pain"));
const Promise = lazy(() => import("@/components/sales/Promise"));
const Modules = lazy(() => import("@/components/sales/Modules"));
const Audience = lazy(() => import("@/components/sales/Audience"));
const SocialProof = lazy(() => import("@/components/sales/SocialProof"));
const LogosMarquee = lazy(() => import("@/components/sales/LogosMarquee"));
const Testimonials = lazy(() => import("@/components/sales/Testimonials"));
const Format = lazy(() => import("@/components/sales/Format"));
const Mentoring = lazy(() => import("@/components/sales/Mentoring"));
const Pricing = lazy(() => import("@/components/sales/Pricing"));
const FAQ = lazy(() => import("@/components/sales/FAQ"));
const FinalCTA = lazy(() => import("@/components/sales/FinalCTA"));
const Footer = lazy(() => import("@/components/sales/Footer"));

const SectionFallback = () => <div className="min-h-[40vh]" aria-hidden />;

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground font-body">
      <UrgencyBar />
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <Positioning />
        <Pain />
        <Promise />
        <Modules />
        <Audience />
        <SocialProof />
        <LogosMarquee />
        <Testimonials />
        <Format />
        <Mentoring />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <Footer />
      </Suspense>
    </main>
  );
};

export default Index;
