import { useState } from 'react'

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    area: '',
    cell: '',
    email: '',
    cv: null as File | null
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData(prev => ({ ...prev, cv: file }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <div
            className="relative h-[500px] bg-cover bg-center flex items-center justify-center overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(30, 58, 138, 0.85) 0%, rgba(202, 138, 4, 0.8) 100%), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-W6HvrIECnVFfcTUZ4M0VThX5rhmq5o.png')`
            }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-yellow-600/20"></div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <div className="inline-block p-3 rounded-full bg-white/10 backdrop-blur-sm mb-6">
              <svg className="w-12 h-12 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 11H7v8h2v-8zm4 0h-2v8h2v-8zm4 0h-2v8h2v-8zm2.5-5H18V4l-1-1H7L6 4v2H4.5l-1 1v1.5h1v11L6 20h12l1.5-1.5v-11h1V6l-1-1zM8 4h8v2H8V4z"/>
              </svg>
            </div>
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
              Join the Elite
            </h1>
            <h2 className="text-4xl font-light mb-6 text-yellow-200">
              Virtual Property Auction Revolution
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Where innovation meets opportunity in real estate excellence
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-20">
          <div className="max-w-7xl mx-auto">
            {/* Our agents sell more properties faster */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-3xl p-12 mb-20 shadow-2xl border border-yellow-500/20">
              <div className="text-center mb-16">
                <div className="inline-block p-4 rounded-full bg-yellow-500/20 mb-6">
                  <svg className="w-16 h-16 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
                  Our Agents Sell More Properties Faster
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-yellow-300">Be More Competitive</h3>
                    <p className="text-blue-100 leading-relaxed">
                      99% of Estate Agents offer the same solutions. Virtual Online Auctions puts you in that elite 1% with specialized marketing solutions that immediately set you apart and help you compete with veteran agents.
                    </p>
                  </div>
                </div>

                <div className="group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-yellow-300">Build Your Own Team</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Create and build your own real estate business with our backing and support at no cost. Earn on all sales conducted by your agents. Manage virtually or from an office.
                    </p>
                  </div>
                </div>

                <div className="group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-yellow-300">Zero Cost to Agent</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Our unique virtual, technology-driven model means: No Joining Fees, No Franchise Fees, No Royalties, No Desk Fees, No Travel Costs.
                    </p>
                  </div>
                </div>

                <div className="group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-yellow-300">Work Virtually, No Restrictions</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Market and sell properties via our virtual model allowing you more freedom, less traffic, fewer expenses, and ultimate flexibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Perks Section */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <div className="inline-block p-4 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 mb-6">
                  <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h2 className="text-5xl font-bold text-blue-900 mb-4">Exclusive Perks</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    title: "Electronic & Social Media Marketing",
                    description: "We handle all your Electronic and Social Media Marketing and Design.",
                    icon: "M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4H5a2 2 0 00-2 2v9a2 2 0 002 2h2M7 4h10M7 4v16M15 4h2a2 2 0 012 2v9a2 2 0 01-2 2h-2"
                  },
                  {
                    title: "Finance & Legal Support",
                    description: "We arrange finance and deal with all attorney follow-ups.",
                    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  },
                  {
                    title: "Marketing Assistance",
                    description: "We assist with placing for-sale boards and outdoor marketing.",
                    icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  },
                  {
                    title: "Training & Support",
                    description: "Full training, online support, internships, and mentorship with senior team leaders.",
                    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  },
                  {
                    title: "Auction Management",
                    description: "We run the auctions on your behalf - completely hands-free!",
                    icon: "M9 11H7v8h2v-8zm4 0h-2v8h2v-8zm4 0h-2v8h2v-8zm2.5-5H18V4l-1-1H7L6 4v2H4.5l-1 1v1.5h1v11L6 20h12l1.5-1.5v-11h1V6l-1-1z"
                  },
                  {
                    title: "24/7 Support",
                    description: "Round-the-clock online support and training. We always have your back.",
                    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  }
                ].map((perk, index) => (
                    <div key={index} className="group hover:transform hover:scale-105 transition-all duration-300">
                      <div className="bg-white rounded-2xl shadow-xl p-8 text-center h-full border-2 border-transparent group-hover:border-yellow-400 group-hover:shadow-2xl">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-yellow-500 group-hover:to-yellow-600 transition-all duration-300">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={perk.icon} />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-blue-900 mb-4">{perk.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{perk.description}</p>
                      </div>
                    </div>
                ))}
              </div>

              <div className="text-center bg-gradient-to-r from-blue-900 to-yellow-600 rounded-2xl p-8 text-white">
                <p className="text-2xl font-light italic">
                  We handle everything so you can focus entirely on selling activities.
                </p>
              </div>
            </div>

            {/* Financial Rewards */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <div className="inline-block p-4 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 mb-6">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h2 className="text-5xl font-bold text-blue-900 mb-4">Financial Rewards</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Premium Commission Model",
                    description: "We're not a low-cost agency, allowing for much higher commissions and industry-beating earnings.",
                    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  },
                  {
                    title: "Immediate Payments",
                    description: "Don't wait 3-9 months for commission payouts. Get paid immediately on select transactions.",
                    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  },
                  {
                    title: "Listing Rewards",
                    description: "Get paid for every Fully Managed listing you bring. Start earning from day one!",
                    icon: "M9 5H7a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l3 3m-3-3h12"
                  },
                  {
                    title: "Investment Partnership",
                    description: "We invest our capital into your personal marketing campaigns without any financial risk to you.",
                    icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  },
                  {
                    title: "Status Tier System",
                    description: "Become a Silver or Gold Status Agent with structured commissions offering incredible rewards.",
                    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  }
                ].map((reward, index) => (
                    <div key={index} className="group hover:transform hover:scale-105 transition-all duration-300">
                      <div className="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-2xl shadow-xl p-8 text-center h-full border-2 border-transparent group-hover:border-blue-600 group-hover:shadow-2xl">
                        <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-blue-600 group-hover:to-blue-800 transition-all duration-300">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={reward.icon} />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-blue-900 mb-4">{reward.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{reward.description}</p>
                      </div>
                    </div>
                ))}
              </div>
            </div>

            {/* Our Reach */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <div className="inline-block p-4 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 mb-6">
                  <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-5xl font-bold text-blue-900 mb-4">Our Global Reach</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-transparent group-hover:border-blue-600">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-yellow-500 group-hover:to-yellow-600 transition-all duration-300">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </div>
                    <div className="text-5xl font-bold text-blue-900 mb-2">21K</div>
                    <p className="text-gray-600 text-lg">Facebook Page Likes</p>
                  </div>
                </div>

                <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-transparent group-hover:border-yellow-600">
                    <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-blue-600 group-hover:to-blue-800 transition-all duration-300">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <div className="text-5xl font-bold text-blue-900 mb-2">3K</div>
                    <p className="text-gray-600 text-lg">Instagram Followers</p>
                  </div>
                </div>

                <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-transparent group-hover:border-blue-600">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-yellow-500 group-hover:to-yellow-600 transition-all duration-300">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="text-5xl font-bold text-blue-900 mb-2">100K+</div>
                    <p className="text-gray-600 text-lg">Active Investor Database</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Join the family */}
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-12 border-2 border-yellow-400/20">
              <div className="text-center mb-12">
                <div className="inline-block p-4 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 mb-6">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-5xl font-bold text-blue-900 mb-4">Join the Elite Family</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto rounded-full mb-6"></div>
                <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                  Ready to revolutionize your real estate career? Take the first step towards unlimited potential.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-semibold text-blue-900 mb-3">First Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 group-hover:border-blue-300"
                        required
                        placeholder="Enter your first name"
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="surname" className="block text-sm font-semibold text-blue-900 mb-3">Last Name</label>
                    <input
                        type="text"
                        id="surname"
                        name="surname"
                        value={formData.surname}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 group-hover:border-blue-300"
                        required
                        placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="mb-8 group">
                  <label htmlFor="area" className="block text-sm font-semibold text-blue-900 mb-3">Area of Residence</label>
                  <input
                      type="text"
                      id="area"
                      name="area"
                      value={formData.area}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 group-hover:border-blue-300"
                      required
                      placeholder="Enter your area of residence"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="group">
                    <label htmlFor="cell" className="block text-sm font-semibold text-blue-900 mb-3">Mobile Number</label>
                    <input
                        type="tel"
                        id="cell"
                        name="cell"
                        value={formData.cell}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 group-hover:border-blue-300"
                        required
                        placeholder="Enter your mobile number"
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-semibold text-blue-900 mb-3">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 group-hover:border-blue-300"
                        required
                        placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="mb-10 group">
                  <label htmlFor="cv" className="block text-sm font-semibold text-blue-900 mb-3">CV Upload (PDF Format - Max 5MB)</label>
                  <div className="relative">
                    <input
                        type="file"
                        id="cv"
                        name="cv"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="w-full px-4 py-4 border-2 border-dashed border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 group-hover:border-blue-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-700 hover:file:bg-yellow-100"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button
                      type="submit"
                      className="group relative px-12 py-4 bg-gradient-to-r from-blue-900 to-blue-800 hover:from-yellow-500 hover:to-yellow-600 text-white font-bold text-xl rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                  <span className="relative z-10 flex items-center justify-center">
                    <svg className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    JOIN THE ELITE
                  </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>

                <div className="text-center mt-8">
                  <p className="text-gray-600 text-sm">
                    By submitting this form, you're taking the first step towards joining the most innovative real estate platform in the industry.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}