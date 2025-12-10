import Link from "next/link";
import { Globe } from "lucide-react";

interface MobileHeaderProps {
  locale: "en" | "th";
}

export function MobileHeader({ locale }: MobileHeaderProps) {
  return (
    <header
      className="sticky top-0 z-40 flex items-center justify-between bg-white px-4 py-3 shadow-sm"
      style={{ height: "56px" }}
    >
      <Link href={`/m/${locale}`} className="text-lg font-semibold text-[#101828]">
        DTA
      </Link>
      <div className="flex items-center gap-3">
        <Link
          href={`/m/${locale}/news`}
          className="text-sm font-semibold text-[#101828]"
        >
          News
        </Link>
        <div className="flex items-center gap-2 text-sm text-[#4A5565]">
          <Globe size={16} />
          <span className="font-medium uppercase">{locale}</span>
        </div>
      </div>
    </header>
  );
}

