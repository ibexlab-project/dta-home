import { ArrowRight, Handshake, Wallet, Blocks } from "lucide-react";
import Link from "next/link";
import { getTranslations, type Locale } from "@/lib/get-translations";

interface HeroSectionProps {
    locale: Locale;
}

export function HeroSection({ locale }: HeroSectionProps) {
    const t = getTranslations(locale).hero;
    return (
        <section 
            className="relative pb-32 overflow-hidden"
            style={{
                backgroundImage: 'url(/images/hero/hero_bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                paddingTop: '120px'
            }}
        >
            <div className="w-full mx-auto flex flex-col items-center text-center z-10 relative px-4" style={{ maxWidth: '1440px' }}>
                {/* Tagline - Blockchain-Powered Tourism Platform */}
                <div className="inline-flex items-center gap-2 px-4 py-2 text-primary text-sm font-medium mb-6" style={{ backgroundColor: '#BADAF4', border: '1px solid #88C0EB', borderRadius: '18px' }}>
                    <Blocks className="h-4 w-4" style={{ color: '#0279D5' }} />
                    <span>{t.tagline}</span>
                </div>

                {/* Headline */}
                <h1 className="mb-6 w-full" style={{ letterSpacing: 'normal' }}>
                    <span 
                        className="font-normal"
                        style={{ 
                            fontSize: '96px',
                            background: 'linear-gradient(to right, #101828, #1C398E, #104E64)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                    >
                        {t.title1}
                    </span>
                    <span 
                        className="font-normal block"
                        style={{ 
                            color: '#0279D5',
                            fontSize: '96px',
                            marginTop: '-20px',
                            lineHeight: '1'
                        }}
                    >
                        {t.title2}
                    </span>
                </h1>

                {/* Subheadline */}
                <div className="flex justify-center">
                    <p 
                        className="font-normal shrink-0"
                        style={{ 
                            color: '#4A5565', 
                            fontSize: '20px', 
                            lineHeight: '1.4', 
                            letterSpacing: 'normal',
                            width: '961px',
                            maxWidth: '961px',
                            marginBottom: '0'
                        }}
                    >
                        {t.subtitle}
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16" style={{ marginTop: '32px' }}>
                    <Link
                        href="#"
                        className="px-8 py-3 text-white font-medium transition-colors flex items-center gap-2"
                        style={{
                            background: 'linear-gradient(to bottom right, #155DFC, #0092B8)',
                            borderRadius: '14px',
                            boxShadow: '0 10px 25px rgba(21, 93, 252, 0.3)'
                        }}
                    >
                        {t.exploreEcosystem} <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                        href="#"
                        className="px-8 py-3 bg-white text-gray-700 border border-gray-300 font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
                        style={{
                            borderRadius: '14px'
                        }}
                    >
                        <Handshake className="h-4 w-4" />
                        {t.partnerWithUs}
                    </Link>
                </div>

                {/* SIMX Card - Our First Solution */}
                <div className="flex justify-center mb-8 mt-8 relative z-10">
                    <div 
                        className="bg-white rounded-2xl shadow-lg border p-8 max-w-3xl w-full"
                        style={{
                            borderColor: '#BEDBFF'
                        }}
                    >
                        {/* Top Section */}
                        <div className="flex items-start gap-6 mb-1">
                            <div className="shrink-0">
                                <div 
                                    className="h-16 w-16 flex items-center justify-center text-white shadow-lg"
                                    style={{
                                        background: 'linear-gradient(to bottom right, #2B7FFF, #00B8DB)',
                                        borderRadius: '14px'
                                    }}
                                >
                                    <Wallet className="h-8 w-8" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 
                                    className="font-normal mb-1"
                                    style={{ color: '#6A7282', fontSize: '14px', fontWeight: 400, textAlign: 'left' }}
                                >
                                    {t.ourFirstSolution}
                                </h2>
                                <h3 
                                    className="font-normal mb-1"
                                    style={{ color: '#101828', fontSize: '24px', fontWeight: 400, textAlign: 'left' }}
                                >
                                    {t.simx}
                                </h3>
                                <p 
                                    className="font-medium mb-3"
                                    style={{ color: '#155DFC', fontSize: '14px', fontWeight: 500, textAlign: 'left' }}
                                >
                                    {t.simxSubtitle}
                                </p>
                            </div>
                        </div>

                        {/* Bottom Content Area */}
                        <div className="w-full">
                            <p 
                                style={{ 
                                    color: '#4A5565',
                                    fontSize: '14px',
                                    textAlign: 'left',
                                    marginLeft: '0',
                                    paddingLeft: '0',
                                    width: '100%'
                                }}
                            >
                                {t.simxDescription}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Statistics Boxes */}
                <div className="flex justify-center relative z-0" style={{ marginTop: '-150px' }}>
                    <div 
                        className="bg-white rounded-2xl shadow-lg border max-w-3xl w-full flex flex-col justify-end"
                        style={{
                            borderColor: '#BEDBFF',
                            minHeight: '200px',
                            paddingTop: '100px',
                            paddingBottom: '0px',
                            paddingLeft: '24px',
                            paddingRight: '24px'
                        }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                            <div className="p-6 text-center border-r border-gray-200 last:border-r-0">
                                <p className="text-xs text-gray-500 uppercase font-semibold">{t.annualTourists}</p>
                            </div>
                            <div className="p-6 text-center border-r border-gray-200 last:border-r-0">
                                <p className="text-xs text-gray-500 uppercase font-semibold">{t.tourismMarket}</p>
                            </div>
                            <div className="p-6 text-center border-r border-gray-200 last:border-r-0">
                                <p className="text-xs text-gray-500 uppercase font-semibold">{t.premiumPartners}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
