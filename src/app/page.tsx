import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { InfrastructureSection } from "@/components/sections/InfrastructureSection";
import { ThaiPremiumTourismSection } from "@/components/sections/ThaiPremiumTourismSection";
import { TechArchitectureSection } from "@/components/sections/TechArchitectureSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { PartnerNetworkSection } from "@/components/sections/PartnerNetworkSection";
import { MediaRoomSection } from "@/components/sections/MediaRoomSection";
import { BottomCTASection } from "@/components/sections/BottomCTASection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      <main className="flex-1 w-full">
        <HeroSection />
        <InfrastructureSection />
        <ThaiPremiumTourismSection />
        <TechArchitectureSection />
        <RoadmapSection />
        <PartnerNetworkSection />
        <MediaRoomSection />
        <BottomCTASection />
      </main>
      <Footer />
    </div>
  );
}
