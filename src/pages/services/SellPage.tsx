import { useState } from 'react'

export default function SellPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null)

  const toggleFaq = (faq: string) => {
    setOpenFaq(openFaq === faq ? null : faq)
  }

  return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div
            className="relative h-96 bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UOM8C17bOxrVxTZqsEpv6CVKtNZxAt.png')`
            }}
        >
          <h1 className="text-5xl font-light text-white text-center">
            Sell at auction
          </h1>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* 3-Step Process */}
            <div className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Schedule a free valuation!</h3>
                  <p className="text-gray-600">Contact FastIn Property today</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">We do the legwork</h3>
                  <p className="text-gray-600">and collect the necessary documents</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Auction date is set</h3>
                  <p className="text-gray-600">and the bidding begins!</p>
                </div>
              </div>

              <div className="text-center bg-blue-800 text-white rounded-lg p-8 mb-8">
                <p className="text-lg leading-relaxed">
                  Interested in selling your property fast? Book a{' '}
                  <span className="bg-yellow-600 px-2 py-1 rounded font-semibold">free valuation</span>{' '}
                  today! Reach and expose your property to millions of buyers through our online Auction platform.
                </p>
              </div>
            </div>

            {/* Selling Online with FastIn Property */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold text-blue-800 text-center mb-8">Selling Online with FastIn Property</h2>

              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  The future of real estate as most industries are now moving towards digital and online solutions to accommodate an increasing number of younger technologically savvy buyers and to make the buying process more convenient and cost-effective for both buyer and seller.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  At FastIn Property Online Auctions we focus all our time and energy on marketing and exposing your property to the ever-growing digital audiences via tailor-made traditional, electronic and social media marketing campaigns.
                </p>
              </div>
            </div>

            {/* Benefits of selling at Auction */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold text-blue-800 text-center mb-12">Benefits of selling at Auction</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Speed</h3>
                  <p className="text-gray-600 text-sm">We sell your property in 4 to 6 weeks.</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">No Auctioneers' Fee</h3>
                  <p className="text-gray-600 text-sm">You as seller pay us no Auctioneers Fee unless otherwise negotiated.</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">No Ceiling</h3>
                  <p className="text-gray-600 text-sm">There is no ceiling price on the value you can achieve. If we get you more for your property than your reserve price then it's for your benefit.</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">No Comebacks</h3>
                  <p className="text-gray-600 text-sm">There are no comebacks, property is sold voetstoots and you are protected by the Consumer Protection Act.</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Extensive Marketing</h3>
                  <p className="text-gray-600 text-sm">Our marketing is far more extensive than any traditional sales methods.</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Free Valuations</h3>
                  <p className="text-gray-600 text-sm">We use all the possible tools at our disposal to provide you with a free and accurate valuation for your property.</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">No Suspensive Conditions</h3>
                  <p className="text-gray-600 text-sm">The sale of your property is cash and there are no suspensive conditions. If the buyer pulls out of the sale then they forfeit their 10% deposit that they pay on day of auction.</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Nothing to Lose</h3>
                  <p className="text-gray-600 text-sm">You have nothing to lose. If we don't reach your reserve price then you are not obliged to sell your property.</p>
                </div>
              </div>
            </div>

            {/* Seller FAQ */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold text-blue-800 text-center mb-8">Seller's FAQ</h2>

              <div className="bg-white rounded-lg shadow-md">
                <div className="border-b border-gray-200">
                  <button
                      className="w-full px-6 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                      onClick={() => toggleFaq('commission')}
                  >
                    <div className="flex justify-between items-center">
                      <span>What commission do you charge sellers?</span>
                      <svg
                          className={`w-5 h-5 transform transition-transform ${openFaq === 'commission' ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {openFaq === 'commission' && (
                      <div className="px-6 pb-4 text-gray-600">
                        <p>Our commission structure is competitive and transparent. In many cases, sellers pay no auctioneers' fee unless otherwise negotiated. We believe in a performance-based approach where our success is tied to achieving the best possible price for your property. All fees are clearly outlined in our seller agreement before you commit to the auction process.</p>
                      </div>
                  )}
                </div>

                <div className="border-b border-gray-200">
                  <button
                      className="w-full px-6 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                      onClick={() => toggleFaq('reserve-price')}
                  >
                    <div className="flex justify-between items-center">
                      <span>How do you determine the reserve price?</span>
                      <svg
                          className={`w-5 h-5 transform transition-transform ${openFaq === 'reserve-price' ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {openFaq === 'reserve-price' && (
                      <div className="px-6 pb-4 text-gray-600">
                        <p>We conduct a comprehensive free valuation using all available tools and market data to determine a fair reserve price. This includes comparative market analysis, recent sales data, property condition assessment, and current market trends. The reserve price is set in consultation with you to ensure it reflects realistic market expectations while protecting your interests.</p>
                      </div>
                  )}
                </div>

                <div className="border-b border-gray-200">
                  <button
                      className="w-full px-6 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                      onClick={() => toggleFaq('marketing-timeline')}
                  >
                    <div className="flex justify-between items-center">
                      <span>How long does the marketing period last?</span>
                      <svg
                          className={`w-5 h-5 transform transition-transform ${openFaq === 'marketing-timeline' ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {openFaq === 'marketing-timeline' && (
                      <div className="px-6 pb-4 text-gray-600">
                        <p>Our typical marketing period runs for 3-4 weeks before the auction date. This allows sufficient time for comprehensive marketing campaigns across multiple platforms, property inspections, and buyer registration. The entire process from listing to sale completion usually takes 4-6 weeks, significantly faster than traditional property sales methods.</p>
                      </div>
                  )}
                </div>

                <div>
                  <button
                      className="w-full px-6 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                      onClick={() => toggleFaq('unsold-property')}
                  >
                    <div className="flex justify-between items-center">
                      <span>What happens if my property doesn't sell at auction?</span>
                      <svg
                          className={`w-5 h-5 transform transition-transform ${openFaq === 'unsold-property' ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {openFaq === 'unsold-property' && (
                      <div className="px-6 pb-4 text-gray-600">
                        <p>If your property doesn't reach the reserve price, you have several options. You can choose to accept the highest bid if it's close to your expectations, relist the property for a future auction with adjusted terms, or explore private treaty sales with interested bidders. You have nothing to lose - there's no obligation to sell if the reserve isn't met, and you won't incur additional fees.</p>
                      </div>
                  )}
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-blue-800 text-white rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Ready to Sell Your Property?</h3>
              <p className="text-lg mb-6">Get started with a free valuation and discover how auction selling can work for you.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded font-semibold">
                  Book Free Valuation
                </button>
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 text-white px-8 py-3 rounded font-semibold transition-colors">
                  Contact Us Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}