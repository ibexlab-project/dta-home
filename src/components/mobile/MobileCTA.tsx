import Link from "next/link";
import type { Locale } from "@/lib/get-translations";
import { getTranslations } from "@/lib/get-translations";

interface MobileCTAProps {
  locale: Locale;
}

export function MobileCTA({ locale }: MobileCTAProps) {
  const t = getTranslations(locale).bottomCTA;
  return (
    <section className="px-4 pb-12">
      <div className="rounded-2xl bg-gradient-to-br from-[#EFF6FF] to-[#ECFEFF] border border-[#DBEAFE] p-5 text-center">
        <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
          {t.title}
        </h3>
        <p className="text-sm text-[#4A5565] mb-4 leading-6">
          {t.subtitle}
        </p>
        <Link
          href="#"
          className="inline-flex items-center justify-center rounded-lg bg-[#0279D5] px-5 py-2 text-sm font-semibold text-white"
        >
          {t.learnMore}
        </Link>
      </div>
    </section>
  );
}

