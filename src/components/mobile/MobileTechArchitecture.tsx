import { Database, ShieldCheck, TrendingUp } from "lucide-react";
import type { Locale } from "@/lib/get-translations";
import { getTranslations } from "@/lib/get-translations";

interface MobileTechArchitectureProps {
  locale: Locale;
}

export function MobileTechArchitecture({ locale }: MobileTechArchitectureProps) {
  const t = getTranslations(locale).techArchitecture;

  const items = [
    {
      icon: Database,
      bg: "#EFF6FF",
      color: "#155DFC",
      title: t.hybridArchitectureTitle,
      desc: t.hybridArchitectureDescription,
    },
    {
      icon: ShieldCheck,
      bg: "#F0FDF4",
      color: "#00A63E",
      title: t.nftAuditProofsTitle,
      desc: t.nftAuditProofsDescription,
    },
    {
      icon: TrendingUp,
      bg: "#FAF5FF",
      color: "#9810FA",
      title: t.phasedNetworkExpansionTitle,
      desc: t.phasedNetworkExpansionDescription,
    },
  ];

  return (
    <section className="px-4 pb-8">
      <div className="space-y-2 mb-4 text-left">
        <h2 className="text-xl font-bold text-[#101828] leading-snug">
          {t.title1} <span style={{ color: "#0279D5" }}>{t.title2}</span>
        </h2>
        <p className="text-sm text-[#4A5565] leading-6">{t.subtitle}</p>
      </div>

      <div className="rounded-xl bg-white border border-[#EDF0F4] p-4 space-y-3">
        {items.map((item, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex items-center gap-2">
              <div
                className="flex items-center justify-center shrink-0 rounded-lg"
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: item.bg,
                  color: item.color,
                }}
              >
                <item.icon className="w-4 h-4" />
              </div>
              <div className="text-sm font-semibold text-[#101828]">
                {item.title}
              </div>
            </div>
            <p className="text-sm text-[#4A5565] leading-6">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

