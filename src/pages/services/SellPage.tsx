import { useState } from 'react'
import {
    Rocket,
    ClipboardCheck,
    Camera,
    Users,
    CheckCircle,
    Banknote,
    Clock,
    DollarSign,
    TrendingUp,
    Shield,
    Megaphone,
    Award,
    ArrowRight,
    Check,
    ChevronDown,
    Sparkles
} from "lucide-react";

interface Step {
    step: string;
    tag: string;
    desc: string;
    icon: React.ComponentType<{ className?: string }>;
}

const steps: Step[] = [
    {
        step: "Step 1",
        tag: "Instantly",
        desc: "First, you enter your postcode to find out what your home could sell for at auction.",
        icon: Rocket,
    },
    {
        step: "Step 2",
        tag: "When you're ready",
        desc: "You give us the go ahead and choose the minimum price you want to sell for. If no one offers enough, you keep the home.",
        icon: ClipboardCheck,
    },
    {
        step: "Step 3",
        tag: "Next day",
        desc: "Our photographer pops round to take photos, a video tour, and a floor plan - all for free!",
        icon: Camera,
    },
    {
        step: "Step 4",
        tag: "Day 2",
        desc: "Now, your home is put in front of over 20,000 buyers who can make offers straight away.",
        icon: Users,
    },
    {
        step: "Step 5",
        tag: "Day 3",
        desc: "You get a great offer and the buyer pays a 10% deposit upfront",
        icon: CheckCircle,
    },
    {
        step: "Step 6",
        tag: "28 days later",
        desc: "You get the rest of the cash - or keep the deposit if they're late.",
        icon: Banknote,
    },
];

export default function SellPage() {
    const [openFaq, setOpenFaq] = useState<string | null>(null)

    const toggleFaq = (faq: string) => {
        setOpenFaq(openFaq === faq ? null : faq)
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section - Premium with Overlay */}
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
                            <span className="text-yellow-400 text-sm font-semibold">Premium Auction Service</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            Sell Your Property in <br />
                            <span className="text-yellow-400">28 Days</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            You set the price and pay nothing unless it sells
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="mailto:info@fastinproperty.co.zw"
                                className="group bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                            >
                                Get Free Valuation
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
                                <span>20,000+ Buyers</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-yellow-400" />
                                <span>No Hidden Fees</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-yellow-400" />
                                <span>Free Photography</span>
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
                {/* Selling Online Section */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                            Selling Online with Fastin Property Auctions
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl p-8 md:p-12 border border-blue-100">
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                The future of real estate as most industries are now moving towards digital and online solutions to accommodate an increasing number of younger technologically savvy buyers and to make the buying process more convenient and cost-effective for both buyer and seller.
                            </p>

                            <p className="text-gray-700 text-lg leading-relaxed">
                                At Fastin Property Auctions we focus all our time and energy on marketing and exposing your property to the ever-growing digital audiences via tailor-made traditional, electronic and social media marketing campaigns.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Benefits of selling at Auction */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                            Benefits of Selling at Auction
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {[
                            {
                                icon: Clock,
                                title: "Speed",
                                description: "We sell your property in 4 to 6 weeks.",
                                gradient: "from-blue-500 to-blue-600"
                            },
                            {
                                icon: DollarSign,
                                title: "No Auctioneers' Fee",
                                description: "You as seller pay us no Auctioneers Fee unless otherwise negotiated.",
                                gradient: "from-yellow-500 to-yellow-600"
                            },
                            {
                                icon: TrendingUp,
                                title: "No Ceiling",
                                description: "There is no ceiling price on the value you can achieve. If we get you more for your property than your reserve price then it's for your benefit.",
                                gradient: "from-blue-600 to-blue-700"
                            },
                            {
                                icon: Shield,
                                title: "No Comebacks",
                                description: "There are no comebacks, property is sold voetstoots and you are protected by the Consumer Protection Act.",
                                gradient: "from-yellow-600 to-yellow-700"
                            },
                            {
                                icon: Megaphone,
                                title: "Massive Exposure",
                                description: "Massive exposure across multiple online platforms, social media, and our extensive buyer database of over 20,000 active buyers.",
                                gradient: "from-blue-500 to-blue-600"
                            },
                            {
                                icon: Award,
                                title: "Premium Service",
                                description: "Professional photography, video tours, floor plans, and dedicated auction support included at no extra cost.",
                                gradient: "from-yellow-500 to-yellow-600"
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

                {/* How We Sell Fast Section */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                            How We Sell Fast
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From valuation to sale in just 6 simple steps
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div
                                    key={index}
                                    className="relative bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 group hover:-translate-y-1"
                                >
                                    {/* Step Number Badge */}
                                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                                        <span className="text-white font-bold text-lg">{index + 1}</span>
                                    </div>

                                    {/* Icon */}
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-8 h-8 text-yellow-400" />
                                    </div>

                                    {/* Tag */}
                                    <div className="inline-block bg-yellow-500/20 text-yellow-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                                        {step.tag}
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-700 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Seller FAQ */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                            Seller's FAQ
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full mb-6"></div>
                        <p className="text-xl text-gray-600">
                            Common questions about our auction process
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                        {[
                            {
                                id: 'commission',
                                question: 'What commission do you charge sellers?',
                                answer: 'Our commission structure is competitive and transparent. In many cases, sellers pay no auctioneers\' fee unless otherwise negotiated. We believe in a performance-based approach where our success is tied to achieving the best possible price for your property. All fees are clearly outlined in our seller agreement before you commit to the auction process.'
                            },
                            {
                                id: 'reserve-price',
                                question: 'How do you determine the reserve price?',
                                answer: 'We conduct a comprehensive free valuation using all available tools and market data to determine a fair reserve price. This includes comparative market analysis, recent sales data, property condition assessment, and current market trends. The reserve price is set in consultation with you to ensure it reflects realistic market expectations while protecting your interests.'
                            },
                            {
                                id: 'marketing-timeline',
                                question: 'How long does the marketing period last?',
                                answer: 'Our typical marketing period runs for 3-4 weeks before the auction date. This allows sufficient time for comprehensive marketing campaigns across multiple platforms, property inspections, and buyer registration. The entire process from listing to sale completion usually takes 4-6 weeks, significantly faster than traditional property sales methods.'
                            },
                            {
                                id: 'unsold-property',
                                question: 'What happens if my property doesn\'t sell at auction?',
                                answer: 'If your property doesn\'t reach the reserve price, you have several options. You can choose to accept the highest bid if it\'s close to your expectations, relist the property for a future auction with adjusted terms, or explore private treaty sales with interested bidders. You have nothing to lose - there\'s no obligation to sell if the reserve isn\'t met, and you won\'t incur additional fees.'
                            },
                            {
                                id: 'less-money',
                                question: 'Do I have to take less money by selling at auction?',
                                answer: 'Not at all. We allow buyers using mortgages too. If someone needs a mortgage, we\'ll ask if you\'re happy with a slightly longer completion time (6-8 weeks). They still pay a non-refundable deposit, so you\'re fully protected and can still achieve full value.'
                            },
                            {
                                id: 'accept-offer',
                                question: 'Do I have to accept any offer?',
                                answer: 'No. You set the minimum price, and you only accept an offer if you\'re happy with it.'
                            },
                            {
                                id: 'upfront-costs',
                                question: 'Do I have to pay anything upfront?',
                                answer: 'No. We cover all upfront costs — photos, floorplans, marketing. You only pay if we get you a result.'
                            },
                            {
                                id: 'contract-lock',
                                question: 'Am I locked into a contract?',
                                answer: 'Yes. We ask for 90 days because we pay for all the upfront costs. If we don\'t get you an offer you want to take after 90 days, you\'re free to walk away — you don\'t pay a penny.'
                            },
                            {
                                id: 'sale-time',
                                question: 'How long does it take to sell my property?',
                                answer: 'Most sales complete in 28 days or less but you can choose to extend this if you need more time. We start getting offers as soon as your property is listed.'
                            },
                            {
                                id: 'buyer-pullout',
                                question: 'What if the buyer pulls out?',
                                answer: 'You keep their 5% deposit, and we find a new buyer. You\'re always protected with our SaleLock Guarantee.'
                            },
                            {
                                id: 'home-inspection',
                                question: 'Do I need a Home Inspection Report?',
                                answer: 'Yes — it\'s required. We\'ll help you arrange it if needed. You do not need a home report if the property is not habitable or being sold as part of a portfolio.'
                            },
                            {
                                id: 'solicitor',
                                question: 'Do I need a solicitor?',
                                answer: 'Yes, but don\'t worry — we can recommend one. It costs about $1,000–$1,500, just like a normal sale. They get paid once the sale goes through, so nothing upfront.'
                            },
                            {
                                id: 'tenants',
                                question: 'Can I sell with tenants in the property?',
                                answer: 'Yes. Many buyers are investors who are happy to keep tenants in place. No eviction needed.'
                            },
                            {
                                id: 'property-portals',
                                question: 'Will my property go on all local property websites / portals?',
                                answer: 'Yes. Plus, it goes to our exclusive list of thousands of buyers for maximum exposure.'
                            },
                            {
                                id: 'no-sale',
                                question: 'What if it doesn\'t sell?',
                                answer: 'You pay nothing. No sale means no fee — we take all the risk.'
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
                            <span className="text-yellow-400 text-sm font-semibold">Get Started Today</span>
                        </div>

                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Ready to Sell Your Property?
                        </h3>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                            Get started with a free valuation and discover how auction selling can work for you.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:info@fastinproperty.co.zw"
                                className="group bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                Book Free Valuation
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="/contact"
                                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                            >
                                Contact Us Today
                            </a>
                        </div>

                        {/* Contact Info */}
                        <div className="mt-12 pt-8 border-t border-white/20">
                            <p className="text-blue-200 text-sm">
                                Or email us directly at{' '}
                                <a href="mailto:info@fastinproperty.co.zw" className="text-yellow-400 hover:text-yellow-300 font-semibold underline">
                                    info@fastinproperty.co.zw
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}