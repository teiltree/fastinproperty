import { useState } from 'react';
import { ChevronDown, Menu, X, Phone, Mail, MapPin, User, ExternalLink } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState("");

    const location = useLocation();

    const navItems = [
        { name: "HOME", href: "/" },
        { name: "CAREERS", href: "/careers" },
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
            icon: "📈"
        },
        {
            name: "Buy at Auction",
            href: "/services/buy",
            description: "Bid from anywhere in the world",
            icon: "🏠"
        },
        {
            name: "Sell at Auction",
            href: "/services/sell",
            description: "Sell your property fast for market price",
            icon: "💰"
        },
        {
            name: "Property & Auction Finance",
            href: "/services/finance",
            description: "All finance options available",
            icon: "🏦"
        },
        {
            name: "Training & Careers",
            href: "/careers",
            description: "Full training and support provided",
            icon: "🎓"
        },
        {
            name: "Auction Alerts",
            href: "/services/alerts",
            description: "Never miss an auction opportunity",
            icon: "🔔"
        },
    ];

    const aboutItems = [
        {
            name: "Our History",
            href: "/about",
            description: "Decades of Real Estate experience and innovation",
            icon: "📜"
        },
        {
            name: "Our Vision",
            href: "/about",
            description: "Technology-driven real estate marketing platform",
            icon: "🎯"
        },
        {
            name: "The Team",
            href: "/about/team",
            description: "Meet our Executive and Senior management",
            icon: "👥"
        },
        {
            name: "National Footprint",
            href: "/about/footprint",
            description: "Presence in all provinces nationwide",
            icon: "🗺️"
        },
        {
            name: "Property Auction Guide",
            href: "/guide",
            description: "Learn how property auctions work in Zimbabwe",
            icon: "📚"
        },
        {
            name: "Online Bidding",
            href: "/about/online-bidding",
            description: "How to bid online, features and payments",
            icon: "💻"
        },
        {
            name: "FAQs",
            href: "/about/faqs",
            description: "Frequently Asked Questions",
            icon: "❔"
        },
        {
            name: "Disclaimer",
            href: "/about/disclaimer",
            description: "POPIA and CPA Compliant policies",
            icon: "🔒"
        },
    ];

    return (
        <>
            {/* Top Contact Bar - Premium */}
            <div className="bg-gradient-to-r from-blue-950 to-blue-900 text-white py-3 hidden md:block border-b border-blue-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-8">
                            <a
                                href="tel:+263784086388"
                                className="flex items-center space-x-2 hover:text-yellow-400 transition-colors group"
                            >
                                <div className="bg-yellow-500/20 rounded-lg p-1.5 group-hover:bg-yellow-500/30 transition-colors">
                                    <Phone className="w-3.5 h-3.5 text-yellow-400" />
                                </div>
                                <span className="font-medium">+263 784 086 388 / +263 719 086 388</span>
                            </a>
                            <a
                                href="mailto:info@fastinproperty.co.zw"
                                className="flex items-center space-x-2 hover:text-yellow-400 transition-colors group"
                            >
                                <div className="bg-yellow-500/20 rounded-lg p-1.5 group-hover:bg-yellow-500/30 transition-colors">
                                    <Mail className="w-3.5 h-3.5 text-yellow-400" />
                                </div>
                                <span className="font-medium">info@fastinproperty.co.zw</span>
                            </a>
                            <div className="flex items-center space-x-2 text-blue-200">
                                <div className="bg-blue-800/50 rounded-lg p-1.5">
                                    <MapPin className="w-3.5 h-3.5 text-yellow-400" />
                                </div>
                                <span>2 Smithfield Way, Marondera</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-blue-200 bg-blue-800/30 px-4 py-1.5 rounded-lg">
                            <span className="text-yellow-400">🕒</span>
                            <span className="font-medium">Mon-Fri: 8:00 AM - 6:00 PM</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation - Premium */}
            <header className="bg-white shadow-xl sticky top-0 z-50 border-b-4 border-yellow-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-24">
                        {/* Logo - Premium Display */}
                        <a href="/" className="flex items-center group">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-blue-900/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                                <img
                                    src="https://i.postimg.cc/g0pZvzDg/main.jpg"
                                    alt="FastIn Property Auctions"
                                    className="relative h-16 md:h-20 w-auto transition-transform duration-300 group-hover:scale-105 rounded-2xl"
                                />
                            </div>
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
                            <a
                                href="/"
                                className={`relative px-4 py-2 text-sm font-bold tracking-wide transition-all duration-300 rounded-lg group ${
                                    location.pathname === "/"
                                        ? "text-blue-900 bg-yellow-50"
                                        : "text-gray-700 hover:text-blue-900 hover:bg-blue-50"
                                }`}
                            >
                                HOME
                                {location.pathname === "/" && (
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
                                )}
                            </a>

                            {/* Services Dropdown */}
                            <div className="relative">
                                <button
                                    onMouseEnter={() => setActiveDropdown('services')}
                                    onMouseLeave={() => setActiveDropdown("")}
                                    className={`px-4 py-2 text-sm font-bold tracking-wide transition-all duration-300 rounded-lg flex items-center gap-1.5 group ${
                                        location.pathname.startsWith("/services")
                                            ? "text-blue-900 bg-yellow-50"
                                            : "text-gray-700 hover:text-blue-900 hover:bg-blue-50"
                                    }`}
                                >
                                    SERVICES
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                                        activeDropdown === 'services' ? 'rotate-180' : ''
                                    }`} />
                                    {location.pathname.startsWith("/services") && (
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
                                    )}
                                </button>

                                {/* Services Dropdown Menu */}
                                <div
                                    className={`absolute top-full left-0 mt-3 w-[420px] bg-white rounded-2xl shadow-2xl transition-all duration-300 border border-gray-100 ${
                                        activeDropdown === 'services'
                                            ? 'opacity-100 visible translate-y-0'
                                            : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                                    }`}
                                    onMouseEnter={() => setActiveDropdown('services')}
                                    onMouseLeave={() => setActiveDropdown("")}
                                >
                                    <div className="absolute -top-2 left-8 w-4 h-4 bg-white border-l border-t border-gray-100 transform rotate-45"></div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-blue-900 mb-4 pb-3 border-b-2 border-yellow-400 flex items-center gap-2">
                                            <span className="text-2xl">🎯</span>
                                            Our Services
                                        </h3>
                                        <div className="grid gap-2">
                                            {serviceItems.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="flex items-start space-x-3 p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-yellow-50 transition-all duration-200 group border border-transparent hover:border-yellow-200"
                                                >
                                        <span className="text-2xl flex-shrink-0 group-hover:scale-125 transition-transform duration-300">
                                            {item.icon}
                                        </span>
                                                    <div>
                                                        <div className="font-bold text-blue-900 text-sm mb-1 group-hover:text-blue-800">
                                                            {item.name}
                                                        </div>
                                                        <div className="text-xs text-gray-600 leading-relaxed">
                                                            {item.description}
                                                        </div>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* About Dropdown */}
                            <div className="relative">
                                <button
                                    onMouseEnter={() => setActiveDropdown('about')}
                                    onMouseLeave={() => setActiveDropdown("")}
                                    className={`px-4 py-2 text-sm font-bold tracking-wide transition-all duration-300 rounded-lg flex items-center gap-1.5 group ${
                                        location.pathname.startsWith("/about")
                                            ? "text-blue-900 bg-yellow-50"
                                            : "text-gray-700 hover:text-blue-900 hover:bg-blue-50"
                                    }`}
                                >
                                    ABOUT
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                                        activeDropdown === 'about' ? 'rotate-180' : ''
                                    }`} />
                                    {location.pathname.startsWith("/about") && (
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
                                    )}
                                </button>

                                {/* About Dropdown Menu */}
                                <div
                                    className={`absolute top-full left-0 mt-3 w-[420px] bg-white rounded-2xl shadow-2xl transition-all duration-300 border border-gray-100 ${
                                        activeDropdown === 'about'
                                            ? 'opacity-100 visible translate-y-0'
                                            : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                                    }`}
                                    onMouseEnter={() => setActiveDropdown('about')}
                                    onMouseLeave={() => setActiveDropdown("")}
                                >
                                    <div className="absolute -top-2 left-8 w-4 h-4 bg-white border-l border-t border-gray-100 transform rotate-45"></div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-blue-900 mb-4 pb-3 border-b-2 border-yellow-400 flex items-center gap-2">
                                            <span className="text-2xl">ℹ️</span>
                                            About Us
                                        </h3>
                                        <div className="grid gap-2">
                                            {aboutItems.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="flex items-start space-x-3 p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-yellow-50 transition-all duration-200 group border border-transparent hover:border-yellow-200"
                                                >
                                        <span className="text-2xl flex-shrink-0 group-hover:scale-125 transition-transform duration-300">
                                            {item.icon}
                                        </span>
                                                    <div>
                                                        <div className="font-bold text-blue-900 text-sm mb-1 group-hover:text-blue-800">
                                                            {item.name}
                                                        </div>
                                                        <div className="text-xs text-gray-600 leading-relaxed">
                                                            {item.description}
                                                        </div>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Franchising Dropdown */}
                            <div className="relative">
                                <button
                                    onMouseEnter={() => setActiveDropdown('franchising')}
                                    onMouseLeave={() => setActiveDropdown("")}
                                    className={`px-4 py-2 text-sm font-bold tracking-wide transition-all duration-300 rounded-lg flex items-center gap-1.5 group ${
                                        location.pathname.startsWith("/franchising")
                                            ? "text-blue-900 bg-yellow-50"
                                            : "text-gray-700 hover:text-blue-900 hover:bg-blue-50"
                                    }`}
                                >
                                    FRANCHISING
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                                        activeDropdown === 'franchising' ? 'rotate-180' : ''
                                    }`} />
                                    {location.pathname.startsWith("/franchising") && (
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
                                    )}
                                </button>

                                {/* Franchising Dropdown Menu */}
                                <div
                                    className={`absolute top-full left-0 mt-3 w-96 bg-white rounded-2xl shadow-2xl transition-all duration-300 border border-gray-100 ${
                                        activeDropdown === 'franchising'
                                            ? 'opacity-100 visible translate-y-0'
                                            : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                                    }`}
                                    onMouseEnter={() => setActiveDropdown('franchising')}
                                    onMouseLeave={() => setActiveDropdown("")}
                                >
                                    <div className="absolute -top-2 left-8 w-4 h-4 bg-white border-l border-t border-gray-100 transform rotate-45"></div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-blue-900 mb-4 pb-3 border-b-2 border-yellow-400 flex items-center gap-2">
                                            <span className="text-2xl">🤝</span>
                                            Franchising
                                        </h3>
                                        <div className="grid gap-2">
                                            {franchisingItems.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="flex items-start space-x-3 p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-yellow-50 transition-all duration-200 group border border-transparent hover:border-yellow-200"
                                                >
                                        <span className="text-2xl flex-shrink-0 group-hover:scale-125 transition-transform duration-300">
                                            {item.icon}
                                        </span>
                                                    <div>
                                                        <div className="font-bold text-blue-900 text-sm mb-1 group-hover:text-blue-800">
                                                            {item.name}
                                                        </div>
                                                        <div className="text-xs text-gray-600 leading-relaxed">
                                                            {item.description}
                                                        </div>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="/careers"
                                className={`px-4 py-2 text-sm font-bold tracking-wide transition-all duration-300 rounded-lg group ${
                                    location.pathname === "/careers"
                                        ? "text-blue-900 bg-yellow-50"
                                        : "text-gray-700 hover:text-blue-900 hover:bg-blue-50"
                                }`}
                            >
                                CAREERS
                                {location.pathname === "/careers" && (
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
                                )}
                            </a>

                            <a
                                href="/contact"
                                className={`px-4 py-2 text-sm font-bold tracking-wide transition-all duration-300 rounded-lg group ${
                                    location.pathname === "/contact"
                                        ? "text-blue-900 bg-yellow-50"
                                        : "text-gray-700 hover:text-blue-900 hover:bg-blue-50"
                                }`}
                            >
                                CONTACT
                                {location.pathname === "/contact" && (
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
                                )}
                            </a>
                        </nav>

                        {/* Online Bidding Button - Premium */}
                        <div className="hidden lg:flex items-center">
                            <div className="relative group">
                                <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white px-6 py-3.5 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                                    <User className="w-4 h-4" />
                                    <span className="text-sm tracking-wide">ONLINE BIDDING</span>
                                    <ChevronDown className="w-4 h-4" />
                                </button>

                                {/* Online Bidding Dropdown */}
                                <div className="absolute top-full right-0 mt-3 w-72 bg-white border border-gray-100 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 group-hover:translate-y-0 -translate-y-2">
                                    <div className="absolute -top-2 right-6 w-4 h-4 bg-white border-l border-t border-gray-100 transform rotate-45"></div>
                                    <div className="p-6">
                                        <h4 className="text-lg font-bold text-blue-900 mb-4 pb-3 border-b-2 border-yellow-400">
                                            Start Bidding
                                        </h4>
                                        <div className="space-y-2">
                                            <a
                                                href="https://iprop.solutions/fastin/properties/for-auction"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-between p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-yellow-50 transition-all group/item border border-transparent hover:border-yellow-200"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="bg-blue-100 rounded-lg p-2 group-hover/item:bg-blue-200 transition-colors">
                                                        <ExternalLink className="w-4 h-4 text-blue-600" />
                                                    </div>
                                                    <span className="font-bold text-gray-700 text-sm">Auction Stock</span>
                                                </div>
                                            </a>
                                            <a
                                                href="https://iprop.solutions/fastin/auth/login"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-between p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-yellow-50 transition-all group/item border border-transparent hover:border-yellow-200"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="bg-blue-100 rounded-lg p-2 group-hover/item:bg-blue-200 transition-colors">
                                                        <User className="w-4 h-4 text-blue-600" />
                                                    </div>
                                                    <span className="font-bold text-gray-700 text-sm">Create Account</span>
                                                </div>
                                            </a>
                                            <div className="border-t border-gray-200 my-2"></div>
                                            {/*<a*/}
                                            {/*    href="https://qrco.de/ABC_Auctions"*/}
                                            {/*    target="_blank"*/}
                                            {/*    rel="noopener noreferrer"*/}
                                            {/*    className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-yellow-50 to-yellow-100 hover:from-yellow-100 hover:to-yellow-200 transition-all group/item border-2 border-yellow-300"*/}
                                            {/*>*/}
                                            {/*    <div className="flex items-center gap-3">*/}
                                            {/*        <div className="bg-yellow-200 rounded-lg p-2 group-hover/item:bg-yellow-300 transition-colors">*/}
                                            {/*            <Smartphone className="w-4 h-4 text-yellow-700" />*/}
                                            {/*        </div>*/}
                                            {/*        <span className="font-bold text-yellow-900 text-sm">Get Mobile App</span>*/}
                                            {/*    </div>*/}
                                            {/*</a>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-3 rounded-xl bg-gradient-to-r from-blue-900 to-blue-800 text-white hover:from-blue-800 hover:to-blue-700 transition-all shadow-lg"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
                    isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}>
                    <div className="bg-gradient-to-b from-blue-50 to-white border-t-4 border-yellow-400">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-3">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={`block py-3 px-5 rounded-xl font-bold transition-all ${
                                        location.pathname === item.href
                                            ? "bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg"
                                            : "bg-white text-blue-900 hover:bg-blue-100"
                                    }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </a>


                            ))}
                            {/* Mobile Dropdowns */}
                            <div className="space-y-3">
                                {/* Services */}
                                <div>
                                    <button
                                        onClick={() => setActiveDropdown(activeDropdown === "services" ? "" : "services")}
                                        className="w-full flex justify-between items-center py-3 px-5 rounded-xl font-bold bg-white text-blue-900 hover:bg-blue-100 transition-all shadow-sm"
                                    >
                                        <span>Services</span>
                                        <ChevronDown
                                            className={`w-5 h-5 transition-transform duration-300 ${
                                                activeDropdown === "services" ? "rotate-180" : ""
                                            }`}
                                        />
                                    </button>
                                    {activeDropdown === "services" && (
                                        <div className="mt-2 space-y-2 pl-4">
                                            {serviceItems.map((sub) => (
                                                <a
                                                    key={sub.name}
                                                    href={sub.href}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className="block py-2 px-4 rounded-lg bg-blue-50 hover:bg-blue-100 text-sm text-blue-900 font-medium"
                                                >
                                                    {sub.icon} {sub.name}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* About */}
                                <div>
                                    <button
                                        onClick={() => setActiveDropdown(activeDropdown === "about" ? "" : "about")}
                                        className="w-full flex justify-between items-center py-3 px-5 rounded-xl font-bold bg-white text-blue-900 hover:bg-blue-100 transition-all shadow-sm"
                                    >
                                        <span>About</span>
                                        <ChevronDown
                                            className={`w-5 h-5 transition-transform duration-300 ${
                                                activeDropdown === "about" ? "rotate-180" : ""
                                            }`}
                                        />
                                    </button>
                                    {activeDropdown === "about" && (
                                        <div className="mt-2 space-y-2 pl-4">
                                            {aboutItems.map((sub) => (
                                                <a
                                                    key={sub.name}
                                                    href={sub.href}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className="block py-2 px-4 rounded-lg bg-blue-50 hover:bg-blue-100 text-sm text-blue-900 font-medium"
                                                >
                                                    {sub.icon} {sub.name}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Franchising */}
                                <div>
                                    <button
                                        onClick={() => setActiveDropdown(activeDropdown === "franchising" ? "" : "franchising")}
                                        className="w-full flex justify-between items-center py-3 px-5 rounded-xl font-bold bg-white text-blue-900 hover:bg-blue-100 transition-all shadow-sm"
                                    >
                                        <span>Franchising</span>
                                        <ChevronDown
                                            className={`w-5 h-5 transition-transform duration-300 ${
                                                activeDropdown === "franchising" ? "rotate-180" : ""
                                            }`}
                                        />
                                    </button>
                                    {activeDropdown === "franchising" && (
                                        <div className="mt-2 space-y-2 pl-4">
                                            {franchisingItems.map((sub) => (
                                                <a
                                                    key={sub.name}
                                                    href={sub.href}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className="block py-2 px-4 rounded-lg bg-blue-50 hover:bg-blue-100 text-sm text-blue-900 font-medium"
                                                >
                                                    {sub.icon} {sub.name}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>


                            <div className="pt-4 space-y-3">
                                <div className="text-xs uppercase text-gray-500 font-bold px-2 tracking-wider flex items-center gap-2">
                                    <User className="w-4 h-4" />
                                    Online Bidding
                                </div>
                                <a
                                    href="https://iprop.solutions/fastin/properties/for-auction"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-between bg-white text-blue-900 py-4 px-5 rounded-xl font-bold hover:bg-blue-100 transition-all shadow-sm"
                                >
                                    <span>Auction Stock</span>
                                    <ExternalLink className="w-5 h-5 text-blue-600" />
                                </a>
                                <a
                                    href="https://iprop.solutions/fastin/auth/login"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-between bg-white text-blue-900 py-4 px-5 rounded-xl font-bold hover:bg-blue-100 transition-all shadow-sm"
                                >
                                    <span>Create Account</span>
                                    <ExternalLink className="w-5 h-5 text-blue-600" />
                                </a>
                                {/*<a*/}
                                {/*    href="https://qrco.de/ABC_Auctions"*/}
                                {/*    target="_blank"*/}
                                {/*    rel="noopener noreferrer"*/}
                                {/*    className="w-full flex items-center justify-between bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 py-4 px-5 rounded-xl font-bold hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-lg"*/}
                                {/*>*/}
                                {/*    <span>Get Mobile App</span>*/}
                                {/*    <Smartphone className="w-5 h-5" />*/}
                                {/*</a>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}