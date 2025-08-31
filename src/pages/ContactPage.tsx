import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // @ts-ignore
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   // Add form submission logic here
  // };

  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-6xl font-bold mb-4 tracking-tight">
              Get In <span className="text-yellow-400">Touch</span>
            </h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-6"></div>
            <p className="text-xl font-light max-w-2xl mx-auto opacity-90">
              Ready to sell your property? Let's discuss how our comprehensive marketing approach can work for you.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-900 to-yellow-500"></div>

                  <h2 className="text-4xl font-bold text-blue-900 mb-8">
                    Start Your Journey
                  </h2>
                  <p className="text-gray-600 mb-10 text-lg">
                    Fill out the form below and one of our property experts will contact you within 24 hours.
                  </p>

                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-semibold text-blue-900 mb-3 uppercase tracking-wide">
                          Full Name *
                        </label>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-900 focus:ring-4 focus:ring-blue-900/10 transition-all duration-300 text-gray-800 placeholder-gray-400 group-hover:border-yellow-400"
                            required
                        />
                      </div>

                      <div className="group">
                        <label className="block text-sm font-semibold text-blue-900 mb-3 uppercase tracking-wide">
                          Email Address *
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your.email@example.com"
                            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-900 focus:ring-4 focus:ring-blue-900/10 transition-all duration-300 text-gray-800 placeholder-gray-400 group-hover:border-yellow-400"
                            required
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-semibold text-blue-900 mb-3 uppercase tracking-wide">
                        Phone Number
                      </label>
                      <input
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Your phone number"
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-900 focus:ring-4 focus:ring-blue-900/10 transition-all duration-300 text-gray-800 placeholder-gray-400 group-hover:border-yellow-400"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-sm font-semibold text-blue-900 mb-3 uppercase tracking-wide">
                        Tell Us About Your Property *
                      </label>
                      <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Property type, location, timeline, and any specific requirements..."
                          rows={6}
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-900 focus:ring-4 focus:ring-blue-900/10 transition-all duration-300 text-gray-800 placeholder-gray-400 resize-none group-hover:border-yellow-400"
                          required
                      ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-900 to-blue-800 hover:from-yellow-500 hover:to-yellow-600 text-white py-5 px-8 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
                    >
                      Send Message
                      <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Office Address */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center text-white group-hover:from-yellow-500 group-hover:to-yellow-600 transition-all duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 ml-4 group-hover:text-yellow-600 transition-colors">
                      Our Office
                    </h3>
                  </div>
                  <div className="text-gray-700 leading-relaxed space-y-1">
                    <p className="font-semibold">2 Smithfield Way, Longlands Industrial Site, Marondera</p>
                    <p>Zimbabwe</p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center text-white group-hover:from-yellow-500 group-hover:to-yellow-600 transition-all duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 ml-4 group-hover:text-yellow-600 transition-colors">
                      Contact Info
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      <div>
                        <p className="font-semibold text-blue-900">Phone</p>
                        <p className="text-gray-700">+263784086388 / +263719086388</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      <div>
                        <p className="font-semibold text-blue-900">Email</p>
                        <p className="text-gray-700">info@fastinproperty.co.za</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      <div>
                        <p className="font-semibold text-blue-900">Business Hours</p>
                        <p className="text-gray-700">Mon-Fri 8:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Response Guarantee */}
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl shadow-xl p-8 text-white">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold ml-4">24-Hour Response</h3>
                  </div>
                  <p className="leading-relaxed opacity-90">
                    We guarantee a response within 24 hours. Your property journey starts the moment you reach out to us.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action Section */}
            <div className="mt-20 bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
                <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-8"></div>
                <p className="text-xl font-light max-w-3xl mx-auto mb-8">
                  Join hundreds of satisfied property owners who have successfully sold their properties through our comprehensive marketing approach.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+263784086388" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                    Call Now: +263784086388 / +263719086388
                  </a>
                  <a href="mailto:info@fastinproperty.co.za" className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-blue-900 font-bold py-4 px-8 rounded-xl transition-all duration-300">
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}