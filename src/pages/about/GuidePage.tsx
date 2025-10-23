import { useState } from 'react';
import {
    Home,
    TrendingDown,
    Clock,
    Grid3x3,
    Gavel,
    Building2,
    Landmark,
    Users,
    TrendingUp,
    FileSearch,
    DollarSign,
    Eye,
    FileCheck,
    UserPlus,
    CheckCircle,
    AlertTriangle,
    MapPin,
    Globe,
    MousePointer,
    ChevronDown,
    Sparkles,
    ArrowRight,
    BadgePercent,
    ShieldCheck,
    Zap
} from 'lucide-react';

export default function GuidePage() {
    const [openFaq, setOpenFaq] = useState<string | null>(null);

    const toggleFaq = (faq: string) => {
        setOpenFaq(openFaq === faq ? null : faq);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
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
                        <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
                            <Sparkles className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-sm font-semibold">Complete Guide</span>
                        </div>
                        
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            Understanding <br />
                            <span className="text-yellow-400">Property Auctions</span> in Zimbabwe
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            Your comprehensive resource for navigating the property auction market
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a 
                                href="https://qrco.de/ABC_Auctions" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                            >
                                View Current Auctions
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a 
                                href="/valuation" 
                                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                            >
                                Get Free Valuation
                            </a>
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
                {/* What Are Property Auctions - Block Section */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
                            <Home className="w-5 h-5 text-blue-900" />
                            <span className="text-blue-900 text-sm font-semibold">The Basics</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                            What Are Property Auctions in Zimbabwe?
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl p-8 md:p-12 border border-blue-100">
                        <p className="text-xl text-gray-700 leading-relaxed mb-8">
                            Property auctions in Zimbabwe are public sales where properties are sold to the highest bidder through a competitive bidding process.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: Gavel,
                                    text: "Public sales where properties are sold to the highest bidder"
                                },
                                {
                                    icon: Building2,
                                    text: "Commonly involve repossessed properties from banks due to loan defaults"
                                },
                                {
                                    icon: Grid3x3,
                                    text: "Include residential, commercial, and agricultural properties"
                                },
                                {
                                    icon: BadgePercent,
                                    text: "Starting prices are often 20–30% below market value"
                                }
                            ].map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div key={index} className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl p-3 flex-shrink-0">
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <p className="text-gray-700 leading-relaxed">{item.text}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Why Buy at Auction - Grid Cards */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-yellow-100 rounded-full px-4 py-2 mb-4">
                            <TrendingDown className="w-5 h-5 text-yellow-700" />
                            <span className="text-yellow-700 text-sm font-semibold">Benefits</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                            Why Buy at Auction?
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: DollarSign,
                                title: "Lower Prices",
                                description: "Average discounts of 25% below market value",
                                gradient: "from-blue-500 to-blue-600"
                            },
                            {
                                icon: Clock,
                                title: "Faster Transactions",
                                description: "Quicker than traditional property sales",
                                gradient: "from-yellow-500 to-yellow-600"
                            },
                            {
                                icon: Grid3x3,
                                title: "Variety",
                                description: "Wide range of property types available",
                                gradient: "from-blue-600 to-blue-700"
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
                                    <h3 className="text-2xl font-bold text-blue-900 mb-3">{benefit.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-lg">{benefit.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Types of Property Auctions - Grid */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
                            <Gavel className="w-5 h-5 text-blue-900" />
                            <span className="text-blue-900 text-sm font-semibold">Auction Types</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                            Types of Property Auctions
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FileCheck,
                                title: "Judicial Auctions",
                                description: "Court-ordered sales, often for repossessed properties",
                                color: "blue"
                            },
                            {
                                icon: Building2,
                                title: "Private Auctions",
                                description: "Run by real estate firms or private sellers",
                                color: "yellow"
                            },
                            {
                                icon: Landmark,
                                title: "Bank Auctions",
                                description: "Initiated by banks to recover funds from defaults",
                                color: "blue"
                            }
                        ].map((type, index) => {
                            const Icon = type.icon;
                            return (
                                <div 
                                    key={index}
                                    className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl"
                                >
                                    <div className={`w-16 h-16 ${type.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-600' : 'bg-gradient-to-br from-yellow-500 to-yellow-600'} rounded-2xl flex items-center justify-center mb-6`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-blue-900 mb-3">{type.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{type.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* 2024 Auction Market Stats - Featured Stats Block */}
                <div className="mb-24">
                    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 rounded-3xl shadow-2xl">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                                backgroundSize: '40px 40px'
                            }}></div>
                        </div>
                        
                        <div className="relative px-8 py-16 md:px-16">
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full px-4 py-2 mb-4">
                                    <TrendingUp className="w-5 h-5 text-yellow-400" />
                                    <span className="text-yellow-400 text-sm font-semibold">Market Data</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                    2024 Auction Market Stats
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    {
                                        stat: "18%",
                                        label: "Increase in Auction Listings",
                                        icon: TrendingUp,
                                        color: "yellow"
                                    },
                                    {
                                        stat: "60%",
                                        label: "Buyers are Investors",
                                        sublabel: "30% are First-time Homebuyers",
                                        icon: Users,
                                        color: "blue"
                                    },
                                    {
                                        stat: "25%",
                                        label: "Below Market Price",
                                        sublabel: "Typical Property Sale Price",
                                        icon: BadgePercent,
                                        color: "yellow"
                                    }
                                ].map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <div 
                                            key={index}
                                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
                                        >
                                            <div className={`w-12 h-12 ${item.color === 'yellow' ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' : 'bg-gradient-to-br from-blue-400 to-blue-600'} rounded-xl flex items-center justify-center mb-4`}>
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="text-5xl font-bold text-yellow-400 mb-2">{item.stat}</div>
                                            <div className="text-white font-semibold text-lg mb-1">{item.label}</div>
                                            {item.sublabel && (
                                                <div className="text-blue-200 text-sm">{item.sublabel}</div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* How to Participate - Numbered Steps Grid */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-yellow-100 rounded-full px-4 py-2 mb-4">
                            <UserPlus className="w-5 h-5 text-yellow-700" />
                            <span className="text-yellow-700 text-sm font-semibold">Step by Step</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                            How to Participate
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Follow these essential steps to successfully participate in property auctions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                step: "01",
                                icon: FileSearch,
                                title: "Research Listings",
                                description: "Use property websites or local newspapers to find available properties"
                            },
                            {
                                step: "02",
                                icon: DollarSign,
                                title: "Set a Budget",
                                description: "Include extra costs like taxes and transfer fees in your calculations"
                            },
                            {
                                step: "03",
                                icon: Eye,
                                title: "Inspect Properties",
                                description: "Remember, properties are sold 'as-is' so thorough inspection is crucial"
                            },
                            {
                                step: "04",
                                icon: FileCheck,
                                title: "Understand Terms",
                                description: "Know deposit requirements and payment timelines before bidding"
                            },
                            {
                                step: "05",
                                icon: UserPlus,
                                title: "Register & Bid",
                                description: "Stay within your budget during competitive bidding sessions"
                            },
                            {
                                step: "06",
                                icon: CheckCircle,
                                title: "Complete Purchase",
                                description: "Finalize payment and transfer within the specified timeframe"
                            }
                        ].map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div 
                                    key={index}
                                    className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
                                >
                                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                                        <span className="text-white font-bold text-lg">{step.step}</span>
                                    </div>
                                    
                                    <div className="w-14 h-14 bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-7 h-7 text-yellow-400" />
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-blue-900 mb-3">{step.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Pros & Cons - Two Column Comparison */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                            Pros & Cons
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Understanding both advantages and challenges of property auctions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Pros */}
                        <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl shadow-xl p-8 border-2 border-green-200">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-3">
                                    <CheckCircle className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-green-900">Advantages</h3>
                            </div>
                            
                            <ul className="space-y-4">
                                {[
                                    "Significant cost savings with average 25% discount",
                                    "Quick and transparent transaction process",
                                    "Legal certainty with immediate binding contracts",
                                    "Wide variety of property options",
                                    "Competitive pricing ensures fair market value"
                                ].map((pro, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="bg-green-100 rounded-full p-1 mt-1 flex-shrink-0">
                                            <CheckCircle className="w-5 h-5 text-green-600" />
                                        </div>
                                        <span className="text-gray-700 leading-relaxed">{pro}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Cons */}
                        <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl shadow-xl p-8 border-2 border-orange-200">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-3">
                                    <AlertTriangle className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-orange-900">Challenges</h3>
                            </div>
                            
                            <ul className="space-y-4">
                                {[
                                    "Limited inspection opportunities before purchase",
                                    "Immediate payment requirements can be demanding",
                                    "Risk of overbidding in competitive situations",
                                    "Properties sold 'as-is' with no warranties",
                                    "Fast-paced environment requires quick decisions"
                                ].map((con, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="bg-orange-100 rounded-full p-1 mt-1 flex-shrink-0">
                                            <AlertTriangle className="w-5 h-5 text-orange-600" />
                                        </div>
                                        <span className="text-gray-700 leading-relaxed">{con}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Current Trends - Block with Items */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
                            <TrendingUp className="w-5 h-5 text-blue-900" />
                            <span className="text-blue-900 text-sm font-semibold">Market Trends</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                            Current Trends in 2024
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl p-8 md:p-12 border border-blue-100">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: MapPin,
                                    title: "Urban Demand",
                                    description: "High demand in major cities like Harare and Bulawayo",
                                    gradient: "from-blue-500 to-blue-600"
                                },
                                {
                                    icon: Globe,
                                    title: "Diaspora Interest",
                                    description: "Growing interest from Zimbabwean diaspora buyers",
                                    gradient: "from-yellow-500 to-yellow-600"
                                },
                                {
                                    icon: MousePointer,
                                    title: "Online Auctions",
                                    description: "Rise of digital platforms for remote participation",
                                    gradient: "from-blue-600 to-blue-700"
                                }
                            ].map((trend, index) => {
                                const Icon = trend.icon;
                                return (
                                    <div 
                                        key={index}
                                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className={`w-16 h-16 bg-gradient-to-br ${trend.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-blue-900 mb-3">{trend.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{trend.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-yellow-100 rounded-full px-4 py-2 mb-4">
                            <FileCheck className="w-5 h-5 text-yellow-700" />
                            <span className="text-yellow-700 text-sm font-semibold">Common Questions</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                        {[
                            {
                                id: 'repossessed',
                                question: 'Are all auctioned properties repossessed?',
                                answer: 'No, not all auctioned properties are repossessed. While many properties at auction come from bank repossessions or judicial sales, auctions also include properties from private sellers, estate sales, and real estate firms looking for a quick sale. The variety of sources means you can find properties in different conditions and price ranges.'
                            },
                            {
                                id: 'financing',
                                question: 'Can I get financing for an auction property?',
                                answer: 'Yes, financing is possible for auction properties, but pre-approval is strongly recommended. Since auctions require quick payment (typically within 28 days), having your financing arranged beforehand is crucial. Contact banks or financial institutions before bidding to ensure you can complete the purchase within the required timeframe.'
                            },
                            {
                                id: 'listings',
                                question: 'Where can I find auction listings?',
                                answer: 'Auction listings are available on property websites like FastIn Property Auctions, local newspapers, and through real estate firms that specialize in auctions. You can also subscribe to auction alerts to receive notifications about upcoming properties that match your criteria. Our website maintains an up-to-date catalog of all available properties.'
                            },
                            {
                                id: 'deposit',
                                question: 'How much deposit is required?',
                                answer: 'The typical deposit requirement is 10% of the purchase price, payable immediately upon winning the bid. This deposit is non-refundable if you fail to complete the purchase. Some auctions may require different deposit amounts, so always check the specific terms for each property before bidding.'
                            },
                            {
                                id: 'inspection',
                                question: 'What if I cannot inspect the property?',
                                answer: 'We strongly advise against bidding on properties you haven\'t inspected. However, if you cannot attend in person, you can arrange for a trusted representative to inspect on your behalf, or request a virtual tour. Remember that all auction properties are sold "as-is," so thorough inspection is crucial to avoid unexpected issues.'
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
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                            backgroundSize: '40px 40px'
                        }}></div>
                    </div>
                    
                    <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
                        <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
                            <Sparkles className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-sm font-semibold">Ready to Begin?</span>
                        </div>
                        
                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Start Your Auction Journey Today
                        </h3>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                            Browse current listings or get a free valuation for your property
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="https://qrco.de/ABC_Auctions" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                View Current Auctions
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a 
                                href="/valuation" 
                                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                            >
                                Get Free Valuation
                            </a>
                        </div>
                        
                        <div className="mt-12 pt-8 border-t border-white/20">
                            <div className="flex flex-wrap justify-center gap-8 text-blue-200 text-sm">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5 text-yellow-400" />
                                    <span>Trusted Platform</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Zap className="w-5 h-5 text-yellow-400" />
                                    <span>Fast Process</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="w-5 h-5 text-yellow-400" />
                                    <span>Expert Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}