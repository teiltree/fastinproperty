export default function FinancePage() {
  return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative container mx-auto px-4 py-20">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
                PROPERTY & AUCTION
                <span className="block text-yellow-500">FINANCE</span>
              </h1>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto font-light">
                Flexible Financing Solutions for Every Property Purchase
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">

            {/* Main Finance Section */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 items-center mb-20">


              <div>
                <div className="inline-flex items-center bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  FINANCING EXCELLENCE
                </div>

                <h2 className="text-4xl font-bold text-blue-900 mb-6 leading-tight">
                  Comprehensive
                  <span className="text-yellow-600"> Finance Options</span>
                </h2>

                <div className="space-y-6 text-lg text-gray-700">
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                    <p className="leading-relaxed font-semibold text-blue-900">
                      All finance options are available when you buy with Fastin Property Auctions.
                      <span className="text-yellow-600">Traditional finance welcome!</span>
                    </p>
                  </div>

                  <p className="leading-relaxed">
                    We work with <strong className="text-blue-900">leading financial institutions</strong> to provide
                    flexible financing solutions for all types of property purchases, ensuring you have access to
                    competitive rates and terms.
                  </p>

                  <p className="leading-relaxed">
                    Our finance partners understand the unique requirements of auction purchases and can provide
                    <strong className="text-blue-900"> fast approvals</strong> to help you secure your ideal property.
                  </p>
                </div>

                <div className="mt-8 space-x-4">
                  {/*<button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">*/}
                  {/*  Get Pre-Approved*/}
                  {/*</button>*/}
                  {/*<button className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold px-8 py-4 rounded-lg transition-colors duration-300">*/}
                  {/*  Finance Calculator*/}
                  {/*</button>*/}
                </div>
              </div>
            </div>

            {/* Finance Options Grid */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-blue-900 mb-4">Available Finance Solutions</h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Choose from a range of financing options tailored to your investment goals
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Traditional Home Loans */}
                <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-900 to-blue-700"></div>
                  <div className="p-8">
                    <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-blue-900 mb-4">Traditional Home Loans</h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Standard residential mortgages with competitive rates and flexible terms
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                        Up to 90% LVR available
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                        Fixed & variable rates
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                        First home buyer options
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Investment Property Finance */}
                <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-500 to-yellow-400"></div>
                  <div className="p-8">
                    <div className="w-16 h-16 bg-blue-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zM14 6a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h6zM4 14a2 2 0 002 2h8a2 2 0 002-2v-2H4v2z"/>
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-blue-900 mb-4">Investment Property</h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Specialized financing for property investors and portfolio builders
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                        Interest-only options
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                        Tax benefits guidance
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                        Portfolio lending
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Auction Finance */}
                <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-700 to-yellow-500"></div>
                  <div className="p-8">
                    <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/>
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-blue-900 mb-4">Fast Auction Finance</h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Rapid approval finance designed for auction timeframes
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                        24-48 hour approvals
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                        Unconditional offers
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                        Bridging finance available
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Finance Process Steps */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-blue-900 mb-4">Simple Finance Process</h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Get approved quickly with our streamlined finance application process
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-yellow-500">1</span>
                  </div>
                  <h4 className="text-lg font-bold text-blue-900 mb-2">Apply Online</h4>
                  <p className="text-gray-600 text-sm">Complete our simple online application form</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-900">2</span>
                  </div>
                  <h4 className="text-lg font-bold text-blue-900 mb-2">Quick Assessment</h4>
                  <p className="text-gray-600 text-sm">Our team reviews your application within hours</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-yellow-500">3</span>
                  </div>
                  <h4 className="text-lg font-bold text-blue-900 mb-2">Pre-Approval</h4>
                  <p className="text-gray-600 text-sm">Receive your pre-approval certificate</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-900">4</span>
                  </div>
                  <h4 className="text-lg font-bold text-blue-900 mb-2">Bid Confidently</h4>
                  <p className="text-gray-600 text-sm">Attend auctions with finance certainty</p>
                </div>
              </div>
            </div>

            {/* Call to Action Section */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-12 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Secure Your Finance?</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get pre-approved today and bid with confidence at your next auction
              </p>
              <div className="space-x-4">
                {/*<button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-lg transition-colors duration-300">*/}
                {/*  Apply for Finance*/}
                {/*</button>*/}
                <a href="/contact" className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-blue-900 font-bold px-8 py-4 rounded-lg transition-colors duration-300">
                  Speak to an Expert
                </a>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-yellow-500 mb-2">24-48hrs</div>
                  <div className="text-blue-100">Average Approval Time</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-500 mb-2">90%</div>
                  <div className="text-blue-100">Maximum LVR Available</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-500 mb-2">15+</div>
                  <div className="text-blue-100">Partner Lenders</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}