import {
    CheckCircle,
    DollarSign,
    TrendingUp,
    Users,
    Target,
    Zap,
    Phone,
    Mail,
    ArrowRight,
    Sparkles,
    MapPin,
    Building2,
    Globe,
    Briefcase,
    ShieldCheck,
    LineChart,
    FileText,
    Home,
    Percent,
    Clock,
    BadgeCheck,
    Rocket,
    Star,
    Trophy,
    Heart
} from 'lucide-react';
import map1 from "@/assets/map1.png";
import map2 from "@/assets/map2.jpg";
import map3 from "@/assets/map3.png";


export default function ProspectusPage() {
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

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
                            <Sparkles className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">Franchise Opportunity</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
                            Franchise Prospectus
                        </h1>

                        <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-8">
                            Fastin Property Auctions Franchise
                        </h2>

                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
                            An extraordinary and potentially multi-million-dollar opportunity is now within your reach – this is your moment to turn ambition into reality.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="tel:+263784086388"
                                className="group bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                            >
                                <Phone className="w-5 h-5" />
                                Schedule a Call
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#details"
                                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                            >
                                Read Prospectus
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
                {/* Introduction Block */}
                <div className="mb-24">
                    <div className="bg-gradient-to-br from-white to-yellow-50 rounded-3xl shadow-xl p-8 md:p-12 border-2 border-yellow-200">
                        <div className="prose prose-lg max-w-none">
                            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                This is more than a business – it's your gateway to a lifestyle of freedom, influence, and financial success. The property industry is fast-paced, exciting, and packed with opportunity. With the right mindset and support, you can build real wealth, create something that lasts, and enjoy a career that's as dynamic as it is rewarding.
                            </p>

                            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
                                <p className="text-xl leading-relaxed mb-0">
                                    If you're ready to build real wealth, make a lasting impact, and be part of something truly exciting – <span className="font-bold text-yellow-400">this is it</span>. The property business is calling. Let's make it happen.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Own Your Area Section */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
                            <MapPin className="w-5 h-5 text-blue-900" />
                            <span className="text-blue-900 text-sm font-semibold">Territory Ownership</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                            Own Your Area. Build Your Legacy.
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            When you join us, you'll gain the opportunity to operate your own auction-focused estate agency within an exclusive, designated region or county. Whether it's a broad region like the <span className="font-bold text-blue-900">Mashonaland West, Midlands, Bulawayo or Harare</span> – or a district-specific franchise such as <span className="font-bold text-blue-900">Borrowdale, Nkulumane, or Mazowe</span> – this is your chance to build a business with local expertise and national reach.
                        </p>

                        <div className="bg-yellow-50 rounded-2xl p-6 border-2 border-yellow-200">
                            <p className="text-gray-700 leading-relaxed">
                                For smaller territories, we also offer the option to <span className="font-bold text-blue-900">expand into surrounding districts at no additional cost</span>, so you can grow at your own pace and scale strategically.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Franchise Areas with Map Placeholders */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                            Franchise Areas
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full"></div>
                    </div>

                    {/* 3 Map Placeholders */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl shadow-lg overflow-hidden border-2 border-blue-200">
                            <div className="aspect-square flex items-center justify-center p-4 rounded-2xl">
                                <div className="text-center">
                                    <img
                                        src={map1}
                                        alt="Map1"
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl shadow-lg overflow-hidden border-2 border-blue-200">
                            <div className="aspect-square flex items-center justify-center p-4 rounded-2xl">
                                <div className="text-center">
                                    <img
                                        src={map2}
                                        alt="Map2"
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-4">
                    <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-3xl shadow-lg overflow-hidden border-2 border-amber-200">
                        <div className="aspect-square flex items-center justify-center p-4 rounded-2xl">
                            <div className="text-center">
                                <img
                                    src={map3}
                                    alt="Map3"
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                {/* What's Included Section */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-yellow-100 rounded-full px-4 py-2 mb-4">
                            <BadgeCheck className="w-5 h-5 text-yellow-700" />
                            <span className="text-yellow-700 text-sm font-semibold">Complete Package</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                            What's Included?
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full"></div>
                    </div>

                    {/* Exclusive Territory Block */}
                    <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl shadow-2xl p-8 md:p-12 text-white mb-8">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="bg-yellow-500 rounded-2xl p-4 flex-shrink-0">
                                <MapPin className="w-8 h-8 text-blue-900" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold mb-3">An Exclusive Territory, Tailored to You</h3>
                                <p className="text-xl text-blue-100 leading-relaxed">
                                    You'll receive full rights to a clearly defined territory, giving you the freedom to market, grow, and establish yourself as the go-to auction expert in your chosen area.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Infrastructure Grid */}
                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
                        <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center">
                            Everything You Need to Hit the Ground Running
                        </h3>
                        <p className="text-lg text-gray-600 text-center mb-10">
                            As a franchise partner, you'll gain full access to our cutting-edge infrastructure and resources:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { icon: Globe, text: "Your own branded website (e.g. Fastin Property Auctions Mutare)" },
                                { icon: Phone, text: "Dedicated email and phone systems with answering services" },
                                { icon: Building2, text: "Major portal access and bidding platform access" },
                                { icon: MapPin, text: "Property and land data tools" },
                                { icon: FileText, text: "Templates and automation for letters, EPCs, land registry docs, legal packs" },
                                { icon: Users, text: "Weekly probate lead lists in your area" },
                                { icon: ShieldCheck, text: "In-house Conveyancer access" },
                                { icon: TrendingUp, text: "Expert guidance on paid advertising (PPC), marketing strategy, JV leads and more" }
                            ].map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div key={index} className="flex items-start gap-4 bg-blue-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                                        <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl p-3 flex-shrink-0">
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <p className="text-gray-700 leading-relaxed">{item.text}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-8 bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 border-2 border-yellow-200">
                            <p className="text-lg text-gray-700 leading-relaxed text-center">
                                This is a fully operational business model designed to support your fast success – <span className="font-bold text-blue-900">you simply need to bring in the clients, and we'll show you exactly how to do that.</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why Our Model Works - Block */}
                <div className="mb-24">
                    <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl p-8 md:p-12 border border-blue-100">
                        <div className="text-center mb-8">
                            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                                Why Our Model Works
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {[
                                { icon: DollarSign, title: "No Upfront Fees", text: "Removes barriers for sellers, making the service more accessible" },
                                { icon: ShieldCheck, title: "Seller Control", text: "Sellers remain in control by setting their own reserves" },
                                { icon: BadgeCheck, title: "Zero Fall-Through Risk", text: "With committed buyers, there's virtually zero fall-through risk" },
                                { icon: Clock, title: "Fast Completion", text: "Completion happens in weeks, not months" }
                            ].map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-3 flex-shrink-0">
                                            <Icon className="w-6 h-6 text-yellow-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h4>
                                            <p className="text-gray-600 leading-relaxed">{item.text}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Do You Qualify Section */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
                            <Users className="w-5 h-5 text-blue-900" />
                            <span className="text-blue-900 text-sm font-semibold">Requirements</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                            Do You Qualify to Join?
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 max-w-5xl mx-auto">
                        <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center">
                            We're looking for people who are <span className="font-bold text-blue-900">driven and willing to put in the work</span> to build a successful business. You must be fully committed, and either:
                        </p>

                        <div className="space-y-6">
                            {[
                                "Have experience in sourcing clients/properties, or",
                                "Already work within Property i.e. Letting Agents or",
                                "If you have no property experience, you must have the budget to market your franchise to bring in clients/properties"
                            ].map((requirement, index) => (
                                <div key={index} className="flex items-start gap-4 bg-blue-50 rounded-xl p-6">
                                    <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full p-2 flex-shrink-0 mt-1">
                                        <CheckCircle className="w-6 h-6 text-white" />
                                    </div>
                                    <p className="text-lg text-gray-700 leading-relaxed">{requirement}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-8 border-2 border-yellow-200">
                            <p className="text-xl text-gray-700 leading-relaxed text-center font-semibold">
                                All you need are clients – and we'll show you exactly how to get them.
                            </p>
                        </div>
                    </div>
                </div>

                {/* The Zimbabwe Property Auction Industry */}
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
                                    <LineChart className="w-5 h-5 text-yellow-400" />
                                    <span className="text-yellow-400 text-sm font-semibold">Market Overview</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                    The Zimbabwe Property Auction Industry
                                </h2>
                            </div>

                            <div className="max-w-4xl mx-auto">
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
                                    <p className="text-xl text-blue-100 leading-relaxed mb-4">
                                        In Zimbabwe, <span className="font-bold text-yellow-400">less than 1% of properties are sold via auction</span> – a stark contrast to 25-30% in Australia. However, this figure will significantly increase over the next few years, due to introduction of virtual online auctions.
                                    </p>
                                    <p className="text-lg text-blue-200 leading-relaxed">
                                        Auctions are becoming increasingly accepted by both buyers and sellers worldwide. Not just a sale of last resort, but with our unique selling points, auction sales can become the norm.
                                    </p>
                                </div>

                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-yellow-400 mb-6">Key Advantages:</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        { stat: "1%", label: "Fall-through rate", sublabel: "(vs up to 34% with estate agents)" },
                                        { stat: "0%", label: "Risk of walkaway", sublabel: "No buyers or sellers backing out" }
                                    ].map((item, index) => (
                                        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
                                            <div className="text-6xl font-bold text-yellow-400 mb-2">{item.stat}</div>
                                            <div className="text-white font-semibold text-xl mb-2">{item.label}</div>
                                            <div className="text-blue-200 text-sm">{item.sublabel}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Franchise Costs - Simple Block */}
                <div className="mb-24">
                    <div className="bg-gradient-to-br from-yellow-50 to-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-yellow-200 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="inline-flex items-center gap-2 bg-yellow-200 rounded-full px-4 py-2 mb-6">
                                <DollarSign className="w-5 h-5 text-yellow-800" />
                                <span className="text-yellow-800 text-sm font-semibold">Investment</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                                Franchise Costs
                            </h2>

                            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-10 mb-6">
                                <div className="text-7xl font-bold text-yellow-400 mb-4">$10,000</div>
                                <p className="text-2xl text-white font-semibold mb-4">Starting Investment</p>
                                <p className="text-xl text-blue-100 leading-relaxed">
                                    A small investment for a high-reward opportunity
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-8 border-2 border-yellow-300">
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    <span className="font-bold text-blue-900">We reinvest 100% of this fee directly into the business</span> through marketing, supporting your business growth. That's how much we're here to support you!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Earnings Potential - Comprehensive Section */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-yellow-100 rounded-full px-4 py-2 mb-4">
                            <TrendingUp className="w-5 h-5 text-yellow-700" />
                            <span className="text-yellow-700 text-sm font-semibold">Revenue</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                            Earnings Potential
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-8">
                        {/* Commission Split */}
                        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl shadow-2xl p-10 text-center">
                            <h3 className="text-3xl font-bold text-white mb-6">You'll receive 65% of the commission</h3>
                            <p className="text-xl text-yellow-400 font-semibold">with no deductions from your earnings</p>
                        </div>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: CheckCircle, text: "No hidden fees" },
                                { icon: CheckCircle, text: "No monthly subscriptions" },
                                { icon: CheckCircle, text: "No ongoing costs after initial payment" },
                                { icon: DollarSign, text: "Agent commission paid upon reservation/exchange, so cash flow is very strong" },
                                { icon: Clock, text: "From instruction to payment within 1 month or earlier" },
                                { icon: Percent, text: "Referral fees from bridging loans, mortgages, and conveyancing" },
                                { icon: Home, text: "Free to offer traditional private treaty sales using our portals" },
                                { icon: Building2, text: "Open House concept that incorporates auction with private treaty" },
                                { icon: Briefcase, text: "Buy and sell your own property. JV's also available" }
                            ].map((benefit, index) => {
                                const Icon = benefit.icon;
                                return (
                                    <div key={index} className="flex items-start gap-3 bg-white rounded-xl p-6 shadow-md border border-gray-100">
                                        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-2 flex-shrink-0">
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>
                                        <p className="text-gray-700 leading-relaxed text-sm">{benefit.text}</p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Example Calculation */}
                        <div className="bg-gradient-to-br from-yellow-50 to-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-yellow-200">
                            <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">Example Calculation</h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-white rounded-2xl p-6 shadow-md text-center border-2 border-blue-200">
                                    <div className="text-5xl font-bold text-blue-900 mb-2">$5,000</div>
                                    <div className="text-gray-600">Average Property Commission</div>
                                </div>
                                <div className="bg-white rounded-2xl p-6 shadow-md text-center border-2 border-blue-200">
                                    <div className="text-5xl font-bold text-blue-900 mb-2">78%</div>
                                    <div className="text-gray-600">Success Rate</div>
                                </div>
                                <div className="bg-white rounded-2xl p-6 shadow-md text-center border-2 border-blue-200">
                                    <div className="text-5xl font-bold text-blue-900 mb-2">10</div>
                                    <div className="text-gray-600">Properties per Month</div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
                                    <p className="text-lg mb-4">
                                        If you personally bring in <span className="font-bold text-yellow-400">5 properties per month</span>, as well as <span className="font-bold text-yellow-400">5 from estate agent partners</span>:
                                    </p>
                                    <div className="text-center">
                                        <div className="text-6xl font-bold text-yellow-400 mb-2">$24,000</div>
                                        <p className="text-xl text-blue-100">monthly income</p>
                                        <p className="text-sm text-blue-200 mt-2">(with zero deductions other than your own expenses)</p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-8 border-2 border-blue-200">
                                    <p className="text-lg text-gray-700 mb-4">
                                        <span className="font-bold text-blue-900">Selling 20-30 properties per month</span> is completely achievable with the right outlook and our support.
                                    </p>
                                    <p className="text-lg text-gray-700">
                                        However with our no subscription fee model, if this was a bolt-on to your existing business and only brought in <span className="font-bold text-blue-900">2 properties per month</span>, that alone could give you <span className="font-bold text-green-600 text-xl">$7,000 per month</span>
                                    </p>
                                </div>

                                <div className="bg-yellow-100 rounded-2xl p-6 border-2 border-yellow-300 text-center">
                                    <p className="text-lg font-bold text-blue-900">
                                        You choose your property fees. No minimums or maximums are set by us.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Make Your Move Section */}
                <div className="mb-24">
                    <div className="relative overflow-hidden bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 rounded-3xl shadow-2xl">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                                backgroundSize: '40px 40px'
                            }}></div>
                        </div>

                        <div className="relative px-8 py-16 md:px-16 text-center">
                            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                                Make Your Move. Build Your Name. Own Your Future.
                            </h2>

                            <p className="text-xl text-blue-900 leading-relaxed max-w-4xl mx-auto mb-8">
                                Watched the big property names on media and billboards? They turned ambition into empire – and started from the ground up. Now it's your shot. Your name. Your patch. Backed by Fastin Property Auctions.
                            </p>

                            <div className="bg-blue-900/20 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto border-2 border-blue-900/30">
                                <p className="text-xl text-blue-900 leading-relaxed font-semibold">
                                    Property's a fast game – full of energy, opportunity, and serious rewards. Property isn't just about bricks and mortar. It's about ambition, hustle, and knowing how to spot an opportunity before everyone else does.
                                </p>
                            </div>

                            <div className="mt-8">
                                <p className="text-2xl font-bold text-blue-900">
                                    You bring the drive. We bring the tools. Let's make this happen.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The Potential is Huge */}
                <div className="mb-24">
                    <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl p-8 md:p-12 border border-blue-100">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
                                <Rocket className="w-5 h-5 text-blue-900" />
                                <span className="text-blue-900 text-sm font-semibold">Our Vision</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                                The Potential is Huge
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full"></div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                We want to build <span className="font-bold text-blue-900">Zimbabwe's most successful and innovative Auction House</span> – a national brand with expert agents in every corner of Zimbabwe.
                            </p>

                            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
                                <p className="text-xl leading-relaxed mb-4">
                                    We're always ahead, and <span className="font-bold text-yellow-400">innovation is our passion</span>. Working on what's next is happening with us right now.
                                </p>
                                <p className="text-xl leading-relaxed mb-0">
                                    If you're ready to make a big impact in the property auction market, we'd love to partner with you to achieve great success together. Let's create something exceptional.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Essential Ingredients - List Grid */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-yellow-100 rounded-full px-4 py-2 mb-4">
                            <Star className="w-5 h-5 text-yellow-700" />
                            <span className="text-yellow-700 text-sm font-semibold">Success Factors</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                            The Essential Ingredients of a Successful Franchise
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                            Why Fastin Property Auctions has everything you need to build a thriving, future-proof property business:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                number: "1",
                                title: "Huge Demand",
                                description: "A successful business must meet a real, growing need. With thousands of property moves annually in Zimbabwe, sellers are always searching for faster, more secure ways to sell. Our auction platform offers exactly that – a transparent, no-fall through method attracting serious buyers nationwide."
                            },
                            {
                                number: "2",
                                title: "High Levels of Automation",
                                description: "You're not tied to a high-street branch or fixed hours. Fastin Property Auctions is fully digital – our efficient systems, tools, and templates streamline operations so you can focus on growing your business, not just running it."
                            },
                            {
                                number: "3",
                                title: "No Stock or Inventory to Fund",
                                description: "Forget expensive inventory. With Fastin Property Auctions, your 'product' is the service you deliver – marketing and selling properties via auction. It's a low overhead, high-margin business model, with everything you need at your fingertips."
                            },
                            {
                                number: "4",
                                title: "Residual & Repeat Income",
                                description: "Auctions aren't one sale-and-done. With strong relationships with estate agents, investors, and professionals, your earnings compound month after month through probate referrals, repeat investor sales, and pipeline opportunities."
                            },
                            {
                                number: "5",
                                title: "Low Overheads",
                                description: "Our model is lean. Without the need for a high-street branch or fixed staff, you keep more of what you earn. And with a generous commission split, you can earn significantly more."
                            },
                            {
                                number: "6",
                                title: "Credibility & Prestige",
                                description: "This is a win-win business. Sellers get great results, buyers get real opportunities, and you get known locally as the go-to expert for selling property fast – especially in niche, complex, or 'non-perfect' scenarios."
                            },
                            {
                                number: "7",
                                title: "Proven Model, Low Risk",
                                description: "We've honed this model through decades in the auction and property business. Our digital platform, support structure, legal framework, and marketing tools are all built to deliver fast results – and they do."
                            },
                            {
                                number: "8",
                                title: "Rapid Payback",
                                description: "Franchisees recoup their investment in their first year. With no monthly subscription costs, this high-earning model is your path to 7 figures, and we'll help you get there with expert support, weekly leads, and training."
                            },
                            {
                                number: "9",
                                title: "Exclusive Territory",
                                description: "Your chosen region or district is yours – completely exclusive. Whether it's a broad area like the Midlands Province or a focused district like Borrowdale, you'll be the only franchisee operating there, giving you full market share and room to grow."
                            }
                        ].map((item) => (
                            <div
                                key={item.number}
                                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                            >
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                                    <span className="text-white font-bold text-xl">{item.number}</span>
                                </div>

                                <h3 className="text-xl font-bold text-blue-900 mb-3 mt-2">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* How to Source Properties */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
                            <Target className="w-5 h-5 text-blue-900" />
                            <span className="text-blue-900 text-sm font-semibold">Lead Generation</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                            How to Source Properties
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                            Whether you're just starting out or scaling your business, sourcing a steady pipeline of properties is key. Below are proven methods our franchisees use to generate quality opportunities.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Core Acquisition Channels */}
                        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl shadow-xl p-8 md:p-12 text-white">
                            <h3 className="text-3xl font-bold mb-6 text-yellow-400">Core Acquisition Channels</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Direct from homeowners",
                                    "Partnered estate agents",
                                    "Property sourcing agents & dealers",
                                    "Letting agents"
                                ].map((channel, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                                        <span className="text-lg">{channel}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Valuable Alternative Sources */}
                        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
                            <h3 className="text-3xl font-bold mb-6 text-blue-900">Valuable Alternative Sources</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    "Funeral directors",
                                    "House clearance companies",
                                    "Local clearance auctions",
                                    "Removal companies",
                                    "Insolvency practitioners",
                                    "Builders, gardeners, tradespeople",
                                    "Skip hire companies",
                                    "Care homes",
                                    "Probate lists",
                                    "Unsold properties at auction",
                                    "Educational seminars"
                                ].map((source, index) => (
                                    <div key={index} className="flex items-start gap-2 text-gray-700">
                                        <span className="text-yellow-600 font-bold">•</span>
                                        <span>{source}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Smart Data & Digital Tools */}
                        <div className="bg-gradient-to-br from-yellow-50 to-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-yellow-200">
                            <h3 className="text-3xl font-bold mb-6 text-blue-900">Smart Data & Digital Tools</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Fastin Property Auctions & portal data (e.g. properties listed 12+ months, price reduced 3+ times)",
                                    "Targeted letter campaigns to specific property types or owners",
                                    "Vacant property registers",
                                    "Paid online advertising (PPC) – powerful tool for local targeting",
                                    "Social media marketing – Including Vlogs and Stories"
                                ].map((tool, index) => (
                                    <div key={index} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-yellow-200">
                                        <Zap className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700">{tool}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Offline & Community Presence */}
                        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
                            <h3 className="text-3xl font-bold mb-6 text-blue-900">Offline & Community Presence</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    "Local newspapers and radio",
                                    "Billboards",
                                    "Branded vehicle signage",
                                    "Local news websites",
                                    "Hyperlocal Facebook groups",
                                    "Networking events",
                                    "Community groups",
                                    "Branded removal boxes"
                                ].map((method, index) => (
                                    <div key={index} className="flex items-center gap-2 text-gray-700">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                                        <span>{method}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Advanced Lead Generation */}
                        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl shadow-xl p-8 md:p-12 text-white">
                            <div className="flex items-start gap-4 mb-6">
                                <Trophy className="w-10 h-10 text-yellow-400 flex-shrink-0" />
                                <div>
                                    <h3 className="text-3xl font-bold mb-4 text-yellow-400">Advanced Lead Generation</h3>
                                    <p className="text-xl text-blue-100 leading-relaxed">
                                        All franchisees will benefit from access to our exclusive <span className="font-bold">Fastin Property Auctions Aggregator Platform</span> – a powerful daily property news hub and community resource.
                                    </p>
                                </div>
                            </div>
                            <p className="text-lg text-blue-100 leading-relaxed">
                                It features industry insights, discussion forums, and investor-friendly content to attract landlords, developers, and motivated sellers – and also lists ALL live Auction properties in Zimbabwe, searchable by area/type.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Auction Agency In a Box */}
                <div className="mb-24">
                    <div className="bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 rounded-3xl shadow-2xl p-12 text-center">
                        <div className="inline-flex items-center gap-2 bg-blue-900/20 backdrop-blur-sm border border-blue-900/30 rounded-full px-4 py-2 mb-6">
                            <Briefcase className="w-5 h-5 text-blue-900" />
                            <span className="text-blue-900 text-sm font-semibold uppercase tracking-wider">Complete Solution</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
                            Auction Agency In a Box
                        </h2>

                        <p className="text-2xl text-blue-900 font-semibold mb-8 max-w-3xl mx-auto">
                            A CRM, property portals, call answering service and lead generation to help you with your Auction business.
                        </p>

                        <div className="text-5xl font-bold text-blue-900">
                            Auction Agency. In a box.
                        </div>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 rounded-3xl shadow-2xl">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                            backgroundSize: '40px 40px'
                        }}></div>
                    </div>

                    <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
                        <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
                            <Heart className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-sm font-semibold">Ready to Begin?</span>
                        </div>

                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Interested in the Opportunity?
                        </h3>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                            It all starts with a quick call. After that, we'll arrange a face-to-face meeting to dive deeper and decide if working together makes sense.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
                            <a
                                href="tel:+263784086388"
                                className="group bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <Phone className="w-5 h-5" />
                                +263 784 086 388
                            </a>
                            <a
                                href="tel:+263719086388"
                                className="group bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <Phone className="w-5 h-5" />
                                +263 719 086 388
                            </a>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center text-blue-100 font-semibold">
                            <a
                                href="mailto:info@fastin.co.zw"
                                className="flex items-center justify-center gap-2 hover:text-yellow-400 transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                                info@fastin.co.zw
                            </a>
                            <span className="hidden sm:inline">•</span>
                            <a
                                href="mailto:info@fastinproperty.com"
                                className="flex items-center justify-center gap-2 hover:text-yellow-400 transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                                info@fastinproperty.com
                            </a>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/20">
                            <p className="text-2xl font-bold text-yellow-400 mb-4">
                                Fastin Property Auctions doesn't just tick the boxes – it redefines them.
                            </p>
                            <p className="text-lg text-blue-200">
                                With demand surging, the industry shifting, and digital innovation at the core, this franchise is built for the future.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}