"use client";
import { HeroSection } from "components/hero-section";
import { WhyChooseSection } from "components/why-choose-section";
import { ServicesSection } from "components/services-section";
import { CommunitySection } from "components/community-section";

export default function Home() {
  return (
    <main className="m-5">
      <HeroSection />
      <WhyChooseSection />
      <ServicesSection />
      <CommunitySection />
    </main>
  );
}
