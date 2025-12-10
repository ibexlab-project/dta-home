import { getTranslations, type Locale } from "@/lib/get-translations";
import { getMediaCards } from "@/lib/media-cards";
import Link from "next/link";
import Image from "next/image";
import { MobileHeader } from "@/components/mobile/MobileHeader";

export default async function MobileNewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = (localeParam === "th" ? "th" : "en") as Locale;
  const t = getTranslations(locale).media as {
    title1: string;
    title2: string;
    subtitle?: string;
    newsPageSubtitle?: string;
    seeMoreNews: string;
  };
  const mediaCards = getMediaCards(locale);
  const subtitle = t.newsPageSubtitle ?? t.subtitle ?? "";

  return (
    <div className="min-h-screen bg-white">
      <MobileHeader locale={locale} />

      <main className="px-4 pt-4 pb-12">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#0F172A] mb-2">
            {t.title1} {t.title2}
          </h1>
          <p className="text-sm text-[#4A5565] leading-6">{subtitle}</p>
        </div>

        <div className="flex flex-col gap-6">
          {mediaCards.map((card, index) => (
            <article
              key={index}
              id={`news-${index}`}
              className="rounded-2xl border border-[#E5E7EB] bg-white overflow-hidden"
              style={{ scrollMarginTop: "80px" }}
            >
              <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-3">
                <h2 className="text-lg font-semibold text-[#0F172A] leading-6">
                  {card.title}
                </h2>
                <div
                  className="media-card-content text-sm text-[#111827] leading-6"
                  dangerouslySetInnerHTML={{ __html: card.description }}
                />
                <Link
                  href={`/${locale}/news#news-${index}`}
                  className="inline-flex text-sm font-semibold text-[#0279D5]"
                >
                  View on desktop
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

