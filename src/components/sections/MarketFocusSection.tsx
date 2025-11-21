import { Globe2, TrendingUp, Users, Zap } from "lucide-react";

export function MarketFocusSection() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Focusing on the <span className="text-primary">Blue Premium Tourism Market</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Targeting high-value sectors with innovative blockchain solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="h-10 w-10 bg-blue-100 text-primary rounded-full flex items-center justify-center mb-4">
                            <Globe2 className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Global Accessibility</h3>
                        <p className="text-gray-600 text-sm">
                            Breaking down geographical barriers to allow seamless participation from anywhere in the world.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="h-10 w-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                            <TrendingUp className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">High Growth Potential</h3>
                        <p className="text-gray-600 text-sm">
                            Capitalizing on the rapidly expanding digital tourism sector with projected 15% CAGR.
                        </p>
                    </div>
                </div>

                <h3 className="text-xl font-bold mb-8 text-gray-900 uppercase tracking-wide text-sm">High Value Pain Points</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-100">
                        <div className="h-8 w-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-3">
                            <Zap className="h-4 w-4" />
                        </div>
                        <h4 className="font-bold mb-2">Inefficiency</h4>
                        <p className="text-xs text-gray-500">Legacy systems causing delays and high transaction costs.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100">
                        <div className="h-8 w-8 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-3">
                            <Users className="h-4 w-4" />
                        </div>
                        <h4 className="font-bold mb-2">Lack of Trust</h4>
                        <p className="text-xs text-gray-500">Opaque processes leading to user skepticism and friction.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100">
                        <div className="h-8 w-8 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center mb-3">
                            <Globe2 className="h-4 w-4" />
                        </div>
                        <h4 className="font-bold mb-2">Fragmentation</h4>
                        <p className="text-xs text-gray-500">Disconnected services creating poor user experiences.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
