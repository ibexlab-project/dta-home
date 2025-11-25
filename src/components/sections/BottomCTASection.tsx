import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { getTranslations, type Locale } from "@/lib/get-translations";

interface BottomCTASectionProps {
    locale: Locale;
}

export function BottomCTASection({ locale }: BottomCTASectionProps) {
    const t = getTranslations(locale).bottomCTA;
    return (
        <section 
            className="flex items-center justify-center"
            style={{ 
                height: '336px',
                minWidth: '1440px',
                background: 'linear-gradient(to bottom right, #155DFC, #0092B8)',
                overflowX: 'visible'
            }}
        >
            <div style={{ width: '1440px', margin: '0 auto', paddingLeft: '16px', paddingRight: '16px' }}>
                <div className="text-center" style={{ width: '768px', margin: '0 auto' }}>
                    <h2 
                        className="font-normal text-white mb-6"
                        style={{ fontSize: '36px' }}
                    >
                        {t.title}
                    </h2>
                    <p 
                        className="mb-10"
                        style={{
                            fontSize: '18px',
                            color: '#DBEAFE'
                        }}
                    >
                        {t.subtitle}
                    </p>
                    <div className="flex flex-row gap-4 justify-center" style={{ whiteSpace: 'nowrap' }}>
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
                            {t.connectWallet}
                            <ArrowRight className="h-4 w-4" style={{ color: '#155DFC' }} />
                        </Link>
                        <Link
                            href="#"
                            className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-full font-medium hover:bg-white/10 transition-colors shrink-0"
                            style={{ whiteSpace: 'nowrap' }}
                        >
                            {t.learnMore}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

