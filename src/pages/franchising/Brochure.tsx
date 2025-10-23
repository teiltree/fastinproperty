import { useState } from 'react';
import {
    Briefcase,
    TrendingUp,
    DollarSign,
    Users,
    Home,
    CheckCircle,
    Award,
    Target,
    Zap,
    Phone,
    Mail,
    ArrowRight,
    Sparkles,
    FileText,
    ChevronDown,
    Building2,
    MapPin,
    Handshake,
    ShieldCheck,
    UserCheck, FileSearch, FileCheck
} from 'lucide-react';
import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.jpg";
import image3 from "@/assets/image3.jpg";

export default function BrochurePage() {
    const [openFaq, setOpenFaq] = useState<string | null>(null);

    const toggleFaq = (faq: string) => {
        setOpenFaq(openFaq === faq ? null : faq);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
                            <Sparkles className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-sm font-semibold">Business Opportunity</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                            FastIn Property Auctions
                        </h1>
                        <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-8">
                            Franchise Brochure
                        </h2>

                        {/* Large Logo */}
                        <div className="flex justify-center mb-8">
                            <div className="bg-transparent rounded-3xl p-8 ">
                                <img
                                    className="w-auto h-32 md:h-40 rounded-2xl"
                                    src="https://i.postimg.cc/g0pZvzDg/main.jpg"
                                    alt="FastIn Property Auctions Logo"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                            <a
                                href="tel:+263784086388"
                                className="group bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                            >
                                <Phone className="w-5 h-5" />
                                Get Started Today
                            </a>
                            <a
                                href="#details"
                                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" className="w-full h-auto">
                        <path fill="#f9fafb" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                    </svg>
                </div>
            </div>

            <div id="details" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                {/* Introduction Section */}
                <div className="mb-24">
                    <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl p-8 md:p-12 border border-blue-100">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                                Become FastIn Property Auctions in Your Area
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full mb-6"></div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                You Become <span className="font-bold text-blue-900">FastIn Property Auctions in "Your Area"</span> — i.e., FastIn Property Auctions <span className="italic">"Borrowdale"</span>, <span className="italic">"Mutare"</span>, <span className="italic">"Bulawayo"</span>, etc.
                            </p>

                            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 border-2 border-yellow-200 mb-6">
                                <h3 className="text-2xl font-bold text-yellow-900 mb-4 flex items-center gap-3">
                                    <Zap className="w-7 h-7 text-yellow-600" />
                                    Everything You Need Is Set Up and Ready to Go
                                </h3>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    We handle the auction sales, admin, legal work, and negotiations — <span className="font-bold text-blue-900">you focus on sourcing deals.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image Section Before How It Works */}
                <div className="mb-16">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl shadow-lg overflow-hidden border-2 border-blue-200">
                        <div className="aspect-video">
                            <img
                                src={image1}
                                alt="Franchise Overview Visual"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* How It Works Section */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
                            <Target className="w-5 h-5 text-blue-900" />
                            <span className="text-blue-900 text-sm font-semibold">The Process</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                            How It Works
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: "1", title: "YOU source the property", icon: FileSearch },
                            { step: "2", title: "YOU pass it to us", icon: ArrowRight },
                            { step: "3", title: "FastIn markets it, handles legals", icon: FileText },
                            { step: "4", title: "YOU arrange viewings (or outsource)", icon: Home },
                            { step: "5", title: "FastIn negotiates offers", icon: Handshake },
                            { step: "6", title: "FastIn agrees sale & exchanges contracts", icon: FileCheck },
                            { step: "7", title: "YOU + FastIn get paid", icon: DollarSign },
                            { step: "8", title: "Repeat", icon: TrendingUp }
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
                                >
                                    <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                                        <span className="text-white font-bold text-lg">{item.step}</span>
                                    </div>

                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-6 h-6 text-yellow-400" />
                                    </div>

                                    <p className="text-gray-700 leading-relaxed font-medium">{item.title}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Commission Structure */}
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
                                    <DollarSign className="w-5 h-5 text-yellow-400" />
                                    <span className="text-yellow-400 text-sm font-semibold">Earnings</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                    Commission Structure
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
                                    <div className="text-6xl font-bold text-yellow-400 mb-2">65%</div>
                                    <div className="text-white font-semibold text-xl mb-2">You Keep</div>
                                    <div className="text-blue-200 text-sm">Of all auction fees</div>
                                </div>

                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
                                    <div className="text-6xl font-bold text-yellow-400 mb-2">$4,000+</div>
                                    <div className="text-white font-semibold text-xl mb-2">Average Fee</div>
                                    <div className="text-blue-200 text-sm">Per transaction</div>
                                </div>

                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
                                    <div className="text-6xl font-bold text-yellow-400 mb-2">High</div>
                                    <div className="text-white font-semibold text-xl mb-2">Margin</div>
                                    <div className="text-blue-200 text-sm">No hidden costs</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image Placeholder Before How Much You Can Earn */}
                <div className="mb-16">
                    <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-3xl shadow-lg overflow-hidden border-2 border-yellow-200">
                        <div className="aspect-video flex items-center justify-center">
                            <img
                                src={image2}
                                alt="Franchise Overview Visual"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* How Much Can You Earn */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-yellow-100 rounded-full px-4 py-2 mb-4">
                            <TrendingUp className="w-5 h-5 text-yellow-700" />
                            <span className="text-yellow-700 text-sm font-semibold">Potential</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                            How Much Can You Earn?
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="bg-gradient-to-br from-white to-yellow-50 rounded-3xl shadow-xl p-8 md:p-12 border border-yellow-100">
                        <div className="max-w-4xl mx-auto">
                            <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center">
                                You earn from your first deal. We have <span className="font-bold text-blue-900">5 packages</span>, starting at <span className="font-bold text-yellow-600">$5k</span>, up to <span className="font-bold text-yellow-600">$100k</span>
                            </p>

                            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white mb-8">
                                <h3 className="text-2xl font-bold mb-4 text-yellow-400">$20k Accelerated Package Example:</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Be in profit by day 30",
                                        "Hit $30k pm by month 15, by following our estate agent strategy and putting in the work"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                                            <span className="text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200">
                                <h4 className="text-xl font-bold text-blue-900 mb-4">Fee Structure:</h4>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                                            <CheckCircle className="w-5 h-5 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800">First $20k per quarter:</p>
                                            <p className="text-gray-600">Zero ongoing deductions</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                                            <DollarSign className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800">Above $20k:</p>
                                            <p className="text-gray-600">12.5% deduction on additional earnings</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 p-6 bg-yellow-50 rounded-xl border-2 border-yellow-200">
                                    <p className="text-lg font-bold text-blue-900 mb-2">Example with $100k quarterly earnings:</p>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• First $20k: <span className="font-bold">No fees = $20k</span></li>
                                        <li>• Remaining $80k at 12.5%: <span className="font-bold">$10k fee</span></li>
                                        <li className="pt-2 border-t-2 border-yellow-300 mt-3 font-bold text-green-700 text-xl">
                                            = You keep $90k
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="text-center mt-8">
                                <p className="text-gray-600 italic">
                                    Not sure which package is right for you? <a href="#contact" className="text-blue-600 hover:text-yellow-600 font-semibold underline">Just ask</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQs Section */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
                            <FileText className="w-5 h-5 text-blue-900" />
                            <span className="text-blue-900 text-sm font-semibold">Quick Answers</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                            FAQs – Fast Answers
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                        {[
                            {
                                id: 'support',
                                question: 'Do I get support?',
                                answer: 'Yes — full training, marketing help, and daily deal support.'
                            },
                            {
                                id: 'who',
                                question: 'Who are you?',
                                answer: 'A family owned auction house with decades of experience in real estate, thousands of properties sold, with a dedicated team.'
                            },
                            {
                                id: 'what-sell',
                                question: 'What can I sell?',
                                answer: 'Everything — residential, commercial, farm, land, probate, tenanted, portfolios, and more.'
                            },
                            {
                                id: 'properties-from',
                                question: 'Where do the properties come from?',
                                answer: 'We teach you how to source stock from estate agents, landlords, probate leads, property owners, developers and B2B contacts.'
                            },
                            {
                                id: 'why-agents',
                                question: 'Why would agents use us?',
                                answer: 'We pay them, we\'re fast, and we help them shift stock they\'d normally struggle to sell (out-of-area, tenanted, unusual, etc.)'
                            },
                            {
                                id: 'why-clients',
                                question: 'Why would a client use auction?',
                                answer: 'For transparency, speed, security, and certainty — sales complete in 28 days.'
                            },
                            {
                                id: 'advertising',
                                question: 'Where do we advertise?',
                                answer: 'Everywhere: Property.co.zw, Property Book, Propsearch, Facebook, Instagram, Radio, TV, In Flight Magazines, direct mail, national aggregator — fully covered.'
                            },
                            {
                                id: 'what-say',
                                question: 'What do I say to agents?',
                                answer: 'We give you a full script — but in short, you help them sell more, earn more, and remove headaches.'
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

                {/* Image Placeholder Before The Local Opportunity */}
                <div className="mb-16">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl shadow-lg overflow-hidden border-2 border-blue-200">
                        <div className="aspect-video flex items-center justify-center">
                            <img
                                src={image3}
                                alt="Franchise Overview Visual"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* The Local Opportunity */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-yellow-100 rounded-full px-4 py-2 mb-4">
                            <MapPin className="w-5 h-5 text-yellow-700" />
                            <span className="text-yellow-700 text-sm font-semibold">Market Potential</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                            The Local Opportunity
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full mb-6"></div>
                        <p className="text-xl text-gray-600">
                            Every territory has, on average:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { stat: "500", label: "Estate agents to partner with", icon: Users, color: "blue" },
                            { stat: "10,000+", label: "Unsold properties per year", icon: Home, color: "yellow" },
                            { stat: "10,000+", label: "Landlords selling up", icon: Building2, color: "blue" },
                            { stat: "2,000+", label: "Empty homes", icon: Home, color: "yellow" },
                            { stat: "1,500+", label: "Probate properties", icon: FileText, color: "blue" }
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:-translate-y-1"
                                >
                                    <div className={`w-14 h-14 ${item.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-600' : 'bg-gradient-to-br from-yellow-500 to-yellow-600'} rounded-2xl flex items-center justify-center mb-4`}>
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="text-4xl font-bold text-blue-900 mb-2">{item.stat}</div>
                                    <p className="text-gray-600 leading-relaxed">{item.label}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* What We're Looking For */}
                <div className="mb-24">
                    <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl shadow-2xl p-8 md:p-12 text-white">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full px-4 py-2 mb-4">
                                <UserCheck className="w-5 h-5 text-yellow-400" />
                                <span className="text-yellow-400 text-sm font-semibold">Ideal Candidate</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                What We're Looking For
                            </h2>
                            <p className="text-xl text-blue-100">
                                To succeed, you'll need to be:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {[
                                { text: "Confident and proactive", icon: Award },
                                { text: "Self-driven and consistent", icon: Target },
                                { text: "Committed full-time", icon: CheckCircle },
                                { text: "Ready to invest $5,000+ in marketing", icon: DollarSign },
                                { text: "Focused on building a real business", icon: Briefcase }
                            ].map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={index}
                                        className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all"
                                    >
                                        <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl p-3 flex-shrink-0">
                                            <Icon className="w-6 h-6 text-blue-900" />
                                        </div>
                                        <span className="text-lg font-semibold">{item.text}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Contact CTA */}
                <div id="contact" className="relative overflow-hidden bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 rounded-3xl shadow-2xl">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                            backgroundSize: '40px 40px'
                        }}></div>
                    </div>

                    <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
                        <div className="inline-flex items-center gap-2 bg-blue-900/20 backdrop-blur-sm border border-blue-900/30 rounded-full px-4 py-2 mb-6">
                            <Sparkles className="w-4 h-4 text-blue-900" />
                            <span className="text-blue-900 text-sm font-semibold">Get Started</span>
                        </div>

                        <h3 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
                            Want to Know More?
                        </h3>
                        <p className="text-xl text-blue-800 mb-10 max-w-2xl mx-auto font-semibold">
                            It all starts with a phone call
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
                            <a
                                href="tel:+263784086388"
                                className="group bg-blue-900 hover:bg-blue-800 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <Phone className="w-5 h-5" />
                                +263 784 086 388
                            </a>
                            <a
                                href="tel:+263719086388"
                                className="group bg-blue-900 hover:bg-blue-800 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <Phone className="w-5 h-5" />
                                +263 719 086 388
                            </a>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center text-blue-900 font-semibold">
                            <a
                                href="mailto:info@fastinproperty.co.zw"
                                className="flex items-center justify-center gap-2 hover:text-blue-800 transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                                info@fastinproperty.co.zw
                            </a>
                            <span className="hidden sm:inline">•</span>
                            <a
                                href="mailto:info@fastinproperty.com"
                                className="flex items-center justify-center gap-2 hover:text-blue-800 transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                                info@fastinproperty.com
                            </a>
                        </div>

                        <div className="mt-12 pt-8 border-t border-blue-800/30">
                            <div className="flex flex-wrap justify-center gap-8 text-blue-900 text-sm font-semibold">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5" />
                                    <span>Proven Business Model</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Award className="w-5 h-5" />
                                    <span>Full Training Provided</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5" />
                                    <span>High Earning Potential</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}