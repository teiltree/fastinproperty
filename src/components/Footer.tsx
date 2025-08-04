import { useState } from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin, Clock, Shield, Award, Send, CheckCircle } from "lucide-react";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  // @ts-ignore
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && name) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
        setName('');
      }, 3000);
    }
  };

  const regionalOffices = [
    {
      region: "Gauteng",
      city: "Centurion",
      province: "Gauteng",
      phones: ["+27 (0) 74 475 7266", "+27 (0) 83 749 1470"],
      email: "gauteng@fastinproperty.co.za",
      manager: "John Smith"
    },
    {
      region: "KwaZulu-Natal",
      city: "Newcastle",
      province: "KwaZulu-Natal",
      phones: ["+27 (0) 81 919 2684", "+27 (0) 83 749 1470"],
      email: "kzn@fastinproperty.co.za",
      manager: "Angela Johnson"
    },
    {
      region: "Free State",
      city: "Bloemfontein",
      province: "Free State",
      phones: ["+27 (0) 82 412 3710", "+27 (0) 83 749 1470"],
      email: "freestate@fastinproperty.co.za",
      manager: "William Brown"
    },
    {
      region: "Mpumalanga",
      city: "Nelspruit",
      province: "Mpumalanga",
      phones: ["+27 (0) 83 749 1470", "+27 (0) 82 412 3710"],
      email: "mpumalanga@fastinproperty.co.za",
      manager: "Sarah Wilson"
    },
    {
      region: "Western Cape",
      city: "Cape Town",
      province: "Western Cape",
      phones: ["+27 (0) 83 749 1470", "+27 (0) 82 412 3710"],
      email: "westerncape@fastinproperty.co.za",
      manager: "Michael Davis"
    },
  ];

  const partners = [
    { name: "SAIA", logo: "🏛️", type: "Association" },
    { name: "PPRA", logo: "📋", type: "Regulation" },
    { name: "Property24", logo: "🏠", type: "Platform" },
    { name: "Private Property", logo: "🔑", type: "Portal" },
    { name: "OLX", logo: "💼", type: "Marketplace" },
    { name: "MyProperty", logo: "📱", type: "Digital" }
  ];

  const quickLinks = [
    { name: "Current Auctions", href: "/auctions" },
    { name: "Property Search", href: "/search" },
    { name: "Sell With Us", href: "/sell" },
    { name: "Finance Options", href: "/finance" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Success Stories", href: "/testimonials" }
  ];

  const legalLinks = [
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "POPIA Compliance", href: "/popia" },
    { name: "Auction Rules", href: "/rules" },
    { name: "Dispute Resolution", href: "/disputes" },
    { name: "Registration", href: "/register" }
  ];

  return (
      <footer className="bg-gradient-to-b from-blue-900 to-blue-950">
        {/* Newsletter Subscription Section */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-blue-900">
                  <h2 className="text-4xl font-bold mb-4">Never Miss an Auction</h2>
                  <p className="text-xl mb-6 opacity-90">
                    Get exclusive alerts for premium properties and upcoming auctions delivered straight to your inbox.
                  </p>
                  <div className="flex items-center space-x-4 text-blue-800">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-5 h-5" />
                      <span className="font-medium">Secure & Private</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5" />
                      <span className="font-medium">Real-time Alerts</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  {!subscribed ? (
                      <form onSubmit={handleSubscribe} className="space-y-6">
                        <h3 className="text-2xl font-bold text-blue-900 mb-6">Subscribe for Free</h3>

                        <div>
                          <label className="block text-sm font-semibold text-blue-900 mb-2">
                            Full Name *
                          </label>
                          <input
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Enter your full name"
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors font-medium"
                              required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-blue-900 mb-2">
                            Email Address *
                          </label>
                          <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Enter your email address"
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors font-medium"
                              required
                          />
                          <p className="text-xs text-gray-600 mt-2">
                            We respect your privacy. Unsubscribe anytime with one click.
                          </p>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                        >
                          <Send className="w-5 h-5" />
                          <span>SUBSCRIBE NOW</span>
                        </button>
                      </form>
                  ) : (
                      <div className="text-center py-8">
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-blue-900 mb-2">Thank You!</h3>
                        <p className="text-gray-600">You've successfully subscribed to our auction alerts.</p>
                      </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <div className="flex items-center space-x-3 mb-6">
                  <div>
                    <img className="w-auto h-16 rounded-lg" src="https://i.postimg.cc/d08KpBx9/logo.png" alt="Logo"/>
                  </div>
                </div>

                <p className="text-blue-200 mb-6 leading-relaxed">
                  South Africa's premier online property auction platform, connecting buyers and sellers with transparency, trust, and innovation since 1992.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-yellow-400" />
                    <span>+27 11 123 4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-yellow-400" />
                    <span>info@fastinproperty.co.za</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-yellow-400" />
                    <span>Centurion, Gauteng, South Africa</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-xl font-bold mb-6 text-yellow-400">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                      <li key={link.name}>
                        <a
                            href={link.href}
                            className="text-blue-200 hover:text-yellow-400 transition-colors flex items-center space-x-2 group"
                        >
                          <span className="w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                          <span>{link.name}</span>
                        </a>
                      </li>
                  ))}
                </ul>
              </div>

              {/* Legal & Support */}
              <div>
                <h4 className="text-xl font-bold mb-6 text-yellow-400">Legal & Support</h4>
                <ul className="space-y-3">
                  {legalLinks.map((link) => (
                      <li key={link.name}>
                        <a
                            href={link.href}
                            className="text-blue-200 hover:text-yellow-400 transition-colors flex items-center space-x-2 group"
                        >
                          <span className="w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                          <span>{link.name}</span>
                        </a>
                      </li>
                  ))}
                </ul>
              </div>

              {/* Business Hours & Stats */}
              <div>
                <h4 className="text-xl font-bold mb-6 text-yellow-400">Business Hours</h4>
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between">
                    <span className="text-blue-200">Monday - Friday</span>
                    <span className="text-white font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200">Saturday</span>
                    <span className="text-white font-semibold">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200">Sunday</span>
                    <span className="text-white font-semibold">Closed</span>
                  </div>
                </div>

                <div className="bg-blue-800/50 rounded-xl p-4 backdrop-blur-sm">
                  <h5 className="font-bold text-yellow-400 mb-3">Our Impact</h5>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">5000+</div>
                      <div className="text-xs text-blue-300">Properties Sold</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">R2.5B+</div>
                      <div className="text-xs text-blue-300">Value Transacted</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Offices */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-yellow-400 mb-8 text-center">Regional Offices</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {regionalOffices.map((office) => (
                    <div key={office.region} className="bg-blue-800/30 rounded-xl p-6 backdrop-blur-sm hover:bg-blue-800/50 transition-all">
                      <h4 className="font-bold text-yellow-400 text-lg mb-2">{office.region}</h4>
                      <div className="space-y-2 text-sm text-blue-200">
                        <p className="font-semibold text-white">{office.city}</p>
                        <p>{office.province}</p>
                        <div className="space-y-1">
                          {office.phones.map((phone, index) => (
                              <p key={index} className="flex items-center space-x-2">
                                <Phone className="w-3 h-3" />
                                <span>{phone}</span>
                              </p>
                          ))}
                        </div>
                        <p className="flex items-center space-x-2">
                          <Mail className="w-3 h-3" />
                          <span className="break-all">{office.email}</span>
                        </p>
                        <p className="text-yellow-300 font-medium mt-3">{office.manager}</p>
                      </div>
                    </div>
                ))}
              </div>
            </div>

            {/* Partners Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-yellow-400 mb-8 text-center">Trusted Partners</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {partners.map((partner) => (
                    <div key={partner.name} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all group">
                      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                        {partner.logo}
                      </div>
                      <h4 className="font-bold text-white mb-1">{partner.name}</h4>
                      <p className="text-xs text-blue-300">{partner.type}</p>
                    </div>
                ))}
              </div>
            </div>

            {/* Social Media & Awards */}
            <div className="flex flex-col md:flex-row items-center justify-between border-t border-blue-800 pt-8">
              <div className="flex items-center space-x-6 mb-6 md:mb-0">
                <div className="flex items-center space-x-4">
                  <Award className="w-6 h-6 text-yellow-400" />
                  <span className="text-blue-200">SAIA Certified Auctioneers</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Shield className="w-6 h-6 text-yellow-400" />
                  <span className="text-blue-200">POPIA Compliant</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-blue-200 mr-2">Follow Us:</span>
                <a href="#" className="bg-blue-800 hover:bg-yellow-400 hover:text-blue-900 rounded-full p-3 transition-all transform hover:scale-110">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-blue-800 hover:bg-yellow-400 hover:text-blue-900 rounded-full p-3 transition-all transform hover:scale-110">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-blue-800 hover:bg-yellow-400 hover:text-blue-900 rounded-full p-3 transition-all transform hover:scale-110">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-blue-800 hover:bg-yellow-400 hover:text-blue-900 rounded-full p-3 transition-all transform hover:scale-110">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="bg-blue-800 hover:bg-yellow-400 hover:text-blue-900 rounded-full p-3 transition-all transform hover:scale-110">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="bg-blue-950 py-6 border-t border-blue-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
              <p className="text-blue-300 text-sm mb-4 md:mb-0">
                © 2025 FastIn Property • Newcastle Real Estate CC trading as FastIn Property CK 1992/024823/23 • VAT: 4320242924
              </p>
              <div className="flex items-center space-x-6 text-blue-300 text-sm">
                <span>🏆 Est. 1992</span>
                <span>🇿🇦 Proudly South African</span>
                <span>⭐ 5-Star Rated</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}