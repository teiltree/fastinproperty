import {
    Facebook,
    Instagram,
    Twitter,
    Mail,
    Phone,
    MapPin,
    Shield,
    Award,
    Star,
    Clock
} from "lucide-react";
import zimFlag from "@/assets/flag.png";

export default function Footer() {



    const quickLinks = [
        { name: "Current Auctions", href: "https://iprop.solutions/fastin/properties/for-auction" },
        { name: "Sell With Us", href: "/services/sell" },
        { name: "Free Auction Valuation", href: "/valuation" },
        { name: "Guide to Property Auctions in Zimbabwe", href: "/about/guide" },
        { name: "Finance Options", href: "/finance" },
        { name: "How It Works", href: "/about/online-bidding" },
    ];

    const legalLinks = [
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Disclaimer", href: "/about/disclaimer" },
        { name: "FAQs", href: "/about/faqs" },
        { name: "Rules of Auction", href: "/rules-of-auction" },
    ];

    return (
        <footer className="bg-gradient-to-b from-blue-900 via-blue-950 to-black relative overflow-hidden">
            {/* Decorative Pattern Overlay */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            {/* Main Footer Content */}
            <div className="relative py-20 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
                        {/* Company Info */}
                        <div className="lg:col-span-1">
                            <div className="mb-6">
                                <img
                                    className="w-auto h-20 rounded-xl shadow-lg hover:shadow-yellow-500/20 transition-shadow duration-300"
                                    src="https://i.postimg.cc/g0pZvzDg/main.jpg"
                                    alt="FastIn Property Auctions Logo"
                                />
                            </div>

                            <p className="text-blue-200 mb-8 leading-relaxed text-sm">
                                Zimbabwe's premier online property auction platform, connecting buyers and sellers with transparency, trust, and innovation since 1992.
                            </p>

                            <div className="space-y-4">
                                <a
                                    href="tel:+263784086388"
                                    className="flex items-start space-x-3 text-blue-200 hover:text-yellow-400 transition-colors group"
                                >
                                    <div className="bg-blue-800/50 group-hover:bg-yellow-500/20 rounded-lg p-2 transition-colors">
                                        <Phone className="w-4 h-4 text-yellow-400" />
                                    </div>
                                    <div className="text-sm">
                                        <div>+263 784 086 388</div>
                                        <div>+263 719 086 388</div>
                                    </div>
                                </a>

                                <a
                                    href="mailto:info@fastinproperty.co.zw"
                                    className="flex items-center space-x-3 text-blue-200 hover:text-yellow-400 transition-colors group"
                                >
                                    <div className="bg-blue-800/50 group-hover:bg-yellow-500/20 rounded-lg p-2 transition-colors">
                                        <Mail className="w-4 h-4 text-yellow-400" />
                                    </div>
                                    <span className="text-sm">info@fastinproperty.co.zw</span>
                                </a>

                                <div className="flex items-start space-x-3 text-blue-200">
                                    <div className="bg-blue-800/50 rounded-lg p-2">
                                        <MapPin className="w-4 h-4 text-yellow-400" />
                                    </div>
                                    <span className="text-sm leading-relaxed">
                      2 Smithfield Way, Longlands Industrial Site, Marondera, Zimbabwe
                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                                <div className="w-1 h-6 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full"></div>
                                Quick Links
                            </h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-blue-200 hover:text-yellow-400 transition-all duration-200 flex items-center space-x-2 group text-sm"
                                        >
                                            <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-200"></span>
                                            <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal & Support */}
                        <div>
                            <h4 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                                <div className="w-1 h-6 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full"></div>
                                Legal & Support
                            </h4>
                            <ul className="space-y-3">
                                {legalLinks.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-blue-200 hover:text-yellow-400 transition-all duration-200 flex items-center space-x-2 group text-sm"
                                        >
                                            <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-200"></span>
                                            <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Business Hours */}
                        <div>
                            <h4 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                                <div className="w-1 h-6 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full"></div>
                                Business Hours
                            </h4>
                            <div className="space-y-4">
                                <div className="bg-blue-800/30 rounded-xl p-4 border border-blue-700/50 hover:border-yellow-500/50 transition-colors">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Clock className="w-4 h-4 text-yellow-400" />
                                        <span className="text-yellow-400 font-semibold text-sm">Office Hours</span>
                                    </div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between items-center">
                                            <span className="text-blue-200">Monday - Friday</span>
                                            <span className="text-white font-semibold">8:00 AM - 6:00 PM</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-blue-200">Saturday</span>
                                            <span className="text-white font-semibold">9:00 AM - 2:00 PM</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-blue-200">Sunday</span>
                                            <span className="text-white font-semibold">Closed</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Trust Badges */}
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2 text-blue-200 text-sm">
                                        <div className="bg-blue-800/30 rounded-lg p-2">
                                            <Award className="w-4 h-4 text-yellow-400" />
                                        </div>
                                        <span>SAIA Certified</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-blue-200 text-sm">
                                        <div className="bg-blue-800/30 rounded-lg p-2">
                                            <Shield className="w-4 h-4 text-yellow-400" />
                                        </div>
                                        <span>POPIA Compliant</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-blue-200 text-sm">
                                        <div className="bg-blue-800/30 rounded-lg p-2">
                                            <Star className="w-4 h-4 text-yellow-400" />
                                        </div>
                                        <span>5-Star Rated</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Media Section */}
                    <div className="border-t border-blue-800/50 pt-10 pb-8">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            {/* Social Media Links */}
                            <div className="flex items-center gap-4">
                                <span className="text-blue-200 text-sm font-semibold">Follow Us:</span>
                                <div className="flex items-center gap-3">
                                    <a
                                        href="#"
                                        className="bg-blue-800/50 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-yellow-600 hover:text-blue-900 rounded-xl p-3 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
                                        aria-label="Facebook"
                                    >
                                        <Facebook className="h-5 w-5" />
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-blue-800/50 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-yellow-600 hover:text-blue-900 rounded-xl p-3 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
                                        aria-label="Instagram"
                                    >
                                        <Instagram className="h-5 w-5" />
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-blue-800/50 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-yellow-600 hover:text-blue-900 rounded-xl p-3 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
                                        aria-label="Twitter"
                                    >
                                        <Twitter className="h-5 w-5" />
                                    </a>
                                    {/*<a*/}
                                    {/*    href="#"*/}
                                    {/*    className="bg-blue-800/50 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-yellow-600 hover:text-blue-900 rounded-xl p-3 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"*/}
                                    {/*    aria-label="LinkedIn"*/}
                                    {/*>*/}
                                    {/*    <Linkedin className="h-5 w-5" />*/}
                                    {/*</a>*/}
                                    {/*<a*/}
                                    {/*    href="#"*/}
                                    {/*    className="bg-blue-800/50 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-yellow-600 hover:text-blue-900 rounded-xl p-3 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"*/}
                                    {/*    aria-label="YouTube"*/}
                                    {/*>*/}
                                    {/*    <Youtube className="h-5 w-5" />*/}
                                    {/*</a>*/}
                                </div>
                            </div>

                            {/* Call to Action */}
                            <a
                                href="https://iprop.solutions/fastin/properties/for-auction"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-blue-900 px-8 py-3 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                View Current Auctions
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="relative bg-black/40 backdrop-blur-sm py-6 border-t border-blue-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
                        <p className="text-blue-300 text-xs">
                            © 2025 FastIn Property Auctions • 2 Smithfield Way, Longlands Industrial Site, Marondera • VAT: 4320242924
                        </p>

                        <div className="flex items-center gap-6 text-blue-300 text-xs">
                            <div className="flex items-center gap-2 bg-blue-900/90 px-3 py-1.5 rounded-lg">
                                <img
                                    src={zimFlag}
                                    alt="Zimbabwean flag"
                                    className="w-6 h-5 object-cover rounded-sm"
                                />
                                <span className="font-semibold text-sm text-white">
        Proudly Zimbabwean
      </span>
                            </div>
                            <div className="flex items-center gap-1 bg-blue-900/30 px-3 py-1.5 rounded-full">
                                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                                <span className="font-semibold">5-Star Rated</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}