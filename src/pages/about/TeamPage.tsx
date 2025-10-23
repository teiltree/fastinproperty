export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-900 to-yellow-500 bg-clip-text text-transparent">The Team</h1>

          <div className="grid grid-cols-1 gap-8 items-center mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 border border-blue-100">
              <h2 className="text-2xl font-semibold text-blue-800 mb-6">Professional Excellence</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Meet our team of professionals making up our Executive and Senior management personnel.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our leadership team combines extensive real estate experience with innovative thinking, ensuring that
                FastIn Property Auctions remains at the forefront of industry developments.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Each team member brings unique expertise and a shared commitment to delivering exceptional results for our clients and partners.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The FastIn Property Auctions team is committed to realizing the best value for Sellers and Buyers through a simple, transparent and auditable process.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Executive Leadership</h3>
              <p className="text-gray-600 text-sm">Strategic vision and industry expertise</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Senior Management</h3>
              <p className="text-gray-600 text-sm">Operational excellence and client focus</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Technical Team</h3>
              <p className="text-gray-600 text-sm">Innovation and platform development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
