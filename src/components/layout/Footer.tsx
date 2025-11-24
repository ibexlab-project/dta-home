import Link from "next/link";
import { Send, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer 
            className="text-white py-16"
            style={{ backgroundColor: '#101828' }}
        >
            <div style={{ width: '1440px', margin: '0 auto', paddingLeft: '16px', paddingRight: '16px' }}>
                <div className="flex justify-center mb-12">
                    <div 
                        className="grid grid-cols-4 gap-10 shrink-0"
                        style={{ width: '1200px' }}
                    >
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">
                            <span className="italic">DTA</span>
                            <span style={{ color: '#0279D5' }}>.</span>
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Bridging traditional finance and blockchain technology to create the future of decentralized financial services.
                        </p>
                    </div>

                    {/* Services Column */}
                    <div className="space-y-4">
                        <h4 
                            className="font-normal"
                            style={{ fontSize: '18px' }}
                        >
                            Services
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link 
                                    href="#" 
                                    className="font-normal hover:text-white transition-colors"
                                    style={{ color: '#99A1AF', fontSize: '14px' }}
                                >
                                    Blockchain Integration
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="#" 
                                    className="font-normal hover:text-white transition-colors"
                                    style={{ color: '#99A1AF', fontSize: '14px' }}
                                >
                                    DID Solutions
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="#" 
                                    className="font-normal hover:text-white transition-colors"
                                    style={{ color: '#99A1AF', fontSize: '14px' }}
                                >
                                    Token Economy
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="#" 
                                    className="font-normal hover:text-white transition-colors"
                                    style={{ color: '#99A1AF', fontSize: '14px' }}
                                >
                                    Wallet Services
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Development Column */}
                    <div className="space-y-4">
                        <h4 
                            className="font-normal"
                            style={{ fontSize: '18px' }}
                        >
                            Development
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link 
                                    href="#" 
                                    className="font-normal hover:text-white transition-colors"
                                    style={{ color: '#99A1AF', fontSize: '14px' }}
                                >
                                    API Documentation
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="#" 
                                    className="font-normal hover:text-white transition-colors"
                                    style={{ color: '#99A1AF', fontSize: '14px' }}
                                >
                                    Developer Portal
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="#" 
                                    className="font-normal hover:text-white transition-colors"
                                    style={{ color: '#99A1AF', fontSize: '14px' }}
                                >
                                    SDK Downloads
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="#" 
                                    className="font-normal hover:text-white transition-colors"
                                    style={{ color: '#99A1AF', fontSize: '14px' }}
                                >
                                    Support Center
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Stay Updated Column */}
                    <div className="space-y-4">
                        <h4 
                            className="font-normal"
                            style={{ fontSize: '18px' }}
                        >
                            Stay Updated
                        </h4>
                        <p 
                            className="font-normal"
                            style={{ color: '#99A1AF', fontSize: '14px' }}
                        >
                            Subscribe to our newsletter for the latest updates
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
                            © 2023 DTA, Inc. All rights reserved.
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            <span>contact@dta.net</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
