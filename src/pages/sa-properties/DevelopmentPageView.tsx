import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Calendar,
  Download,
  ExternalLink,
  FileText,
  Map,
  Play,
  Sparkles,
} from 'lucide-react';
import SeoHead from '@/components/blog/SeoHead';
import ConsultationForm from '@/components/sa-properties/ConsultationForm';
import ImageGallery from '@/components/sa-properties/ImageGallery';
import StrategicPositioning from '@/components/sa-properties/StrategicPositioning';
import WhatsAppButton from '@/components/sa-properties/WhatsAppButton';
import type { SaDevelopment } from '@/sa-properties/constants';
import { SA_MARKETING_FOLDER } from '@/sa-properties/constants';

type DevelopmentPageProps = {
  development: SaDevelopment;
};

function isImageUrl(url: string): boolean {
  return (
    url.includes('uc?export=view') ||
    url.includes('drive.google.com/uc') ||
    /\.(jpg|jpeg|png|webp|gif)(\?|$)/i.test(url) ||
    url.startsWith('/')
  );
}

function formatLaunchDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-ZW', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function DevelopmentPageView({ development }: DevelopmentPageProps) {
  const isBlueHills = development.slug === 'blue-hills';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SeoHead
        title={development.seo.title}
        description={development.seo.description}
        keywords={development.seo.keywords}
      />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-blue-950">
        {development.heroImage ? (
          <img
            src={development.heroImage}
            alt={development.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-900/70 to-blue-900/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/40 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">
              Central Developments · South Africa
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{development.name}</h1>
          <p className="text-xl text-blue-100 max-w-2xl mb-6">{development.tagline}</p>
          {isBlueHills && development.launchDate && (
            <div className="inline-flex items-center gap-2 bg-amber-500 text-blue-950 px-5 py-3 rounded-xl font-bold mb-6">
              <Calendar className="w-5 h-5" />
              Official launch: {formatLaunchDate(development.launchDate)}
            </div>
          )}
          <div className="flex flex-wrap gap-4">
            <a
              href={development.brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-xl"
            >
              <FileText className="w-5 h-5" /> View brochure
            </a>
            {development.pricingAvailable && development.priceListUrl && (
              <a
                href={development.priceListUrl}
                download
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white font-bold px-6 py-3 rounded-xl"
              >
                <Download className="w-5 h-5" /> USD ROI & pricing
              </a>
            )}
            <WhatsAppButton developmentName={development.name} variant="outline" />
          </div>
        </div>
      </section>

      {/* Pricing notice for Blue Hills */}
      {isBlueHills && (
        <div className="bg-amber-50 border-b-2 border-amber-200">
          <div className="max-w-7xl mx-auto px-4 py-4 text-center text-amber-900 text-sm md:text-base">
            <strong>USD pricing not yet available.</strong> The official Blue Hills launch is
            scheduled for 1 September 2026. Brochure and investment pack available now — register
            below to receive pricing as soon as it is finalised.
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16 md:space-y-24">
        {/* About */}
        <section className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">About {development.name}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{development.description}</p>
            <p className="text-gray-600 leading-relaxed">{development.longDescription}</p>
            <ul className="mt-6 space-y-3">
              {development.highlights.map(h => (
                <li key={h} className="flex items-start gap-2 text-gray-700">
                  <span className="text-yellow-500 font-bold mt-0.5">✓</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 space-y-4">
            <h3 className="text-lg font-bold text-blue-900">Quick downloads</h3>
            <a
              href={development.brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors group"
            >
              <span className="flex items-center gap-3 font-semibold text-blue-900">
                <FileText className="w-5 h-5 text-yellow-600" /> Development brochure
              </span>
              <ExternalLink className="w-4 h-4 text-blue-600 group-hover:translate-x-0.5 transition-transform" />
            </a>
            {development.pricingAvailable && development.priceListUrl ? (
              <a
                href={development.priceListUrl}
                download
                className="flex items-center justify-between p-4 rounded-xl bg-yellow-50 hover:bg-yellow-100 transition-colors group"
              >
                <span className="flex items-center gap-3 font-semibold text-blue-900">
                  <Download className="w-5 h-5 text-yellow-600" /> USD ROI & pricing (PDF)
                </span>
                <Download className="w-4 h-4 text-blue-600" />
              </a>
            ) : (
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 text-sm">
                USD price list — releasing at launch (1 September 2026)
              </div>
            )}
            <a
              href={development.marketingFolderUrl || SA_MARKETING_FOLDER}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <span className="flex items-center gap-3 font-semibold text-blue-900">
                <Map className="w-5 h-5" /> Site plans, videos & images
              </span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Gallery */}
        <section>
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Gallery & lifestyle</h2>
          {isBlueHills && (
            <p className="text-gray-600 text-sm mb-4">
              Preview images from the official Blue Hills Lifestyle Estate brochure. Full photography
              will be added at launch (1 September 2026).
            </p>
          )}
          <ImageGallery development={development} />
        </section>

        {/* Video & site plan */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Play className="w-8 h-8 text-blue-900" />
              <h3 className="text-xl font-bold text-blue-900">Virtual tour & video</h3>
            </div>
            {development.videoUrl ? (
              <a
                href={development.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 aspect-video rounded-xl bg-blue-900 text-white font-bold hover:bg-blue-800 transition-colors"
              >
                <Play className="w-10 h-10 text-yellow-400" />
                Watch virtual tour & video
              </a>
            ) : (
              <p className="text-gray-600 text-sm mb-4">
                Virtual tour and video content for {development.name} is available in the
                Central Developments marketing folder.
              </p>
            )}
            <a
              href={development.marketingFolderUrl || SA_MARKETING_FOLDER}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-900 font-bold hover:text-yellow-600 mt-4"
            >
              Open video & tour files <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Map className="w-8 h-8 text-blue-900" />
              <h3 className="text-xl font-bold text-blue-900">Site development plan</h3>
            </div>
            {development.sitePlanUrl && isImageUrl(development.sitePlanUrl) ? (
              <a
                href={development.sitePlanUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-video rounded-xl overflow-hidden bg-gray-100 mb-4 border border-gray-200"
              >
                <img
                  src={development.sitePlanUrl}
                  alt={`${development.name} site development plan`}
                  className="w-full h-full object-contain"
                />
              </a>
            ) : (
              <p className="text-gray-600 text-sm mb-4">
                Site development plans (SDPs) for {development.name} are in the shared marketing
                folder alongside renders and lifestyle imagery.
              </p>
            )}
            <a
              href={
                development.sitePlanUrl && !isImageUrl(development.sitePlanUrl)
                  ? development.sitePlanUrl
                  : development.marketingFolderUrl || SA_MARKETING_FOLDER
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-900 text-white font-bold px-5 py-3 rounded-xl hover:bg-blue-800"
            >
              {development.sitePlanUrl && isImageUrl(development.sitePlanUrl)
                ? 'Open full site plan'
                : 'Download site plan'}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Forms */}
        <section className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
            <ConsultationForm developmentName={development.name} formType="consultation" />
          </div>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
            <ConsultationForm developmentName={development.name} formType="investment-pack" />
          </div>
        </section>

        <div className="flex flex-wrap gap-4 justify-center">
          <WhatsAppButton developmentName={development.name} />
        </div>

        <StrategicPositioning compact />

        <div className="text-center">
          <Link
            to="/south-africa-properties/why-zimbabweans-buy-in-south-africa"
            className="inline-flex items-center gap-2 text-blue-900 font-bold hover:text-yellow-600"
          >
            Why Zimbabweans are buying in South Africa <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
