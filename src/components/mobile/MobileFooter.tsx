import { Mail } from "lucide-react";
import type { Locale } from "@/lib/get-translations";
import { getTranslations } from "@/lib/get-translations";

interface MobileFooterProps {
  locale: Locale;
}

export function MobileFooter({ locale }: MobileFooterProps) {
  const t = getTranslations(locale).footer;

  return (
    <footer
      className="text-white mt-0"
      style={{ backgroundColor: "#101828" }}
    >
      <div className="px-6 py-8 space-y-6">
        <div className="space-y-3">
          <h3 className="text-xl font-bold">
            <span className="italic">DTA</span>
            <span style={{ color: "#0279D5" }}>.</span>
          </h3>
          <p className="text-sm text-gray-400 leading-6">{t.description}</p>
        </div>

        <div className="space-y-4">
          <h4 className="text-base font-semibold">{t.forPartners}</h4>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-400">
            <span>{t.sinodePlatform}</span>
            <span>{t.partnerNetwork}</span>
            <span>{t.becomeAPartner}</span>
            <span>{t.businessInquiries}</span>
          </div>
        </div>

        <div className="space-y-2 text-sm text-gray-400 leading-6">
          <h4 className="text-base font-semibold text-white">
            {t.ourEcosystemForPartners}
          </h4>
          <p>{t.ecosystemDescription}</p>
        </div>
      </div>

      <div className="border-t border-gray-700 px-6 py-8 flex flex-col gap-3 text-sm text-gray-400" style={{ paddingBottom: "48px" }}>
        <div>{t.copyright}</div>
      </div>
    </footer>
  );
}

