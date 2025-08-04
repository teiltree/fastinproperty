import { useState } from 'react'

export default function BuyPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null)
  const [openBidding, setOpenBidding] = useState<string | null>(null)

  const toggleFaq = (faq: string) => {
    setOpenFaq(openFaq === faq ? null : faq)
  }

  const toggleBidding = (section: string) => {
    setOpenBidding(openBidding === section ? null : section)
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
            Buy at auction
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
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Login with Facebook or create an account</h3>
                  <p className="text-gray-600">Get started by creating your account or logging in with Facebook for quick access.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Request registration for the property you are interested in</h3>
                  <p className="text-gray-600">Browse available properties and register your interest for the auctions you want to participate in.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Bid online and buy your dream home!</h3>
                  <p className="text-gray-600">Place your bids in real-time and secure your dream property from anywhere in the world.</p>
                </div>
              </div>

              <div className="text-center mb-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Participating in an online auction is easy on our modern platform. Bid from anywhere in the world using your phone, laptop, desktop or tablet! To bid on a property, simply log into this website and request registration on the property you are interested in. One of our representatives will contact you and once your deposit has been secublue, you will be able to bid on any lot in that auction.
                </p>
                <button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded font-semibold">
                  PRE-REGISTER FOR AUCTIONS
                </button>
              </div>
            </div>

            {/* Benefits of buying at Auction */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold text-blue-800 text-center mb-12">Benefits of buying at Auction</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Speed</h3>
                  <p className="text-gray-600 text-sm">The transaction is quick, efficient and simple with a 3 to 7 day confirmation period.</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Expert Appraisal</h3>
                  <p className="text-gray-600 text-sm">You know with certainty that the properties FastIn Property Auctions takes to auction have been accurately and fairly valued.</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Clarity</h3>
                  <p className="text-gray-600 text-sm">Before you bid, you inspect the property thoroughly.</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Transparency</h3>
                  <p className="text-gray-600 text-sm">All transactions are transparent. Bidding is in the open, terms and conditions are provided for your scrutiny beforehand and on the day of the auction.</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Convenience</h3>
                  <p className="text-gray-600 text-sm">Once your bid is accepted and confirmed by the seller, that's it, the property is yours.</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Serious sellers</h3>
                  <p className="text-gray-600 text-sm">Once the property is on auction, there's no last minute changes, haggling on price or any other terms.</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">You control your price</h3>
                  <p className="text-gray-600 text-sm">Should the bidding exceed your set limit, you simply stop and move on.</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Win/win</h3>
                  <p className="text-gray-600 text-sm">You have nothing to lose. The deposit you put down as a potential buyer is refundable in total should your offer be rejected.</p>
                </div>
              </div>
            </div>

            {/* How to bid online */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold text-blue-800 text-center mb-8">How to bid online</h2>

              <div className="bg-white rounded-lg shadow-md">
                <div className="border-b border-gray-200">
                  <button
                      className="w-full px-6 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                      onClick={() => toggleBidding('instant-autobid')}
                  >
                    <div className="flex justify-between items-center">
                      <span>Instant Bid vs Autobid</span>
                      <svg
                          className={`w-5 h-5 transform transition-transform ${openBidding === 'instant-autobid' ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {openBidding === 'instant-autobid' && (
                      <div className="px-6 pb-4 text-gray-600">
                        <p>An instant bid bids immediately for the amount you have selected. An Autobid will allow our system to automatically bid in the increments you have selected up to your Max Autobid. The system will only bid on your behalf should another bidder outbid you and stop bidding when you are the winning bidder or when your Max Autobid has been reached.</p>
                      </div>
                  )}
                </div>

                <div className="border-b border-gray-200">
                  <button
                      className="w-full px-6 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                      onClick={() => toggleBidding('increments')}
                  >
                    <div className="flex justify-between items-center">
                      <span>Increments, Notifications and Extensions</span>
                      <svg
                          className={`w-5 h-5 transform transition-transform ${openBidding === 'increments' ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {openBidding === 'increments' && (
                      <div className="px-6 pb-4 text-gray-600">
                        <p>Bidding increments are pblueetermined amounts by which bids must increase. You'll receive real-time notifications for all bidding activity. If a bid is placed in the final minutes of an auction, the auction may be automatically extended to ensure fair bidding opportunities for all participants.</p>
                      </div>
                  )}
                </div>

                <div className="border-b border-gray-200">
                  <button
                      className="w-full px-6 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                      onClick={() => toggleBidding('history-terms')}
                  >
                    <div className="flex justify-between items-center">
                      <span>Bidding History and Terms and Conditions</span>
                      <svg
                          className={`w-5 h-5 transform transition-transform ${openBidding === 'history-terms' ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {openBidding === 'history-terms' && (
                      <div className="px-6 pb-4 text-gray-600">
                        <p>You can view the complete bidding history for any property, including all bids placed and timestamps. All terms and conditions are clearly outlined before the auction begins, including payment terms, transfer procedures, and any special conditions that may apply to specific properties.</p>
                      </div>
                  )}
                </div>

                <div>
                  <button
                      className="w-full px-6 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                      onClick={() => toggleBidding('after-auction')}
                  >
                    <div className="flex justify-between items-center">
                      <span>What happens after the auction</span>
                      <svg
                          className={`w-5 h-5 transform transition-transform ${openBidding === 'after-auction' ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {openBidding === 'after-auction' && (
                      <div className="px-6 pb-4 text-gray-600">
                        <p>Once you're the successful bidder, you'll receive immediate confirmation and detailed instructions for the next steps. This includes payment procedures, transfer arrangements, and timeline for completion. Our team will guide you through the entire process to ensure a smooth transaction from bid to ownership.</p>
                      </div>
                  )}
                </div>
              </div>
            </div>

            {/* Buyer FAQ */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold text-blue-800 text-center mb-8">Buyer FAQ</h2>

              <div className="bg-white rounded-lg shadow-md">
                <div className="border-b border-gray-200">
                  <button
                      className="w-full px-6 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                      onClick={() => toggleFaq('register')}
                  >
                    <div className="flex justify-between items-center">
                      <span>How do I register for the auction?</span>
                      <svg
                          className={`w-5 h-5 transform transition-transform ${openFaq === 'register' ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {openFaq === 'register' && (
                      <div className="px-6 pb-4 text-gray-600">
                        <p>After you have logged into our site and have requested registration for an auction one of our consultants will contact you and assist you with an easy registration process where an application form is completed and the necessary FICA documentation and a refundable deposit are secublue. You can also contact us directly for registration.</p>
                      </div>
                  )}
                </div>

                <div className="border-b border-gray-200">
                  <button
                      className="w-full px-6 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                      onClick={() => toggleFaq('inspect')}
                  >
                    <div className="flex justify-between items-center">
                      <span>Can I inspect the property before the auction?</span>
                      <svg
                          className={`w-5 h-5 transform transition-transform ${openFaq === 'inspect' ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {openFaq === 'inspect' && (
                      <div className="px-6 pb-4 text-gray-600">
                        <p>We strongly encourage all potential bidders to inspect properties before the auction. Inspection times are scheduled and advertised in advance. You can also request a private viewing by contacting our office. Additionally, we provide detailed property information packs, professional photography, and virtual tours to help you make an informed decision.</p>
                      </div>
                  )}
                </div>

                <div className="border-b border-gray-200">
                  <button
                      className="w-full px-6 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                      onClick={() => toggleFaq('fees')}
                  >
                    <div className="flex justify-between items-center">
                      <span>Who pays the Auctioneers' Fee?</span>
                      <svg
                          className={`w-5 h-5 transform transition-transform ${openFaq === 'fees' ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {openFaq === 'fees' && (
                      <div className="px-6 pb-4 text-gray-600">
                        <p>The auctioneer's fee structure varies depending on the specific auction and property type. In most cases, the seller pays the auctioneer's commission, while buyers may be responsible for a buyer's premium. All fees and charges are clearly disclosed in the auction terms and conditions, which are provided before the auction begins. There are no hidden costs.</p>
                      </div>
                  )}
                </div>

                <div className="border-b border-gray-200">
                  <button
                      className="w-full px-6 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                      onClick={() => toggleFaq('reserve')}
                  >
                    <div className="flex justify-between items-center">
                      <span>Is there a reserve price on all lots?</span>
                      <svg
                          className={`w-5 h-5 transform transition-transform ${openFaq === 'reserve' ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {openFaq === 'reserve' && (
                      <div className="px-6 pb-4 text-gray-600">
                        <p>Not all properties have reserve prices. Some properties are sold without reserve, meaning they will be sold to the highest bidder regardless of the final price. When a reserve price is set, it represents the minimum price the seller is willing to accept. Reserve prices are clearly indicated in the property details and auction catalog.</p>
                      </div>
                  )}
                </div>

                <div>
                  <button
                      className="w-full px-6 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                      onClick={() => toggleFaq('deposit')}
                  >
                    <div className="flex justify-between items-center">
                      <span>What is the deposit amount?</span>
                      <svg
                          className={`w-5 h-5 transform transition-transform ${openFaq === 'deposit' ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {openFaq === 'deposit' && (
                      <div className="px-6 pb-4 text-gray-600">
                        <p>The deposit amount typically ranges from 10% to 20% of the property's estimated value, but this can vary depending on the specific property and auction terms. The exact deposit amount is specified in the auction conditions for each property. This deposit is fully refundable if your bid is unsuccessful, and it forms part of the purchase price if you are the successful bidder.</p>
                      </div>
                  )}
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-blue-800 text-white rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Ready to Start Bidding?</h3>
              <p className="text-lg mb-6">Join thousands of successful buyers who have found their dream properties through our auctions.</p>
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded font-semibold">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}