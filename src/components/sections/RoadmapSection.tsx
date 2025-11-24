import { CheckCircle2, Circle, CircleDot, Dot, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getTranslations, type Locale } from "@/lib/get-translations";

interface RoadmapSectionProps {
    locale: Locale;
}

export function RoadmapSection({ locale }: RoadmapSectionProps) {
    const t = getTranslations(locale).roadmap;
    return (
        <section id="roadmap" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 
                        className="font-normal mb-4"
                        style={{ fontSize: '48px' }}
                    >
                        {t.title}
                    </h2>
                    <p 
                        className="font-normal max-w-2xl mx-auto"
                        style={{ fontSize: '18px' }}
                    >
                        {t.subtitle}
                    </p>
                </div>

                <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    {/* Table Header */}
                    <div 
                        className="grid grid-cols-12 border-b border-gray-100 py-4 px-6 text-sm font-bold uppercase tracking-wider"
                        style={{ backgroundColor: '#364153', color: '#FFFFFF' }}
                    >
                        <div className="col-span-12 md:col-span-2">YEAR</div>
                        <div className="col-span-12 md:col-span-4">THEME</div>
                        <div className="col-span-12 md:col-span-6">HIGHLIGHTS</div>
                    </div>

                    {/* 2025 */}
                    <div className="grid grid-cols-12 border-b border-gray-100 py-8 px-6 hover:bg-blue-50/50 transition-colors">
                        <div 
                            className="col-span-12 md:col-span-2 font-normal mb-4 md:mb-0"
                            style={{ color: '#0279D5', fontSize: '30px' }}
                        >
                            2025
                        </div>
                        <div 
                            className="col-span-12 md:col-span-4 font-normal mb-4 md:mb-0"
                            style={{ color: '#101828', fontSize: '18px' }}
                        >
                            {t.year2025Theme}
                        </div>
                        <div className="col-span-12 md:col-span-6 space-y-2">
                            {t.year2025Highlights.map((highlight, index) => (
                                <div key={index} className="flex items-start gap-2">
                                    <div 
                                        className="shrink-0 rounded-full" 
                                        style={{ backgroundColor: '#0279D5', width: '6px', height: '6px', marginTop: '7px' }}
                                    />
                                    <span 
                                        className="font-normal"
                                        style={{ color: '#4A5565', fontSize: '14px' }}
                                    >
                                        {highlight}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 2026 */}
                    <div className="grid grid-cols-12 border-b border-gray-100 py-8 px-6 hover:bg-blue-50/50 transition-colors">
                        <div 
                            className="col-span-12 md:col-span-2 font-normal mb-4 md:mb-0"
                            style={{ color: '#0279D5', fontSize: '30px' }}
                        >
                            2026
                        </div>
                        <div 
                            className="col-span-12 md:col-span-4 font-normal mb-4 md:mb-0"
                            style={{ color: '#101828', fontSize: '18px' }}
                        >
                            {t.year2026Theme}
                        </div>
                        <div className="col-span-12 md:col-span-6 space-y-2">
                            {t.year2026Highlights.map((highlight, index) => (
                                <div key={index} className="flex items-start gap-2">
                                    <div 
                                        className="shrink-0 rounded-full" 
                                        style={{ backgroundColor: '#0279D5', width: '6px', height: '6px', marginTop: '7px' }}
                                    />
                                    <span 
                                        className="font-normal"
                                        style={{ color: '#4A5565', fontSize: '14px' }}
                                    >
                                        {highlight}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 2027 */}
                    <div className="grid grid-cols-12 py-8 px-6 hover:bg-blue-50/50 transition-colors">
                        <div 
                            className="col-span-12 md:col-span-2 font-normal mb-4 md:mb-0"
                            style={{ color: '#0279D5', fontSize: '30px' }}
                        >
                            2027
                        </div>
                        <div 
                            className="col-span-12 md:col-span-4 font-normal mb-4 md:mb-0"
                            style={{ color: '#101828', fontSize: '18px' }}
                        >
                            {t.year2027Theme}
                        </div>
                        <div className="col-span-12 md:col-span-6 space-y-2">
                            {t.year2027Highlights.map((highlight, index) => (
                                <div key={index} className="flex items-start gap-2">
                                    <div 
                                        className="shrink-0 rounded-full" 
                                        style={{ backgroundColor: '#0279D5', width: '6px', height: '6px', marginTop: '7px' }}
                                    />
                                    <span 
                                        className="font-normal"
                                        style={{ color: '#4A5565', fontSize: '14px' }}
                                    >
                                        {highlight}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* View Full Roadmap Link */}
                <div className="text-center mt-8">
                    <Link
                        href="#"
                        className="inline-flex items-center gap-2 font-normal transition-colors"
                        style={{ color: '#0279D5', fontSize: '16px' }}
                    >
                        {t.viewFullRoadmap}
                        <ArrowRight className="h-4 w-4" style={{ color: '#0279D5' }} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
