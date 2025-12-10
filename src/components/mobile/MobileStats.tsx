import { getTranslations, type Locale } from "@/lib/get-translations";

interface StatItem {
  value: string;
  label: string;
}

interface MobileStatsProps {
  locale: Locale;
}

export function MobileStats({ locale }: MobileStatsProps) {
  const hero = getTranslations(locale).hero;
  const stats: StatItem[] = [
    { value: hero.annualTouristsNumber, label: hero.annualTouristsLabel },
    { value: hero.tourismMarketNumber, label: hero.tourismMarketLabel },
    { value: hero.premiumPartnersNumber, label: hero.premiumPartnersLabel },
  ];

  return (
    <section className="px-4 pb-8">
      <div className="grid grid-cols-1 gap-3">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-[#E5E7EB] bg-white px-4 py-3"
          >
            <div className="text-xl font-semibold text-[#0F172A]">
              {stat.value}
            </div>
            <div className="text-sm text-[#4A5565]">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

