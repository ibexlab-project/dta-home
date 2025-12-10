import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getTranslations, type Locale } from "@/lib/get-translations";

interface MobileHeroProps {
  locale: Locale;
}

export function MobileHero({ locale }: MobileHeroProps) {
  const t = getTranslations(locale).hero;
  const slide = t.carousel.slide1;

  return (
    <section className="px-4 pt-6 pb-10">
      <div className="rounded-2xl bg-gradient-to-br from-[#155DFC] to-[#0092B8] p-6 text-white">
        <p className="text-xs font-medium uppercase tracking-widest opacity-80 mb-3">
          {t.tagline}
        </p>
        <h1 className="text-2xl font-bold leading-snug mb-3">
          {slide.title}
        </h1>
        <p className="text-sm leading-relaxed mb-6 opacity-90">
          {slide.description}
        </p>
        <Link
          href={`/m/${locale}/news`}
          className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#0F172A]"
        >
          {slide.buttonText} <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

