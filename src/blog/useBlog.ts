import { useContext } from 'react';
import { BlogContext } from './blog-store';

export function useBlog() {
  const ctx = useContext(BlogContext);
  if (!ctx) throw new Error('useBlog must be used within BlogProvider');
  return ctx;
}
