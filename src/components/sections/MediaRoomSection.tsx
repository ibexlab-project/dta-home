import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getTranslations, type Locale } from "@/lib/get-translations";

interface MediaCard {
    image: string;
    date: string;
    title: string;
    description: string; // HTML 형식의 자유로운 컨텐츠 (이탤릭체, bold, regular 등 포함 가능)
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
            className="pb-12"
            style={{ 
                backgroundColor: '#FFFFFF', 
                paddingTop: '96px', 
                scrollMarginTop: '80px',
                minWidth: '1440px',
                overflowX: 'visible'
            }}
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
                            width: '1200px'
                        }}
                    >
                        {mediaCards.map((card, index) => (
                            <Link
                                key={index}
                                href={`/${locale}/news#news-${index}`}
                                className="bg-white rounded-xl border overflow-hidden hover:shadow-lg transition-shadow flex flex-col cursor-pointer"
                                style={{ borderColor: '#E5E7EB' }}
                            >
                                {/* 상단 이미지 */}
                                <div className="relative w-full" style={{ aspectRatio: '16/9', minHeight: '200px' }}>
                                    <Image
                                        src={card.image}
                                        alt={card.imageAlt}
                                        fill
                                        className={index === 2 ? "object-cover object-top" : "object-cover"}
                                    />
                                </div>
                                
                                {/* 하단 컨텐츠 영역 */}
                                <div className="p-6 flex-1 flex flex-col">
                                    {/* 제목 */}
                                    <h3 
                                        className="font-bold mb-3"
                                        style={{
                                            color: '#101828',
                                            fontSize: '18px',
                                            lineHeight: '1.4'
                                        }}
                                    >
                                        {card.title}
                                    </h3>
                                    
                                    {/* 내용 (HTML 형식의 자유로운 컨텐츠) */}
                                    <div 
                                        className="flex-1 media-card-content"
                                        style={{
                                            color: '#6A7282',
                                            fontSize: '14px',
                                            lineHeight: '1.5'
                                        }}
                                        dangerouslySetInnerHTML={{ __html: card.description }}
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* See More News Link */}
                <div className="text-center mt-8">
                    <Link
                        href={`/${locale}/news`}
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

