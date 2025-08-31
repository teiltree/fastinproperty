

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-light text-center mb-4 text-gray-800">Disclaimer</h1>
          <p className="text-sm text-gray-500 text-center mb-10">Home / Disclaimer</p>

          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              The owners of this site make every effort to ensure that the information contained on this website at the
              time of publishing is true and accurate.
            </p>
            <p>
              Please note that neither the owners of this site, nor their associated agents, can guarantee that this
              information is accurate at all times.
            </p>
            <p>
              As a result, the owners of this site accept no responsibility or liability that may arise through the
              reliance of any user on any of the information contained herein.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
