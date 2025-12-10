import type { Locale } from "@/lib/get-translations";
import { getTranslations } from "@/lib/get-translations";

interface MobileInfrastructureProps {
  locale: Locale;
}

export function MobileInfrastructure({ locale }: MobileInfrastructureProps) {
  const t = getTranslations(locale).infrastructure;

  const cards = [
    {
      title: t.dtaLayer,
      desc: t.dtaDescription,
      tagBg: "#DBEAFE",
      tagColor: "#1447E6",
      titleImg: "/images/infrastructure/dta_title.png",
      titleAlt: "DTA",
    },
    {
      title: t.simxLayer,
      desc: t.simxDescription,
      tagBg: "#DBEAFE",
      tagColor: "#1447E6",
      titleImg: "/images/infrastructure/simx_title.png",
      titleAlt: "SiMX",
    },
    {
      title: t.sinodeLayer,
      desc: t.sinodeDescription,
      tagBg: "#CEFAFE",
      tagColor: "#007595",
      titleImg: "/images/infrastructure/sinode_title.png",
      titleAlt: "SiNODE",
    },
    {
      title: t.ecosystemSynergyTitle,
      desc: t.ecosystemSynergyDescription,
      tagBg: "#EFF6FF",
      tagColor: "#155DFC",
      titleImg: "",
      titleAlt: "Ecosystem Synergy",
    },
  ];

  return (
    <section className="px-4 pb-8">
      <div className="space-y-2 mb-4 text-left">
        <h2 className="text-xl font-bold text-[#101828] leading-snug text-left">
          {t.title}
        </h2>
        <p className="text-sm text-[#4A5565] leading-6 text-left">{t.subtitle}</p>
      </div>

      <div className="flex flex-col gap-3">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-white border border-[#EDF0F4] p-4"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                {card.titleImg ? (
                  <>
                    <img
                      src={card.titleImg}
                      alt={card.titleAlt}
                      style={{
                        maxHeight: "20px",
                        width: "auto",
                        display: "block",
                      }}
                    />
                    <span
                      className="inline-flex items-center justify-center px-3 py-1 rounded text-xs font-semibold"
                      style={{
                        backgroundColor: card.tagBg,
                        color: card.tagColor,
                        lineHeight: "1.2",
                        minHeight: "24px",
                      }}
                    >
                      {card.title}
                    </span>
                  </>
                ) : (
                  <span className="text-base font-semibold text-[#101828]">
                    {card.title}
                  </span>
                )}
              </div>
              <p className="text-sm text-[#4A5565] leading-6">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

