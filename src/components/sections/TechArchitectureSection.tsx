import { Database, ShieldCheck, TrendingUp } from "lucide-react";

export function TechArchitectureSection() {
    return (
        <section id="technology" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 
                        className="font-normal mb-4"
                        style={{ fontSize: '36px' }}
                    >
                        <span style={{ color: '#101828' }}>Technology Architecture</span>
                        <span style={{ color: '#0279D5' }}> for Trust</span>
                    </h2>
                    <p 
                        className="font-normal max-w-2xl mx-auto"
                        style={{
                            color: '#4A5565',
                            fontSize: '16px'
                        }}
                    >
                        DTA adopts practical, hybrid technology to provide stability for partners and convenience for members.
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
                                Hybrid Architecture
                            </h4>
                            <p 
                                className="font-normal"
                                style={{
                                    color: '#6A7282',
                                    fontSize: '14px'
                                }}
                            >
                                The SINODE backend combines the rapid development of Supabase (for partner onboarding) with the financial-grade transactional reliability of DBOS (for fee settlements), ensuring both speed and stability.
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
                                NFT Audit Proofs
                            </h4>
                            <p 
                                className="font-normal"
                                style={{
                                    color: '#6A7282',
                                    fontSize: '14px'
                                }}
                            >
                                When an AI-generated business rule (e.g., a new benefit) is verified by DBOS, the result is issued as an NFT. This serves as a 'digital notarization' that transparently records all business logic, providing maximum trust to partners.
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
                                Phased Network Expansion
                            </h4>
                            <p 
                                className="font-normal"
                                style={{
                                    color: '#6A7282',
                                    fontSize: '14px'
                                }}
                            >
                                Services will launch stably on the proven Base L2 network, with a long-term plan to transition to a sovereign L3 network as the ecosystem matures.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
