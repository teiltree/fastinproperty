import {type JSX, useState} from 'react';
import {
    Play,
    ChevronLeft,
    ChevronRight,
    MapPin,
    Bed,
    Bath,
    Square,
    Award,
    Users,
    Shield,
    TrendingUp,
    Home,
    Calendar,
    ArrowRight,
    Sparkles,
    CheckCircle
} from "lucide-react";
import {Link} from "react-router-dom";

interface Property {
    image: string;
    price: string;
    address: string;
    description: string;
    bedrooms: number;
    bathrooms: number;
    size: string;
    type: string;
}

interface Auction {
    image: string;
    title: string;
    subtitle: string;
    buttonText: string;
    date: string;
}

interface Service {
    icon: JSX.Element;
    title: string;
    description: string;
}

interface Testimonial {
    quote: string;
    author: string;
    location: string;
    rating: number;
}

export default function HomePage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const recentlySold: Property[] = [
        // {
        //   image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop&auto=format",
        //   price: "R1,000,000",
        //   address: "14 Fountain Ave, Hutten Heights, Newcastle, KwaZulu-Natal",
        //   description: "Luxurious Family Living in a Prestigious Neighbourhood",
        //   bedrooms: 3,
        //   bathrooms: 2,
        //   size: "1250 m²",
        //   type: "Residential | House",
        // },
    ];

    const currentAuctions: Auction[] = [
        // {
        //   image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=400&fit=crop&auto=format",
        //   title: "August Property Auction",
        //   subtitle: "Premium Properties",
        //   buttonText: "VIEW PROPERTIES",
        //   date: "Aug 15-20, 2025"
        // },
    ];

    const services: Service[] = [
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Buy",
            description: "Search for your dream property on our online catalogue and bid online in real-time with confidence",
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Sell",
            description: "Auction your property online for a hassle-free experience. Our team of professionals handle everything",
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Online",
            description: "View bids on your property live with our secure, transparent online bidding platform",
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Pre-Auction Finance",
            description: "We provide tailored finance solutions for all our auction properties. Contact us for more information.",
        },
    ];

    const testimonials: Testimonial[] = [
        {
            quote: "Our house was sold quickly with awesome, professional and friendly service. We highly recommend choosing this route when selling your house!",
            author: "Chairman Viljoem",
            location: "KwaZulu-Natal",
            rating: 5
        },
        {
            quote: "Fresh new way to sell your property. The online platform made everything so much easier.",
            author: "The House Buyer Company",
            location: "Zimbabwe",
            rating: 5
        },
        {
            quote: "My property was with estate agents for over a year. FastIn Property Auctions sold it in one week. Incredible results!",
            author: "Altoyne Muller",
            location: "Mpumalanga",
            rating: 5
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(recentlySold.length / 4));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + Math.ceil(recentlySold.length / 4)) % Math.ceil(recentlySold.length / 4));
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

            {/* Hero Section - Modernized */}
            <section className="relative h-[700px] bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 z-0">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-900/70"></div>
                    <img
                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&h=900&fit=crop&auto=format"
                        alt="Luxury Property"
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>


                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center text-white">
                    {/* ... rest of your content ... */}
                    <div className="mb-8">
                        <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
                            <Sparkles className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-sm font-semibold">Zimbabwe's Premier Auction Platform</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Welcome to <br />
                            <span className="text-yellow-400">FastIn Property Auctions</span>
                        </h1>
                        <p className="text-2xl mb-4 text-blue-100 font-semibold">Virtual Online Auctioneers</p>
                        <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
                            Buy, sell, and invest in property with confidence through Zimbabwe's most trusted online auction platform.
                        </p>
                    </div>

                    {/* CTA Buttons - Modernized */}
                    <div className="flex flex-col sm:flex-row gap-4 flex-wrap justify-center">
                        <a
                            href="https://iprop.solutions/fastin/properties/for-auction"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-blue-900 px-8 py-4 text-sm font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all uppercase tracking-wide flex items-center justify-center gap-2"
                        >
                            Browse Auctions
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <Link
                            to="/services/sell"
                            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-yellow-400 px-8 py-4 text-sm font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all uppercase tracking-wide"
                        >
                            Sell Your Property
                        </Link>

                        <Link
                            to="/services/buy"
                            className="bg-transparent border-2 border-yellow-400 hover:bg-yellow-400 hover:text-blue-900 text-yellow-400 px-8 py-4 text-sm font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all uppercase tracking-wide"
                        >
                            How to Buy
                        </Link>

                        <Link
                            to="/valuation"
                            className="bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white px-8 py-4 text-sm font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all uppercase tracking-wide"
                        >
                            Free Valuation
                        </Link>
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 right-0 z-0">
                    <svg viewBox="0 0 1440 120" className="w-full h-auto">
                        <path fill="#f9fafb" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                    </svg>
                </div>
            </section>

            {/* Recently Sold Properties Section - With Empty State */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
                            <CheckCircle className="w-5 h-5 text-blue-900" />
                            <span className="text-blue-900 text-sm font-semibold">Success Stories</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Recently Sold Properties</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            See the properties we've successfully sold through our auction platform
                        </p>
                    </div>

                    {recentlySold.length > 0 ? (
                        <div className="relative">
                            {/* Navigation Buttons */}
                            {recentlySold.length > 4 && (
                                <>
                                    <button
                                        onClick={prevSlide}
                                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all z-10 hover:bg-blue-50"
                                    >
                                        <ChevronLeft className="w-6 h-6 text-blue-900" />
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all z-10 hover:bg-blue-50"
                                    >
                                        <ChevronRight className="w-6 h-6 text-blue-900" />
                                    </button>
                                </>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {recentlySold.slice(currentSlide * 4, (currentSlide + 1) * 4).map((property, index) => (
                                    <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
                                        <div className="relative h-64 overflow-hidden">
                                            <img
                                                src={property.image}
                                                alt={property.address}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-xl font-bold text-sm shadow-lg flex items-center gap-2">
                                                    <CheckCircle className="w-4 h-4" />
                                                    SOLD
                                                </div>
                                            </div>
                                            <div className="absolute top-4 right-4">
                                                <div className="bg-blue-900/90 backdrop-blur-sm text-yellow-400 px-4 py-2 rounded-xl font-bold text-lg shadow-lg">
                                                    {property.price}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-start gap-2 mb-3">
                                                <MapPin className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                                                <h3 className="font-bold text-gray-900 text-sm leading-tight">{property.address}</h3>
                                            </div>
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{property.description}</p>
                                            <div className="text-xs text-blue-600 font-semibold mb-4 uppercase tracking-wide">{property.type}</div>
                                            <div className="flex items-center justify-between text-sm text-gray-600 pt-4 border-t border-gray-100">
                                                <div className="flex items-center gap-1">
                                                    <Bed className="w-4 h-4" />
                                                    <span>{property.bedrooms}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Bath className="w-4 h-4" />
                                                    <span>{property.bathrooms}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Square className="w-4 h-4" />
                                                    <span>{property.size}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        // Empty State for Recently Sold
                        <div className="bg-white rounded-3xl shadow-xl p-12 md:p-16 text-center border border-gray-100">
                            <div className="max-w-2xl mx-auto">
                                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Home className="w-12 h-12 text-blue-600" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                                    No Recently Sold Properties Yet
                                </h3>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    We're working hard to bring you successful property sales. Check back soon to see our latest sold properties, or be the first to list your property with us!
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        to="/services/sell"
                                        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-blue-900 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                                    >
                                        List Your Property
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                    <a
                                        href="https://iprop.solutions/fastin/properties/for-auction"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 bg-white border-2 border-blue-200 hover:border-blue-300 text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all"
                                    >
                                        Browse Current Auctions
                                        <ArrowRight className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Current Auctions Section - With Empty State */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-yellow-100 rounded-full px-4 py-2 mb-4">
                            <Calendar className="w-5 h-5 text-yellow-700" />
                            <span className="text-yellow-700 text-sm font-semibold">Live Now</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Current Auctions</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Don't miss out on these exclusive auction opportunities. Bid online in real-time.
                        </p>
                    </div>

                    {currentAuctions.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {currentAuctions.map((auction, index) => (
                                <div key={index} className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                                    <div className="relative h-96">
                                        <img
                                            src={auction.image}
                                            alt={auction.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-900/60 to-transparent"></div>
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                        <div className="mb-3">
                        <span className="inline-flex items-center gap-2 bg-yellow-500 text-blue-900 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide">
                          <Calendar className="w-4 h-4" />
                            {auction.date}
                        </span>
                                        </div>
                                        <h3 className="text-3xl font-bold mb-2">{auction.title}</h3>
                                        <p className="text-blue-200 mb-6 text-lg">{auction.subtitle}</p>
                                        <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-blue-900 px-8 py-3 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
                                            {auction.buttonText}
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        // Empty State for Current Auctions
                        <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-3xl shadow-xl p-12 md:p-16 text-center border-2 border-yellow-200">
                            <div className="max-w-2xl mx-auto">
                                <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Calendar className="w-12 h-12 text-blue-900" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                                    No Active Auctions at the Moment
                                </h3>
                                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                    We're preparing exciting new property auctions for you. Subscribe to our auction alerts to be the first to know when new properties are listed!
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        to="/services/alerts"
                                        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-blue-900 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                                    >
                                        Subscribe to Alerts
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                    <Link
                                        to="/services/sell"
                                        className="inline-flex items-center justify-center gap-2 bg-white border-2 border-yellow-400 hover:bg-yellow-50 text-blue-900 px-8 py-4 rounded-xl font-bold transition-all"
                                    >
                                        List Your Property
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                                <div className="mt-8 pt-8 border-t border-yellow-300">
                                    <p className="text-sm text-gray-600 mb-4">Or contact us directly:</p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                                        <a href="tel:+263784086388" className="text-blue-900 font-semibold hover:text-blue-700">
                                            📞 +263 784 086 388
                                        </a>
                                        <a href="mailto:info@fastinproperty.co.zw" className="text-blue-900 font-semibold hover:text-blue-700">
                                            ✉️ info@fastinproperty.co.zw
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Services Section - Modernized */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
                            <Sparkles className="w-5 h-5 text-blue-900" />
                            <span className="text-blue-900 text-sm font-semibold">What We Offer</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Our Services</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Comprehensive auction services designed to meet all your property needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl flex items-center justify-center mb-6 text-yellow-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How Online Auctions Work - Modernized */}
            <section className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center justify-center bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 text-yellow-400 rounded-full p-6 mb-8 shadow-2xl">
                        <Play className="w-12 h-12" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How Online Auctions Work</h2>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Learn how FastIn Property Auctions's virtual auctions make buying and selling simple, transparent, and secure. From registering and browsing properties to bidding online in real-time and closing the deal — we guide you through every step.
                    </p>
                    <Link
                        to="/about/online-bidding"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-blue-900 px-10 py-5 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all uppercase tracking-wide text-lg"
                    >
                        Explore Online Bidding
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                </div>
            </section>

            {/* Testimonials Section - Modernized */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-yellow-100 rounded-full px-4 py-2 mb-4">
                            <Users className="w-5 h-5 text-yellow-700" />
                            <span className="text-yellow-700 text-sm font-semibold">Client Reviews</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">What Our Clients Say</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full mb-6"></div>
                        <p className="text-xl text-gray-600">Real experiences from satisfied customers</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
                                <div className="flex mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} className="text-yellow-500 text-2xl">★</span>
                                    ))}
                                </div>
                                <blockquote className="text-gray-700 mb-6 leading-relaxed text-lg">
                                    "{testimonial.quote}"
                                </blockquote>
                                <div className="border-t border-blue-200 pt-4">
                                    <cite className="text-blue-900 font-bold block text-lg not-italic">{testimonial.author}</cite>
                                    <span className="text-gray-500">{testimonial.location}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}