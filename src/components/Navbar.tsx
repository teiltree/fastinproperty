import { useState } from 'react';
import { ChevronDown, Menu, X, Phone, Mail, MapPin, User, ExternalLink, Smartphone } from "lucide-react";
import { useLocation } from "react-router-dom";


export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");

  // Mock location for demo - in real app this would come from react-router-dom
  const location = useLocation();


  const navItems = [
    { name: "HOME", href: "/" },
    { name: "CAREERS", href: "/careers" },
    { name: "FRANCHISING", href: "/franchising" },
    { name: "CONTACT", href: "/contact" },
  ];

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
      name: "Online Bidding",
      href: "/about/online-bidding",
      description: "How to bid online, features and payments",
      icon: "💻"
    },
    // {
    //   name: "Partners",
    //   href: "/about/partners",
    //   description: "Dominant Web Platforms, Law firms, and institutions",
    //   icon: "🤝"
    // },
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

  // const toggleDropdown = (dropdown) => {
  //   setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  // };
  //
  // const closeDropdowns = () => {
  //   setActiveDropdown(null);
  // };

  return (
      <>
        {/* Top Contact Bar */}
        <div className="bg-blue-900 text-white py-2 hidden md:block">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-yellow-400" />
                  <span>+263784086388 / +263719086388</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-yellow-400" />
                  <span>info@fastinproperty.co.zw</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-yellow-400" />
                  <span>2 Smithfield Way, Longlands Industrial Site, Marondera</span>
                </div>
              </div>
              <div className="text-blue-200">
                🕒 Auction Hours: Mon-Fri 8:00 AM - 6:00 PM
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-yellow-400">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <a href="/" className="flex items-center space-x-3 group">
                <div className="flex flex-col">
                  <img className="w-auto h-16 rounded-lg" src="https://i.postimg.cc/g0pZvzDg/main.jpg" alt="Logo"/>
                </div>
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                {/* Home */}
                <a
                    href="/"
                    className={`relative text-sm font-semibold transition-all duration-300 hover:text-blue-800 group ${
                        location.pathname === "/"
                            ? "text-blue-800"
                            : "text-gray-700"
                    }`}
                >
                  HOME
                  {location.pathname === "/" && (
                      <div className="absolute -bottom-6 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"></div>
                  )}
                  <div className="absolute -bottom-6 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </a>

                {/* Services Dropdown */}
                <div className="relative">
                  <button
                      onMouseEnter={() => setActiveDropdown('services')}
                      className={`text-sm font-semibold transition-all duration-300 hover:text-blue-800 flex items-center gap-2 group ${
                          location.pathname.startsWith("/services")
                              ? "text-blue-800"
                              : "text-gray-700"
                      }`}
                  >
                    SERVICES
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === 'services' ? 'rotate-180' : ''
                    }`} />
                    <div className="absolute -bottom-6 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </button>

                  {/* Services Dropdown Menu */}
                  <div
                      className={`absolute top-full left-0 mt-2 w-96 bg-white border border-gray-100 rounded-2xl shadow-2xl transition-all duration-300 ${
                          activeDropdown === 'services'
                              ? 'opacity-100 visible translate-y-0'
                              : 'opacity-0 invisible -translate-y-2'
                      }`}
                      onMouseEnter={() => setActiveDropdown('services')}
                      onMouseLeave={() => setActiveDropdown("")}
                  >
                    <div className="absolute -top-2 left-8 w-4 h-4 bg-white border-l border-t border-gray-100 transform rotate-45"></div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-blue-900 mb-4 border-b border-gray-100 pb-2">
                        Our Services
                      </h3>
                      <div className="grid gap-2">
                        {serviceItems.map((service) => (
                            <a
                                key={service.name}
                                href={service.href}
                                className="flex items-start space-x-3 p-3 rounded-xl hover:bg-blue-50 transition-all duration-200 group"
                            >
                          <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                            {service.icon}
                          </span>
                              <div>
                                <div className="font-semibold text-blue-900 text-sm mb-1 group-hover:text-blue-800">
                                  {service.name}
                                </div>
                                <div className="text-xs text-gray-600 leading-relaxed">
                                  {service.description}
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
                      className={`text-sm font-semibold transition-all duration-300 hover:text-blue-800 flex items-center gap-2 group ${
                          location.pathname.startsWith("/about")
                              ? "text-blue-800"
                              : "text-gray-700"
                      }`}
                  >
                    ABOUT
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === 'about' ? 'rotate-180' : ''
                    }`} />
                    <div className="absolute -bottom-6 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </button>

                  {/* About Dropdown Menu */}
                  <div
                      className={`absolute top-full left-0 mt-2 w-96 bg-white border border-gray-100 rounded-2xl shadow-2xl transition-all duration-300 ${
                          activeDropdown === 'about'
                              ? 'opacity-100 visible translate-y-0'
                              : 'opacity-0 invisible -translate-y-2'
                      }`}
                      onMouseEnter={() => setActiveDropdown('about')}
                      onMouseLeave={() => setActiveDropdown("")}
                  >
                    <div className="absolute -top-2 left-8 w-4 h-4 bg-white border-l border-t border-gray-100 transform rotate-45"></div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-blue-900 mb-4 border-b border-gray-100 pb-2">
                        About Fastin Property Auctions
                      </h3>
                      <div className="grid gap-2">
                        {aboutItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="flex items-start space-x-3 p-3 rounded-xl hover:bg-blue-50 transition-all duration-200 group"
                            >
                          <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                            {item.icon}
                          </span>
                              <div>
                                <div className="font-semibold text-blue-900 text-sm mb-1 group-hover:text-blue-800">
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

                {/* Other Nav Items */}
                {navItems.slice(1, -1).map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={`relative text-sm font-semibold transition-all duration-300 hover:text-blue-800 group ${
                            location.pathname === item.href
                                ? "text-blue-800"
                                : "text-gray-700"
                        }`}
                    >
                      {item.name}
                      {location.pathname === item.href && (
                          <div className="absolute -bottom-6 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"></div>
                      )}
                      <div className="absolute -bottom-6 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </a>
                ))}

                <a
                    href="/contact"
                    className={`relative text-sm font-semibold transition-all duration-300 hover:text-blue-800 group ${
                        location.pathname === "/contact"
                            ? "text-blue-800"
                            : "text-gray-700"
                    }`}
                >
                  CONTACT
                  {location.pathname === "/contact" && (
                      <div className="absolute -bottom-6 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"></div>
                  )}
                  <div className="absolute -bottom-6 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </a>
              </nav>

              {/* Online Bidding Menu */}
              <div className="hidden lg:flex items-center space-x-4">
                <div className="relative group">
                  <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg">
                    <User className="w-4 h-4" />
                    <span>ONLINE BIDDING</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {/* Online Bidding Dropdown */}
                  <div className="absolute top-full right-0 mt-2 w-64 bg-white border border-gray-100 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="absolute -top-2 right-6 w-4 h-4 bg-white border-l border-t border-gray-100 transform rotate-45"></div>
                    <div className="p-4">
                      <div className="space-y-2">
                        <a href="https://app.fastinproperty.co.zw" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                          <ExternalLink className="w-4 h-4 text-blue-600" />
                          <span className="font-medium text-gray-700">app.fastinproperty.co.zw</span>
                        </a>
                        <a href="https://app.fastinproperty.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                          <ExternalLink className="w-4 h-4 text-blue-600" />
                          <span className="font-medium text-gray-700">app.fastinproperty.com</span>
                        </a>
                        <hr className="border-gray-100" />
                        <a href="https://qrco.de/ABC_Auctions" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                          <Smartphone className="w-4 h-4 text-blue-600" />
                          <span className="font-medium text-gray-700">Get App</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Mobile Menu Button */}
              <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden p-2 rounded-lg bg-blue-50 text-blue-800 hover:bg-blue-100 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
              isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="bg-blue-50 border-t border-blue-100">
              <div className="container mx-auto px-4 py-6 space-y-4">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="block py-3 px-4 rounded-lg bg-white text-blue-900 font-semibold hover:bg-blue-100 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                ))}

                <div className="pt-4 space-y-3">
                  <div className="text-xs uppercase text-gray-500 font-semibold px-1">Online Bidding</div>
                  <a href="https://app.fastinproperty.co.zw" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-between bg-white text-blue-900 py-3 px-4 rounded-lg font-semibold hover:bg-blue-100 transition-colors">
                    <span>app.fastinproperty.co.zw</span>
                    <ExternalLink className="w-4 h-4 text-blue-600" />
                  </a>
                  <a href="https://app.fastinproperty.com" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-between bg-white text-blue-900 py-3 px-4 rounded-lg font-semibold hover:bg-blue-100 transition-colors">
                    <span>app.fastinproperty.com</span>
                    <ExternalLink className="w-4 h-4 text-blue-600" />
                  </a>
                  <a href="https://qrco.de/ABC_Auctions" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-between bg-white text-blue-900 py-3 px-4 rounded-lg font-semibold hover:bg-blue-100 transition-colors">
                    <span>Start Bidding – Get App</span>
                    <Smartphone className="w-4 h-4 text-blue-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
  );
}