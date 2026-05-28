import { BLOG_SEED_DATA } from './seed';
import type { BlogData } from './types';

const STORAGE_KEY = 'fastin_blog_cms_v1';
const PUBLIC_DATA_URL = '/blog/posts.json';

function cloneData(data: BlogData): BlogData {
  return structuredClone(data);
}

export function loadFromLocalStorage(): BlogData | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as BlogData;
    if (parsed?.version !== 1) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveToLocalStorage(data: BlogData): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export async function loadFromPublicFile(): Promise<BlogData | null> {
  try {
    const res = await fetch(PUBLIC_DATA_URL, { cache: 'no-store' });
    if (!res.ok) return null;
    const parsed = (await res.json()) as BlogData;
    if (parsed?.version !== 1) return null;
    return parsed;
  } catch {
    return null;
  }
}

/** Merge layers: seed → public file → local CMS (local wins). */
export function mergeBlogData(
  seed: BlogData,
  file: BlogData | null,
  local: BlogData | null
): BlogData {
  const base = cloneData(seed);

  const apply = (layer: BlogData | null) => {
    if (!layer) return;
    for (const author of layer.authors) {
      const i = base.authors.findIndex(a => a.id === author.id);
      if (i >= 0) base.authors[i] = author;
      else base.authors.push(author);
    }
    for (const category of layer.categories) {
      const i = base.categories.findIndex(c => c.id === category.id);
      if (i >= 0) base.categories[i] = category;
      else base.categories.push(category);
    }
    for (const tag of layer.tags) {
      const i = base.tags.findIndex(t => t.id === tag.id);
      if (i >= 0) base.tags[i] = tag;
      else base.tags.push(tag);
    }
    for (const post of layer.posts) {
      const i = base.posts.findIndex(p => p.id === post.id);
      if (i >= 0) base.posts[i] = post;
      else base.posts.push(post);
    }
  };

  apply(file);
  apply(local);

  return base;
}

export function getSeedData(): BlogData {
  return cloneData(BLOG_SEED_DATA);
}

export function exportDataFile(data: BlogData): void {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'posts.json';
  a.click();
  URL.revokeObjectURL(url);
}

export async function importDataFile(file: File): Promise<BlogData> {
  const text = await file.text();
  const parsed = JSON.parse(text) as BlogData;
  if (parsed?.version !== 1) {
    throw new Error('Invalid blog data file (expected version 1).');
  }
  saveToLocalStorage(parsed);
  return parsed;
}

export const BLOG_STORAGE_KEY = STORAGE_KEY;
