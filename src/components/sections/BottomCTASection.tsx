import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BottomCTASection() {
    return (
        <section 
            className="flex items-center"
            style={{ 
                height: '336px',
                background: 'linear-gradient(to bottom right, #155DFC, #0092B8)'
            }}
        >
            <div className="container mx-auto px-4 w-full">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 
                        className="font-normal text-white mb-6"
                        style={{ fontSize: '36px' }}
                    >
                        Ready to Get Started?
                    </h2>
                    <p 
                        className="mb-10"
                        style={{
                            fontSize: '18px',
                            color: '#DBEAFE'
                        }}
                    >
                        Join DTA today and unlock access to Thailand's premium tourism experiences
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="#"
                            className="inline-flex items-center justify-center gap-2 bg-white font-medium hover:bg-blue-50 transition-colors shrink-0"
                            style={{
                                color: '#155DFC',
                                borderRadius: '14px',
                                width: '202px',
                                height: '56px'
                            }}
                        >
                            Connect Wallet
                            <ArrowRight className="h-4 w-4" style={{ color: '#155DFC' }} />
                        </Link>
                        <Link
                            href="#"
                            className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-full font-medium hover:bg-white/10 transition-colors"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

