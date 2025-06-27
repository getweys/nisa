"use client";
import { CSRSpotlightSection } from "components/CSRSpotlightSection";
import { EarnHeroSection } from "components/EarnHeroSection";
import { GrowWithUsSection } from "components/GrowWithUsSection";
import { HowToJoinSection } from "components/HowToJoinSection";
import { TransparencySection } from "components/TransparencySection";
import { WhoCanJoinSection } from "components/WhoCanJoinSection";
import { WhyChooseSection } from "components/WhyChooseSection";

export default function EarnPage() {
  return (
    <main className="min-h-screen bg-white">
      <EarnHeroSection />
      <WhyChooseSection />
      <WhoCanJoinSection />
      <GrowWithUsSection />
      <CSRSpotlightSection />
      <HowToJoinSection />
      <TransparencySection />
    </main>
  );
}
