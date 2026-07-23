import { HOUSES_SEED_DATA } from './seed';
import type { HousesData } from './types';

const STORAGE_KEY = 'fastin_houses_cms_v1';
const PUBLIC_DATA_URL = '/houses/listings.json';

function cloneData(data: HousesData): HousesData {
  return structuredClone(data);
}

export function loadFromLocalStorage(): HousesData | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as HousesData;
    if (parsed?.version !== 1) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveToLocalStorage(data: HousesData): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export async function loadFromPublicFile(): Promise<HousesData | null> {
  try {
    const res = await fetch(PUBLIC_DATA_URL, { cache: 'no-store' });
    if (!res.ok) return null;
    const parsed = (await res.json()) as HousesData;
    if (parsed?.version !== 1) return null;
    return parsed;
  } catch {
    return null;
  }
}

/** Merge layers: seed → public file → local CMS (local wins). */
export function mergeHousesData(
  seed: HousesData,
  file: HousesData | null,
  local: HousesData | null
): HousesData {
  const base = cloneData(seed);

  const apply = (layer: HousesData | null) => {
    if (!layer) return;
    for (const listing of layer.listings) {
      const i = base.listings.findIndex(l => l.id === listing.id);
      if (i >= 0) base.listings[i] = listing;
      else base.listings.push(listing);
    }
  };

  apply(file);
  apply(local);

  return base;
}

export function getSeedData(): HousesData {
  return cloneData(HOUSES_SEED_DATA);
}

export function exportDataFile(data: HousesData): void {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'listings.json';
  a.click();
  URL.revokeObjectURL(url);
}

export async function importDataFile(file: File): Promise<HousesData> {
  const text = await file.text();
  const parsed = JSON.parse(text) as HousesData;
  if (parsed?.version !== 1) {
    throw new Error('Invalid houses data file (expected version 1).');
  }
  saveToLocalStorage(parsed);
  return parsed;
}

export const HOUSES_STORAGE_KEY = STORAGE_KEY;
