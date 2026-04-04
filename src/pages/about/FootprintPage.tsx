import {Link} from "react-router-dom";
import {FileText} from "lucide-react";

export default function FootprintPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}

            <section className="relative  h-[70vh] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 overflow-hidden">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-70">
                    <div className="absolute bg-cover bg-center inset-0"
                         style={{
                             backgroundImage: `url('https://i.postimg.cc/zD0zCvnn/IMG_20251104_WA0031.jpg')`
                         }}>
                        {/* Subtle pattern overlay with reduced opacity */}
                        <div className="absolute inset-0 opacity-5" style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                            backgroundSize: '40px 40px'
                        }}></div>
                    </div>
                </div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-14">

                    <div className="flex items-start sm:items-center justify-between gap-6 flex-col sm:flex-row">
                        <div>
                            <div className="flex items-center gap-2 text-blue-200/90 text-sm">
                                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                                <span>/</span>
                                <span className="text-white">About</span>
                                <span>/</span>
                                <span className="text-white">National Coverage</span>
                            </div>
                            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                                National Coverage
                            </h1>
                            <p className="mt-3 text-blue-100 max-w-2xl">
                                Advantages of Using a Brokerage with a National Footprint
                            </p>
                        </div>
                        <div className="shrink-0 bg-white/40 rounded-2xl p-4 ring-1 ring-white/20">
                            <FileText className="w-12 h-12 text-white" />
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">
                    {/* Introduction Section */}
                    <div className="mb-24">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Text Content */}
                            <div className="order-2 lg:order-1">
                                <div className="space-y-8">
                                    <div>
                                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight">
                                            Nationwide Coverage
                                            <span className="block text-yellow-500 mt-2">Across Zimbabwe</span>
                                        </h2>
                                        <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-500 to-transparent rounded-full mb-8"></div>
                                    </div>

                                    <p className="text-xl text-gray-700 leading-relaxed">
                                        In the highly competitive real estate industry, service delivery is of utmost importance. At Fastin Property Auctions, we are able to provide our services nationally across Zimbabwe.
                                    </p>

                                    <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 border-l-4 border-blue-900 shadow-lg">
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center">
                                                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-blue-900 mb-3">All 10 Provinces Covered</h3>
                                                <p className="text-gray-700 leading-relaxed">
                                                    With a presence in all 10 provinces and all major metropolitan areas, we can take on any property, big or small, and utilise the power of our extensive marketing group.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:border-yellow-400 transition-all">
                                            <div className="text-3xl font-bold text-blue-900 mb-2">10</div>
                                            <div className="text-gray-600">Provinces</div>
                                        </div>
                                        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:border-yellow-400 transition-all">
                                            <div className="text-3xl font-bold text-blue-900 mb-2">100%</div>
                                            <div className="text-gray-600">Coverage</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* UPDATED IMAGE */}
                            <div className="order-1 lg:order-2">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-yellow-500 rounded-3xl blur-2xl opacity-20 transform scale-95"></div>
                                    <div className="relative bg-white rounded-3xl p-0 shadow-2xl border-2 border-blue-900/10">
                                        <div className="overflow-hidden rounded-2xl">
                                            <img
                                                src="https://i.postimg.cc/pVCSYy00/IMG_20251104_WA0046.jpg"
                                                alt="Fastin Property Auctions Nationwide Coverage"
                                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full blur-2xl opacity-30"></div>
                                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full blur-2xl opacity-30"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Industry Knowledge Section */}
                    <div className="mb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                            <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5 12.083 12.083 0 015.84 10.578L12 14z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Industry Knowledge</h2>
                                </div>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 mt-1 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Experienced brokers and executive leaders to maximize your property's potential.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 mt-1 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Proven marketing strategies tailored to national and local audiences.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 mt-1 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Continuous learning culture to keep clients ahead of the market.</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-blue-800 mb-4">What this means for you</h3>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    The first main advantage of using Fastin Property Auctions is that you will be served by knowledgeable brokers and executive team leaders with the experience to market your property to its full potential.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    We are also committed to continually cultivating knowledge and creating an environment whereby our clients achieve success through our service.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* NEW: Featured Property Card Section */}
                    <div className="mb-16">
                        <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-3xl shadow-xl p-8 border-2 border-blue-900/10">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                {/* Property Image */}
                                <div className="order-1">
                                    <div className="relative group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-yellow-500 rounded-2xl blur-xl opacity-20 transform scale-95"></div>
                                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                                            <img
                                                src="https://i.postimg.cc/85GpHrKq/IMG_20251104_WA0052.jpg"
                                                alt="Property Available Through National Network"
                                                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent"></div>
                                            <div className="absolute top-4 left-4">
                                                <div className="bg-yellow-500 text-blue-900 px-4 py-2 rounded-xl font-bold text-sm shadow-lg">
                                                    Featured Property
                                                </div>
                                            </div>
                                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                                <div className="bg-blue-900/90 backdrop-blur-sm rounded-xl p-4 border-2 border-yellow-400">
                                                    <p className="text-yellow-400 text-xl font-bold mb-1">Nationwide Reach</p>
                                                    <p className="text-white text-sm">Properties marketed across all 10 provinces</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="order-2">
                                    <div className="space-y-6">
                                        <div>
                                            <div className="inline-flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                                                National Marketing Power
                                            </div>
                                            <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                                                Your Property, Our Network
                                            </h3>
                                            <div className="w-20 h-1 bg-yellow-500 rounded-full mb-6"></div>
                                        </div>

                                        <p className="text-gray-700 text-lg leading-relaxed">
                                            With our national footprint, your property gains exposure across Zimbabwe's entire market. From urban centers to regional towns, we ensure maximum visibility for every listing.
                                        </p>

                                        <div className="space-y-3">
                                            {[
                                                "Marketed to buyers in all 10 provinces",
                                                "Access to nationwide investor database",
                                                "Local expertise with national reach",
                                                "Comprehensive marketing campaigns"
                                            ].map((item, index) => (
                                                <div key={index} className="flex items-center gap-3">
                                                    <div className="bg-yellow-500 rounded-full p-1">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-gray-700 font-medium">{item}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="pt-4">
                                            <div className="bg-white rounded-xl p-6 shadow-md">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="text-sm text-gray-600 mb-1">Average Market Reach</p>
                                                        <p className="text-3xl font-bold text-blue-900">20,000+</p>
                                                    </div>
                                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center">
                                                        <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Local Expertise Section */}
                    <div className="mb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                            <div className="order-2 lg:order-1">
                                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Local Area Specialists</h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                                    Unlike many other auction companies, we believe in the tremendous power of utilising the knowledge of local area specialist consultants.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Our consultants are highly trained and motivated with expert knowledge of your local property market.
                                </p>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-8">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">How our local expertise helps</h3>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">Local insights</span>
                                        <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">On‑the‑ground support</span>
                                        <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">Province‑wide coverage</span>
                                        <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">Rapid valuations</span>
                                        <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">Compliance guidance</span>
                                        <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">Personalised marketing</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Servicing Zimbabwe */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Servicing all corners of Zimbabwe</h2>
                        <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                            With a national footprint and presence in all provinces we have the reach to market your property to a National Audience. Our extensive network ensures that whether you're buying or selling, your property gets maximum exposure across Zimbabwe's diverse markets.
                        </p>
                    </div>

                    {/* Large Support Framework */}
                    <div className="mb-16">
                        <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-8">
                            <h2 className="text-3xl font-semibold text-gray-900 text-center mb-6">Large Support Framework</h2>
                            <p className="text-gray-700 text-lg leading-relaxed text-center">
                                The second advantage of using Fastin Property Auctions is the access to partnerships we have built with highly skilled individuals from the legal, banking, and financial institutions. This increases our service capabilities. At Fastin Property Auctions our large staff complement is our asset. At Fastin Property Auctions you have access to all levels of support including access to decision-makers.
                            </p>
                        </div>
                    </div>

                    {/* Professional Responsibility */}
                    <div className="mb-16">
                        <div className="bg-gradient-to-r from-blue-800 to-blue-700 text-white rounded-xl p-8 shadow-sm">
                            <h2 className="text-3xl font-semibold text-center mb-6">Professional Responsibility</h2>
                            <p className="text-lg leading-relaxed text-center">
                                The third advantage of using Fastin Property Auctions is our professional responsibility to clients. As a large brokerage, we have a responsibility to act professionally and deliver first-class services to our clients.
                            </p>
                        </div>
                    </div>

                    {/* Statistics */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        <div className="bg-white rounded-xl ring-1 ring-gray-200 p-6 text-center shadow-sm transition hover:shadow-md">
                            <h3 className="text-3xl font-bold text-blue-800 mb-2">10</h3>
                            <p className="text-gray-600">Provinces Covered</p>
                        </div>

                        <div className="bg-white rounded-xl ring-1 ring-gray-200 p-6 text-center shadow-sm transition hover:shadow-md">
                            <h3 className="text-3xl font-bold text-blue-800 mb-2">24/7</h3>
                            <p className="text-gray-600">Online Platform</p>
                        </div>
                        <div className="bg-white rounded-xl ring-1 ring-gray-200 p-6 text-center shadow-sm transition hover:shadow-md">
                            <h3 className="text-3xl font-bold text-blue-800 mb-2">100%</h3>
                            <p className="text-gray-600">National Coverage</p>
                        </div>
                    </div>

                    {/* Key Advantages Summary */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl ring-1 ring-gray-200 p-8 text-center shadow-sm">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Industry Knowledge</h3>
                            <p className="text-gray-600 text-sm">Knowledgeable brokers and executive team leaders with extensive market experience</p>
                        </div>

                        <div className="bg-white rounded-xl ring-1 ring-gray-200 p-8 text-center shadow-sm">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Support Framework</h3>
                            <p className="text-gray-600 text-sm">Access to partnerships with legal, banking, and financial institutions</p>
                        </div>

                        <div className="bg-white rounded-xl ring-1 ring-gray-200 p-8 text-center shadow-sm">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Professional Responsibility</h3>
                            <p className="text-gray-600 text-sm">Commitment to act professionally and deliver first-class services</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}