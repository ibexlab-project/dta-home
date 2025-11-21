import Link from "next/link";
import Image from "next/image";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md" style={{ borderBottom: '1px solid #E5E7EB' }}>
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/images/logo.png"
                        alt="DTA"
                        width={100}
                        height={40}
                        className="object-contain"
                    />
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link 
                        href="#core-structure" 
                        className="font-normal hover:text-primary transition-colors"
                        style={{ fontSize: '14px', color: '#4B5563' }}
                    >
                        Core Structure
                    </Link>
                    <Link 
                        href="#market-strategy" 
                        className="font-normal hover:text-primary transition-colors"
                        style={{ fontSize: '14px', color: '#4B5563' }}
                    >
                        Market Strategy
                    </Link>
                    <Link 
                        href="#technology" 
                        className="font-normal hover:text-primary transition-colors"
                        style={{ fontSize: '14px', color: '#4B5563' }}
                    >
                        Technology
                    </Link>
                    <Link 
                        href="#roadmap" 
                        className="font-normal hover:text-primary transition-colors"
                        style={{ fontSize: '14px', color: '#4B5563' }}
                    >
                        Roadmap
                    </Link>
                    <Link 
                        href="#partners" 
                        className="font-normal hover:text-primary transition-colors"
                        style={{ fontSize: '14px', color: '#4B5563' }}
                    >
                        Partners
                    </Link>
                    <Link 
                        href="#media" 
                        className="font-normal hover:text-primary transition-colors"
                        style={{ fontSize: '14px', color: '#4B5563' }}
                    >
                        Media
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Link
                        href="#"
                        className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                        Launch App
                    </Link>
                </div>
            </div>
        </header>
    );
}
