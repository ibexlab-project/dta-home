import { Database, ShieldCheck, TrendingUp } from "lucide-react";
import { getTranslations, type Locale } from "@/lib/get-translations";

interface TechArchitectureSectionProps {
    locale: Locale;
}

export function TechArchitectureSection({ locale }: TechArchitectureSectionProps) {
    const t = getTranslations(locale).techArchitecture;
    return (
        <section id="technology" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 
                        className="font-normal mb-4"
                        style={{ fontSize: '36px' }}
                    >
                        <span style={{ color: '#101828' }}>{t.title1}</span>
                        <span style={{ color: '#0279D5' }}> {t.title2}</span>
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

                <div className="flex justify-center">
                    <div className="flex gap-6" style={{ width: '1200px' }}>
                        {/* Hybrid Architecture */}
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
                                    width: '48px',
                                    height: '48px',
                                    backgroundColor: '#EFF6FF'
                                }}
                            >
                                <Database 
                                    className="w-6 h-6"
                                    style={{ color: '#155DFC' }}
                                />
                            </div>
                            <h4 
                                className="font-normal mb-2"
                                style={{
                                    color: '#101828',
                                    fontSize: '20px'
                                }}
                            >
                                {t.hybridArchitectureTitle}
                            </h4>
                            <p 
                                className="font-normal"
                                style={{
                                    color: '#6A7282',
                                    fontSize: '14px'
                                }}
                            >
                                {t.hybridArchitectureDescription}
                            </p>
                        </div>

                        {/* NFT Audit Proofs */}
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
                                    width: '48px',
                                    height: '48px',
                                    backgroundColor: '#F0FDF4'
                                }}
                            >
                                <ShieldCheck 
                                    className="w-6 h-6"
                                    style={{ color: '#00A63E' }}
                                />
                            </div>
                            <h4 
                                className="font-normal mb-2"
                                style={{
                                    color: '#101828',
                                    fontSize: '20px'
                                }}
                            >
                                {t.nftAuditProofsTitle}
                            </h4>
                            <p 
                                className="font-normal"
                                style={{
                                    color: '#6A7282',
                                    fontSize: '14px'
                                }}
                            >
                                {t.nftAuditProofsDescription}
                            </p>
                        </div>

                        {/* Phased Network Expansion */}
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
                                    width: '48px',
                                    height: '48px',
                                    backgroundColor: '#FAF5FF'
                                }}
                            >
                                <TrendingUp 
                                    className="w-6 h-6"
                                    style={{ color: '#9810FA' }}
                                />
                            </div>
                            <h4 
                                className="font-normal mb-2"
                                style={{
                                    color: '#101828',
                                    fontSize: '20px'
                                }}
                            >
                                {t.phasedNetworkExpansionTitle}
                            </h4>
                            <p 
                                className="font-normal"
                                style={{
                                    color: '#6A7282',
                                    fontSize: '14px'
                                }}
                            >
                                {t.phasedNetworkExpansionDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
