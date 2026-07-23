import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { HousesContext, type HousesContextValue } from './houses-store';
import {
  exportDataFile,
  getSeedData,
  importDataFile,
  loadFromLocalStorage,
  loadFromPublicFile,
  mergeHousesData,
  saveToLocalStorage,
} from './storage';

export function HousesProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState(getSeedData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const [file, local] = await Promise.all([
        loadFromPublicFile(),
        Promise.resolve(loadFromLocalStorage()),
      ]);
      if (cancelled) return;
      setData(mergeHousesData(getSeedData(), file, local));
      setLoading(false);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const saveData = useCallback((next: typeof data) => {
    setData(next);
    saveToLocalStorage(next);
  }, []);

  const exportData = useCallback(() => {
    exportDataFile(data);
  }, [data]);

  const importData = useCallback(async (file: File) => {
    const imported = await importDataFile(file);
    const merged = mergeHousesData(getSeedData(), imported, imported);
    setData(merged);
  }, []);

  const homepageListings = useMemo(
    () =>
      [...data.listings]
        .filter(l => l.status === 'coming_soon' || l.status === 'live')
        .sort((a, b) => {
          if (a.sortOrder !== b.sortOrder) return a.sortOrder - b.sortOrder;
          return a.updatedAt < b.updatedAt ? 1 : -1;
        }),
    [data.listings]
  );

  const getListing = useCallback(
    (id: string) => data.listings.find(l => l.id === id),
    [data.listings]
  );

  const value = useMemo<HousesContextValue>(
    () => ({
      data,
      loading,
      homepageListings,
      saveData,
      exportData,
      importData,
      getListing,
    }),
    [data, loading, homepageListings, saveData, exportData, importData, getListing]
  );

  return <HousesContext.Provider value={value}>{children}</HousesContext.Provider>;
}
