import { useContext } from 'react';
import { HousesContext } from './houses-store';

export function useHouses() {
  const ctx = useContext(HousesContext);
  if (!ctx) throw new Error('useHouses must be used within HousesProvider');
  return ctx;
}
