import Link from "next/link";
import { Send, Mail } from "lucide-react";
import { getTranslations, type Locale } from "@/lib/get-translations";

interface FooterProps {
    locale: Locale;
}

export function Footer({ locale }: FooterProps) {
    const t = getTranslations(locale).footer;
    return (
        <footer 
            className="text-white py-16"
            style={{ backgroundColor: '#101828' }}
        >
            <div style={{ width: '1440px', margin: '0 auto', paddingLeft: '16px', paddingRight: '16px' }}>
                <div className="flex justify-center mb-12">
                    <div 
                        className="grid grid-cols-3 gap-10 shrink-0"
                        style={{ width: '1200px' }}
                    >
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">
                            <span className="italic">DTA</span>
                            <span style={{ color: '#0279D5' }}>.</span>
                        </h3>
                        <p className="text-gray-400 text-sm">
                            {t.description}
                        </p>
                    </div>

                    {/* For Partners Column */}
                    <div className="space-y-4" style={{ marginLeft: '120px' }}>
                        <h4 
                            className="font-normal"
                            style={{ fontSize: '18px' }}
                        >
                            {t.forPartners}
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link 
                                    href="#" 
                                    className="font-normal hover:text-white transition-colors"
                                    style={{ color: '#99A1AF', fontSize: '14px' }}
                                >
                                    {t.sinodePlatform}
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="#" 
                                    className="font-normal hover:text-white transition-colors"
                                    style={{ color: '#99A1AF', fontSize: '14px' }}
                                >
                                    {t.partnerNetwork}
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="#" 
                                    className="font-normal hover:text-white transition-colors"
                                    style={{ color: '#99A1AF', fontSize: '14px' }}
                                >
                                    {t.becomeAPartner}
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="#" 
                                    className="font-normal hover:text-white transition-colors"
                                    style={{ color: '#99A1AF', fontSize: '14px' }}
                                >
                                    {t.businessInquiries}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Our Ecosystem For Partners Column */}
                    <div className="space-y-4">
                        <h4 
                            className="font-normal"
                            style={{ fontSize: '18px' }}
                        >
                            {t.ourEcosystemForPartners}
                        </h4>
                        <p 
                            className="font-normal"
                            style={{ color: '#99A1AF', fontSize: '14px' }}
                        >
                            {t.ecosystemDescription}
                        </p>
                        <div className="flex items-center gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-gray-800 border-none focus:ring-0 text-sm text-white px-3 py-2 rounded-md placeholder-gray-500 flex-1"
                            />
                            <button className="bg-primary p-2 rounded-md hover:bg-blue-600 transition-colors">
                                <Send className="h-4 w-4 text-white" />
                            </button>
                        </div>
                    </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex justify-center">
                    <div 
                        className="border-t border-gray-700 pt-8 pb-12 flex flex-row justify-between items-center text-sm text-gray-400 shrink-0"
                        style={{ width: '1200px' }}
                    >
                        <div>
                            {t.copyright}
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            <span>contact@digital-tour.co.th</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
