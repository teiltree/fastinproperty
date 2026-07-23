import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronDown,
  Scale,
  TrendingUp,
  Wallet,
  Globe,
  Sparkles,
} from 'lucide-react';
import SeoHead from '@/components/blog/SeoHead';
import StrategicPositioning from '@/components/sa-properties/StrategicPositioning';
import WhatsAppButton from '@/components/sa-properties/WhatsAppButton';
import { SA_DEVELOPMENTS } from '@/sa-properties/developments';
import { GLOBAL_SA_KEYWORDS } from '@/sa-properties/constants';

const benefits = [
  {
    icon: Globe,
    title: 'USD-denominated assets',
    text: 'South African developments priced in USD offer currency stability and clear value for Zimbabwean investors.',
  },
  {
    icon: TrendingUp,
    title: 'Rental yield & capital growth',
    text: 'Quality Central Developments product in proven nodes delivers rental income and long-term appreciation.',
  },
  {
    icon: Scale,
    title: 'Compliant cross-border process',
    text: 'Fastin markets SA properties to Zimbabweans in full compliance — EAC jurisdiction does not apply to these SA developments.',
  },
  {
    icon: Wallet,
    title: 'Financing & guided purchase',
    text: 'We guide you through developer-direct contracts, verified pricing, and available financing pathways.',
  },
];

const yieldExamples = [
  { type: '1-bedroom apartment', yield: '8–10% p.a.', note: 'Indicative — varies by development and node' },
  { type: '2-bedroom apartment', yield: '7–9% p.a.', note: 'Strong tenant demand in major metros' },
  { type: 'Estate townhouse', yield: '6–8% p.a.', note: 'Capital growth plus stable rental income' },
];

const faqs = [
  {
    q: 'Can Zimbabweans legally buy property in South Africa through Fastin?',
    a: 'Yes. Fastin Property Auctions is mandated by Central Developments to market South African residential developments to Zimbabwean buyers. These are compliant, developer-direct transactions — EAC jurisdiction does not apply to South African developments.',
  },
  {
    q: 'Why buy through Fastin instead of going direct?',
    a: 'Fastin provides verified USD pricing, local consultation in Harare, WhatsApp support, investment packs, and step-by-step guidance through the cross-border purchase process — backed by Central Developments, SA’s largest residential developer.',
  },
  {
    q: 'What financing options are available?',
    a: 'Options depend on the development and buyer profile. Our team will outline South African bond requirements, deposit structures, and alternative finance routes during your consultation.',
  },
  {
    q: 'When will Blue Hills pricing be available?',
    a: 'Blue Hills pricing is being finalised ahead of the official launch on 1 September 2026. Register your interest now to receive the USD price list as soon as it is released.',
  },
  {
    q: 'How do I get started?',
    a: 'Browse available developments, download brochures and price lists where available, book a consultation, or request a full investment pack. You can also WhatsApp our team for immediate assistance.',
  },
];

export default function WhyBuyInSaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SeoHead
        title="Why Zimbabweans Are Buying in South Africa | Fastin Property Auctions"
        description="Benefits of SA property investment for Zimbabwe buyers — legal process, USD pricing, rental yields, and Central Developments projects via Fastin."
        keywords={[
          ...GLOBAL_SA_KEYWORDS,
          'why buy property in South Africa Zimbabwe',
          'cross border property Zimbabwe South Africa',
        ]}
      />

      <section className="bg-gradient-to-br from-blue-900 to-blue-950 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-semibold">Investment guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Why Zimbabweans Are Buying in <span className="text-yellow-400">South Africa</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            High-quality developments, USD pricing, rental yields, and a compliant pathway — with
            Fastin as your mandated gateway to Central Developments.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
        <StrategicPositioning />

        <section>
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">Key benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map(b => (
              <div
                key={b.title}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
              >
                <b.icon className="w-10 h-10 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold text-blue-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">The legal process explained</h2>
          <ol className="space-y-4 text-gray-700">
            <li className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-yellow-500 text-blue-900 font-bold flex items-center justify-center shrink-0">
                1
              </span>
              <span>
                <strong>Consultation & development selection</strong> — Choose from Central
                Developments projects (Knight&apos;s Court, Colorado, Woodlands Place, Blue Hills)
                with verified information from Fastin.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-yellow-500 text-blue-900 font-bold flex items-center justify-center shrink-0">
                2
              </span>
              <span>
                <strong>Review USD pricing & investment pack</strong> — Download price lists and
                brochures; request the full pack for unit-level detail.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-yellow-500 text-blue-900 font-bold flex items-center justify-center shrink-0">
                3
              </span>
              <span>
                <strong>Developer-direct reservation</strong> — Secure your unit through Central
                Developments with Fastin guiding the cross-border documentation.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-yellow-500 text-blue-900 font-bold flex items-center justify-center shrink-0">
                4
              </span>
              <span>
                <strong>Transfer & handover</strong> — Complete SA transfer requirements with our
                support; EAC rules do not apply to these South African developments.
              </span>
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
            Indicative rental yield examples
          </h2>
          <p className="text-center text-gray-500 text-sm mb-8 max-w-2xl mx-auto">
            Illustrative ranges only — actual yields depend on development, location, and market
            conditions. Request an investment pack for project-specific projections.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg border border-gray-100 text-left">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-6 py-4 font-bold">Unit type</th>
                  <th className="px-6 py-4 font-bold">Indicative yield</th>
                  <th className="px-6 py-4 font-bold hidden md:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {yieldExamples.map(row => (
                  <tr key={row.type} className="border-t border-gray-100">
                    <td className="px-6 py-4 font-semibold text-blue-900">{row.type}</td>
                    <td className="px-6 py-4 text-yellow-700 font-bold">{row.yield}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm hidden md:table-cell">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-blue-50 rounded-3xl p-8 md:p-12 text-center border border-blue-100">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Testimonials</h2>
          <p className="text-gray-600 italic">
            Client testimonials from Zimbabwean SA property buyers will be published here as they
            become available.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Frequently asked questions</h2>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-blue-900 hover:bg-gray-50"
                >
                  {faq.q}
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="text-center bg-gradient-to-br from-blue-900 to-blue-950 rounded-3xl p-10 md:p-14 text-white">
          <h2 className="text-3xl font-bold mb-4">View available developments</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Knight&apos;s Court, Colorado, Woodlands Place, and Blue Hills — explore brochures, price
            lists, and book your consultation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/south-africa-properties"
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-xl"
            >
              View developments <ArrowRight className="w-5 h-5" />
            </Link>
            <WhatsAppButton variant="outline" />
          </div>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            {SA_DEVELOPMENTS.map(d => (
              <Link
                key={d.slug}
                to={`/south-africa-properties/${d.slug}`}
                className="text-sm text-blue-200 hover:text-yellow-400 underline-offset-2 hover:underline"
              >
                {d.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
