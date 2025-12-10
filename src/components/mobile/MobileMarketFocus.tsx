import type { Locale } from "@/lib/get-translations";
import { getTranslations } from "@/lib/get-translations";
import { Target, Users, CalendarCheck, Heart, TrendingUp } from "lucide-react";

interface MobileMarketFocusProps {
  locale: Locale;
}

export function MobileMarketFocus({ locale }: MobileMarketFocusProps) {
  const t = getTranslations(locale).marketFocus;

  const cards = [
    {
      title: t.marketOfOpportunityTitle,
      desc: t.marketOfOpportunityDescription,
      icon: Target,
      iconColor: "#155DFC",
      iconBg: "#EFF6FF",
    },
    {
      title: t.coreTargetTitle,
      desc: t.coreTargetDescription,
      icon: Users,
      iconColor: "#00A63E",
      iconBg: "#F0FDF4",
    },
    {
      title: t.highYieldNicheFocusTitle,
      items: [
        {
          title: t.golfTourismTitle,
          desc: t.golfTourismDescription,
          icon: CalendarCheck,
          iconColor: "#E17100",
          iconBg: "#FFFBEB",
        },
        {
          title: t.medicalWellnessTitle,
          desc: t.medicalWellnessDescription,
          icon: Heart,
          iconColor: "#155DFC",
          iconBg: "#EFF6FF",
        },
        {
          title: t.luxuryExperientialTravelTitle,
          desc: t.luxuryExperientialTravelDescription,
          icon: TrendingUp,
          iconColor: "#9810FA",
          iconBg: "#FAF5FF",
        },
      ],
    },
  ];

  return (
    <section className="px-4 pb-8">
      <div className="space-y-2 mb-4 text-left">
        <h2 className="text-xl font-bold text-[#101828] leading-snug text-left">
          {t.title}
        </h2>
        <p className="text-sm text-[#4A5565] leading-6 text-left">
          {t.subtitle}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-white border border-[#EDF0F4] p-4"
          >
            <div className="flex items-center gap-2 mb-2">
              {"icon" in card && card.icon ? (
                <div
                  className="flex items-center justify-center rounded-lg"
                  style={{
                    width: "36px",
                    height: "36px",
                    backgroundColor: card.iconBg ?? "#EFF6FF",
                  }}
                >
                  <card.icon size={18} style={{ color: card.iconColor }} />
                </div>
              ) : null}
              <h3 className="text-base font-semibold text-[#101828]">
                {card.title}
              </h3>
            </div>
            {"items" in card && card.items ? (
              <div className="space-y-2">
                {card.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    {"icon" in item && item.icon ? (
                      <div
                        className="flex items-center justify-center rounded-lg mt-0.5"
                        style={{
                          width: "32px",
                          height: "32px",
                          backgroundColor: item.iconBg ?? "#F3F4F6",
                        }}
                      >
                        <item.icon size={16} style={{ color: item.iconColor }} />
                      </div>
                    ) : null}
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-[#0F172A]">
                        {item.title}
                      </div>
                      <p className="text-sm text-[#4A5565] leading-6">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-[#4A5565] leading-6">{card.desc}</p>
            )}
          </div>
        ))}
      </div>

      {/* Phased Market Penetration - single card */}
      <div className="mt-4">
        <div className="rounded-xl bg-white border border-[#EDF0F4] p-4 space-y-3">
          <h3 className="text-base font-semibold text-[#101828]">
            {t.phasedMarketPenetrationTitle}
          </h3>
          <div className="space-y-3">
            {[
              {
                num: "1",
                bg: "#DBEAFE",
                color: "#155DFC",
                title: t.phase1Title,
                desc: t.phase1Description,
              },
              {
                num: "2",
                bg: "#DCFCE7",
                color: "#00A63E",
                title: t.phase2Title,
                desc: t.phase2Description,
              },
              {
                num: "3",
                bg: "#F3E8FF",
                color: "#9810FA",
                title: t.phase3Title,
                desc: t.phase3Description,
              },
            ].map((phase, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div
                  className="flex items-center justify-center shrink-0 font-bold text-sm rounded-lg"
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: phase.bg,
                    color: phase.color,
                  }}
                >
                  {phase.num}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="text-sm font-semibold text-[#101828]">
                    {phase.title}
                  </div>
                  <p className="text-sm text-[#4A5565] leading-6">
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

