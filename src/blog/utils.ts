import type { BlogPost, BlogPostStatus } from './types';

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function estimateReadTimeMinutes(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function formatBlogDate(isoDate: string): string {
  const d = new Date(isoDate);
  if (Number.isNaN(d.getTime())) return isoDate;
  return d.toLocaleDateString('en-ZW', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function uniqueId(prefix: string): string {
  return `${prefix}-${crypto.randomUUID()}`;
}

export function parseKeywords(input: string): string[] {
  return input
    .split(',')
    .map(k => k.trim())
    .filter(Boolean);
}

export function keywordsToString(keywords: string[]): string {
  return keywords.join(', ');
}

export function isFormSubmitSuccess(value: unknown): boolean {
  return value === true || value === 'true';
}

export function filterPosts(
  posts: BlogPost[],
  opts: {
    query?: string;
    categoryId?: string;
    tagId?: string;
    status?: BlogPostStatus;
  }
) {
  let result = [...posts];
  if (opts.status) result = result.filter(p => p.status === opts.status);
  if (opts.categoryId) result = result.filter(p => p.categoryId === opts.categoryId);
  if (opts.tagId) {
    const tagId = opts.tagId;
    result = result.filter(p => p.tagIds.includes(tagId));
  }
  if (opts.query?.trim()) {
    const q = opts.query.trim().toLowerCase();
    result = result.filter(p => {
      const hay = `${p.title} ${p.excerpt} ${p.content} ${p.seo.keywords.join(' ')}`.toLowerCase();
      return hay.includes(q);
    });
  }
  return result;
}
