import { useState } from 'react';
import { ChevronDown, Menu, X, Phone, Mail, MapPin, User, ExternalLink } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState("");

    const location = useLocation();

    const navItems = [
        { name: "HOME", href: "/" },
        { name: "PROPERTIES / AUCTIONS", href: "https://iprop.solutions/fastin/properties/for-auction", external: true },
        { name: "RESOURCES / BLOG", href: "#" },
        { name: "FAQS", href: "/about/faqs" },
        { name: "CONTACT", href: "/contact" },
    ];

    const franchisingItems = [
        {
            name: "Brochure",
            href: "/franchising/brochure",
            description: "Franchise opportunity and business model",
            icon: "📄"
        },
        {
            name: "Prospectus",
            href: "/franchising/prospectus",
            description: "Detailed franchise investment information",
            icon: "💼"
        },
    ]

    const serviceItems = [
        {
            name: "Marketing",
            href: "/services/marketing",
            description: "Multiple platforms to elevate your property",
            icon: "📈",
            image: "https://i.postimg.cc/3NJKMQHg/IMG_20251104_WA0036.jpg"
        },
        {
            name: "Buy at Auction",
            href: "/services/buy",
            description: "Bid from anywhere in the world",
            icon: "🏠",
            image: "https://i.postimg.cc/tJS9pvXM/IMG_20251104_WA0038.jpg"
        },
        {
            name: "Sell at Auction",
            href: "/services/sell",
            description: "Sell your property fast for market price",
            icon: "💰",
            image: "https://i.postimg.cc/wMT6KYd0/IMG_20251104_WA0039.jpg"
        },
        {
            name: "Property & Auction Finance",
            href: "/services/finance",
            description: "All finance options available",
            icon: "🏦",
            image: "https://i.postimg.cc/tTzXmC8Q/IMG_20251104_WA0049.jpg"
        },
        {
            name: "Franchising Opportunities",
            href: "/franchising/brochure",
            description: "Join our growing network of property experts",
            icon: "🤝",
            image: "https://i.postimg.cc/mDSb62KT/IMG_20251104_WA0050.jpg"
        },
        {
            name: "Auction Alerts",
            href: "/services/alerts",
            description: "Never miss an auction opportunity",
            icon: "🔔",
            image: "https://i.postimg.cc/tJCX0GHW/IMG_20251104_WA0044.jpg"
        },
    ];

    const aboutItems = [
        {
            name: "Our Company",
            href: "/about",
            description: "Industry veterans with an innovative approach to the real estate market.",
            image: "https://i.postimg.cc/mDSb62KT/IMG_20251104_WA0050.jpg",

        },
        {
            name: "The Team",
            href: "/about/team",
            description: "Meet our executive and senior management personnel.",
            image: "https://i.postimg.cc/NMxgPfZF/IMG_20251104_WA0042.jpg",

        },
        {
            name: "National Footprint",
            href: "/about/footprint",
            description: "Presence in all provinces to market your property to a national audience.",
            image: "https://i.postimg.cc/pVCSYy00/IMG_20251104_WA0046.jpg",

        },
        {
            name: "Partners",
            href: "/about/partners",
            description: "Partnering with law firms and financial institutions for a turnkey service.",
            image: "https://i.postimg.cc/mDSb62Ks/IMG_20251104_WA0040.jpg",

        },
        {
            name: "Property Auction Guide",
            href: "/about/guide",
            description: "Learn how property auctions work in Zimbabwe.",
            image: "https://i.postimg.cc/tTzXmC8Q/IMG_20251104_WA0049.jpg",

        },
        {
            name: "Online Bidding",
            href: "/about/online-bidding",
            description: "How to bid online, features and payment options available.",
            image: "https://i.postimg.cc/MHKWkJ8p/IMG_20251104_WA0043.jpg",

        },
        {
            name: "Privacy & Legal",
            href: "/about/disclaimer",
            description: "POPIA and CPA compliant policies.",
            image: "https://i.postimg.cc/SRNy0bpS/IMG_20251104_WA0035.jpg",

        },
    ];

    return (
        <>
            {/* Top Contact Bar - Professional & Clean */}
            <div className="bg-[#001B3D] text-blue-50/90 py-2.5 hidden md:block border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between text-xs tracking-wide font-medium">
                        <div className="flex items-center space-x-10">
                            <a
                                href="tel:+263784086388"
                                className="flex items-center space-x-2.5 hover:text-yellow-400 transition-all duration-300 group"
                            >
                                <div className="bg-yellow-400/10 rounded-full p-1.5 group-hover:bg-yellow-400/20 transition-colors">
                                    <Phone className="w-3.5 h-3.5 text-yellow-500" />
                                </div>
                                <span>+263 784 086 388 / +263 719 086 388</span>
                            </a>
                            <a
                                href="mailto:info@fastinproperty.co.zw"
                                className="flex items-center space-x-2.5 hover:text-yellow-400 transition-all duration-300 group"
                            >
                                <div className="bg-yellow-400/10 rounded-full p-1.5 group-hover:bg-yellow-400/20 transition-colors">
                                    <Mail className="w-3.5 h-3.5 text-yellow-500" />
                                </div>
                                <span>info@fastinproperty.co.zw</span>
                            </a>
                            <div className="flex items-center space-x-2.5 text-blue-100/70">
                                <div className="bg-blue-400/10 rounded-full p-1.5">
                                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                                </div>
                                <span>2 Smithfield Way, Marondera</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                            <span className="text-yellow-500 animate-pulse">●</span>
                            <span className="text-[11px] uppercase tracking-widest text-blue-100/60">Mon-Fri: 8:30 AM - 4:30 PM</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation - Premium */}
            <header className="bg-white shadow-xl sticky top-0 z-50 border-b-4 border-yellow-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-24">
                        {/* Logo - Premium Display */}
                        <a href="/" className="flex items-center group">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-blue-900/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                                <img
                                    src="https://i.postimg.cc/g0pZvzDg/main.jpg"
                                    alt="Fastin Property Auctions"
                                    className="relative h-16 md:h-16 w-auto transition-transform duration-300 group-hover:scale-105 rounded-2xl"
                                />
                            </div>
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
                            <a
                                href="/"
                                className={`relative px-5 py-2.5 text-xs font-bold tracking-widest transition-all duration-300 rounded-lg group uppercase ${location.pathname === "/"
                                        ? "text-blue-900 bg-blue-50/50"
                                        : "text-gray-600 hover:text-blue-900 hover:bg-gray-50"
                                    }`}
                            >
                                HOME
                                {location.pathname === "/" && (
                                    <div className="absolute bottom-[-1.5rem] left-0 w-full h-1 bg-yellow-500 rounded-full"></div>
                                )}
                            </a>

                            {/* About Dropdown */}
                            <div className="relative group">
                                <button
                                    onMouseEnter={() => setActiveDropdown('about')}
                                    onMouseLeave={() => setActiveDropdown("")}
                                    className={`px-5 py-2.5 text-xs font-bold tracking-widest transition-all duration-300 rounded-lg flex items-center gap-2 group uppercase ${location.pathname.startsWith("/about")
                                            ? "text-blue-900 bg-blue-50/50"
                                            : "text-gray-600 hover:text-blue-900 hover:bg-gray-50"
                                        }`}
                                >
                                    ABOUT US
                                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-500 ${activeDropdown === 'about' ? 'rotate-180 text-yellow-500' : ''
                                        }`} />
                                    {location.pathname.startsWith("/about") && (
                                        <div className="absolute bottom-[-1.5rem] left-0 w-full h-1 bg-yellow-500 rounded-full"></div>
                                    )}
                                </button>

                                {/* About Mega Menu */}
                                <div
                                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-5 w-[1000px] bg-transparent transition-all duration-500 overflow-hidden ${activeDropdown === 'about'
                                            ? 'opacity-100 visible translate-y-0 scale-100'
                                            : 'opacity-0 invisible -translate-y-4 scale-95 pointer-events-none'
                                        }`}
                                    onMouseEnter={() => setActiveDropdown('about')}
                                    onMouseLeave={() => setActiveDropdown("")}
                                >
                                    <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100/50 overflow-hidden">
                                        <div className="grid grid-cols-3 gap-6">
                                            {aboutItems.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="group flex gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-blue-950/5 transition-all duration-300 border border-transparent hover:border-gray-100"
                                                >
                                                    <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-500">
                                                        <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                        <div className="absolute inset-0 bg-blue-950/20 group-hover:bg-transparent transition-colors duration-300"></div>
                                                    </div>
                                                    <div className="pt-1">
                                                        <h4 className="font-bold text-blue-950 text-[11px] mb-2 uppercase tracking-widest group-hover:text-yellow-600 transition-colors">
                                                            {item.name}
                                                        </h4>
                                                        <p className="text-[11px] text-gray-500 leading-relaxed line-clamp-2">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bg-[#001B3D] p-5 flex justify-between items-center text-white px-10">
                                        <p className="text-xs text-blue-100/60 font-medium tracking-wide">Fastin Property Auctions — Excellence in Real Estate since 2012</p>
                                        <a href="/about" className="text-xs font-bold text-yellow-500 hover:text-yellow-400 flex items-center gap-2 transition-colors">
                                            LEARN MORE <span className="text-lg">→</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Services Dropdown */}
                            <div className="relative group">
                                <button
                                    onMouseEnter={() => setActiveDropdown('services')}
                                    onMouseLeave={() => setActiveDropdown("")}
                                    className={`px-5 py-2.5 text-xs font-bold tracking-widest transition-all duration-300 rounded-lg flex items-center gap-2 group uppercase ${location.pathname.startsWith("/services")
                                            ? "text-blue-900 bg-blue-50/50"
                                            : "text-gray-600 hover:text-blue-900 hover:bg-gray-50"
                                        }`}
                                >
                                    SERVICES
                                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-500 ${activeDropdown === 'services' ? 'rotate-180 text-yellow-500' : ''
                                        }`} />
                                    {location.pathname.startsWith("/services") && (
                                        <div className="absolute bottom-[-1.5rem] left-0 w-full h-1 bg-yellow-500 rounded-full"></div>
                                    )}
                                </button>

                                {/* Services Mega Menu */}
                                <div
                                    className={`absolute top-full left-1/2 -translate-x-32 pt-5 w-[900px] bg-transparent transition-all duration-500 overflow-hidden ${activeDropdown === 'services'
                                            ? 'opacity-100 visible translate-y-0 scale-100'
                                            : 'opacity-0 invisible -translate-y-4 scale-95 pointer-events-none'
                                        }`}
                                    onMouseEnter={() => setActiveDropdown('services')}
                                    onMouseLeave={() => setActiveDropdown("")}
                                >
                                    <div className="flex bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100/50 overflow-hidden">
                                        <div className="w-1/3 bg-[#001B3D] p-10 text-white flex flex-col justify-between relative overflow-hidden">
                                            <div className="relative z-10">
                                                <h3 className="text-2xl font-bold mb-4">Our Services</h3>
                                                <p className="text-blue-100/70 text-sm leading-relaxed mb-8">
                                                    Comprehensive property solutions tailored to the Zimbabwean market. Expertise you can trust.
                                                </p>
                                                <div className="space-y-4">
                                                    <div className="flex items-center gap-3 text-sm text-yellow-400 bg-yellow-400/10 px-4 py-2 rounded-xl w-fit">
                                                        <span className="font-bold">24/7 Support</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
                                        </div>
                                        <div className="w-2/3 p-8 bg-gray-50/50">
                                            <div className="grid grid-cols-2 gap-4">
                                                {serviceItems.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className="group bg-white p-4 rounded-2xl border border-gray-200/50 hover:border-yellow-400/50 hover:shadow-xl hover:shadow-yellow-400/5 transition-all duration-300"
                                                    >
                                                        <div className="flex gap-4">
                                                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shrink-0">
                                                                {item.icon}
                                                            </div>
                                                            <div>
                                                                <h4 className="font-bold text-blue-950 text-xs mb-1 uppercase tracking-wider group-hover:text-yellow-600 transition-colors">
                                                                    {item.name}
                                                                </h4>
                                                                <p className="text-[11px] text-gray-500 leading-normal line-clamp-2">
                                                                    {item.description}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="https://iprop.solutions/fastin/properties/for-auction"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`relative px-5 py-2.5 text-xs font-bold tracking-widest transition-all duration-300 rounded-lg group uppercase text-gray-600 hover:text-blue-900 hover:bg-gray-50`}
                            >
                                PROPERTIES / AUCTIONS
                            </a>

                            <a
                                href="#"
                                className={`relative px-5 py-2.5 text-xs font-bold tracking-widest transition-all duration-300 rounded-lg group uppercase text-gray-600 hover:text-blue-900 hover:bg-gray-50`}
                            >
                                RESOURCES / BLOG
                            </a>

                            <a
                                href="/about/faqs"
                                className={`relative px-5 py-2.5 text-xs font-bold tracking-widest transition-all duration-300 rounded-lg group uppercase ${location.pathname === "/about/faqs"
                                        ? "text-blue-900 bg-blue-50/50"
                                        : "text-gray-600 hover:text-blue-900 hover:bg-gray-50"
                                    }`}
                            >
                                FAQS
                                {location.pathname === "/about/faqs" && (
                                    <div className="absolute bottom-[-1.5rem] left-0 w-full h-1 bg-yellow-500 rounded-full"></div>
                                )}
                            </a>

                            <a
                                href="/contact"
                                className={`relative px-5 py-2.5 text-xs font-bold tracking-widest transition-all duration-300 rounded-lg group uppercase ${location.pathname === "/contact"
                                        ? "text-blue-900 bg-blue-50/50"
                                        : "text-gray-600 hover:text-blue-900 hover:bg-gray-50"
                                    }`}
                            >
                                CONTACT
                            </a>
                        </nav>

                        {/* Online Bidding Button - Premium */}
                        <div className="hidden lg:flex items-center ml-4">
                            <div className="relative group">
                                <button className="flex items-center space-x-3 bg-[#001B3D] hover:bg-[#002b5e] text-white px-7 py-4 rounded-full text-[11px] font-bold tracking-[0.15em] transition-all duration-500 transform hover:shadow-[0_10px_30px_rgba(0,27,61,0.3)] group/btn border border-white/5 uppercase">
                                    <User className="w-3.5 h-3.5 text-yellow-500 group-hover/btn:scale-110 transition-transform" />
                                    <span>Online Bidding</span>
                                    <ChevronDown className="w-3.5 h-3.5 text-white/30 group-hover/btn:text-white transition-colors" />
                                </button>

                                {/* Online Bidding Dropdown */}
                                <div className="absolute top-full right-0 pt-5 w-72 bg-transparent opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 group-hover:translate-y-0 -translate-y-4 overflow-hidden">
                                    <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100/50 overflow-hidden">
                                        <div className="p-4 bg-gray-50 border-b border-gray-100">
                                            <h4 className="text-[10px] font-bold text-blue-950 uppercase tracking-[0.2em]">Platform Access</h4>
                                        </div>
                                        <div className="p-3 space-y-2">
                                            <a
                                                href="https://iprop.solutions/fastin/properties/for-auction"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-between p-4 rounded-2xl hover:bg-blue-50/50 transition-all duration-300 group/item"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className="bg-blue-50 w-10 h-10 rounded-xl flex items-center justify-center group-hover/item:bg-yellow-400 group-hover/item:text-blue-950 transition-colors text-blue-600">
                                                        <ExternalLink className="w-4 h-4" />
                                                    </div>
                                                    <span className="font-bold text-blue-950 text-xs uppercase tracking-wider">Auction Stock</span>
                                                </div>
                                            </a>
                                            <a
                                                href="https://iprop.solutions/fastin/auth/login"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-between p-4 rounded-2xl hover:bg-blue-50/50 transition-all duration-300 group/item"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className="bg-blue-50 w-10 h-10 rounded-xl flex items-center justify-center group-hover/item:bg-yellow-400 group-hover/item:text-blue-950 transition-colors text-blue-600">
                                                        <User className="w-4 h-4" />
                                                    </div>
                                                    <span className="font-bold text-blue-950 text-xs uppercase tracking-wider">Create Account</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Toggle Button */}
                        <div className="flex lg:hidden items-center">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-3 rounded-2xl bg-[#001B3D] text-white hover:bg-[#002b5e] transition-all shadow-lg active:scale-95"
                            >
                                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-[100vh] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}>
                    <div className="bg-white border-t border-gray-100 shadow-2xl overflow-y-auto">
                        <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
                            <div className="grid grid-cols-1 gap-3">
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={`block py-4 px-6 rounded-2xl font-bold tracking-widest text-xs uppercase transition-all ${location.pathname === item.href
                                                ? "bg-[#001B3D] text-white shadow-xl shadow-blue-900/20"
                                                : "bg-gray-50 text-blue-950 hover:bg-gray-100"
                                            }`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>

                            <div className="space-y-4 pt-4 border-t border-gray-100">
                                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] px-2 italic">Specialised Services</h4>

                                {/* Mobile Dropdowns */}
                                <div className="grid grid-cols-1 gap-3">
                                    {/* Services */}
                                    <div className="space-y-1">
                                        <button
                                            onClick={() => setActiveDropdown(activeDropdown === "services" ? "" : "services")}
                                            className={`w-full flex justify-between items-center py-4 px-6 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all ${activeDropdown === "services" ? "bg-yellow-400 text-blue-950 shadow-lg shadow-yellow-400/20" : "bg-gray-50 text-blue-950"
                                                }`}
                                        >
                                            <span>Core Services</span>
                                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "services" ? "rotate-180" : ""}`} />
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === "services" ? "max-h-96 mt-2 opacity-100" : "max-h-0 opacity-0"}`}>
                                            <div className="grid grid-cols-1 gap-2 pl-4">
                                                {serviceItems.map((sub) => (
                                                    <a
                                                        key={sub.name}
                                                        href={sub.href}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className="flex items-center gap-3 py-3 px-5 rounded-xl bg-blue-50/50 text-[11px] text-blue-950 font-bold uppercase tracking-wider"
                                                    >
                                                        <span className="text-lg">{sub.icon}</span> {sub.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* About */}
                                    <div className="space-y-1">
                                        <button
                                            onClick={() => setActiveDropdown(activeDropdown === "about" ? "" : "about")}
                                            className={`w-full flex justify-between items-center py-4 px-6 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all ${activeDropdown === "about" ? "bg-yellow-400 text-blue-950 shadow-lg shadow-yellow-400/20" : "bg-gray-50 text-blue-950"
                                                }`}
                                        >
                                            <span>Our Company</span>
                                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "about" ? "rotate-180" : ""}`} />
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === "about" ? "max-h-[500px] mt-2 opacity-100" : "max-h-0 opacity-0"}`}>
                                            <div className="grid grid-cols-1 gap-2 pl-4">
                                                {aboutItems.map((sub) => (
                                                    <a
                                                        key={sub.name}
                                                        href={sub.href}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className="block py-3 px-5 rounded-xl bg-blue-50/50 text-[11px] text-blue-950 font-bold uppercase tracking-wider"
                                                    >
                                                        {sub.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Franchising */}
                                    <div className="space-y-1">
                                        <button
                                            onClick={() => setActiveDropdown(activeDropdown === "franchising" ? "" : "franchising")}
                                            className={`w-full flex justify-between items-center py-4 px-6 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all ${activeDropdown === "franchising" ? "bg-yellow-400 text-blue-950 shadow-lg shadow-yellow-400/20" : "bg-gray-50 text-blue-950"
                                                }`}
                                        >
                                            <span>Franchising</span>
                                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "franchising" ? "rotate-180" : ""}`} />
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === "franchising" ? "max-h-64 mt-2 opacity-100" : "max-h-0 opacity-0"}`}>
                                            <div className="grid grid-cols-1 gap-2 pl-4">
                                                {franchisingItems.map((sub) => (
                                                    <a
                                                        key={sub.name}
                                                        href={sub.href}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className="flex items-center gap-3 py-3 px-5 rounded-xl bg-blue-50/50 text-[11px] text-blue-950 font-bold uppercase tracking-wider"
                                                    >
                                                        <span className="text-lg">{sub.icon}</span> {sub.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 space-y-4 border-t border-gray-100">
                                <div className="flex items-center gap-3 px-2">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                        <User className="w-5 h-5" />
                                    </div>
                                    <h4 className="text-[10px] font-bold text-blue-950 uppercase tracking-[0.2em]">Bidding Access</h4>
                                </div>
                                <div className="grid grid-cols-1 gap-3">
                                    <a
                                        href="https://iprop.solutions/fastin/properties/for-auction"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between bg-[#001B3D] text-white py-5 px-8 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-[#002b5e] transition-all shadow-xl shadow-blue-900/20"
                                    >
                                        <span>Browse Stock</span>
                                        <ExternalLink className="w-4 h-4 text-yellow-500" />
                                    </a>
                                    <a
                                        href="https://iprop.solutions/fastin/auth/login"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between bg-white border-2 border-[#001B3D] text-[#001B3D] py-5 px-8 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-gray-50 transition-all"
                                    >
                                        <span>Member Login</span>
                                        <User className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
