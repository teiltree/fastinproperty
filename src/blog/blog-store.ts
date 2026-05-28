import { createContext } from 'react';
import type { BlogAuthor, BlogCategory, BlogData, BlogPost, BlogTag } from './types';

export type BlogContextValue = {
  data: BlogData;
  loading: boolean;
  publishedPosts: BlogPost[];
  saveData: (data: BlogData) => void;
  exportData: () => void;
  importData: (file: File) => Promise<void>;
  getPostBySlug: (slug: string, includeDrafts?: boolean) => BlogPost | null;
  getAuthor: (id: string) => BlogAuthor | undefined;
  getCategory: (id: string) => BlogCategory | undefined;
  getTag: (id: string) => BlogTag | undefined;
  getPostsByCategory: (categorySlug: string) => BlogPost[];
  getPostsByTag: (tagSlug: string) => BlogPost[];
};

export const BlogContext = createContext<BlogContextValue | null>(null);
