import { useEffect } from "react";
import { Link } from "react-router-dom";
import { HelpCircle, ChevronDown, Info } from "lucide-react";

export default function FaqsPage() {
  useEffect(() => {
    document.title = "FAQs • FastIn Property Auctions";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <div className="flex items-start sm:items-center justify-between gap-6 flex-col sm:flex-row">
            <div>
              <div className="flex items-center gap-2 text-blue-200/90 text-sm">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <span className="text-white">FAQs</span>
              </div>
              <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                Frequently Asked Questions
              </h1>
              <p className="mt-3 text-blue-100 max-w-2xl">
                Find quick answers to common questions about our auctions, fees, and services.
              </p>
            </div>
            <div className="shrink-0 bg-white/10 rounded-2xl p-4 ring-1 ring-white/20">
              <HelpCircle className="w-12 h-12" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl shadow-xl ring-1 ring-black/5 overflow-hidden">
            <div className="px-4 sm:px-8 py-6 sm:py-8">
              <div className="flex items-center gap-3 text-blue-700 mb-4">
                <Info className="w-6 h-6" />
                <h2 className="text-xl sm:text-2xl font-bold">Your Questions, Answered</h2>
              </div>

              <div className="divide-y divide-slate-200">
                {/* 1 */}
                <details className="group py-4" open>
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <div className="flex items-center gap-2 text-left">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">1</span>
                      <h3 className="font-semibold text-slate-900">Where is FastIn Property Auctions?</h3>
                    </div>
                    <ChevronDown className="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-3 text-slate-700">
                    FastIn Property Auctions has its main Branch at FastIn House, 2 Smithfield Way, Longlands Industrial Site, Marondera. Telephone +263784086388 / +263719086388
                  </div>
                </details>

                {/* 2 */}
                <details className="group py-4">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <div className="flex items-center gap-2 text-left">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">2</span>
                      <h3 className="font-semibold text-slate-900">What are the Commission rates applicable for Online Auctions?</h3>
                    </div>
                    <ChevronDown className="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-3 text-slate-700 space-y-3">
                    <p>
                      FastIn Property Auctions reserves the right to change any of the commission charges quoted below. At present however our commission rates applicable to the Sales Floors are as follows:
                    </p>
                    <div className="overflow-x-auto">
                      <table className="min-w-[480px] w-full text-left text-sm">
                        <thead>
                          <tr className="text-slate-500">
                            <th className="py-2 pr-4">Percentage</th>
                            <th className="py-2">Description</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          <tr>
                            <td className="py-2 pr-4 font-semibold">5.00%</td>
                            <td className="py-2">Sales Commission payable by Seller</td>
                          </tr>
                          <tr>
                            <td className="py-2 pr-4 font-semibold">6.00%</td>
                            <td className="py-2">Purchaser’s Levy payable by Purchaser</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </details>

                {/* 3 */}
                <details className="group py-4">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <div className="flex items-center gap-2 text-left">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">3</span>
                      <h3 className="font-semibold text-slate-900">What are the Commission rates applicable to Outside Sales?</h3>
                    </div>
                    <ChevronDown className="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-3 text-slate-700 space-y-3">
                    <p>
                      FastIn Property Auctions reserves the right to change any of the commission charges quoted below. At present however our commission rates applicable to the Sales Floors are as follows:
                    </p>
                    <div className="overflow-x-auto">
                      <table className="min-w-[480px] w-full text-left text-sm">
                        <thead>
                          <tr className="text-slate-500">
                            <th className="py-2 pr-4">Percentage</th>
                            <th className="py-2">Description</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          <tr>
                            <td className="py-2 pr-4 font-semibold">5.00%</td>
                            <td className="py-2">Sales Commission payable by Seller</td>
                          </tr>
                          <tr>
                            <td className="py-2 pr-4 font-semibold">6.00%</td>
                            <td className="py-2">Purchaser’s Levy payable by Purchaser</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </details>

                {/* 4 */}
                <details className="group py-4">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <div className="flex items-center gap-2 text-left">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">4</span>
                      <h3 className="font-semibold text-slate-900">What are the Commission rates applicable to Residential Rentals?</h3>
                    </div>
                    <ChevronDown className="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-3 text-slate-700 space-y-3">
                    <p>
                      FastIn Property Auctions reserves the right to change any of the commission charges quoted below. At present however our commission rates applicable to the Sales Floors are as follows:
                    </p>
                    <div className="overflow-x-auto">
                      <table className="min-w-[480px] w-full text-left text-sm">
                        <thead>
                          <tr className="text-slate-500">
                            <th className="py-2 pr-4">Percentage</th>
                            <th className="py-2">Description</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          <tr>
                            <td className="py-2 pr-4 font-semibold">15.00%</td>
                            <td className="py-2">Rentals Commission payable by Landlord</td>
                          </tr>
                          <tr>
                            <td className="py-2 pr-4 font-semibold">6.00%</td>
                            <td className="py-2">Tenant’s Levy payable by Tenant</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </details>

                {/* 5 */}
                <details className="group py-4">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <div className="flex items-center gap-2 text-left">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">5</span>
                      <h3 className="font-semibold text-slate-900">What are the Commission rates applicable to Commercial Rentals?</h3>
                    </div>
                    <ChevronDown className="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-3 text-slate-700 space-y-3">
                    <p>
                      FastIn Property Auctions reserves the right to change any of the commission charges quoted below. At present however our commission rates applicable to the Sales Floors are as follows:
                    </p>
                    <div className="overflow-x-auto">
                      <table className="min-w-[480px] w-full text-left text-sm">
                        <thead>
                          <tr className="text-slate-500">
                            <th className="py-2 pr-4">Percentage</th>
                            <th className="py-2">Description</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          <tr>
                            <td className="py-2 pr-4 font-semibold">10.00%</td>
                            <td className="py-2">Rentals Commission payable by Landlord</td>
                          </tr>
                          <tr>
                            <td className="py-2 pr-4 font-semibold">6.00%</td>
                            <td className="py-2">Tenant’s Levy payable by Tenant</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </details>

                {/* 6 */}
                <details className="group py-4">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <div className="flex items-center gap-2 text-left">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">6</span>
                      <h3 className="font-semibold text-slate-900">What is the surety deposit required for each sale?</h3>
                    </div>
                    <ChevronDown className="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-3 text-slate-700">
                    A surety deposit is required in order to increase your spending limit. You will receive an email when you register to bid regarding your spending limit and how to increase it.
                  </div>
                </details>

                {/* 7 */}
                <details className="group py-4">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <div className="flex items-center gap-2 text-left">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">7</span>
                      <h3 className="font-semibold text-slate-900">How much does a property valuation cost?</h3>
                    </div>
                    <ChevronDown className="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-3 text-slate-700">
                    Kindly contact our Customer Support Team on +263784086388 / +263719086388 to find our more about property valuations.
                  </div>
                </details>

                {/* 8 */}
                <details className="group py-4">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <div className="flex items-center gap-2 text-left">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">8</span>
                      <h3 className="font-semibold text-slate-900">What is the property entry fee?</h3>
                    </div>
                    <ChevronDown className="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-3 text-slate-700">
                    Kindly contact our Customer Support Team on +263784086388 / +263719086388 to find our more about property valuations.
                  </div>
                </details>

                {/* 9 */}
                <details className="group py-4">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <div className="flex items-center gap-2 text-left">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">9</span>
                      <h3 className="font-semibold text-slate-900">If I sell my property on auction how long will it take for me to receive payment?</h3>
                    </div>
                    <ChevronDown className="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-3 text-slate-700">
                    In most cases, our online property auction sales end on a Wednesday evening. We require buyers to pay within 48 hours and remit payments to sellers as soon as the funds are available.
                  </div>
                </details>

                {/* 10 */}
                <details className="group py-4">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <div className="flex items-center gap-2 text-left">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">10</span>
                      <h3 className="font-semibold text-slate-900">Who do I speak to find out whether or not my properties have been sold?</h3>
                    </div>
                    <ChevronDown className="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-3 text-slate-700">
                    Kindly check your email for a Sellers Report detailing the status of all of your lots. If you require further assistance, please kindly contact our Customer Service Team on +263784086388 / +263719086388
                  </div>
                </details>

                {/* 11 */}
                <details className="group py-4">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <div className="flex items-center gap-2 text-left">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">11</span>
                      <h3 className="font-semibold text-slate-900">Who do I speak to find out how much my properties were sold for and when I can collect payment?</h3>
                    </div>
                    <ChevronDown className="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-3 text-slate-700">
                    Kindly check your email for a Sellers Report detailing the status of all of your lots. If you require further assistance, please kindly contact our Customer Service Team on +263784086388 / +263719086388
                  </div>
                </details>

                {/* 12 */}
                <details className="group py-4">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <div className="flex items-center gap-2 text-left">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">12</span>
                      <h3 className="font-semibold text-slate-900">Are there any storage charges?</h3>
                    </div>
                    <ChevronDown className="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-3 text-slate-700 space-y-2">
                    <p>
                      Should you make a purchase on an auction you are given 48 hours after payment to collect your items. Please note that if collection is not made with in the time frame, security and insurance charges will occur per day, per item or vehicle.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Vacant land : $300.00</li>
                      <li>Built property : $500.00</li>
                    </ul>
                  </div>
                </details>

                {/* 13 */}
                <details className="group py-4">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <div className="flex items-center gap-2 text-left">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">13</span>
                      <h3 className="font-semibold text-slate-900">How do I arrange removal of my household goods?</h3>
                    </div>
                    <ChevronDown className="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-3 text-slate-700">
                    Should you wish to have your goods removed please contact our Sales Team on +263784086388 / +263719086388.
                  </div>
                </details>

                {/* 14 */}
                <details className="group py-4">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <div className="flex items-center gap-2 text-left">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">14</span>
                      <h3 className="font-semibold text-slate-900">What are the applicable removals fees when utilizing FastIn Property Auctions's Transport Fleet?</h3>
                    </div>
                    <ChevronDown className="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-3 text-slate-700">
                    Please note that all transport fees will accrue a cost of the following:
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>1 Ton - 3.5 Ton  $60.00 plus $7.00 per kilometer travelled</li>
                      <li>7 Ton $70.00 plus $5.00 per kilometer travelled</li>
                      <li>10 Ton $150.00 plus $7.00 per kilometer travelled</li>
                      <li>15 Ton $300.00 plus $7.00 per kilometer travelled</li>
                      <li>7 Ton with Crane $140.00 plus $7.00 per kilometer travelled</li>
                    </ul>
                  </div>
                </details>

                {/* 15 */}
                <details className="group py-4">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <div className="flex items-center gap-2 text-left">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">15</span>
                      <h3 className="font-semibold text-slate-900">How much notice is required when making a booking for collection of goods?</h3>
                    </div>
                    <ChevronDown className="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-3 text-slate-700">
                    We recommend that when booking a collection, you provide at least 24 hours’ notice.
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
