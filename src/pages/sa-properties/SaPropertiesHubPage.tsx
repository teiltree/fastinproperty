import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin, Sparkles } from 'lucide-react';
import SeoHead from '@/components/blog/SeoHead';
import StrategicPositioning from '@/components/sa-properties/StrategicPositioning';
import WhatsAppButton from '@/components/sa-properties/WhatsAppButton';
import { SA_DEVELOPMENTS } from '@/sa-properties/developments';
import { GLOBAL_SA_KEYWORDS } from '@/sa-properties/constants';

export default function SaPropertiesHubPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SeoHead
        title="South Africa Properties | Buy from Zimbabwe | Fastin Property Auctions"
        description="Zimbabwe's official gateway to Central Developments — buy South African property with verified USD pricing, compliant processes, and expert guidance from Fastin."
        keywords={GLOBAL_SA_KEYWORDS}
      />

      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/40 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">
              Mandated by Central Developments
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            South Africa <span className="text-yellow-400">Properties</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Zimbabwe&apos;s official gateway to South African property investment. Verified USD
            pricing, developer-direct transactions, and full cross-border guidance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/south-africa-properties/why-zimbabweans-buy-in-south-africa"
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-xl"
            >
              Why buy in South Africa <ArrowRight className="w-5 h-5" />
            </Link>
            <WhatsAppButton variant="outline" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <StrategicPositioning />

        <section className="mt-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Available Developments
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore Central Developments projects available to Zimbabwean buyers through Fastin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {SA_DEVELOPMENTS.map(dev => (
              <Link
                key={dev.slug}
                to={`/south-africa-properties/${dev.slug}`}
                className="group bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-48 relative overflow-hidden">
                  {dev.heroImage ? (
                    <img
                      src={dev.heroImage}
                      alt={dev.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="h-full bg-gradient-to-br from-blue-800 to-blue-950" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 to-transparent" />
                  {!dev.pricingAvailable && (
                    <span className="absolute top-4 right-4 bg-amber-500 text-blue-950 text-xs font-bold uppercase px-3 py-1 rounded-full">
                      Launching soon
                    </span>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white">{dev.name}</h3>
                    <p className="text-blue-200 text-sm flex items-center gap-1 mt-1">
                      <MapPin className="w-4 h-4" /> {dev.location}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{dev.description}</p>
                  {dev.launchDate && !dev.pricingAvailable && (
                    <p className="text-amber-700 text-sm font-semibold flex items-center gap-2 mb-4">
                      <Calendar className="w-4 h-4" />
                      Launch:{' '}
                      {new Date(dev.launchDate).toLocaleDateString('en-ZW', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                  )}
                  <span className="inline-flex items-center gap-2 text-blue-900 font-bold group-hover:text-yellow-600">
                    View development <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
