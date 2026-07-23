export type HouseListingStatus = 'draft' | 'coming_soon' | 'live' | 'sold';

export type HouseListing = {
  id: string;
  title: string;
  subtitle?: string;
  address?: string;
  description?: string;
  image: string;
  images: string[];
  imageAlt: string;
  auctionDate?: string;
  auctionUrl: string;
  buttonText: string;
  status: HouseListingStatus;
  featured: boolean;
  sortOrder: number;
  price?: string;
  bedrooms?: number;
  bathrooms?: number;
  size?: string;
  type?: string;
  updatedAt: string;
};

export type HousesData = {
  version: 1;
  listings: HouseListing[];
};

export const DEFAULT_AUCTION_URL =
  'https://iprop.solutions/fastin/properties/for-auction';
