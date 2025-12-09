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
import type { Locale } from "@/lib/get-translations";
import { getMediaCards } from "@/lib/media-cards";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = (localeParam === 'th' ? 'th' : 'en') as Locale;

  // Media cards - 상단 3개만 표시
  const allMediaCards = getMediaCards(locale);
  const mediaCards = allMediaCards.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header locale={locale} />
      <main className="flex-1 w-full">
        <HeroSection locale={locale} />
        <InfrastructureSection locale={locale} />
        <ThaiPremiumTourismSection locale={locale} />
        <TechArchitectureSection locale={locale} />
        <RoadmapSection locale={locale} />
        <PartnerNetworkSection locale={locale} />
        <MediaRoomSection locale={locale} mediaCards={mediaCards} />
        <BottomCTASection locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  );
}

