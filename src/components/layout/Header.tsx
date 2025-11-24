'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

interface HeaderProps {
    locale: 'en' | 'th';
}

export function Header({ locale }: HeaderProps) {
    const router = useRouter();
    const pathname = usePathname();
    const currentLang = pathname.startsWith('/th') ? 'th' : 'en';
    
    const handleLanguageChange = (newLang: 'en' | 'th') => {
        // 현재 경로에서 locale 추출
        const pathWithoutLocale = pathname.replace(/^\/(en|th)/, '') || '/';
        const newPath = `/${newLang}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
        router.push(newPath);
    };
    return (
        <header className="sticky top-0 z-50 bg-white" style={{ borderBottom: '1px solid #E5E7EB', width: '100%' }}>
            <div className="flex h-16 items-center justify-between" style={{ width: '1440px', margin: '0 auto', paddingLeft: '16px', paddingRight: '16px' }}>
                {/* Logo */}
                <Link href={`/${currentLang}`} className="flex items-center">
                    <Image
                        src="/images/logo.png"
                        alt="DTA"
                        width={100}
                        height={40}
                        className="object-contain"
                        unoptimized
                    />
                </Link>

                {/* Navigation */}
                <nav className="flex items-center gap-8" style={{ whiteSpace: 'nowrap' }}>
                    <Link 
                        href="#core-structure" 
                        className="font-normal hover:text-primary transition-colors"
                        style={{ fontSize: '14px', color: '#4B5563', whiteSpace: 'nowrap' }}
                    >
                        Core Structure
                    </Link>
                    <Link 
                        href="#market-strategy" 
                        className="font-normal hover:text-primary transition-colors"
                        style={{ fontSize: '14px', color: '#4B5563', whiteSpace: 'nowrap' }}
                    >
                        Market Strategy
                    </Link>
                    <Link 
                        href="#technology" 
                        className="font-normal hover:text-primary transition-colors"
                        style={{ fontSize: '14px', color: '#4B5563', whiteSpace: 'nowrap' }}
                    >
                        Technology
                    </Link>
                    <Link 
                        href="#roadmap" 
                        className="font-normal hover:text-primary transition-colors"
                        style={{ fontSize: '14px', color: '#4B5563', whiteSpace: 'nowrap' }}
                    >
                        Roadmap
                    </Link>
                    <Link 
                        href="#partners" 
                        className="font-normal hover:text-primary transition-colors"
                        style={{ fontSize: '14px', color: '#4B5563', whiteSpace: 'nowrap' }}
                    >
                        Partners
                    </Link>
                    <Link 
                        href="#media" 
                        className="font-normal hover:text-primary transition-colors"
                        style={{ fontSize: '14px', color: '#4B5563', whiteSpace: 'nowrap' }}
                    >
                        Media
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
                    {/* Language Selector */}
                    <div 
                        className="flex items-center justify-center rounded-lg border cursor-pointer"
                        style={{
                            borderColor: '#E5E7EB',
                            backgroundColor: '#FFFFFF',
                            width: '136px',
                            height: '34px',
                            gap: '12px',
                            paddingLeft: '16px',
                            paddingRight: '12px'
                        }}
                    >
                        <Globe style={{ width: '16px', height: '16px', color: '#4A5565', flexShrink: 0 }} />
                        <div className="flex items-center gap-1 flex-1 justify-center">
                            <button
                                onClick={() => handleLanguageChange('en')}
                                className="px-3 rounded transition-colors"
                                style={{
                                    backgroundColor: currentLang === 'en' ? '#DBEAFE' : 'transparent',
                                    color: currentLang === 'en' ? '#1447E6' : '#4A5565',
                                    fontSize: '12px',
                                    fontWeight: 500,
                                    paddingTop: '2px',
                                    paddingBottom: '2px',
                                    cursor: 'pointer'
                                }}
                            >
                                EN
                            </button>
                            <span style={{ color: '#E5E7EB', fontSize: '12px' }}>|</span>
                            <button
                                onClick={() => handleLanguageChange('th')}
                                className="px-3 rounded transition-colors"
                                style={{
                                    backgroundColor: currentLang === 'th' ? '#DBEAFE' : 'transparent',
                                    color: currentLang === 'th' ? '#1447E6' : '#4A5565',
                                    fontSize: '12px',
                                    fontWeight: 500,
                                    paddingTop: '2px',
                                    paddingBottom: '2px',
                                    cursor: 'pointer'
                                }}
                            >
                                TH
                            </button>
                        </div>
                    </div>
                    <Link
                        href="#"
                        className="text-white font-medium transition-colors flex items-center justify-center gap-2"
                        style={{
                            background: 'linear-gradient(to bottom right, #155DFC, #0092B8)',
                            borderRadius: '14px',
                            boxShadow: '0 10px 25px rgba(21, 93, 252, 0.3)',
                            width: '132px',
                            height: '36px',
                            fontSize: '14px',
                            fontWeight: 500
                        }}
                    >
                        Get Started <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </header>
    );
}
