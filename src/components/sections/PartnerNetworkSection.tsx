'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { getTranslations, type Locale } from "@/lib/get-translations";

function PartnerCard({ num }: { num: number }) {
    const [imageError, setImageError] = useState(false);
    
    // Partner 1, 2, 3은 특정 이미지 사용
    const getImageSrc = () => {
        if (num === 1) return '/images/partners/partner_1.png';
        if (num === 2) return '/images/partners/partner_2.png';
        if (num === 3) return '/images/partners/partner_3.png';
        return `/images/partners/partner-logo-${num}.png`;
    };

    // 각 파트너의 홈페이지 URL
    const getPartnerUrl = () => {
        if (num === 1) return 'https://www.hanatour.com';
        if (num === 2) return 'https://www.ybtour.co.kr';
        if (num === 3) return 'https://www.foodservice.or.kr/';
        return '#';
    };

    return (
        <a
            href={getPartnerUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg flex items-center justify-center border cursor-pointer hover:shadow-md transition-shadow"
            style={{
                borderColor: '#E5E7EB',
                width: '100%',
                height: '100%',
                textDecoration: 'none'
            }}
        >
            {!imageError ? (
                <img
                    src={getImageSrc()}
                    alt={`Partner ${num}`}
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                        display: 'block'
                    }}
                    onError={() => setImageError(true)}
                />
            ) : (
                <div
                    className="font-normal"
                    style={{
                        color: '#99A1AF',
                        fontSize: '14px'
                    }}
                >
                    Partner {num}
                </div>
            )}
        </a>
    );
}

interface PartnerNetworkSectionProps {
    locale: Locale;
}

export function PartnerNetworkSection({ locale }: PartnerNetworkSectionProps) {
    const t = getTranslations(locale).partners;
    const partnerLogos = [1, 2, 3];

    return (
        <section id="partners" className="bg-white" style={{ paddingTop: '128px', paddingBottom: '96px', scrollMarginTop: '80px' }}>
            <div style={{ width: '1440px', margin: '0 auto', paddingLeft: '16px', paddingRight: '16px' }}>
                <div className="text-center mb-16">
                    <h2 
                        className="font-normal mb-4"
                        style={{ fontSize: '36px' }}
                    >
                        <span style={{ color: '#101828' }}>{t.title1} </span>
                        <span style={{ color: '#0279D5' }}>{t.title2}</span>
                    </h2>
                    <p 
                        className="font-normal mx-auto text-center"
                        style={{
                            color: '#4A5565',
                            fontSize: '16px',
                            maxWidth: '1000px'
                        }}
                    >
                        {t.subtitle}
                    </p>
                </div>

                {/* Partner Logos Grid */}
                <div className="flex justify-center mb-12">
                    <div
                        className="grid grid-cols-3 gap-4 shrink-0"
                        style={{
                            width: '1200px',
                            height: '220px',
                            backgroundColor: '#F9FAFB',
                            borderRadius: '16px',
                            border: '1px solid #F3F4F6',
                            padding: '49px'
                        }}
                    >
                        {partnerLogos.map((num) => (
                            <PartnerCard key={num} num={num} />
                        ))}
                    </div>
                </div>

                {/* Partner with Us CTA */}
                <div className="flex justify-center">
                    <div
                        className="text-center shrink-0 flex flex-col items-center justify-center"
                        style={{
                            width: '1200px',
                            height: '206px',
                            background: 'linear-gradient(to bottom right, #EFF6FF, #ECFEFF)',
                            border: '1px solid #DBEAFE',
                            borderRadius: '16px'
                        }}
                    >
                        <h3 
                            className="font-normal mb-4"
                            style={{ color: '#101828', fontSize: '24px' }}
                        >
                            {t.partnerWithUsTitle}
                        </h3>
                        <p 
                            className="font-normal mb-6"
                            style={{
                                color: '#4A5565',
                                fontSize: '16px'
                            }}
                        >
                            {t.partnerWithUsDescription}
                        </p>
                        <Link
                            href="#"
                            className="inline-flex items-center justify-center gap-2 font-normal transition-colors shrink-0"
                            style={{
                                backgroundColor: '#0279D5',
                                borderRadius: '10px',
                                color: '#FFFFFF',
                                fontSize: '16px',
                                width: '201px',
                                height: '48px'
                            }}
                        >
                            {t.becomeAPartner}
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
