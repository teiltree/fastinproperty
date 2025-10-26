import { CheckCircle, Shield, Smartphone, Bell, Timer, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function OnlineBiddingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero + Breadcrumb */}
      <div className="relative">
        <div
          className="relative h-[40vh] md:h-[50vh] bg-cover bg-center flex items-center"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(30,58,138,0.85), rgba(59,130,246,0.65)), url('https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1600&auto=format&fit=crop')",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-5xl">
              <div className="mb-4 text-blue-100 text-sm">
                <Link to="/" className="hover:underline">Home</Link>
                <span className="mx-2">/</span>
                <Link to="/about" className="hover:underline">About</Link>
                <span className="mx-2">&gt;</span>
                <span className="text-white">Online Bidding</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-light text-white mb-3">Online Bidding</h1>
              <p className="text-blue-100 text-lg">How to bid online with Fastin Property Auctions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Quick CTA cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="#how-to-participate"
              className="group bg-white rounded-2xl shadow-lg p-6 flex items-center justify-between border border-blue-100 hover:shadow-xl transition-all"
            >
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-1">How to participate</h3>
                <p className="text-gray-600 text-sm">Step-by-step guide to get you bidding in minutes</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-100">
                <ArrowRight className="w-6 h-6" />
              </div>
            </a>
            <a
              href="#features"
              className="group bg-white rounded-2xl shadow-lg p-6 flex items-center justify-between border border-amber-100 hover:shadow-xl transition-all"
            >
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-1">Features</h3>
                <p className="text-gray-600 text-sm">Max bid, notifications, staggered ends, and more</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-100">
                <ArrowRight className="w-6 h-6" />
              </div>
            </a>
          </div>

          {/* How to participate */}
          <section id="how-to-participate" className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8">
              <h2 className="text-3xl font-semibold">How to participate in an online auction</h2>
              <p className="text-blue-100 mt-2">Follow these simple steps to start bidding with confidence.</p>
            </div>
            <div className="p-8 space-y-8">
              {/* Step list */}
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-1">Download our Auction App</h3>
                    <p className="text-gray-700">Fastin Property Auctions Mobile App</p>
                    <div className="mt-3 flex gap-3">
                      <button
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition opacity-50 cursor-not-allowed"
                        disabled
                      >
                        <Smartphone className="w-4 h-4" /> Get the App (Coming Soon)
                      </button>
                    </div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-1">Or visit our online bidding site</h3>
                    <p className="text-gray-700">
                      <a className="text-blue-700 underline" href="https://iprop.solutions/fastin/properties/for-auction" target="_blank" rel="noreferrer">Auction Stock</a>
                      <span className="mx-2">/</span>
                      <a className="text-blue-700 underline" href="https://iprop.solutions/fastin/auth/login" target="_blank" rel="noreferrer">Create Auction Account</a>
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-1">Sign up and become a member</h3>
                    <p className="text-gray-700">Join the Fastin Property Auctions online community.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Get VERIFIED</h3>
                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                      <p className="text-gray-700 mb-3">
                        By getting verified, your bidding limit will automatically increase and you will gain FREE entry into the Fastin Property Auctions Membership Program.
                      </p>
                      <ul className="grid md:grid-cols-3 gap-3">
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5" /> Verify your email with an OTP message</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5" /> Verify your cell phone number with an OTP message</li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5" /> Verify your Name, ID Number and Date of Birth by submitting your ID</li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">5</div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Bidding Limits</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2"><Shield className="w-5 h-5 text-amber-500 mt-0.5" /> Partial verification and normal bidder status = $1 bidding limit</li>
                      <li className="flex items-start gap-2"><Shield className="w-5 h-5 text-amber-500 mt-0.5" /> Full verification and normal bidder status = Deposit amount x 10 bidding limit</li>
                    </ul>
                  </div>
                </li>
              </ol>

              {/* Deposits */}
              <div className="mt-10">
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">How to place a deposit on an auction</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                    <ul className="space-y-2 text-gray-700 list-disc pl-5">
                      <li>If your bidder status is ‘normal bidder’, you will need to place a deposit if you wish to bid for anything over $1.</li>
                      <li>If your bidder status is ‘bad bidder’, you will need to place a deposit if you wish to bid.</li>
                      <li>You can pay a deposit at any of our payments offices.</li>
                      <li>Once your deposit is received by our payments team, your bidding limit will be increased!</li>
                      <li>Deposits are fully refundable and can be collected during our opening hours. Customers must provide proof of ID.</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-blue-100">
                    <h4 className="font-semibold text-blue-900 mb-2">Need help placing a deposit?</h4>
                    <p className="text-gray-700 mb-3">Contact our support team and we’ll guide you through the process.</p>
                    <a href="/contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 text-blue-900 font-semibold hover:bg-amber-400 transition">
                      Contact us <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section id="features" className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-amber-500 to-amber-400 text-blue-900 p-8">
              <h2 className="text-3xl font-semibold">Features of the online bidding system</h2>
            </div>
            <div className="p-8 grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Max bid</h3>
                <p className="text-gray-700">A max bid is the maximum amount you are willing to spend on a lot (excluding VAT and/or purchasers levy). When you place a max bid, the system will automatically bid on your behalf in increments. This ensures that your bidding can continue in the event you experience technical issues and increases your odds of winning.</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Outbid notifications</h3>
                <p className="text-gray-700">Push notifications and in-app messages will be sent to you if you are outbid.</p>
                <div className="mt-3 flex items-center gap-2 text-blue-700"><Bell className="w-5 h-5" /> Stay updated in real-time</div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Staggered end times</h3>
                <p className="text-gray-700">Our state-of-the-art system allows for the auction of each lot to end in a staggered fashion. This allows bidders to bid on each item they are interested in without fear of missing out on another property.</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Automatic 10-minute extension</h3>
                <p className="text-gray-700">In the last 10 minutes that a lot is open for bidding, any bidding activity will activate a 10-minute extension timer. Each new bid will reset the timer, ensuring every bidder has an equal chance to increase their bids.</p>
                <div className="mt-3 flex items-center gap-2 text-amber-600"><Timer className="w-5 h-5" /> Fair opportunity window</div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6 md:col-span-2">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Bidding limit</h3>
                <p className="text-gray-700">This is the maximum value that you are allowed to bid up to. Find your Bidding Limit on your Account.</p>
              </div>
            </div>
          </section>

          {/* Payments */}
          <section id="payments" className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8">
              <h2 className="text-3xl font-semibold">How do I pay?</h2>
            </div>
            <div className="p-8 grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                  <li>You will be notified via email and in-app messages about the lots that you win on auction!</li>
                  <li>All your properties must be paid for within 48 hours of winning and occupation passes within 48 hours of payment.</li>
                  <li>If you have not taken possession or occupation of your property within the time frame allocated a security fee will incur per property per day. *Charges available on enquiry.</li>
                </ol>
              </div>
              <div className="bg-white rounded-xl p-6 border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">We deliver!</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Each lot states occupation or handover / takeover options and charges.</li>
                  <li>Contact us and we will ensure seamless handover / takeover to you.</li>
                </ul>
                <a
                  href="https://iprop.solutions/fastin/properties/for-auction"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition"
                >
                  Go to Online Bidding <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
