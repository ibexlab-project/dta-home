import type { Locale } from "@/lib/get-translations";
import { getTranslations } from "@/lib/get-translations";

interface MobileRoadmapProps {
  locale: Locale;
}

export function MobileRoadmap({ locale }: MobileRoadmapProps) {
  const t = getTranslations(locale).roadmap;

  const years = [
    {
      year: "2025",
      theme: t.year2025Theme,
      highlights: t.year2025Highlights,
    },
    {
      year: "2026",
      theme: t.year2026Theme,
      highlights: t.year2026Highlights,
    },
    {
      year: "2027",
      theme: t.year2027Theme,
      highlights: t.year2027Highlights,
    },
  ];

  return (
    <section className="px-4 pb-8">
      <div className="space-y-2 mb-4 text-left">
        <h2 className="text-xl font-bold text-[#101828] leading-snug">
          {t.title}
        </h2>
        <p className="text-sm text-[#4A5565] leading-6">{t.subtitle}</p>
      </div>

      <div className="space-y-3">
        {years.map((item) => (
          <div
            key={item.year}
            className="rounded-xl bg-white border border-[#EDF0F4] p-4 space-y-2"
          >
            <div className="flex items-center gap-3">
              <span
                className="inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-semibold"
                style={{ backgroundColor: "#EEF4FF", color: "#155DFC" }}
              >
                {item.year}
              </span>
              <span className="text-sm font-semibold text-[#101828] leading-snug">
                {item.theme}
              </span>
            </div>
            <div className="space-y-2">
              {item.highlights.map((h: string, idx: number) => (
                <p key={idx} className="text-sm text-[#4A5565] leading-6">
                  - {h}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

