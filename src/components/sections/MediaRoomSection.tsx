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

export function MediaRoomSection() {
    const mediaCards: MediaCard[] = [
        {
            image: "/images/media/media-mou-signing.png",
            date: "27 November 2024",
            title: "DTA Signs MOU with Tourism Authority of Thailand to Attract Premium Tourists",
            description: "",
            imageAlt: "MOU signing ceremony with Tourism Authority of Thailand"
        },
        {
            image: "/images/media/media-simx-launch.png",
            date: "06 October 2024",
            title: "SIMX Successfully Launches on Base L2 Mainnet",
            description: "",
            imageAlt: "SiMX launch on Base L2 Mainnet"
        },
        {
            image: "/images/media/media-pilot-trust.png",
            date: "15 September 2024",
            title: "DTA Ensures Partner Trust with DBOS-Powered Settlement System",
            description: "",
            imageAlt: "DTA pilot trust with USDC settlement system"
        }
    ];

    return (
        <section 
            id="media" 
            className="pb-24"
            style={{ backgroundColor: '#F9FAFB', paddingTop: '128px', scrollMarginTop: '80px' }}
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 
                        className="font-normal mb-4"
                        style={{ fontSize: '36px' }}
                    >
                        <span style={{ color: '#101828' }}>Media </span>
                        <span style={{ color: '#0279D5' }}>Room</span>
                    </h2>
                    <p 
                        className="font-normal max-w-2xl mx-auto"
                        style={{
                            color: '#4A5565',
                            fontSize: '16px'
                        }}
                    >
                        See the latest news and press coverage featuring the DTA and SIMX ecosystem.
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
                        See More News
                        <ArrowRight className="h-4 w-4" style={{ color: '#0279D5' }} />
                    </Link>
                </div>
            </div>
        </section>
    );
}

