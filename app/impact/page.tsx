"use client";

import { CSRPillarsSection } from "components/ImpactCSRPillarsSection";
import { DividerSection } from "components/ImpactDividerSection";
import { HeadlineStatsSection } from "components/ImpactHeadlineStatsSection";
import { ImpactHeroSection } from "components/ImpactHeroSection";
import { JoinMovementSection } from "components/ImpactJoinMovementSection";
import { ProblemSection } from "components/ImpactProblemSection";
import { StoriesSection } from "components/ImpactStoriesSection";
import { VisionSection } from "components/ImpactVisionSection";

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <ImpactHeroSection />
      <DividerSection />
      <HeadlineStatsSection />
      <ProblemSection />
      <StoriesSection />
      <CSRPillarsSection />
      <VisionSection />
      <JoinMovementSection />
    </div>
  );
}
