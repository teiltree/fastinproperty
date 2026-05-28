export type BlogAuthor = {
  id: string;
  slug: string;
  name: string;
  role: string;
  bio: string;
  avatarUrl?: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
};

export type BlogCategory = {
  id: string;
  slug: string;
  name: string;
  description?: string;
};

export type BlogTag = {
  id: string;
  slug: string;
  name: string;
};

export type BlogSeo = {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
};

export type BlogPostStatus = 'draft' | 'published';

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  featuredImageAlt: string;
  publishedAt: string;
  updatedAt: string;
  status: BlogPostStatus;
  featured: boolean;
  categoryId: string;
  tagIds: string[];
  authorId: string;
  readTimeMinutes: number;
  seo: BlogSeo;
};

export type BlogCommentStatus = 'pending' | 'approved' | 'rejected';

export type BlogComment = {
  id: string;
  postId: string;
  authorName: string;
  authorEmail?: string;
  content: string;
  createdAt: string;
  status: BlogCommentStatus;
};

export type BlogData = {
  version: 1;
  posts: BlogPost[];
  categories: BlogCategory[];
  tags: BlogTag[];
  authors: BlogAuthor[];
  comments: BlogComment[];
};
