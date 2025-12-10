import Link from "next/link";
import Image from "next/image";
import type { MediaCard } from "@/lib/media-cards";
import type { Locale } from "@/lib/get-translations";
import { getTranslations } from "@/lib/get-translations";

interface MobileNewsListProps {
  locale: Locale;
  mediaCards: MediaCard[];
}

export function MobileNewsList({ locale, mediaCards }: MobileNewsListProps) {
  const t = getTranslations(locale).media;
  return (
    <section className="px-4 pb-10">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-[#0F172A]">
          {t.title1} {t.title2}
        </h2>
        <Link
          href={`/m/${locale}/news`}
          className="text-sm font-semibold text-[#0279D5]"
        >
          {t.seeMoreNews}
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        {mediaCards.map((card, index) => (
          <Link
            key={index}
            href={`/m/${locale}/news#news-${index}`}
            className="flex gap-3 rounded-xl border border-[#E5E7EB] bg-white p-3"
          >
            <div className="relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-lg bg-[#F3F4F6]">
              <Image
                src={card.image}
                alt={card.imageAlt}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-[#0F172A] line-clamp-2 mb-1">
                {card.title}
              </h3>
              <div
                className="text-xs text-[#4A5565] leading-5 line-clamp-2 media-card-content"
                dangerouslySetInnerHTML={{ __html: card.description }}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

