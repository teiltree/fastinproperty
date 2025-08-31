import {Link} from "react-router-dom";
import {FileText} from "lucide-react";

export default function FootprintPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}

            <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
                    <div className="flex items-start sm:items-center justify-between gap-6 flex-col sm:flex-row">
                        <div>
                            <div className="flex items-center gap-2 text-blue-200/90 text-sm">
                                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                                <span>/</span>
                                <span className="text-white">About</span>
                                <span>/</span>
                                <span className="text-white">National Coverage</span>
                            </div>
                            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                                National Coverage
                            </h1>
                            <p className="mt-3 text-blue-100 max-w-2xl">
                                Advantages of Using a Brokerage with a National Footprint
                            </p>
                        </div>
                        <div className="shrink-0 bg-white/10 rounded-2xl p-4 ring-1 ring-white/20">
                            <FileText className="w-12 h-12" />
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">
                    {/* Introduction */}
                    <div className="text-center mb-16">
                        <p className="text-xl text-gray-700 leading-relaxed mb-8">
                            In the highly competitive real estate industry, service delivery is of utmost importance. At Fastin Property Auctions, we are able to provide our services nationally across Zimbabwe.
                        </p>

                        <div className="bg-white/80 backdrop-blur-sm rounded-xl ring-1 ring-gray-200 p-8 shadow-sm">
                            <p className="text-gray-700 leading-relaxed">
                                With a presence in all 10 provinces and all major metropolitan areas, we can take on any property, big or small, and utilize the power of our extensive marketing group.
                            </p>
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
                                        <span>Experienced brokers and executive leaders to maximize your property’s potential.</span>
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
                                    The first main advantage of using FastIn Property is that you will be served by knowledgeable brokers and executive team leaders with the experience to market your property to its full potential.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    We are also committed to continually cultivating knowledge and creating an environment whereby our clients achieve success through our service.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Local Expertise Section */}
                    <div className="mb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                            <div className="order-2 lg:order-1">
                                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Local Area Specialists</h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                                    Unlike many other auction companies, we believe in the tremendous power of utilizing the knowledge of local area specialist consultants.
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
                                The third advantage of using FastIn Property is our professional responsibility to clients. As a large brokerage, we have a responsibility to act professionally and deliver first-class services to our clients.
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