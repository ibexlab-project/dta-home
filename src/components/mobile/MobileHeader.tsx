'use client';

import Link from "next/link";
import Image from "next/image";
import { Globe } from "lucide-react";
import { useState } from "react";

interface MobileHeaderProps {
  locale: "en" | "th";
}

export function MobileHeader({ locale }: MobileHeaderProps) {
  const [langOpen, setLangOpen] = useState(false);

  const navItems = [
    { label: "Architecture", href: `/m/${locale}#core-structure` },
    { label: "Market", href: `/m/${locale}#market-strategy` },
    { label: "Technology", href: `/m/${locale}#technology` },
    { label: "Roadmap", href: `/m/${locale}#roadmap` },
    { label: "Partners", href: `/m/${locale}#partners` },
    { label: "News", href: `/m/${locale}/news` },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 flex flex-col"
        style={{ backgroundColor: "#101828" }}
      >
        {/* Top bar */}
        <div className="relative flex items-center justify-between px-4 py-2" style={{ height: "48px" }}>
          <div className="flex items-center gap-2">
            <Link href={`/m/${locale}`} className="flex items-center">
              <span className="text-xl font-bold italic text-white leading-none">
                DTA<span style={{ color: "#0279D5" }}>.</span>
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLangOpen((v) => !v)}
              aria-label="Select language"
              className="inline-flex items-center gap-2 text-sm font-medium text-white px-2 py-1 rounded-md hover:bg-white/10 transition-colors"
            >
              <Globe size={16} className="text-white" />
              <span className="uppercase">{locale}</span>
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
        <nav className="no-scrollbar subnav-scroll flex items-center gap-4 px-4 h-12 text-sm text-[#DBEAFE] overflow-x-auto whitespace-nowrap">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-semibold hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

    </>
  );
}

