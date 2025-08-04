import { useState } from 'react';
import { Search, Play, ChevronLeft, ChevronRight, MapPin, Bed, Bath, Square, Award, Users, Shield, TrendingUp } from "lucide-react";

export default function HomePage() {
  // @ts-ignore
  const [currentSlide, setCurrentSlide] = useState(0);

  const recentlySold = [
    {
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop&auto=format",
      price: "R1,000,000",
      address: "14 Fountain Ave, Hutten Heights, Newcastle, KwaZulu-Natal",
      description: "Luxurious Family Living in a Prestigious Neighbourhood",
      bedrooms: 3,
      bathrooms: 2,
      size: "1250 m²",
      type: "Residential | House",
    },
    {
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop&auto=format",
      price: "R2,550,000",
      address: "51 Princeps Crescent, Garsfontein, Pretoria, Gauteng",
      description: "Exceptional 4 Bedroom Home in Garsfontein",
      bedrooms: 4,
      bathrooms: 3,
      size: "851 m²",
      type: "Residential | House",
    },
    {
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop&auto=format",
      price: "R1,600,000",
      address: "26 Kabeljon Street, Kleinbaai, Gansbaai, Western Cape",
      description: "5 Bedroom House on Auction in Gansbaai",
      bedrooms: 5,
      bathrooms: 3,
      size: "900 m²",
      type: "Residential | House",
    },
    {
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop&auto=format",
      price: "R7,800,000",
      address: "134 Rivierpad Street, Buffelsdrift AH, Wonderboom, Gauteng",
      description: "Discover an unparalleled lifestyle - Don't miss out!",
      bedrooms: 6,
      bathrooms: 4,
      size: "3000 m²",
      type: "Residential | House",
    },
  ];

  const currentAuctions = [
    {
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=400&fit=crop&auto=format",
      title: "August Property Auction",
      subtitle: "Premium Properties",
      buttonText: "VIEW PROPERTIES",
      date: "Aug 15-20, 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&h=400&fit=crop&auto=format",
      title: "August Vacant Land Auction",
      subtitle: "Development Opportunities",
      buttonText: "VIEW PROPERTIES",
      date: "Aug 25-28, 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=500&h=400&fit=crop&auto=format",
      title: "Colenso Auction 31Jul - 1Aug",
      subtitle: "Special Collection",
      buttonText: "VIEW PROPERTIES",
      date: "Jul 31 - Aug 1, 2025"
    },
  ];

  const services = [
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

  const testimonials = [
    {
      quote: "Our house was sold quickly with awesome, professional and friendly service. We highly recommend choosing this route when selling your house!",
      author: "Chairman Viljoem",
      location: "KwaZulu-Natal",
      rating: 5
    },
    {
      quote: "Fresh new way to sell your property. The online platform made everything so much easier.",
      author: "The House Buyer Company",
      location: "South Africa",
      rating: 5
    },
    {
      quote: "My property was with estate agents for over a year. FastIn Property sold it in one week. Incredible results!",
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
      <div className="min-h-screen bg-gray-50">

        {/* Hero Section */}
        <section className="relative h-[700px] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60"></div>
            <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&h=900&fit=crop&auto=format"
                alt="Luxury Property"
                className="w-full h-full object-cover opacity-30"
            />
          </div>

          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
            <div className="mb-8">
              <h1 className="text-6xl md:text-7xl font-light mb-6 tracking-tight">
                Welcome to <span className="text-yellow-400 font-semibold">FastIn Property</span>
              </h1>
              <p className="text-2xl mb-4 text-blue-100 font-light">Virtual Online Auctioneers</p>
              <p className="text-lg text-blue-200 max-w-2xl mx-auto">
                South Africa's premier online property auction platform. Buy, sell, and invest with confidence.
              </p>
            </div>

            {/* Enhanced Search Bar */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 mb-12 max-w-4xl w-full shadow-2xl">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex-1 min-w-0">
                  <select className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-700 font-medium focus:outline-none focus:border-blue-500 transition-colors bg-white">
                    <option>Property Type</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Vacant Land</option>
                    <option>Industrial</option>
                  </select>
                </div>
                <div className="flex-2 min-w-0 w-full md:w-auto">
                  <input
                      placeholder="Enter location, suburb, or property details..."
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-700 placeholder-gray-500 font-medium focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <button className="bg-gradient-to-r from-blue-800 to-blue-700 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-3 rounded-xl flex items-center gap-3 font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  <Search className="w-5 h-5" />
                  SEARCH PROPERTIES
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4">
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-blue-900 px-8 py-4 text-sm font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all uppercase tracking-wide">
                Make an Offer Today
              </button>
              <button className="bg-transparent border-2 border-yellow-400 hover:bg-yellow-400 text-yellow-400 hover:text-blue-900 px-8 py-4 text-sm font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all uppercase tracking-wide">
                List Your Property
              </button>
              <button className="bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-yellow-400 px-8 py-4 text-sm font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all uppercase tracking-wide">
                Browse Auctions
              </button>
            </div>
          </div>
        </section>

        {/* Recently Sold Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-16">
              <div>
                <h2 className="text-4xl font-light text-blue-900 mb-2">Recently Sold</h2>
                <p className="text-gray-600 text-lg">Success stories from our recent auctions</p>
              </div>
              <div className="flex gap-3">
                <button
                    onClick={prevSlide}
                    className="bg-blue-900 hover:bg-blue-800 text-yellow-400 p-3 rounded-full shadow-lg transition-all transform hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="bg-blue-900 hover:bg-blue-800 text-yellow-400 p-3 rounded-full shadow-lg transition-all transform hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {recentlySold.map((property, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative">
                      <img
                          src={property.image}
                          alt={property.address}
                          className="w-full h-56 object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        SOLD
                      </div>
                      <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-yellow-400 px-4 py-2 rounded-full text-lg font-bold shadow-lg">
                        {property.price}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start gap-2 mb-3">
                        <MapPin className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <h3 className="font-semibold text-gray-900 text-sm leading-tight">{property.address}</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{property.description}</p>
                      <div className="text-xs text-blue-600 font-medium mb-4 uppercase tracking-wide">{property.type}</div>
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
        </section>

        {/* Current Auctions Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-blue-900 mb-4">Current Auctions</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Don't miss out on these exclusive auction opportunities. Bid online in real-time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {currentAuctions.map((auction, index) => (
                  <div key={index} className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                    <div className="relative h-80">
                      <img
                          src={auction.image}
                          alt={auction.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-800/50 to-transparent"></div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <div className="mb-2">
                    <span className="inline-block bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                      {auction.date}
                    </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{auction.title}</h3>
                      <p className="text-blue-200 mb-6">{auction.subtitle}</p>
                      <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg">
                        {auction.buttonText}
                      </button>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-blue-900 mb-4">Our Services</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Comprehensive auction services designed to meet all your property needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                  <div key={index} className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-6 text-yellow-400 group-hover:shadow-xl transition-all">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-blue-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learn More Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-400 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-yellow-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="container mx-auto px-4 text-center relative">
            <button className="bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-400 rounded-full p-8 mb-8 transition-all transform hover:scale-110 shadow-2xl backdrop-blur-sm">
              <Play className="w-12 h-12" />
            </button>
            <h2 className="text-3xl font-light text-white mb-4">Learn How It Works</h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Discover the simple steps to successful online property auctions
            </p>
          </div>
        </section>

        {/* How Online Auctions Work */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-6 mb-12">
              <h2 className="text-3xl font-semibold text-blue-900">How Online Auctions Work</h2>
              <button className="bg-blue-900 hover:bg-blue-800 text-yellow-400 rounded-full p-4 transition-all transform hover:scale-110 shadow-lg">
                <Play className="w-8 h-8" />
              </button>
            </div>

            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-blue-900 px-10 py-4 rounded-xl font-bold shadow-lg transform hover:scale-105 transition-all uppercase tracking-wide">
              Meet the Team
            </button>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-blue-900 mb-4">What Our Clients Say</h2>
              <p className="text-gray-600 text-lg">Real experiences from satisfied customers</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>
                    <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="border-t border-gray-100 pt-4">
                      <cite className="text-blue-900 font-semibold block">{testimonial.author}</cite>
                      <span className="text-gray-500 text-sm">{testimonial.location}</span>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

      </div>
  );
}