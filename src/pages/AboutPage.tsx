import { useState } from 'react';
import { ChevronDown, Award, Users, Globe, Shield, Star, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  const [expandedSection, setExpandedSection] = useState(null);

  // @ts-ignore
  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const coreValues = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We conduct our business with the highest ethical standards and transparency.",
      color: "text-amber-500"
    },
    {
      icon: Award,
      title: "Dedication",
      description: "We are committed to achieving the best possible outcomes for our clients.",
      color: "text-amber-500"
    },
    {
      icon: Globe,
      title: "Transparency",
      description: "We believe in clear, honest communication throughout the entire process.",
      color: "text-amber-500"
    },
    {
      icon: Star,
      title: "Service Excellence",
      description: "We strive to exceed expectations in every aspect of our service delivery.",
      color: "text-amber-500"
    },
    {
      icon: Users,
      title: "Personalized Attention",
      description: "Every client receives tailored solutions that meet their unique needs.",
      color: "text-amber-500"
    }
  ];

  const services = [
    "Large customer database with pre-approved and cash buyers",
    "Closed boardroom & Onsite Auctions",
    "Private Treaty Sales",
    "Online Auctions: Multi-property, Commercial, Industrial, Retail, Residential, Specialised Properties",
    "National Network of Attorneys and Lawyer Firms",
    "Associated with most major banks and lending establishments",
    "National Network of Auctioneer Consultants & Property Professionals",
    "National Network of Property Maintenance Firms",
    "Bond Origination Service Provider",
    "Property Insurance Service Providers",
    "Comprehensive & Detailed Marketing Campaign",
    "Professional Real Estate Photography & 3D Virtual Tours",
    "Gas & Electrical Compliance Service Providers",
    "Property Evaluations"
  ];

  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <div className="relative">
          <div
              className="relative h-[70vh] bg-cover bg-center flex items-center justify-center overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(30, 58, 138, 0.85), rgba(59, 130, 246, 0.75)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-04%20105055-dQjpw5PzKXRi9wuSmspP7atilCiaDs.png')`
              }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-amber-900/10"></div>
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
              <h1 className="text-6xl md:text-7xl font-light text-white mb-6 tracking-wide">
                Transforming
                <span className="block text-amber-400 font-medium">Real Estate Auctions</span>
              </h1>
              <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
              <p className="text-xl text-blue-100 font-light">
                Bringing fresh innovation to South Africa's property auction industry
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-20">
          <div className="max-w-7xl mx-auto">
            {/* Brand Introduction */}
            <div className="text-center mb-20">
              <h2 className="text-5xl font-light text-blue-900 mb-8">About FastIn Property</h2>
              <div className="w-16 h-1 bg-amber-500 mx-auto mb-12"></div>
            </div>

            {/* Mission Statement */}
            <div className="relative mb-20">
              <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-12 rounded-2xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full -translate-y-32 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-400/5 rounded-full translate-y-16 -translate-x-16"></div>
                <div className="relative z-10">
                  <blockquote className="text-xl md:text-2xl leading-relaxed font-light italic">
                    "We at FastIn Property have identified a need for a more fresh and progressive approach to real estate auctions in South Africa.
                    We are boutique in style, informal yet professional, proud but not arrogant, skilled yet continuously trained, eager yet experienced
                    but not stale, eager to impress, always thrilled at being able to help our clients. We never lose the first day at work excitement."
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Philosophy Section */}
            <div className="mb-20">
              <div className="bg-white rounded-2xl shadow-lg p-12 border-l-4 border-amber-500">
                <p className="text-gray-700 leading-relaxed text-lg md:text-xl font-light">
                  We approach our work with the highest degree of motivation, it's more than a career... it's like our oxygen! We strive to become a trusted and
                  recognisable brand within the Auction Profession. We hope with you as our client, we can achieve this in time. We believe in making decisions in ways to
                  best serve our clients' interest. Not surprisingly this philosophy has enabled us to help more clients and we love it.
                </p>
              </div>
            </div>

            {/* Expandable Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              {/* Company Overview */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div
                    className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleSection('overview')}
                >
                  <h3 className="text-2xl font-semibold">Company Overview</h3>
                  <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${expandedSection === 'overview' ? 'rotate-180' : ''}`} />
                </div>
                <div className={`transition-all duration-300 ${expandedSection === 'overview' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <div className="p-6 space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Established by Dr. William Hunter and his wife Veronique Hunter with a dream of bringing a new and fresh approach to selling real estate via
                      Property Auctions. Our founders are veterans of the local real estate market with more than 20 years of local real estate experience in South
                      Africa and especially KZN, Kwazulu Natal, and having sold thousands of FastIn Property Residential, Commercial and Industrial properties during this time
                      to the Value of a Billion Rand.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Highly trained and qualified they have been owners and principals of several independent Real Estate firms as well as Franchisees of the Aldes Business Broking,
                      Only Rentals and Lew Geffen Sotheby's International Groups. With many industry awards to their names and after travelling extensively abroad studying Real estate
                      Auction practices around the globe, they felt the need to bring a new fresh dynamic to the Local Auction Industry combining South African Auction methods with
                      those of Global leaders in the Auctioneering Business.
                    </p>
                  </div>
                </div>
              </div>

              {/* Why FastIn Property */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div
                    className="bg-gradient-to-r from-amber-600 to-amber-500 text-white p-6 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleSection('why')}
                >
                  <h3 className="text-2xl font-semibold">Why FastIn Property</h3>
                  <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${expandedSection === 'why' ? 'rotate-180' : ''}`} />
                </div>
                <div className={`transition-all duration-300 ${expandedSection === 'why' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <div className="p-6 space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      The old belief that auctions are for sellers in desperate need of a sale has long since passed. In South Africa, auctions are becoming increasingly
                      popular. They are a very effective way to sell your property, as the buying community knows you are committed to making an immediate sale.
                      Almost all property types can be, and are being, sold via auction and auction houses.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      The main component of an auction is that there is a time limit on selling negotiations. This can create more impetus and urgency from prospective buyers
                      if there is a good chance the property is in high demand, which may be a great means of driving up the price.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      We provide the best possible solutions in sales and marketing of assets and with our in depth knowledge of the local markets and our massive
                      database of buyers we are in a unique position to provide a faster more accurate and streamlined process of Auctioning your property.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="mb-20">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-900 to-amber-600 text-white p-8">
                  <h3 className="text-3xl font-semibold mb-4">Service Options & Networking</h3>
                  <p className="text-blue-100 text-lg">
                    The FastIn Property Group offers a comprehensive range of services and nationwide networking which gives properties
                    the paramount exposure and attention in the real estate marketplace.
                  </p>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-semibold text-gray-800 mb-6">Our Services Include:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                          <CheckCircle className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{service}</span>
                        </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div>
              <div className="text-center mb-12">
                <h3 className="text-4xl font-light text-blue-900 mb-4">Core Values</h3>
                <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coreValues.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                      <div key={index} className="group">
                        <div className="bg-white rounded-2xl shadow-lg p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-amber-500">
                          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <h4 className="text-xl font-semibold text-blue-900 mb-4">{value.title}</h4>
                          <p className="text-gray-600 leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}