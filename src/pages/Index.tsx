import { HeroSection } from "@/components/HeroSection";
import { MethodExplanationSection } from "@/components/MethodExplanationSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { VideoSection } from "@/components/VideoSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BonusSection } from "@/components/BonusSection";
import { WhatIsIncludedSection } from "@/components/WhatIsIncludedSection";
import { PricingSection } from "@/components/PricingSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
import { BlackFridayBanner } from "@/components/BlackFridayBanner";
import { SocialProofNotification } from "@/components/SocialProofNotification";
import { memo } from "react";

const Index = memo(() => {
  return (
    <div className="min-h-screen font-inter">
      <BlackFridayBanner />
      <SocialProofNotification />
      <HeroSection />
      <MethodExplanationSection />
      <HowItWorksSection />
      <VideoSection />
      <BenefitsSection />
      <TestimonialsSection />
      <WhatIsIncludedSection />
      <BonusSection />
      <PricingSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTASection />

      {/* Checkout section */}
      <section id="checkout" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="font-fredoka text-3xl md:text-4xl font-bold text-navy">
              Pronto para transformar a alfabetização do seu filho?
            </h2>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
});

Index.displayName = "Index";

export default Index;
