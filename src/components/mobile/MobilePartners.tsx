import type { Locale } from "@/lib/get-translations";
import { getTranslations } from "@/lib/get-translations";

const partnerLogos = [
  { src: "/images/partners/partner_1.png", alt: "Partner 1" },
  { src: "/images/partners/partner_2.png", alt: "Partner 2" },
  { src: "/images/partners/partner_3.png", alt: "Partner 3" },
];

interface MobilePartnersProps {
  locale: Locale;
}

export function MobilePartners({ locale }: MobilePartnersProps) {
  const t = getTranslations(locale).partners;

  return (
    <section className="px-4 pb-8 text-left">
      <div className="mb-3 space-y-1">
        <h2 className="text-lg font-semibold text-[#0F172A]">
          {t.title1} {t.title2}
        </h2>
        <p className="text-sm text-[#4A5565] leading-6">{t.subtitle}</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {partnerLogos.map((logo, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-white border border-[#EDF0F4] px-4 py-3 flex items-center justify-center"
            style={{ height: "80px" }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                width: "auto",
                height: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

