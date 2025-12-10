import { getMediaCards } from "@/lib/media-cards";
import type { Locale } from "@/lib/get-translations";
import { MobileHeader } from "@/components/mobile/MobileHeader";
import { MobileHero } from "@/components/mobile/MobileHero";
import { MobileStats } from "@/components/mobile/MobileStats";
import { MobilePartners } from "@/components/mobile/MobilePartners";
import { MobileNewsList } from "@/components/mobile/MobileNewsList";
import { MobileCTA } from "@/components/mobile/MobileCTA";

export default async function MobileHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = (localeParam === "th" ? "th" : "en") as Locale;
  const mediaCards = getMediaCards(locale).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <MobileHeader locale={locale} />
      <main>
        <MobileHero locale={locale} />
        <MobileStats locale={locale} />
        <MobilePartners />
        <MobileNewsList locale={locale} mediaCards={mediaCards} />
        <MobileCTA locale={locale} />
      </main>
    </div>
  );
}

