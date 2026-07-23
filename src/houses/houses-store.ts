import { createContext } from 'react';
import type { HouseListing, HousesData } from './types';

export type HousesContextValue = {
  data: HousesData;
  loading: boolean;
  homepageListings: HouseListing[];
  saveData: (data: HousesData) => void;
  exportData: () => void;
  importData: (file: File) => Promise<void>;
  getListing: (id: string) => HouseListing | undefined;
};

export const HousesContext = createContext<HousesContextValue | null>(null);
