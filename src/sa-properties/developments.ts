import type { SaDevelopment } from './constants';
import { GLOBAL_SA_KEYWORDS, SA_MARKETING_FOLDER } from './constants';
import {
  driveFileView,
  SA_DRIVE_FOLDERS,
  SA_DRIVE_VIDEOS,
  SA_LOCAL_IMAGES,
} from './media';

export const SA_DEVELOPMENTS: SaDevelopment[] = [
  {
    slug: 'knights-court',
    name: "Knight's Court",
    tagline: 'Modern living in a secure, well-located estate',
    location: 'South Africa',
    description:
      "Knight's Court offers quality residential units designed for owner-occupiers and investors seeking USD-priced South African property with strong rental demand.",
    longDescription:
      "Knight's Court is a Central Developments project marketed exclusively to Zimbabwean buyers through Fastin Property Auctions — Zimbabwe's official gateway to compliant South African property investment. Each unit is sold with verified USD pricing, developer-direct security, and full guidance through the cross-border purchase process. Ideal for buyers seeking modern finishes, estate security, and long-term capital growth in a proven residential node.",
    heroImage: SA_LOCAL_IMAGES.knightsCourt.hero,
    brochureUrl:
      'https://drive.google.com/file/d/1ErU14AzeNK7oA47hQF_y9kMn5OZ6oAx1/view?usp=sharing',
    priceListUrl: '/sa-properties/knights-court-usd-price-list.pdf',
    pricingAvailable: true,
    marketingFolderUrl: SA_DRIVE_FOLDERS.knightsCourt,
    galleryImages: [...SA_LOCAL_IMAGES.knightsCourt.gallery],
    videoUrl: driveFileView(SA_DRIVE_VIDEOS.knightsCourt),
    sitePlanUrl: SA_LOCAL_IMAGES.knightsCourt.sitePlan,
    highlights: [
      'USD-priced units from Central Developments',
      'Developer-direct, compliant cross-border sales',
      'Strong rental and resale potential',
      'Guided purchase process from Zimbabwe',
    ],
    seo: {
      title: "Knight's Court | Buy SA Property from Zimbabwe | Fastin Property Auctions",
      description:
        "Explore Knight's Court by Central Developments. Buy South African property from Zimbabwe with verified USD pricing, brochures, and expert guidance from Fastin Property Auctions.",
      keywords: [...GLOBAL_SA_KEYWORDS, "Knight's Court South Africa", 'Central Developments Knight\'s Court'],
    },
  },
  {
    slug: 'colorado',
    name: 'Colorado',
    tagline: 'Contemporary apartments in a high-growth corridor',
    location: 'South Africa',
    description:
      'Colorado delivers contemporary apartment living with investor-friendly USD pricing — marketed to Zimbabwean buyers through Fastin’s mandated Central Developments channel.',
    longDescription:
      'Colorado is a Central Developments residential offering positioned for Zimbabwean investors and end-users who want quality South African property without leaving Harare. Fastin provides verified USD price lists, brochure access, consultation booking, and step-by-step support for compliant cross-border transactions. Colorado combines modern design, estate amenities, and the backing of South Africa’s largest residential developer.',
    heroImage: SA_LOCAL_IMAGES.colorado.hero,
    brochureUrl:
      'https://drive.google.com/file/d/1OsCLOqlk_kMfXcWh4CDf_rnXAYC3_xUw/view?usp=sharing',
    priceListUrl: '/sa-properties/colorado-usd-price-list.pdf',
    pricingAvailable: true,
    marketingFolderUrl: SA_DRIVE_FOLDERS.colorado,
    galleryImages: [...SA_LOCAL_IMAGES.colorado.gallery],
    videoUrl: driveFileView(SA_DRIVE_VIDEOS.central),
    sitePlanUrl: SA_LOCAL_IMAGES.colorado.sitePlan,
    highlights: [
      'Contemporary apartment product',
      'USD ROI & pricing PDF available for download',
      'Mandated Central Developments channel',
      'Full investment pack on request',
    ],
    seo: {
      title: 'Colorado | SA Property Investment for Zimbabwe Buyers | Fastin',
      description:
        'Colorado by Central Developments — buy South African apartments from Zimbabwe with verified USD pricing. Download the ROI PDF and book a consultation with Fastin.',
      keywords: [...GLOBAL_SA_KEYWORDS, 'Colorado Central Developments', 'SA apartments Zimbabwe'],
    },
  },
  {
    slug: 'woodlands-place',
    name: 'Woodlands Place',
    tagline: 'Established estate living with investment appeal',
    location: 'South Africa',
    description:
      'Woodlands Place offers established estate character with modern unit types — ideal for Zimbabwean buyers seeking USD-denominated SA property with rental yield potential.',
    longDescription:
      'Woodlands Place is part of the Central Developments portfolio available to Zimbabwean purchasers through Fastin Property Auctions. Buyers benefit from verified USD pricing, secure developer-direct contracts, and Fastin’s guided cross-border process. Woodlands Place suits families and investors looking for quality finishes, community estate living, and long-term capital appreciation in South Africa.',
    heroImage: SA_LOCAL_IMAGES.woodlands.hero,
    brochureUrl:
      'https://drive.google.com/file/d/1GWZ0UcAB87eGSXTJ1W3HG5Rl9YUfKI4o/view?usp=sharing',
    priceListUrl: '/sa-properties/woodlands-place-usd-price-list.pdf',
    pricingAvailable: true,
    marketingFolderUrl: SA_DRIVE_FOLDERS.woodlands,
    galleryImages: [...SA_LOCAL_IMAGES.woodlands.gallery],
    videoUrl: driveFileView(SA_DRIVE_VIDEOS.woodlandsMiddle),
    sitePlanUrl: SA_LOCAL_IMAGES.woodlands.sitePlan,
    highlights: [
      'Estate-style residential product',
      'USD ROI & pricing PDF available for download',
      'Compliant Zimbabwe-to-SA purchase pathway',
      'Consultation and investment pack available',
    ],
    seo: {
      title: 'Woodlands Place | Central Developments | Fastin Property Auctions',
      description:
        'Woodlands Place — South African property for Zimbabwe buyers. Verified USD pricing, brochures, and expert support from Fastin Property Auctions.',
      keywords: [...GLOBAL_SA_KEYWORDS, 'Woodlands Place South Africa', 'Central Developments Woodlands'],
    },
  },
  {
    slug: 'blue-hills',
    name: 'Blue Hills',
    tagline: 'New launch — pricing and units releasing soon',
    location: 'South Africa',
    description:
      'Blue Hills is the next Central Developments launch for Zimbabwean buyers. Official launch scheduled for 1 September — register your interest now for early access.',
    longDescription:
      'Blue Hills is an upcoming Central Developments project marketed through Fastin Property Auctions as part of Zimbabwe’s official gateway to South African property investment. Pricing is being finalised ahead of the official launch on 1 September. Zimbabwean buyers can preview the brochure, request the full investment pack, and book a consultation to be first in line when USD pricing is released.',
    heroImage: SA_LOCAL_IMAGES.blueHills.hero,
    brochureUrl:
      'https://drive.google.com/file/d/1bq9OpyjcL451NiZ1XXBVHV-7DgGCekDp/view?usp=sharing',
    pricingAvailable: false,
    launchDate: '2026-09-01',
    marketingFolderUrl: SA_MARKETING_FOLDER,
    galleryImages: [...SA_LOCAL_IMAGES.blueHills.gallery],
    videoUrl: driveFileView(SA_DRIVE_VIDEOS.central),
    highlights: [
      'Official launch: 1 September 2026',
      'USD pricing releasing soon',
      'Brochure available now',
      'Register for early access',
    ],
    seo: {
      title: 'Blue Hills | Coming Soon | SA Property for Zimbabwe | Fastin',
      description:
        'Blue Hills by Central Developments — launching 1 September. Zimbabwean buyers: preview the brochure and register for early access via Fastin Property Auctions.',
      keywords: [...GLOBAL_SA_KEYWORDS, 'Blue Hills Central Developments', 'Blue Hills SA property launch'],
    },
  },
];

export function getDevelopmentBySlug(slug: string): SaDevelopment | undefined {
  return SA_DEVELOPMENTS.find(d => d.slug === slug);
}
