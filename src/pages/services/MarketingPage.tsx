export default function MarketingPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - UNCHANGED (already optimal) */}
            <div
                className="relative h-[80vh] bg-cover bg-center flex items-center overflow-hidden"
                style={{
                    backgroundImage: `linear-gradient(90deg, rgba(30, 58, 138, 0.95) 0%, rgba(30, 58, 138, 0.1) 50%, rgba(202, 138, 4, 0.3) 100%), url('https://i.postimg.cc/SRNy0bpS/IMG_20251104_WA0035.jpg')`
                }}
            >
                <div className="absolute inset-0 bg-transparent"></div>
                <div className="relative z-10 container mx-auto px-8 md:px-16">
                    <div className="max-w-2xl">
                        {/* Breadcrumb */}
                        <div className="flex items-center space-x-3 mb-6 text-white/80">
                            <span className="hover:text-yellow-400 transition-colors cursor-pointer"></span>
                            <span className="text-yellow-400"></span>
                            <span className="hover:text-yellow-400 transition-colors cursor-pointer"></span>
                            <span className="text-yellow-400"></span>
                            <span className="text-yellow-400 font-semibold"></span>
                        </div>

                        {/* Title */}
                        <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
                            Comprehensive
                            <span className="block text-yellow-400 font-semibold mt-2">Marketing</span>
                        </h1>
                        <div className="w-32 h-1.5 bg-yellow-400 rounded-full shadow-lg"></div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-24">
                <div className="max-w-7xl mx-auto">
                    {/* Introduction - Combined with Featured Image */}
                    <div className="mb-24">
                        {/* Opening Paragraph */}
                        <div className="text-center mb-16 max-w-4xl mx-auto">
                            <p className="text-3xl text-gray-800 leading-relaxed font-light">
                                The Fastin Property Auctions offers a comprehensive range of services & nationwide networking which gives properties the
                                <span className="font-bold text-blue-900"> paramount exposure</span> and attention in the real estate marketplace.
                            </p>
                        </div>

                        {/* Combined Content Box with Image */}
                        <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-3xl shadow-2xl border-2 border-blue-900/10 overflow-hidden relative">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"></div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                {/* Left Side - Text Content */}
                                <div className="p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
                                    <div className="space-y-8">
                                        <div>
                                            <p className="text-gray-700 leading-relaxed text-xl">
                                                Selling a home in today's market can be challenging - the Fastin Property Auctions Team understands that. While the market can be challenging, hundreds of homes are sold each week. What's the difference between selling your home or failing to do so?
                                                <span className="font-bold text-blue-900"> The details!</span>
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-gray-700 leading-relaxed text-xl">
                                                Whether it's our proven sales approach, effective marketing campaigns, or utilizing our extensive network, at Fastin Property Auctions no detail is overlooked.
                                            </p>
                                        </div>

                                        <div className="bg-white rounded-2xl p-8 border-l-4 border-yellow-500 shadow-lg">
                                            <p className="text-gray-800 leading-relaxed text-xl font-medium">
                                                When we say <span className="text-blue-900 font-bold">"Selling Real Estate the Right Way"</span>, we mean it! Our clients come first. With a proven track record, the right skill set, and years of experience, the Fastin Property Auctions team has the right tools to successfully sell your home.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side - Featured Image */}
                                <div className="relative h-[400px] lg:h-auto order-1 lg:order-2 group">
                                    <img
                                        src="https://i.postimg.cc/3JNKnhB1/IMG_20251104_WA0033.jpg"
                                        alt="Excellence in Property Marketing"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-8">
                                        <div className="bg-gradient-to-r from-blue-900/90 to-blue-800/90 backdrop-blur-sm rounded-xl p-6 border-2 border-yellow-400">
                                            <p className="text-yellow-400 text-2xl font-bold text-center">Excellence in Property Marketing</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Marketing Campaign Section */}
                    <div className="mb-24">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl font-bold text-blue-900 mb-6">Our Marketing Arsenal</h2>
                            <div className="w-40 h-1.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto rounded-full mb-8"></div>
                            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light">
                                A multi-channel approach designed to maximize your property's exposure across every platform that matters
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
                            {[
                                {
                                    icon: (
                                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    ),
                                    title: "Professional Photography & Virtual Tours",
                                    description: "Professional photography + virtual tour of your property & Drone. We advertise on multiple social media and property search portals"
                                },
                                {
                                    icon: (
                                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                                        </svg>
                                    ),
                                    title: "Social Media Campaigns",
                                    description: "Paid social media campaigns making it live nationwide to over 5+ million social media users"
                                },
                                {
                                    icon: (
                                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    ),
                                    title: "Online Auction Events",
                                    description: "Online auction events where buyers worldwide can bid on your property from the comfort of their home"
                                },
                                {
                                    icon: (
                                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    ),
                                    title: "Investor Database",
                                    description: "Large database of investors = Maximum exposure!"
                                },
                                {
                                    icon: (
                                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    ),
                                    title: "Email & SMS Campaigns",
                                    description: "Targeted email and SMS campaigns to reach potential buyers"
                                },
                                {
                                    icon: (
                                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                        </svg>
                                    ),
                                    title: "Posters & Billboards",
                                    description: "Traditional advertising through posters and billboards for maximum visibility"
                                }
                            ].map((item, index) => (
                                <div key={index} className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-10 border-2 border-gray-100 hover:border-yellow-400 transform hover:-translate-y-3 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-900/5 to-yellow-500/5 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>

                                    <div className="relative">
                                        <div className="w-24 h-24 bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-8 text-white group-hover:from-yellow-500 group-hover:to-yellow-600 transition-all duration-500 shadow-lg group-hover:shadow-yellow-500/50 group-hover:scale-110">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-blue-900 mb-5 text-center group-hover:text-yellow-600 transition-colors min-h-[3.5rem] flex items-center justify-center">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 text-center leading-relaxed text-lg">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* NEW: Featured Property Image 2 - Split Layout with Text */}
                        <div className="bg-gradient-to-br from-blue-50 via-white to-yellow-50 rounded-3xl shadow-2xl border-2 border-blue-900/10 overflow-hidden mb-20">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                {/* Image Side */}
                                <div className="h-[500px] lg:h-auto relative overflow-hidden group">
                                    <img
                                        src="https://i.postimg.cc/Fzs9tXQG/IMG_20251104_WA0037.jpg"
                                        alt="Premium Property Marketing"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                                </div>

                                {/* Text Side */}
                                <div className="p-12 lg:p-16 flex flex-col justify-center">
                                    <div className="mb-6">
                                        <span className="inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                                            Featured Service
                                        </span>
                                    </div>
                                    <h3 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
                                        Professional Property Showcase
                                    </h3>
                                    <div className="w-24 h-1.5 bg-yellow-500 rounded-full mb-8"></div>
                                    <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                        Every property we handle receives premium treatment with professional photography, comprehensive documentation, and strategic marketing placement. Our attention to detail ensures your property stands out in the marketplace.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                            <span className="text-gray-700 font-medium">High-Quality Photography</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                            <span className="text-gray-700 font-medium">Detailed Property Information</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                            <span className="text-gray-700 font-medium">Strategic Market Positioning</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Information Pack Section - ENHANCED WITH IMAGE LEFT-ALIGNED TEXT */}
                        <div className="bg-gradient-to-br from-blue-50 via-white to-yellow-50 rounded-3xl shadow-2xl p-16 mb-20 border-2 border-blue-900/10 overflow-hidden relative flex items-center">
                            {/* Decorative Top Border */}
                            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"></div>

                            {/* Background Image on Right */}
                            <div
                                className="absolute right-0 top-0 w-1/2 h-full opacity-90 bg-cover bg-center"
                                style={{
                                    backgroundImage: `url('https://i.postimg.cc/3NJKMQHg/IMG-20251104-WA0036.jpg')`,
                                    maskImage: 'linear-gradient(to left, rgba(0,0,0,1), transparent)',
                                    WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1), transparent)'
                                }}
                            ></div>

                            {/* Gradient glow accents */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl"></div>

                            {/* Text Content - moved to left */}
                            <div className="relative z-10 w-1/2 pr-10">
                                <h3 className="text-5xl font-bold text-blue-900 mb-6">
                                    Professional Information Packs
                                </h3>
                                <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full mb-10"></div>
                                <p className="text-2xl text-gray-600 mb-16 font-light">
                                    Comprehensive property information packs that get added to our website and sent directly to our investor network.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Global Reach Section - ENHANCED WITH IMAGE */}
                    <div className="mb-24">
                        <div className="text-center mb-16">
                            <h2 className="text-6xl font-bold text-blue-900 mb-6">Global Bidding Platform</h2>
                            <div className="w-40 h-1.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto rounded-full mb-8"></div>
                            <p className="text-3xl text-gray-600 font-light">Buyers can bid from anywhere in the world!</p>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 via-white to-yellow-50 rounded-3xl p-14 border-2 border-blue-900/10 shadow-xl relative overflow-hidden">
                            {/* NEW: Subtle property image in background */}
                            <div
                                className="absolute left-0 top-0 w-1/3 h-full opacity-95 bg-cover bg-center"
                                style={{
                                    backgroundImage: `url('https://i.postimg.cc/3NJKMQHg/IMG-20251104-WA0036.jpg')`,
                                    maskImage: 'linear-gradient(to right, rgba(0,0,0,0.3), transparent)',
                                    WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.3), transparent)'
                                }}
                            ></div>

                            <div className="relative">
                                <h3 className="text-4xl font-bold text-blue-900 mb-8 text-center">Extensive Marketing Channels</h3>
                                <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
                                    We utilize an extensive network of marketing channels and platforms to ensure your property receives maximum exposure across multiple media outlets, property portals, and social media platforms, reaching potential buyers wherever they are.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Summary Section */}
                    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white rounded-3xl p-16 text-center relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/10"></div>
                        <div className="absolute top-10 right-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <h3 className="text-5xl font-bold mb-8">Multi-Platform Marketing Excellence</h3>
                            <div className="w-32 h-1.5 bg-yellow-400 mx-auto rounded-full mb-10 shadow-lg"></div>
                            <p className="text-2xl leading-relaxed max-w-4xl mx-auto font-light">
                                We harness the power of multiple Electronic, Social Media, and Physical platforms to elevate your property above the competition.
                                Our comprehensive marketing approach ensures maximum exposure across all relevant channels, giving you the best possible chance of achieving
                                <span className="font-bold text-yellow-400"> optimal results at auction</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}