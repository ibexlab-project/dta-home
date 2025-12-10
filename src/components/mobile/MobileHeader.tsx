'use client';

import Link from "next/link";
import Image from "next/image";
import { Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface MobileHeaderProps {
  locale: "en" | "th";
}

export function MobileHeader({ locale }: MobileHeaderProps) {
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const [active, setActive] = useState("core-structure");

  const navItems = [
    { label: "Architecture", key: "core-structure", href: `/m/${locale}#core-structure` },
    { label: "Market", key: "market-strategy", href: `/m/${locale}#market-strategy` },
    { label: "Technology", key: "technology", href: `/m/${locale}#technology` },
    { label: "Roadmap", key: "roadmap", href: `/m/${locale}#roadmap` },
    { label: "Partners", key: "partners", href: `/m/${locale}#partners` },
    { label: "News", key: "news", href: `/m/${locale}/news` },
  ];

  useEffect(() => {
    const readHash = () => {
      if (/\/m\/(en|th)\/news/.test(pathname)) return "news";
      const hash = window.location.hash?.replace("#", "") || "";
      if (!hash) return "core-structure";
      return hash;
    };
    const update = () => setActive(readHash());
    update();
    window.addEventListener("hashchange", update);
    window.addEventListener("popstate", update);
    return () => {
      window.removeEventListener("hashchange", update);
      window.removeEventListener("popstate", update);
    };
  }, [pathname]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 flex flex-col bg-white"
      >
        {/* Top bar */}
        <div className="relative flex items-center justify-between px-4 py-2" style={{ height: "48px" }}>
          <div className="flex items-center gap-2">
            <Link href={`/m/${locale}`} className="flex items-center">
              <span className="text-xl font-bold italic text-[#101828] leading-none">
                DTA<span style={{ color: "#0279D5" }}>.</span>
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLangOpen((v) => !v)}
              aria-label="Select language"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#101828] px-2 py-1 rounded-md hover:bg-[#EDF2F7] transition-colors"
            >
              <Globe size={16} className="text-[#101828]" />
              <span className="uppercase text-[#101828]">{locale}</span>
            </button>
            {langOpen && (
              <div className="absolute right-4 top-12 z-50 rounded-md bg-white shadow-lg border border-[#E5E7EB] overflow-hidden text-sm">
                <Link
                  href="/m/en"
                  className="block px-3 py-2 text-[#111827] hover:bg-[#F3F4F6]"
                  onClick={() => setLangOpen(false)}
                >
                  English
                </Link>
                <Link
                  href="/m/th"
                  className="block px-3 py-2 text-[#111827] hover:bg-[#F3F4F6]"
                  onClick={() => setLangOpen(false)}
                >
                  ภาษาไทย
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Subnav bar */}
        <nav className="no-scrollbar subnav-scroll flex items-center gap-4 px-4 h-12 text-sm text-[#101828] overflow-x-auto whitespace-nowrap border-b border-[#E5E7EB] bg-white">
          {navItems.map((item) => {
            const isActive = active === item.key;
            return (
              <div key={item.href} className="relative h-full flex items-center">
                <Link
                  href={item.href}
                  className={`font-semibold transition-colors px-0 ${
                    isActive 
                      ? "text-[#101828]" 
                      : "text-[#101828] hover:text-[#155DFC]"
                  }`}
                  onClick={() => setActive(item.key)}
                >
                  {item.label}
                </Link>
                <div
                  className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#101828] rounded-full transition-opacity duration-150"
                  style={{ opacity: isActive ? 1 : 0 }}
                />
              </div>
            );
          })}
        </nav>
      </header>

    </>
  );
}

function useHashActive(defaultKey: string, pathname: string) {
  const [value, setValue] = useState(defaultKey);

  useEffect(() => {
    const readHash = () => {
      if (/\/m\/(en|th)\/news/.test(pathname)) return "news";
      const hash = window.location.hash?.replace("#", "") || "";
      if (!hash) return defaultKey;
      return hash;
    };
    const update = () => setValue(readHash());
    update();
    window.addEventListener("hashchange", update);
    window.addEventListener("popstate", update);
    return () => {
      window.removeEventListener("hashchange", update);
      window.removeEventListener("popstate", update);
    };
  }, [defaultKey, pathname]);

  return value;
}

