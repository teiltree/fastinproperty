

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">


      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-light text-center mb-8 text-gray-800">PRIVACY POLICY AND PAIA MANUAL</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Security lock representing privacy and compliance"
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-blue-800 mb-6">Compliance & Privacy</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                POPIA and CPA Compliant. Read our Policy and PAIA manual.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                FastIn Property is committed to protecting your privacy and ensuring compliance with all relevant South
                African legislation, including the Protection of Personal Information Act (POPIA) and the Consumer
                Protection Act (CPA).
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our comprehensive privacy policies and procedures ensure that your personal information is handled with
                the utmost care and in accordance with legal requirements.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Privacy Policy</h3>
              <p className="text-gray-600 mb-4">
                Our privacy policy outlines how we collect, use, and protect your personal information in compliance
                with POPIA regulations.
              </p>
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded text-sm">
                Download Privacy Policy
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">PAIA Manual</h3>
              <p className="text-gray-600 mb-4">
                Our Promotion of Access to Information Act (PAIA) manual provides information on how to request access
                to records held by FastIn Property.
              </p>
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded text-sm">
                Download PAIA Manual
              </button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-4 text-center">Compliance Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-yellow-600 mb-2">POPIA</h4>
                <p className="text-gray-600 text-sm">Protection of Personal Information Act Compliant</p>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-600 mb-2">CPA</h4>
                <p className="text-gray-600 text-sm">Consumer Protection Act Compliant</p>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-600 mb-2">PAIA</h4>
                <p className="text-gray-600 text-sm">Promotion of Access to Information Act Compliant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
