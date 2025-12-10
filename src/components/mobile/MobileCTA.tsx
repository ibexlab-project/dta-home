import Link from "next/link";
import type { Locale } from "@/lib/get-translations";
import { getTranslations } from "@/lib/get-translations";

interface MobileCTAProps {
  locale: Locale;
}

export function MobileCTA({ locale }: MobileCTAProps) {
  const t = getTranslations(locale).bottomCTA;
  return (
    <section
      className="px-0 pb-0"
      style={{ background: "linear-gradient(to bottom right, #155DFC, #0092B8)" }}
    >
      <div className="w-full text-center px-6 py-12">
        <h3 className="text-xl font-semibold text-white mb-4">{t.title}</h3>
        <p className="text-sm mb-6 leading-6" style={{ color: "#DBEAFE" }}>
          {t.subtitle}
        </p>
        <div className="flex flex-row items-center justify-center gap-3 flex-wrap">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold"
            style={{ color: "#155DFC", minWidth: "180px" }}
          >
            {t.connectWallet}
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 text-sm font-semibold text-white"
            style={{ minWidth: "180px" }}
          >
            {t.learnMore}
          </Link>
        </div>
      </div>
    </section>
  );
}

