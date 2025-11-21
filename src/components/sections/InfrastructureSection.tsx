import Image from "next/image";
import { FileCheck, CheckCircle, Users, Handshake, TrendingUp, Zap, GitBranch } from "lucide-react";

export function InfrastructureSection() {
    return (
        <section id="ecosystem" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Ecosystem Architecture Card */}
                <div className="flex justify-center mb-8">
                    <div
                        className="flex items-center justify-center gap-2 shrink-0 bg-white"
                        style={{
                            width: '274px',
                            height: '42px',
                            border: '1px solid #BEDBFF',
                            borderRadius: '14px'
                        }}
                    >
                        <GitBranch 
                            className="h-5 w-5" 
                            style={{ color: '#155DFC' }} 
                        />
                        <span 
                            className="font-normal"
                            style={{ 
                                fontSize: '14px',
                                background: 'linear-gradient(to right, #155DFC, #0092B8)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                        >
                            ECOSYSTEM ARCHITECTURE
                        </span>
                    </div>
                </div>

                <div className="text-center mb-16">
                    <h2 
                        className="font-normal mb-4"
                        style={{
                            fontSize: '60px',
                            background: 'linear-gradient(to right, #101828, #193CB8, #007595)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}
                    >
                        Three-Layer Infrastructure
                    </h2>
                    <p className="font-normal max-w-2xl mx-auto" style={{ color: '#4A5565', fontSize: '18px', letterSpacing: '-0.44px' }}>
                        A comprehensive blockchain ecosystem connecting users, members, and platform providers.
                    </p>
                </div>

                {/* DTA Card */}
                <div className="flex justify-center">
                    <div 
                        className="bg-white rounded-2xl shadow-lg border p-8"
                        style={{
                            width: '672px',
                            height: '366px',
                            borderColor: '#BEDBFF'
                        }}
                    >
                        {/* Top Section */}
                        <div className="flex items-start gap-6 mb-6">
                            {/* Left Icon */}
                            <div className="shrink-0">
                                <img 
                                    src="/images/infrastructure/dta_icon.png" 
                                    alt="DTA Icon" 
                                    className="object-contain"
                                />
                            </div>
                            
                            {/* Right Content */}
                            <div className="flex-1">
                                <div className="mb-2">
                                    <img 
                                        src="/images/infrastructure/dta_title.png" 
                                        alt="DTA" 
                                        className="object-contain"
                                    />
                                </div>
                                <span 
                                    className="inline-block px-3 py-1 rounded text-xs font-semibold mb-2"
                                    style={{
                                        backgroundColor: '#DBEAFE',
                                        color: '#1447E6'
                                    }}
                                >
                                    Layer 1: Operating Entity
                                </span>
                                <p className="text-gray-600 text-sm">
                                    DTA is the ecosystem's Operator and Legal Steward.
                                </p>
                            </div>
                        </div>

                        {/* Bottom Content Area */}
                        <div className="space-y-4">
                            {/* Role Section */}
                            <div className="flex items-start gap-3">
                                <div className="shrink-0 mt-0.5">
                                    <FileCheck className="h-5 w-5" style={{ color: '#45556C' }} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 mb-1">Role</h4>
                                    <p className="text-sm text-gray-600 -ml-[36px]">
                                        Exclusively handles all off-chain business execution, including partnership contracts, 
                                        legal compliance, operational fund management, and global marketing.
                                    </p>
                                </div>
                            </div>

                            {/* Goal Section */}
                            <div className="flex items-start gap-3">
                                <div className="shrink-0 mt-0.5">
                                    <CheckCircle className="h-5 w-5" style={{ color: '#45556C' }} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 mb-1">Goal</h4>
                                    <p className="text-sm text-gray-600 -ml-[36px]">
                                        To build trust with regulatory bodies like the Thai SEC and provide a stable business 
                                        environment for partners and sustainable benefits for members.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Connection Line */}
                <div className="flex justify-center mt-2">
                    <div
                        style={{
                            width: '2px',
                            height: '32px',
                            background: 'linear-gradient(to bottom, #51A2FF, rgba(0, 0, 0, 0))'
                        }}
                    />
                </div>

                {/* Powers Both Platforms Card */}
                <div className="flex justify-center">
                    <div 
                        className="bg-white rounded-lg shadow-md border flex items-center justify-center gap-2"
                        style={{
                            width: '338px',
                            height: '54px',
                            borderColor: '#E5E7EB'
                        }}
                    >
                        <Zap className="h-5 w-5" style={{ color: '#155DFC' }} />
                        <span 
                            className="font-normal"
                            style={{ color: '#364153', fontSize: '14px' }}
                        >
                            POWERS BOTH PLATFORMS
                        </span>
                        <Zap className="h-5 w-5" style={{ color: '#0092B8' }} />
                    </div>
                </div>

                {/* Connection Lines */}
                <div className="flex justify-center items-start mt-2" style={{ gap: '300px' }}>
                    <div
                        style={{
                            width: '2px',
                            height: '32px',
                            background: 'linear-gradient(to bottom, #51A2FF, rgba(0, 0, 0, 0))'
                        }}
                    />
                    <div
                        style={{
                            width: '2px',
                            height: '32px',
                            background: 'linear-gradient(to bottom, #00D3F2, rgba(0, 0, 0, 0))'
                        }}
                    />
                </div>

                {/* SiMX and SiNODE Cards */}
                <div className="flex justify-center gap-16">
                    {/* SiMX Card (Left) */}
                    <div 
                        className="bg-white rounded-2xl shadow-lg border p-8 shrink-0"
                        style={{
                            width: '550px',
                            minWidth: '550px',
                            height: '393px',
                            borderColor: '#BEDBFF'
                        }}
                    >
                        {/* Top Section */}
                        <div className="flex items-start gap-6 mb-6">
                            {/* Left Icon */}
                            <div className="shrink-0">
                                <img 
                                    src="/images/infrastructure/simx_icon.png" 
                                    alt="SiMX Icon" 
                                    className="object-contain"
                                />
                            </div>
                            
                            {/* Right Content */}
                            <div className="flex-1">
                                <div className="mb-2">
                                    <img 
                                        src="/images/infrastructure/simx_title.png" 
                                        alt="SiMX" 
                                        className="object-contain"
                                    />
                                </div>
                                <span 
                                    className="inline-block px-3 py-1 rounded text-xs font-semibold mb-2"
                                    style={{
                                        backgroundColor: '#DBEAFE',
                                        color: '#1447E6'
                                    }}
                                >
                                    Layer 2: Member Platform
                                </span>
                                <p className="text-gray-600 text-sm">
                                    SiMX is DTA's Premium D2O Membership Platform
                                </p>
                            </div>
                        </div>

                        {/* Bottom Content Area */}
                        <div className="space-y-4">
                            {/* Role Section */}
                            <div className="flex items-start gap-3">
                                <div className="shrink-0 mt-0.5">
                                    <Users className="h-5 w-5" style={{ color: '#155DFC' }} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 mb-1">Role</h4>
                                    <p className="text-sm text-gray-600 -ml-[36px]">
                                        A membership service for digital asset holders. Non-chain advocates (members) are involved.
                                    </p>
                                </div>
                            </div>

                            {/* Benefits Section */}
                            <div className="flex items-start gap-3">
                                <div className="shrink-0 mt-0.5">
                                    <CheckCircle className="h-5 w-5" style={{ color: '#155DFC' }} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 mb-1">Benefits</h4>
                                    <p className="text-sm text-gray-600 -ml-[36px]">
                                        Members receive access to our SiMX-based ecosystem, DeFi assets like SiM-T, granting exclusive access to premium Thai golf courses, luxury resorts, and private villas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SiNODE Card (Right) */}
                    <div 
                        className="bg-white rounded-2xl shadow-lg border p-8 shrink-0"
                        style={{
                            width: '550px',
                            minWidth: '550px',
                            height: '393px',
                            borderColor: '#BEDBFF'
                        }}
                    >
                        {/* Top Section */}
                        <div className="flex items-start gap-6 mb-6">
                            {/* Left Icon */}
                            <div className="shrink-0">
                                <img 
                                    src="/images/infrastructure/sinode_icon.png" 
                                    alt="SiNODE Icon" 
                                    className="object-contain"
                                />
                            </div>
                            
                            {/* Right Content */}
                            <div className="flex-1">
                                <div className="mb-2">
                                    <img 
                                        src="/images/infrastructure/sinode_title.png" 
                                        alt="SiNODE" 
                                        className="object-contain"
                                    />
                                </div>
                                <span 
                                    className="inline-block px-3 py-1 rounded text-xs font-semibold mb-2"
                                    style={{
                                        backgroundColor: '#CEFAFE',
                                        color: '#007595'
                                    }}
                                >
                                    Layer 3: Provider Gateway
                                </span>
                                <p className="text-gray-600 text-sm">
                                    SiNODE is DTA's B2B Business Gateway
                                </p>
                            </div>
                        </div>

                        {/* Bottom Content Area */}
                        <div className="space-y-4">
                            {/* Role Section */}
                            <div className="flex items-start gap-3">
                                <div className="shrink-0 mt-0.5">
                                    <Handshake className="h-5 w-5" style={{ color: '#0092B8' }} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 mb-1">Role</h4>
                                    <p className="text-sm text-gray-600 -ml-[36px]">
                                        The gateway for real-world B2B (e.g., hotels, airlines, golf courses) to connect to the D2O membership network.
                                    </p>
                                </div>
                            </div>

                            {/* Function Section */}
                            <div className="flex items-start gap-3">
                                <div className="shrink-0 mt-0.5">
                                    <TrendingUp className="h-5 w-5" style={{ color: '#0092B8' }} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 mb-1">Function</h4>
                                    <p className="text-sm text-gray-600 -ml-[36px]">
                                        Partners receive sophisticated analytics from DTA via SiM-DEC, including sales analytics, targeted marketing, and a Smart Booking System for premium members.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ecosystem Synergy Card */}
                <div className="flex justify-center mt-8">
                    <div 
                        className="bg-white rounded-2xl p-8 flex items-center gap-6"
                        style={{
                            width: '896px',
                            height: '140px',
                            border: '1px solid #E5E7EB',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                        }}
                    >
                        {/* Left Icon */}
                        <div className="shrink-0">
                            <img 
                                src="/images/infrastructure/ecosystem_icon.png" 
                                alt="Ecosystem Synergy Icon" 
                                className="object-contain"
                            />
                        </div>
                        
                        {/* Right Content */}
                        <div className="flex-1 flex flex-col justify-center">
                            <h3 
                                className="font-normal mb-2"
                                style={{
                                    fontSize: '18px',
                                    letterSpacing: '-0.44px',
                                    background: 'linear-gradient(to right, #155DFC, #0092B8)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    color: 'transparent'
                                }}
                            >
                                Ecosystem Synergy
                            </h3>
                            <p 
                                className="font-normal"
                                style={{
                                    fontSize: '14px',
                                    letterSpacing: '-0.15px',
                                    color: '#4A5565'
                                }}
                            >
                                SiPASS members seamlessly access premium services through SiNODE-connected providers, creating a unified blockchain-powered tourism experience
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
