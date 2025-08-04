import {Bath, Bed, ChevronLeft, ChevronRight, MapPin, Square, Bell, Mail, Target, TrendingUp} from "lucide-react";
import {useState} from "react";

export default function AlertsPage() {
  // @ts-ignore
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(recentlySold.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(recentlySold.length / 4)) % Math.ceil(recentlySold.length / 4));
  };

  const handleSubscribe = () => {
    // Handle subscription logic
    console.log('Subscribing:', { email, location });
  };

  return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative container mx-auto px-4 py-20">
            <div className="text-center">
              <div className="inline-flex items-center bg-yellow-500 text-blue-900 px-6 py-3 rounded-full text-sm font-bold mb-8">
                <Bell className="w-5 h-5 mr-2" />
                STAY INFORMED
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
                AUCTION
                <span className="block text-yellow-500">ALERTS</span>
              </h1>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto font-light">
                Never Miss Your Perfect Property Investment Opportunity
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">

            {/* Main Alerts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <div className="relative">
                  <div className="absolute -top-4 -right-4 w-full h-full bg-yellow-500 rounded-2xl opacity-20"></div>
                  <img
                      src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&h=900&fit=crop&auto=format"
                      alt="Auction Alerts - Stay informed about property opportunities"
                      className="relative w-full rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                  />
                </div>
              </div>

              <div>
                <div className="inline-flex items-center bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  INTELLIGENT NOTIFICATIONS
                </div>

                <h2 className="text-4xl font-bold text-blue-900 mb-6 leading-tight">
                  Never Miss an
                  <span className="text-yellow-600"> Opportunity</span>
                </h2>

                <div className="space-y-6 text-lg text-gray-700 mb-8">
                  <p className="leading-relaxed">
                    We send out <strong className="text-blue-900">monthly notifications</strong> to our database of investors
                    to notify them of auctions in their preferred areas. Join thousands of smart investors who stay ahead
                    of the market.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                    <p className="leading-relaxed">
                      <strong className="text-blue-900">Sign up today</strong> and get personalized alerts for properties
                      that match your investment criteria, location preferences, and budget range.
                    </p>
                  </div>
                </div>

                {/* Enhanced Sign Up Form */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-blue-900">Get Auction Alerts</h3>
                      <p className="text-gray-600">Join 5,000+ investors already subscribed</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="relative">
                      <input
                          placeholder="Enter your email address"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-20 transition-colors"
                      />
                    </div>
                    <div className="relative">
                      <input
                          placeholder="Preferred location (e.g., Gauteng, Western Cape)"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-20 transition-colors"
                      />
                    </div>
                    <button
                        onClick={handleSubscribe}
                        className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-blue-900 font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Subscribe to Alerts
                    </button>

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100 text-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-900">5K+</div>
                        <div className="text-xs text-gray-600">Active Subscribers</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-900">Monthly</div>
                        <div className="text-xs text-gray-600">Alert Frequency</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-900">Free</div>
                        <div className="text-xs text-gray-600">Always</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Alert Benefits */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-blue-900 mb-4">Why Choose Our Alerts?</h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Stay ahead of the competition with our comprehensive notification system
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-900 to-blue-700"></div>
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-8 h-8 text-blue-900" />
                    </div>
                    <h4 className="text-2xl font-bold text-blue-900 mb-4">Targeted Alerts</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Receive notifications only for properties that match your specific location and investment criteria
                    </p>
                  </div>
                </div>

                <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-500 to-yellow-400"></div>
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-blue-900 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Bell className="w-8 h-8 text-yellow-500" />
                    </div>
                    <h4 className="text-2xl font-bold text-blue-900 mb-4">Early Access</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Be among the first to know about new auction listings before they're widely advertised
                    </p>
                  </div>
                </div>

                <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-700 to-yellow-500"></div>
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-8 h-8 text-blue-900" />
                    </div>
                    <h4 className="text-2xl font-bold text-blue-900 mb-4">Market Insights</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Get detailed property information, market analysis, and investment potential with each alert
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recently Sold Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-16">
              <div>
                <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  SUCCESS STORIES
                </div>
                <h2 className="text-4xl font-bold text-blue-900 mb-2">Recently Sold</h2>
                <p className="text-gray-600 text-lg">Success stories from our recent auctions</p>
              </div>
              <div className="flex gap-3">
                <button
                    onClick={prevSlide}
                    className="bg-blue-900 hover:bg-blue-800 text-yellow-400 p-4 rounded-full shadow-lg transition-all transform hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="bg-blue-900 hover:bg-blue-800 text-yellow-400 p-4 rounded-full shadow-lg transition-all transform hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {recentlySold.map((property, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div className="relative">
                      <img
                          src={property.image}
                          alt={property.address}
                          className="w-full h-56 object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        SOLD
                      </div>
                      <div className="absolute top-4 right-4 bg-blue-900/90 backdrop-blur-sm text-yellow-400 px-4 py-2 rounded-full text-lg font-bold shadow-lg">
                        {property.price}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start gap-2 mb-3">
                        <MapPin className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <h3 className="font-semibold text-gray-900 text-sm leading-tight">{property.address}</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{property.description}</p>
                      <div className="text-xs text-blue-600 font-medium mb-4 uppercase tracking-wide bg-blue-50 px-3 py-1 rounded-full inline-block">
                        {property.type}
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-1">
                          <Bed className="w-4 h-4 text-blue-600" />
                          <span>{property.bedrooms}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Bath className="w-4 h-4 text-blue-600" />
                          <span>{property.bathrooms}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Square className="w-4 h-4 text-blue-600" />
                          <span>{property.size}</span>
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-16">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Receiving Alerts?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join smart investors who never miss out on great property opportunities
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-lg transition-colors duration-300 text-lg">
              Subscribe Now - It's Free
            </button>
          </div>
        </div>
      </div>
  )
}