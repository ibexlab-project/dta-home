import { Globe2, Target, Heart, Sparkles, Users, CalendarCheck, TrendingUp } from "lucide-react";
import { getTranslations, type Locale } from "@/lib/get-translations";

interface ThaiPremiumTourismSectionProps {
    locale: Locale;
}

export function ThaiPremiumTourismSection({ locale }: ThaiPremiumTourismSectionProps) {
    const t = getTranslations(locale).marketFocus;
    return (
        <section id="market-strategy" className="py-24" style={{ backgroundColor: '#F9FAFB' }}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="mb-4" style={{ fontSize: '36px' }}>
                        <span style={{ color: '#101828' }}>{t.title}</span>
                    </h2>
                    <p 
                        className="font-normal max-w-2xl mx-auto"
                        style={{
                            fontSize: '16px',
                            color: '#4A5565'
                        }}
                    >
                        {t.subtitle}
                    </p>
                </div>

                {/* Market of Opportunity & Core Target */}
                <div className="flex justify-center mb-16">
                    <div 
                        className="bg-white rounded-2xl border border-gray-100 flex shrink-0"
                        style={{
                            width: '1200px',
                            minWidth: '1200px',
                            maxWidth: '1200px',
                            height: '248px'
                        }}
                    >
                        {/* Left Section - Market of Opportunity */}
                        <div className="flex-1 p-8 flex flex-col justify-start">
                            <div 
                                className="rounded-lg flex items-center justify-center mb-4"
                                style={{
                                    width: '48px',
                                    height: '48px',
                                    backgroundColor: '#EFF6FF'
                                }}
                            >
                                <Target 
                                    className="w-6 h-6"
                                    style={{ color: '#155DFC' }}
                                />
                            </div>
                            <h3 
                                className="font-normal mb-2"
                                style={{
                                    color: '#101828',
                                    fontSize: '20px'
                                }}
                            >
                                {t.marketOfOpportunityTitle}
                            </h3>
                            <p 
                                className="font-normal"
                                style={{
                                    color: '#4A5565',
                                    fontSize: '16px'
                                }}
                            >
                                {t.marketOfOpportunityDescription}
                            </p>
                        </div>

                        {/* Right Section - Core Target */}
                        <div className="flex-1 p-8 flex flex-col justify-start">
                            <div 
                                className="rounded-lg flex items-center justify-center mb-4"
                                style={{
                                    width: '48px',
                                    height: '48px',
                                    backgroundColor: '#F0FDF4'
                                }}
                            >
                                <Users 
                                    className="w-6 h-6"
                                    style={{ color: '#00A63E' }}
                                />
                            </div>
                            <h3 
                                className="font-normal mb-2"
                                style={{
                                    color: '#101828',
                                    fontSize: '20px'
                                }}
                            >
                                {t.coreTargetTitle}
                            </h3>
                            <p 
                                className="font-normal"
                                style={{
                                    color: '#4A5565',
                                    fontSize: '16px'
                                }}
                            >
                                {t.coreTargetDescription}
                            </p>
                        </div>
                    </div>
                </div>

                {/* High-Yield Niche Focus */}
                <div className="mb-16">
                    <div className="flex justify-center">
                        <div style={{ width: '1200px' }}>
                            <h3 
                                className="font-normal text-left mb-8"
                                style={{
                                    color: '#101828',
                                    fontSize: '24px'
                                }}
                            >
                                {t.highYieldNicheFocusTitle}
                            </h3>
                            <div className="flex gap-6">
                            {/* Golf Tourism */}
                            <div 
                                className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow shrink-0"
                                style={{
                                    width: '384px',
                                    height: '218px'
                                }}
                            >
                                <div 
                                    className="rounded-lg flex items-center justify-center mb-4"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        backgroundColor: '#FFFBEB'
                                    }}
                                >
                                    <CalendarCheck 
                                        className="w-5 h-5"
                                        style={{ color: '#E17100' }}
                                    />
                                </div>
                                <h4 
                                    className="mb-2"
                                    style={{
                                        color: '#101828',
                                        fontSize: '16px',
                                        fontWeight: 500
                                    }}
                                >
                                    {t.golfTourismTitle}
                                </h4>
                                <p 
                                    className="font-normal"
                                    style={{
                                        color: '#6A7282',
                                        fontSize: '14px'
                                    }}
                                >
                                    {t.golfTourismDescription}
                                </p>
                            </div>

                            {/* Medical & Wellness */}
                            <div 
                                className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow shrink-0"
                                style={{
                                    width: '384px',
                                    height: '218px'
                                }}
                            >
                                <div 
                                    className="rounded-lg flex items-center justify-center mb-4"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        backgroundColor: '#EFF6FF'
                                    }}
                                >
                                    <Heart 
                                        className="w-5 h-5"
                                        style={{ color: '#155DFC' }}
                                    />
                                </div>
                                <h4 
                                    className="mb-2"
                                    style={{
                                        color: '#101828',
                                        fontSize: '16px',
                                        fontWeight: 500
                                    }}
                                >
                                    {t.medicalWellnessTitle}
                                </h4>
                                <p 
                                    className="font-normal"
                                    style={{
                                        color: '#6A7282',
                                        fontSize: '14px'
                                    }}
                                >
                                    {t.medicalWellnessDescription}
                                </p>
                            </div>

                            {/* Luxury & Experiential Travel */}
                            <div 
                                className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow shrink-0"
                                style={{
                                    width: '384px',
                                    height: '218px'
                                }}
                            >
                                <div 
                                    className="rounded-lg flex items-center justify-center mb-4"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        backgroundColor: '#FAF5FF'
                                    }}
                                >
                                    <TrendingUp 
                                        className="w-5 h-5"
                                        style={{ color: '#9810FA' }}
                                    />
                                </div>
                                <h4 
                                    className="mb-2"
                                    style={{
                                        color: '#101828',
                                        fontSize: '16px',
                                        fontWeight: 500
                                    }}
                                >
                                    {t.luxuryExperientialTravelTitle}
                                </h4>
                                <p 
                                    className="font-normal"
                                    style={{
                                        color: '#6A7282',
                                        fontSize: '14px'
                                    }}
                                >
                                    {t.luxuryExperientialTravelDescription}
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                {/* Phased Market Penetration */}
                <div>
                    <div className="flex justify-center">
                        <div style={{ width: '1200px' }}>
                            <h3 
                                className="font-normal text-left mb-8"
                                style={{
                                    color: '#101828',
                                    fontSize: '24px'
                                }}
                            >
                                {t.phasedMarketPenetrationTitle}
                            </h3>
                            <div className="space-y-4">
                                {/* Phase 1 */}
                                <div 
                                    className="bg-white rounded-xl border border-gray-100 flex gap-4 items-start p-6 shrink-0"
                                    style={{
                                        width: '1200px',
                                        height: '110px'
                                    }}
                                >
                                    <div 
                                        className="rounded-lg flex items-center justify-center shrink-0 font-bold text-lg"
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            backgroundColor: '#DBEAFE',
                                            color: '#155DFC',
                                            borderRadius: '10px'
                                        }}
                                    >
                                        1
                                    </div>
                                    <div className="flex-1">
                                        <h4 
                                            className="font-normal mb-2"
                                            style={{
                                                color: '#101828',
                                                fontSize: '18px'
                                            }}
                                        >
                                            {t.phase1Title}
                                        </h4>
                                        <p 
                                            className="font-normal"
                                            style={{
                                                color: '#6A7282',
                                                fontSize: '16px'
                                            }}
                                        >
                                            {t.phase1Description}
                                        </p>
                                    </div>
                                </div>

                                {/* Phase 2 */}
                                <div 
                                    className="bg-white rounded-xl border border-gray-100 flex gap-4 items-start p-6 shrink-0"
                                    style={{
                                        width: '1200px',
                                        height: '110px'
                                    }}
                                >
                                    <div 
                                        className="rounded-lg flex items-center justify-center shrink-0 font-bold text-lg"
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            backgroundColor: '#DCFCE7',
                                            color: '#00A63E',
                                            borderRadius: '10px'
                                        }}
                                    >
                                        2
                                    </div>
                                    <div className="flex-1">
                                        <h4 
                                            className="font-normal mb-2"
                                            style={{
                                                color: '#101828',
                                                fontSize: '18px'
                                            }}
                                        >
                                            {t.phase2Title}
                                        </h4>
                                        <p 
                                            className="font-normal"
                                            style={{
                                                color: '#6A7282',
                                                fontSize: '16px'
                                            }}
                                        >
                                            {t.phase2Description}
                                        </p>
                                    </div>
                                </div>

                                {/* Phase 3 */}
                                <div 
                                    className="bg-white rounded-xl border border-gray-100 flex gap-4 items-start p-6 shrink-0"
                                    style={{
                                        width: '1200px',
                                        height: '110px'
                                    }}
                                >
                                    <div 
                                        className="rounded-lg flex items-center justify-center shrink-0 font-bold text-lg"
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            backgroundColor: '#F3E8FF',
                                            color: '#9810FA',
                                            borderRadius: '10px'
                                        }}
                                    >
                                        3
                                    </div>
                                    <div className="flex-1">
                                        <h4 
                                            className="font-normal"
                                            style={{
                                                color: '#101828',
                                                fontSize: '18px',
                                                marginBottom: '2px'
                                            }}
                                        >
                                            {t.phase3Title}
                                        </h4>
                                        <p 
                                            className="font-normal"
                                            style={{
                                                color: '#6A7282',
                                                fontSize: '16px'
                                            }}
                                        >
                                            {t.phase3Description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

