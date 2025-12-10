'use client';

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getTranslations, type Locale } from "@/lib/get-translations";

interface HeroSectionProps {
    locale: Locale;
}

export function HeroSection({ locale }: HeroSectionProps) {
    const t = getTranslations(locale).hero;
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        t.carousel.slide1,
        t.carousel.slide2,
        t.carousel.slide3,
    ];

    // Auto-rotate slides every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section 
            className="relative bg-white"
            style={{
                paddingTop: '80px',
                paddingBottom: '0px',
                overflow: 'hidden'
            }}
        >
            <div 
                className="relative"
                        style={{ 
                    width: '1440px', 
                    maxWidth: '100%',
                    margin: '0 auto', 
                    paddingLeft: '64px', 
                    paddingRight: '64px' 
                }}
            >
                {/* Carousel Container */}
                <div className="relative" style={{ minHeight: '600px' }}>
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`transition-opacity duration-700 ease-in-out ${currentSlide === index ? 'relative' : 'absolute inset-0'}`}
                        style={{ 
                                opacity: currentSlide === index ? 1 : 0,
                                pointerEvents: currentSlide === index ? 'auto' : 'none',
                            }}
                        >
                            <div className="flex items-start gap-12" style={{ minHeight: '600px' }}>
                                {/* Left Section - Text Content */}
                                <div className="flex-1" style={{ maxWidth: '700px' }}>
                                    <h1 
                                        className="font-bold mb-6"
                        style={{ 
                                            fontSize: '56px',
                                            lineHeight: '1.2',
                                            color: '#000000 ',
                                            fontWeight: 700,
                                            letterSpacing: '-0.25px'
                        }}
                    >
                                        {slide.title}
                                    </h1>
                                    <p 
                                        className="mb-8 font-bold"
                        style={{
                                            fontSize: '20px',
                                            lineHeight: '1.6',
                                            color: '#4A5565',
                                            fontWeight: 700,
                                            letterSpacing: '-0.25px'
                        }}
                    >
                                        {slide.description}
                                    </p>
                    <Link
                                        href={`/${locale}/news#news-${index}`}
                                        className="inline-flex items-center gap-2 px-6 py-3 text-white font-medium transition-all hover:opacity-90"
                        style={{
                                            background: 'linear-gradient(to right, #155DFC, #0092B8)',
                                            borderRadius: '8px',
                                            fontSize: '16px'
                        }}
                    >
                                        {slide.buttonText} <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                                {/* Right Section - Image */}
                                <div 
                                    className="flex-1 flex items-center justify-center" 
                                    style={{
                                        maxWidth: '600px', 
                                        maxHeight: '650px'
                                    }}
                                >
                                    <div 
                                        className="rounded-lg overflow-hidden" 
                                        style={{ 
                                            width: '100%',
                                            height: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                    }}
                                >
                                        <img
                                            src={slide.imagePath}
                                            alt={slide.title}
                                            style={{
                                                maxWidth: '100%',
                                                maxHeight: '650px',
                                                width: 'auto',
                                                height: 'auto',
                                                objectFit: 'contain',
                                                display: 'block',
                                                margin: '0 auto'
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Indicators */}
                <div className="flex items-center justify-center gap-2" style={{ marginTop: '60px' }}>
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className="transition-all duration-300"
                            aria-label={`Go to slide ${index + 1}`}
                        style={{
                                width: currentSlide === index ? '32px' : '8px',
                                height: '8px',
                                borderRadius: currentSlide === index ? '4px' : '50%',
                                background: currentSlide === index 
                                    ? 'linear-gradient(to bottom, #155DFC, #0092B8)' 
                                    : '#DBEAFE',
                                border: 'none',
                                cursor: 'pointer',
                                padding: 0,
                                outline: 'none'
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
