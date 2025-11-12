export default function TeamPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-yellow-700">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
            </div>

            <div className="relative container mx-auto px-4 py-20">
                <div className="max-w-6xl mx-auto">
                    {/* Heading */}
                    <div className="text-center mb-16">
                        <h1 className="text-6xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 drop-shadow-lg">
                            The Team
                        </h1>
                        <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto"></div>
                    </div>

                    {/* Main Content Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
                        {/* Text Content */}
                        <div className="space-y-8">
                            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-yellow-500/30 shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300">
                                <div className="inline-block mb-6">
                                    <h2 className="text-3xl font-bold text-yellow-400 mb-2">Professional Excellence</h2>
                                    <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-blue-400"></div>
                                </div>

                                <div className="space-y-6 text-white/90">
                                    <p className="text-lg leading-relaxed">
                                        Meet our team of professionals making up our Executive and Senior management personnel.
                                    </p>
                                    <p className="leading-relaxed">
                                        Our leadership team combines extensive real estate experience with innovative thinking, ensuring that
                                        Fastin Property Auctions remains at the forefront of industry developments.
                                    </p>
                                    <p className="leading-relaxed">
                                        Each team member brings unique expertise and a shared commitment to delivering exceptional results for our clients and partners.
                                    </p>
                                    <div className="pt-4 border-t border-yellow-500/30">
                                        <p className="leading-relaxed font-medium text-yellow-300">
                                            The Fastin Property Auctions team is committed to realizing the best value for Sellers and Buyers through a simple, transparent and auditable process.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-blue-600 rounded-3xl blur-xl opacity-30"></div>
                            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-2 border border-yellow-500/40 shadow-2xl">
                                <div className="overflow-hidden rounded-2xl">
                                    <img
                                        src="https://i.postimg.cc/NMxgPfZF/IMG-20251104-WA0042.jpg"
                                        alt="Fastin Property Auctions Team"
                                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full blur-2xl opacity-40"></div>
                                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full blur-2xl opacity-40"></div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom decorative section */}
                    <div className="text-center mt-20">
                        <div className="inline-block bg-gradient-to-r from-yellow-500/20 via-yellow-400/20 to-blue-600/20 backdrop-blur-lg rounded-full px-12 py-6 border border-yellow-500/30">
                            <p className="text-white/80 text-lg font-medium">
                                Building Trust Through Excellence and Transparency
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom wave decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-yellow-900/20 to-transparent"></div>
        </div>
    )
}