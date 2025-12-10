import { getMediaCards } from "@/lib/media-cards";
import type { Locale } from "@/lib/get-translations";
import { MobileHeader } from "@/components/mobile/MobileHeader";
import { MobileHero } from "@/components/mobile/MobileHero";
import { MobileInfrastructure } from "@/components/mobile/MobileInfrastructure";
import { MobileTechArchitecture } from "@/components/mobile/MobileTechArchitecture";
import { MobileRoadmap } from "@/components/mobile/MobileRoadmap";
import { MobileMarketFocus } from "@/components/mobile/MobileMarketFocus";
import { MobilePartners } from "@/components/mobile/MobilePartners";
import { MobileNewsList } from "@/components/mobile/MobileNewsList";
import { MobileCTA } from "@/components/mobile/MobileCTA";
import { MobileFooter } from "@/components/mobile/MobileFooter";

export default async function MobileHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = (localeParam === "th" ? "th" : "en") as Locale;
  const mediaCards = getMediaCards(locale).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#E5E7EB]">
      <MobileHeader locale={locale} />
      <main className="bg-[#E5E7EB] pt-24">
        <div className="bg-white mb-2 py-4">
          <MobileHero locale={locale} />
        </div>
        <div
          id="core-structure"
          className="bg-white mb-2 py-4"
          style={{ scrollMarginTop: "96px" }}
        >
          <MobileInfrastructure locale={locale} />
        </div>
        <div
          id="market-strategy"
          className="bg-white mb-2 py-4"
          style={{ scrollMarginTop: "96px" }}
        >
          <MobileMarketFocus locale={locale} />
        </div>
        <div
          id="technology"
          className="bg-white mb-2 py-4"
          style={{ scrollMarginTop: "96px" }}
        >
          <MobileTechArchitecture locale={locale} />
        </div>
        <div
          id="roadmap"
          className="bg-white mb-2 py-4"
          style={{ scrollMarginTop: "96px" }}
        >
          <MobileRoadmap locale={locale} />
        </div>
        <div
          id="partners"
          className="bg-white mb-2 py-4"
          style={{ scrollMarginTop: "96px" }}
        >
          <MobilePartners locale={locale} />
        </div>
        <div
          id="news"
          className="bg-white py-4"
          style={{ scrollMarginTop: "96px" }}
        >
          <MobileNewsList locale={locale} mediaCards={mediaCards} />
        </div>
        <div className="py-0">
          <MobileCTA locale={locale} />
        </div>
        <MobileFooter locale={locale} />
      </main>
    </div>
  );
}

