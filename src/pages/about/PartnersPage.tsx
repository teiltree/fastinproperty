export default function PartnersPage() {
  return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative container mx-auto px-4 py-20">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
                STRATEGIC PARTNERS
              </h1>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto font-light">
                Powering Excellence Through Trusted Partnerships
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">

            {/* Main Partnership Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-full h-full bg-yellow-500 rounded-2xl opacity-20"></div>
                  <img
                      src="/placeholder.svg?height=400&width=500"
                      alt="Business handshake representing partnerships"
                      className="relative w-full rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  PARTNERSHIP EXCELLENCE
                </div>

                <h2 className="text-4xl font-bold text-blue-900 mb-6 leading-tight">
                  Comprehensive Solutions Through
                  <span className="text-yellow-600"> Strategic Alliances</span>
                </h2>

                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    We proudly partner with <strong className="text-blue-900">dominant Web Platforms</strong>,
                    <strong className="text-blue-900"> Law firms</strong>, and
                    <strong className="text-blue-900"> financial institutions</strong> to provide an
                    effective turnkey service that exceeds industry standards.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                    <p className="leading-relaxed">
                      Our strategic partnerships enable us to offer comprehensive solutions that cover every aspect of the
                      property auction process, from legal compliance to financing options.
                    </p>
                  </div>

                  <p className="leading-relaxed">
                    These collaborations ensure that our clients receive professional, reliable, and efficient service at
                    every step of their property journey, backed by industry-leading expertise.
                  </p>
                </div>

                <div className="mt-8">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
                    Learn More About Our Network
                  </button>
                </div>
              </div>
            </div>

            {/* Partner Categories */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-blue-900 mb-4">Our Partner Ecosystem</h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Three pillars of excellence that drive our comprehensive auction services
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Web Platforms Card */}
                <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-900 to-blue-700"></div>
                  <div className="p-8">
                    <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-blue-900 mb-4">Web Platforms</h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Leading digital marketing and advertising partners that maximize property exposure and buyer engagement
                    </p>
                    <div className="text-sm text-yellow-600 font-semibold">
                      ✓ Maximum reach ✓ Targeted marketing ✓ Real-time analytics
                    </div>
                  </div>
                </div>

                {/* Law Firms Card */}
                <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-500 to-yellow-400"></div>
                  <div className="p-8">
                    <div className="w-16 h-16 bg-blue-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"/>
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-blue-900 mb-4">Law Firms</h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Trusted legal partners ensuring full compliance and seamless transaction management
                    </p>
                    <div className="text-sm text-yellow-600 font-semibold">
                      ✓ Legal compliance ✓ Risk mitigation ✓ Expert guidance
                    </div>
                  </div>
                </div>

                {/* Financial Institutions Card */}
                <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-700 to-yellow-500"></div>
                  <div className="p-8">
                    <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-blue-900 mb-4">Financial Institutions</h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Banking and finance partners providing secure payment processing and funding solutions
                    </p>
                    <div className="text-sm text-yellow-600 font-semibold">
                      ✓ Secure transactions ✓ Flexible financing ✓ Fast processing
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action Section */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-12 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Experience Partnership Excellence?</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied clients who trust our comprehensive auction services
              </p>
              <div className="space-x-4">
                <button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-lg transition-colors duration-300">
                  Start Your Auction
                </button>
                <button className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-blue-900 font-bold px-8 py-4 rounded-lg transition-colors duration-300">
                  Contact Partners
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}