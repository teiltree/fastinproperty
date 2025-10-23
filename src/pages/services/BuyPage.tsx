import { useState } from 'react'
import {
    Clock,
    Shield,
    Home,
    TrendingUp,
    Scale,
    Zap,
    DollarSign,
    ChevronDown,
    Sparkles,
    ArrowRight,
    Check,
    BadgeCheck,
    Handshake
} from "lucide-react";

export default function BuyPage() {
    const [openFaq, setOpenFaq] = useState<string | null>(null)
    const [openBidding, setOpenBidding] = useState<string | null>(null)

    const toggleFaq = (faq: string) => {
        setOpenFaq(openFaq === faq ? null : faq)
    }

    const toggleBidding = (section: string) => {
        setOpenBidding(openBidding === section ? null : section)
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section - Premium */}
            <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 overflow-hidden">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                    <div className="text-center">
                        {/* Premium Badge */}
                        <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
                            <Sparkles className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">Services</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            Buy at <span className="text-yellow-400">Auction</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            Secure your dream property in just 28 days with complete transparency
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="https://iprop.solutions/fastin/properties/for-auction"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                            >
                                Browse Properties
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="/contact"
                                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                            >
                                Learn More
                            </a>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-12 flex flex-wrap justify-center gap-8 text-blue-100">
                            <div className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-yellow-400" />
                                <span>28 Day Completion</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-yellow-400" />
                                <span>No Gazumping</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-yellow-400" />
                                <span>Transparent Process</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" className="w-full h-auto">
                        <path fill="#f9fafb" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                    </svg>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                {/* Benefits of buying at Auction */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                            Benefits of Buying at Auction
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {[
                            {
                                icon: Clock,
                                title: "Speed of Sale",
                                description: "There is no quicker way to buy a house. With a fixed timescale known from the beginning, you will be completing on your purchase within 28 days of the auction.",
                                gradient: "from-blue-500 to-blue-600"
                            },
                            {
                                icon: Shield,
                                title: "Purchasing Security",
                                description: "Once that hammer falls, the property is yours. There won't be anyone backing out of the deal and nor no risk of gazumping. You will avoid the uncertainty that you would get through an estate agent purchase, and the property will be yours within 28 days of the auction.",
                                gradient: "from-yellow-500 to-yellow-600"
                            },
                            {
                                icon: Home,
                                title: "Options",
                                description: "Auctions offer a unique mix of properties such as Residential Properties, Commercial Units and Land not easily found through estate agency and can include repossessions or properties in need of renovation providing opportunity for uplift in value.",
                                gradient: "from-blue-600 to-blue-700"
                            },
                            {
                                icon: TrendingUp,
                                title: "Excellent Investment Opportunities",
                                description: "Everyone likes the chance of a bargain, and property auctions are an ideal place to bag a good deal. Auction offer the prospect of adding value to the property through improvements, change of use (subject to planning permission), or conversion to suit your needs and requirements. This can help to generate higher resale profits, and for buyers looking for these types of property, auction is the best option.",
                                gradient: "from-yellow-600 to-yellow-700"
                            },
                            {
                                icon: Scale,
                                title: "Fair Bidding Process",
                                description: "With auction, you only need to stay one bid ahead of your competitors and reach the reserve price to be successful. When bidding against other interested parties, you can gain the reassurance that others share the same opinion of the property's value, and you can also be in with the chance of having the winning bid at a far lower price than you anticipated, and lower than you would have paid by other means such as buying through an estate agent.",
                                gradient: "from-blue-500 to-blue-600"
                            },
                            {
                                icon: Zap,
                                title: "Competitive Bidding",
                                description: "With auction, you only need to stay one bid ahead of your competitors and reach the reserve price to be successful. When bidding against other interested parties, you can gain the reassurance that others share the same opinion of the property's value, and you can also be in with the chance of having the winning bid at a far lower price than you anticipated, and lower than you would have paid by other means such as buying through an estate agent.",
                                gradient: "from-yellow-500 to-yellow-600"
                            },
                            {
                                icon: DollarSign,
                                title: "Instant Income",
                                description: "If you are a property investor looking for buy to let houses or commercial properties, we sell many tenanted opportunities, which mean you will start to receive rental income right from the day of legal completion, allowing you to collect the cashflow and plan your next purchase.",
                                gradient: "from-blue-600 to-blue-700"
                            },
                            {
                                icon: Handshake,
                                title: "Motivated Vendors",
                                description: "Once that hammer falls, the property is yours. There won't be anyone backing out of the deal and nor no risk of gazumping. You will avoid the uncertainty that you would get through an estate agent purchase, and the property will be yours within 28 days of the auction.",
                                gradient: "from-yellow-600 to-yellow-700"
                            }
                        ].map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
                                >
                                    <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-blue-900 mb-3">{benefit.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* How to Bid Section */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                            How to Bid
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Your step-by-step guide to successfully bidding at auction
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                        {[
                            {
                                id: 'before',
                                title: 'Before the Auction',
                                content: 'Research properties thoroughly by reviewing the auction catalog, attending viewings, and arranging property inspections. Secure your financing in advance to ensure you can complete the purchase. Register as a bidder by providing identification and proof of funds. Set your maximum bid limit and stick to it to avoid overpaying in the heat of the moment.'
                            },
                            {
                                id: 'during',
                                title: 'During the Auction',
                                content: 'Arrive early to familiarize yourself with the auction process and atmosphere. Listen carefully to the auctioneer\'s announcements and terms. Bid confidently when your property comes up, making clear gestures or using your bidding paddle. Stay calm and focused on your predetermined maximum bid. If successful, you\'ll be asked to sign the purchase agreement immediately and pay the required deposit.'
                            },
                            {
                                id: 'after',
                                title: 'After the Auction',
                                content: 'If successful, you\'ll need to pay the deposit (typically 10%) on the day and complete the full payment within the specified timeframe (usually 28 days). Work with your solicitor to finalize all legal documentation and arrange for property transfer. If unsuccessful, your deposit (if paid) will be fully refunded, and you can participate in future auctions.'
                            }
                        ].map((section, index, array) => (
                            <div key={section.id} className={index !== array.length - 1 ? "border-b border-gray-200" : ""}>
                                <button
                                    className="w-full px-8 py-6 text-left hover:bg-blue-50/50 focus:outline-none transition-colors duration-200 group"
                                    onClick={() => toggleBidding(section.id)}
                                >
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                                                openBidding === section.id
                                                    ? 'bg-gradient-to-br from-yellow-500 to-yellow-600 text-white'
                                                    : 'bg-blue-100 text-blue-900 group-hover:bg-blue-200'
                                            }`}>
                                                {index + 1}
                                            </div>
                                            <span className="text-lg font-bold text-blue-900 group-hover:text-blue-700 transition-colors">
                                            {section.title}
                                        </span>
                                        </div>
                                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                                            openBidding === section.id
                                                ? 'bg-gradient-to-br from-yellow-500 to-yellow-600 rotate-180'
                                                : 'bg-blue-100 group-hover:bg-blue-200'
                                        }`}>
                                            <ChevronDown className={`w-5 h-5 transition-colors ${
                                                openBidding === section.id ? 'text-white' : 'text-blue-900'
                                            }`} />
                                        </div>
                                    </div>
                                </button>
                                {openBidding === section.id && (
                                    <div className="px-8 pb-6 text-gray-600 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                                        <p>{section.content}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Buyer's FAQ */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                            Buyer's FAQ
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full mb-6"></div>
                        <p className="text-xl text-gray-600">
                            Common questions about buying at auction
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                        {[
                            {
                                id: 'how-to-register',
                                question: 'How do I register to bid?',
                                answer: 'Registration is straightforward. You can register online through our website or in person before the auction begins. You\'ll need to provide valid identification (such as a passport or driver\'s license) and proof of funds or financing approval. Once registered, you\'ll receive a bidding paddle or number that you\'ll use during the auction.'
                            },
                            {
                                id: 'inspect',
                                question: 'Can I inspect the property before the auction?',
                                answer: 'We strongly encourage all potential bidders to inspect properties before the auction. Inspection times are scheduled and advertised in advance. You can also request a private viewing by contacting our office. Additionally, we provide detailed property information packs, professional photography, and virtual tours to help you make an informed decision.'
                            },
                            {
                                id: 'fees',
                                question: 'Who pays the Auctioneers\' Fee?',
                                answer: 'The auctioneer\'s fee structure varies depending on the specific auction and property type. In most cases, the seller pays the auctioneer\'s commission, while buyers may be responsible for a buyer\'s premium. All fees and charges are clearly disclosed in the auction terms and conditions, which are provided before the auction begins. There are no hidden costs.'
                            },
                            {
                                id: 'reserve',
                                question: 'Is there a reserve price on all lots?',
                                answer: 'Not all properties have reserve prices. Some properties are sold without reserve, meaning they will be sold to the highest bidder regardless of the final price. When a reserve price is set, it represents the minimum price the seller is willing to accept. Reserve prices are clearly indicated in the property details and auction catalog.'
                            },
                            {
                                id: 'deposit',
                                question: 'What is the deposit amount?',
                                answer: 'The deposit amount typically ranges from 10% to 20% of the property\'s estimated value, but this can vary depending on the specific property and auction terms. The exact deposit amount is specified in the auction conditions for each property. This deposit is fully refundable if your bid is unsuccessful, and it forms part of the purchase price if you are the successful bidder.'
                            }
                        ].map((faq, index, array) => (
                            <div key={faq.id} className={index !== array.length - 1 ? "border-b border-gray-200" : ""}>
                                <button
                                    className="w-full px-8 py-6 text-left hover:bg-blue-50/50 focus:outline-none transition-colors duration-200 group"
                                    onClick={() => toggleFaq(faq.id)}
                                >
                                    <div className="flex justify-between items-center">
                                    <span className="text-lg font-bold text-blue-900 pr-8 group-hover:text-blue-700 transition-colors">
                                        {faq.question}
                                    </span>
                                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                                            openFaq === faq.id
                                                ? 'bg-gradient-to-br from-yellow-500 to-yellow-600 rotate-180'
                                                : 'bg-blue-100 group-hover:bg-blue-200'
                                        }`}>
                                            <ChevronDown className={`w-5 h-5 transition-colors ${
                                                openFaq === faq.id ? 'text-white' : 'text-blue-900'
                                            }`} />
                                        </div>
                                    </div>
                                </button>
                                {openFaq === faq.id && (
                                    <div className="px-8 pb-6 text-gray-600 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 rounded-3xl shadow-2xl">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                            backgroundSize: '40px 40px'
                        }}></div>
                    </div>

                    <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
                        <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
                            <Sparkles className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-sm font-semibold">Start Your Journey</span>
                        </div>

                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Ready to Start Bidding?
                        </h3>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                            Join thousands of successful buyers who have found their dream properties through our auctions.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://qrco.de/ABC_Auctions"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                Join Now
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="/contact"
                                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                            >
                                Contact Us
                            </a>
                        </div>

                        {/* Trust Elements */}
                        <div className="mt-12 pt-8 border-t border-white/20">
                            <div className="flex flex-wrap justify-center gap-8 text-blue-200 text-sm">
                                <div className="flex items-center gap-2">
                                    <BadgeCheck className="w-5 h-5 text-yellow-400" />
                                    <span>Secure Process</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BadgeCheck className="w-5 h-5 text-yellow-400" />
                                    <span>Transparent Bidding</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BadgeCheck className="w-5 h-5 text-yellow-400" />
                                    <span>Expert Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}