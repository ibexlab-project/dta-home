import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

interface MediaCard {
    image: string;
    date: string;
    title: string;
    description: string;
    imageAlt: string;
}

import { getTranslations, type Locale } from "@/lib/get-translations";

interface MediaCard {
    image: string;
    date: string;
    title: string;
    description: string;
    imageAlt: string;
}

interface MediaRoomSectionProps {
    locale: Locale;
    mediaCards: MediaCard[];
}

export function MediaRoomSection({ locale, mediaCards }: MediaRoomSectionProps) {
    const t = getTranslations(locale).media;
    return (
        <section 
            id="media" 
            className="pb-24"
            style={{ backgroundColor: '#F9FAFB', paddingTop: '96px', scrollMarginTop: '80px' }}
        >
            <div style={{ width: '1440px', margin: '0 auto', paddingLeft: '16px', paddingRight: '16px' }}>
                <div className="text-center mb-8">
                    <h2 
                        className="font-normal mb-4"
                        style={{ fontSize: '36px', whiteSpace: 'nowrap' }}
                    >
                        <span style={{ color: '#101828' }}>{t.title1} </span>
                        <span style={{ color: '#0279D5' }}>{t.title2}</span>
                    </h2>
                    <p 
                        className="font-normal max-w-2xl mx-auto"
                        style={{
                            color: '#4A5565',
                            fontSize: '16px'
                        }}
                    >
                        {t.subtitle}
                    </p>
                </div>

                {/* Media Cards */}
                <div className="flex justify-center mb-8">
                    <div
                        className="grid grid-cols-3 gap-6 shrink-0"
                        style={{
                            width: '1200px',
                            height: '352px'
                        }}
                    >
                        {mediaCards.map((card, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
                            >
                                <div className="relative h-48 bg-gray-200">
                                    <Image
                                        src={card.image}
                                        alt={card.imageAlt}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Calendar className="h-4 w-4 text-gray-500" />
                                        <span className="text-xs text-gray-500">
                                            {card.date.split(' ').slice(1).join(' ')}
                                        </span>
                                    </div>
                                    <p 
                                        className="font-normal"
                                        style={{
                                            color: '#101828',
                                            fontSize: '18px',
                                            letterSpacing: '-0.44px'
                                        }}
                                    >
                                        {card.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* See More News Link */}
                <div className="text-center">
                    <Link
                        href="#"
                        className="inline-flex items-center gap-2 font-normal transition-colors"
                        style={{ color: '#0279D5', fontSize: '16px' }}
                    >
                        {t.seeMoreNews}
                        <ArrowRight className="h-4 w-4" style={{ color: '#0279D5' }} />
                    </Link>
                </div>
            </div>
        </section>
    );
}

