import { CheckCircle2, Circle, CircleDot, Dot, ArrowRight } from "lucide-react";
import Link from "next/link";

export function RoadmapSection() {
    return (
        <section id="roadmap" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 
                        className="font-normal mb-4"
                        style={{ fontSize: '48px' }}
                    >
                        DTA's Technology Journey to 2027
                    </h2>
                    <p 
                        className="font-normal max-w-2xl mx-auto"
                        style={{ fontSize: '18px' }}
                    >
                        Our strategic technology development plan
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
                            Foundation & Launch
                        </div>
                        <div className="col-span-12 md:col-span-6 space-y-2">
                            <div className="flex items-start gap-2">
                                <div 
                                    className="shrink-0 rounded-full" 
                                    style={{ backgroundColor: '#0279D5', width: '6px', height: '6px', marginTop: '7px' }}
                                />
                                <span 
                                    className="font-normal"
                                    style={{ color: '#4A5565', fontSize: '14px' }}
                                >
                                    Finalize DBOS engine
                                </span>
                            </div>
                            <div className="flex items-start gap-2">
                                <div 
                                    className="shrink-0 rounded-full" 
                                    style={{ backgroundColor: '#0279D5', width: '6px', height: '6px', marginTop: '7px' }}
                                />
                                <span 
                                    className="font-normal"
                                    style={{ color: '#4A5565', fontSize: '14px' }}
                                >
                                    Deploy core contracts
                                </span>
                            </div>
                            <div className="flex items-start gap-2">
                                <div 
                                    className="shrink-0 rounded-full" 
                                    style={{ backgroundColor: '#0279D5', width: '6px', height: '6px', marginTop: '7px' }}
                                />
                                <span 
                                    className="font-normal"
                                    style={{ color: '#4A5565', fontSize: '14px' }}
                                >
                                    Seed liquidity
                                </span>
                            </div>
                            <div className="flex items-start gap-2">
                                <div 
                                    className="shrink-0 rounded-full" 
                                    style={{ backgroundColor: '#0279D5', width: '6px', height: '6px', marginTop: '7px' }}
                                />
                                <span 
                                    className="font-normal"
                                    style={{ color: '#4A5565', fontSize: '14px' }}
                                >
                                    Launch first version
                                </span>
                            </div>
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
                            Integration & Scaling
                        </div>
                        <div className="col-span-12 md:col-span-6 space-y-2">
                            <div className="flex items-start gap-2">
                                <div 
                                    className="shrink-0 rounded-full" 
                                    style={{ backgroundColor: '#0279D5', width: '6px', height: '6px', marginTop: '7px' }}
                                />
                                <span 
                                    className="font-normal"
                                    style={{ color: '#4A5565', fontSize: '14px' }}
                                >
                                    DeFi protocol integrations
                                </span>
                            </div>
                            <div className="flex items-start gap-2">
                                <div 
                                    className="shrink-0 rounded-full" 
                                    style={{ backgroundColor: '#0279D5', width: '6px', height: '6px', marginTop: '7px' }}
                                />
                                <span 
                                    className="font-normal"
                                    style={{ color: '#4A5565', fontSize: '14px' }}
                                >
                                    Premium analytics suite
                                </span>
                            </div>
                            <div className="flex items-start gap-2">
                                <div 
                                    className="shrink-0 rounded-full" 
                                    style={{ backgroundColor: '#0279D5', width: '6px', height: '6px', marginTop: '7px' }}
                                />
                                <span 
                                    className="font-normal"
                                    style={{ color: '#4A5565', fontSize: '14px' }}
                                >
                                    L3 blueprint
                                </span>
                            </div>
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
                            Sovereignty & Leadership
                        </div>
                        <div className="col-span-12 md:col-span-6 space-y-2">
                            <div className="flex items-start gap-2">
                                <div 
                                    className="shrink-0 rounded-full" 
                                    style={{ backgroundColor: '#0279D5', width: '6px', height: '6px', marginTop: '7px' }}
                                />
                                <span 
                                    className="font-normal"
                                    style={{ color: '#4A5565', fontSize: '14px' }}
                                >
                                    Public L3 mainnet
                                </span>
                            </div>
                            <div className="flex items-start gap-2">
                                <div 
                                    className="shrink-0 rounded-full" 
                                    style={{ backgroundColor: '#0279D5', width: '6px', height: '6px', marginTop: '7px' }}
                                />
                                <span 
                                    className="font-normal"
                                    style={{ color: '#4A5565', fontSize: '14px' }}
                                >
                                    SDK release
                                </span>
                            </div>
                            <div className="flex items-start gap-2">
                                <div 
                                    className="shrink-0 rounded-full" 
                                    style={{ backgroundColor: '#0279D5', width: '6px', height: '6px', marginTop: '7px' }}
                                />
                                <span 
                                    className="font-normal"
                                    style={{ color: '#4A5565', fontSize: '14px' }}
                                >
                                    Developer grants
                                </span>
                            </div>
                            <div className="flex items-start gap-2">
                                <div 
                                    className="shrink-0 rounded-full" 
                                    style={{ backgroundColor: '#0279D5', width: '6px', height: '6px', marginTop: '7px' }}
                                />
                                <span 
                                    className="font-normal"
                                    style={{ color: '#4A5565', fontSize: '14px' }}
                                >
                                    Full on-chain governance
                                </span>
                            </div>
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
                        View Full Roadmap
                        <ArrowRight className="h-4 w-4" style={{ color: '#0279D5' }} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
