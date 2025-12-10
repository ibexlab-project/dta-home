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

      <main className="px-0 pt-28 pb-12">
        <div className="mb-6 px-4">
          <h1 className="text-2xl font-bold text-[#0F172A] mb-2">News</h1>
          <p className="text-sm text-[#4A5565] leading-6">{subtitle}</p>
        </div>

        <div className="flex flex-col">
          {mediaCards.map((card, index) => (
            <div key={index}>
              {index > 0 && <div className="h-2 w-full bg-[#EDF0F4]" />}
              <article
                id={`news-${index}`}
                style={{ scrollMarginTop: "100px" }}
                className="space-y-4 py-8 px-4"
              >
                <h2 className="text-lg font-semibold text-[#0F172A] leading-6">
                  {card.title}
                </h2>
                <div className="w-full overflow-hidden rounded-xl bg-[#F3F4F6]">
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div
                  className="media-card-content text-sm text-[#111827] leading-6"
                  dangerouslySetInnerHTML={{ __html: card.description }}
                />
              </article>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

