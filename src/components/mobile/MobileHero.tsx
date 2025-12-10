'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { getTranslations, type Locale } from "@/lib/get-translations";

interface MobileHeroProps {
  locale: Locale;
}

export function MobileHero({ locale }: MobileHeroProps) {
  const t = getTranslations(locale).hero;
  const slides = [t.carousel.slide1, t.carousel.slide2, t.carousel.slide3];

  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goTo = (idx: number) => {
    const next = (idx + slides.length) % slides.length;
    setCurrent(next);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 40) goTo(current - 1);
    else if (delta < -40) goTo(current + 1);
    touchStartX.current = null;
  };

  return (
    <section className="px-0 pt-0 pb-0">
      <div
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, idx) => (
            <div key={idx} className="w-full shrink-0">
              <Link href={`/m/${locale}/news#news-${idx}`} className="block space-y-2 px-4">
                <div
                  className="relative overflow-hidden rounded-xl bg-[#F3F4F6] border border-[#E5E7EB]"
                  style={{ height: "240px", width: "100%" }}
                >
                  <Image
                    src={slide.imagePath}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={idx === 0}
                  />
                </div>
                <h1
                  className="font-bold leading-snug text-[#1F2937]"
                  style={{ fontSize: "16px", letterSpacing: "-0.15px" }}
                >
                  {slide.title}
                </h1>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-end gap-1 px-4">
          {slides.map((_, idx) => {
            const active = idx === current;
            return (
              <button
                key={idx}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => goTo(idx)}
                className="h-1.5 w-1.5 rounded-full transition-colors"
                style={{
                  backgroundColor: active ? "#101828" : "#E5E7EB",
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

