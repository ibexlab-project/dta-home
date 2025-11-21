import { Globe2, Target, Heart, Sparkles, Users, CalendarCheck, TrendingUp } from "lucide-react";

export function ThaiPremiumTourismSection() {
    return (
        <section className="py-24" style={{ backgroundColor: '#F9FAFB' }}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="mb-4" style={{ fontSize: '36px' }}>
                        <span style={{ color: '#101828' }}>Focusing on the </span>
                        <span style={{ color: '#0279D5' }}>Thai Premium Tourism Market</span>
                    </h2>
                    <p 
                        className="font-normal max-w-2xl mx-auto"
                        style={{
                            fontSize: '16px',
                            color: '#4A5565'
                        }}
                    >
                        DTA is executing a clear, data-driven market entry strategy to contribute to the qualitative growth of Thailand's tourism industry.
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
                                Market of Opportunity
                            </h3>
                            <p 
                                className="font-normal"
                                style={{
                                    color: '#4A5565',
                                    fontSize: '16px'
                                }}
                            >
                                Thailand is a dynamic market that saw 28.2 million tourists and 1.2 trillion baht in revenue in 2023, and is strategically shifting to a "Quality over Quantity" model.
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
                                Core Target
                            </h3>
                            <p 
                                className="font-normal"
                                style={{
                                    color: '#4A5565',
                                    fontSize: '16px'
                                }}
                            >
                                South Korean tourists (1.66 million in 2023) are a key high-value demographic with high average spending.
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
                                High-Yield Niche Focus
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
                                    Golf Tourism
                                </h4>
                                <p 
                                    className="font-normal"
                                    style={{
                                        color: '#6A7282',
                                        fontSize: '14px'
                                    }}
                                >
                                    Explosive demand exists due to high costs and booking difficulties in South Korea. DTA is using this as its initial beachhead market
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
                                    Medical & Wellness
                                </h4>
                                <p 
                                    className="font-normal"
                                    style={{
                                        color: '#6A7282',
                                        fontSize: '14px'
                                    }}
                                >
                                    Leveraging Thailand's strength as Asia's medical tourism hub (a $6B market in 2023)
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
                                    Luxury & Experiential Travel
                                </h4>
                                <p 
                                    className="font-normal"
                                    style={{
                                        color: '#6A7282',
                                        fontSize: '14px'
                                    }}
                                >
                                    An $11.1B market in 2024 with direct synergies for DTA's premium membership
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
                                Phased Market Penetration
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
                                            Phase 1: Months 1-12 | Dominate Accessible Market
                                        </h4>
                                        <p 
                                            className="font-normal"
                                            style={{
                                                color: '#6A7282',
                                                fontSize: '16px'
                                            }}
                                        >
                                            Establish SIMX as the top platform by partnering with key courses in Pattaya and Hua Hin.
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
                                            Phase 2: Months 13-24 | Expand to Mid-to-Luxury
                                        </h4>
                                        <p 
                                            className="font-normal"
                                            style={{
                                                color: '#6A7282',
                                                fontSize: '16px'
                                            }}
                                        >
                                            Cross-sell "Play & Wellness" packages (golf + health screenings) to the established user base.
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
                                            Phase 3: Months 25-36 | Achieve Ecosystem Leadership
                                        </h4>
                                        <p 
                                            className="font-normal"
                                            style={{
                                                color: '#6A7282',
                                                fontSize: '16px'
                                            }}
                                        >
                                            Expand the user base to other high-spending regions (e.g., Middle East, USA) to become the standard platform for high-value tourism in Thailand.
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

