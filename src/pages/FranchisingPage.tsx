import { useState } from 'react'

export default function FranchisingPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    emailAddress: '',
    preferredArea: ''
  })

  // @ts-ignore
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // @ts-ignore
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>

          {/* Animated background elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-yellow-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>

          <div className="relative min-h-[70vh] flex items-center justify-center px-4">
            <div className="text-center text-white max-w-4xl mx-auto">
              <div className="inline-block px-4 py-2 bg-yellow-500/20 rounded-full text-yellow-300 text-sm font-medium mb-6 border border-yellow-500/30">
                🏆 Zimbabwe's Leading Online Auction Platform
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Become an Online
                <span className="block text-yellow-400">Auction Pioneer</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Secure your virtual license and join the real estate revolution
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  Start Your Journey
                </button>
                <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-20">
          <div className="max-w-7xl mx-auto">
            {/* Alert Banner */}
            <div className="relative mb-20">
              <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white rounded-2xl p-8 shadow-2xl border border-blue-700/50 backdrop-blur-sm">
                <div className="absolute -top-4 left-8 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">!</span>
                </div>
                <p className="text-lg md:text-xl leading-relaxed text-center font-medium">
                  Don't miss out on the new wave of real estate professionals. Online property auctions are becoming a
                  <span className="text-yellow-400 font-bold"> strong alternative to traditional real estate</span> and as we all know...
                  <span className="text-yellow-400"> the early bird catches the worms.</span>
                </p>
              </div>
            </div>

            {/* Exclusive Licensed Areas */}
            <div className="text-center mb-20">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-full text-yellow-700 text-sm font-bold mb-6 border border-yellow-500/30">
                INDUSTRY FIRST
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-12 leading-tight">
                The First Auction Company in Zimbabwe to offer
                <span className="block text-yellow-600">Exclusively Licensed Areas</span>
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-blue-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-gradient-to-br from-amber-600 to-amber-800 rounded-3xl p-12 shadow-2xl text-white transform group-hover:scale-105 transition-all duration-300">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Become part of a new generation</h3>
                      <h3 className="text-2xl font-bold mb-4">of Real Estate pioneers</h3>
                      <p className="text-lg text-amber-100">Let us show you how.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold text-blue-900 mb-6">Why Choose FastIn Property Auctions Franchising?</h3>
                    <div className="space-y-6 text-gray-700">
                      <p className="text-lg leading-relaxed">
                        Join the FastIn Property Auctions family and become part of Zimbabwe's leading online property auction platform.
                        Our proven business model and comprehensive support system make franchising with us a smart investment.
                      </p>
                      <p className="text-lg leading-relaxed">
                        Be at the forefront of the real estate revolution with exclusive territorial rights and cutting-edge technology.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-900">500+</div>
                      <div className="text-sm text-blue-700">Properties Sold</div>
                    </div>
                    <div className="text-center p-4 bg-yellow-50 rounded-xl">
                      <div className="text-2xl font-bold text-yellow-700">95%</div>
                      <div className="text-sm text-yellow-600">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Four Key Benefits */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Key Benefits of Our Franchise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: "M13 10V3L4 14h7v7l9-11h-7z",
                    title: "Industry Innovation",
                    description: "The real estate industry has become stale and is lagging in terms of innovation and development of new marketing techniques."
                  },
                  {
                    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                    title: "Global Trend",
                    description: "Online auctions are taking the world by storm and provide you with a fresh new way to enter the property market with technology and innovation."
                  },
                  {
                    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                    title: "Exclusive Territory",
                    description: "Secure your geographical area and gain access to our online auction platform and proprietary systems."
                  },
                  {
                    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                    title: "Competitive Edge",
                    description: "We offer a highly competitive approach to selling real estate and offer your sellers and buyers a new way to buy and sell real estate."
                  }
                ].map((benefit, index) => (
                    <div key={index} className="group">
                      <div className="bg-white rounded-2xl shadow-lg p-8 text-center h-full hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-yellow-100 group-hover:to-yellow-200 transition-all duration-300">
                          <svg className="w-10 h-10 text-blue-600 group-hover:text-yellow-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                ))}
              </div>
            </div>

            {/* Perks Section */}
            <div className="mb-20">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-12 border border-gray-200">
                <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Perks of Online Property Auctions</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    {[
                      "Virtual Sales",
                      "Lower overheads",
                      "Highly competitive",
                      "New exciting product"
                    ].map((perk, index) => (
                        <div key={index} className="flex items-center group">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4 group-hover:from-yellow-500 group-hover:to-yellow-600 transition-all duration-300">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700 font-medium text-lg">{perk}</span>
                        </div>
                    ))}
                  </div>

                  <div className="space-y-6">
                    {[
                      "Very well regulated and respected industry",
                      "Good startup costs",
                      "Full and ongoing training and support"
                    ].map((perk, index) => (
                        <div key={index} className="flex items-center group">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4 group-hover:from-yellow-500 group-hover:to-yellow-600 transition-all duration-300">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700 font-medium text-lg">{perk}</span>
                        </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Partnership Section */}
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-yellow-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-12 shadow-2xl text-white">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
                        <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Professional Partnership</h3>
                      <p className="text-blue-100">Built for success and growth</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-4xl font-bold text-blue-900 mb-8">Partnership Opportunity</h2>
                  <div className="space-y-6">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Join forces with FastIn Property Auctions and become part of a revolutionary approach to real estate sales.
                      Our franchise model offers you the opportunity to own and operate your own online auction business
                      with full support from our experienced team.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      With exclusive territorial rights, comprehensive training, and ongoing support, you'll have everything
                      you need to succeed in this exciting and growing industry.
                    </p>

                    <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl p-6 border border-yellow-200">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-bold text-yellow-800">Premium Support</div>
                          <div className="text-yellow-700 text-sm">24/7 assistance and guidance</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Start Your Journey Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-yellow-500/5 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-12 border border-gray-200">
                <div className="text-center mb-12">
                  <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-100 to-yellow-100 rounded-full text-blue-800 text-sm font-bold mb-6">
                    GET STARTED TODAY
                  </div>
                  <h2 className="text-4xl font-bold text-blue-900 mb-4">Start Your Journey with FastIn Property Auctions</h2>
                  <p className="text-gray-600 text-lg">Take the first step towards owning your own online auction business</p>
                </div>

                <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="group">
                      <label htmlFor="fullName" className="block text-sm font-bold text-gray-700 mb-3">Full Name</label>
                      <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-gray-300"
                          required
                      />
                    </div>

                    <div className="group">
                      <label htmlFor="contactNumber" className="block text-sm font-bold text-gray-700 mb-3">Contact Number</label>
                      <input
                          type="tel"
                          id="contactNumber"
                          name="contactNumber"
                          value={formData.contactNumber}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-gray-300"
                          required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="group">
                      <label htmlFor="emailAddress" className="block text-sm font-bold text-gray-700 mb-3">Email Address</label>
                      <input
                          type="email"
                          id="emailAddress"
                          name="emailAddress"
                          value={formData.emailAddress}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-gray-300"
                          required
                      />
                    </div>

                    <div className="group">
                      <label htmlFor="preferredArea" className="block text-sm font-bold text-gray-700 mb-3">Preferred Area</label>
                      <input
                          type="text"
                          id="preferredArea"
                          name="preferredArea"
                          value={formData.preferredArea}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-gray-300"
                          required
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-800 text-white px-16 py-5 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-blue-700"
                    >
                      SEND ME A LINK
                    </button>
                  </div>
                </form>

                <div className="text-center mt-12 p-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl">
                  <p className="text-gray-600 mb-3 text-lg">Contact William Hunter for more information</p>
                  <a
                      href="mailto:william@fastinproperty.co.za"
                      className="inline-flex items-center text-blue-800 font-bold hover:text-yellow-600 text-lg transition-colors duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    william@fastinproperty.co.za
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}