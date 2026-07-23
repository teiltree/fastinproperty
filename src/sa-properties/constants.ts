export type SaDevelopment = {
  slug: string;
  name: string;
  tagline: string;
  location: string;
  description: string;
  longDescription: string;
  heroImage?: string;
  brochureUrl: string;
  priceListUrl?: string;
  pricingAvailable: boolean;
  launchDate?: string;
  marketingFolderUrl: string;
  galleryImages: string[];
  videoUrl?: string;
  sitePlanUrl?: string;
  highlights: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
};

export const SA_MARKETING_FOLDER =
  'https://drive.google.com/drive/folders/1ljCgTz5h206Q09eKUTpSJQvPrcqsdXa-?usp=sharing';

export const WHATSAPP_NUMBER = '263784086388';

export const CORE_POSITIONING = [
  {
    title: 'Legality & compliance',
    text: 'Fastin markets South African properties to Zimbabweans — fully compliant, as EAC jurisdiction does not apply to SA developments.',
  },
  {
    title: 'Trust & authority',
    text: 'Mandated by Central Developments — South Africa’s largest residential developer.',
  },
  {
    title: 'Convenience',
    text: 'Buy South African property from Zimbabwe with verified pricing, guided processes, and secure developer-direct transactions.',
  },
  {
    title: 'Investment value',
    text: 'High-quality developments, USD pricing, rental yields, and long-term capital growth.',
  },
] as const;

export const GLOBAL_SA_KEYWORDS = [
  'Buy South African property from Zimbabwe',
  'South Africa property investment Zimbabwe',
  'Central Developments Zimbabwe',
  'SA apartments for sale Zimbabwe buyers',
];
