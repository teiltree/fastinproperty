import { createContext } from 'react';
import type {
  BlogAuthor,
  BlogCategory,
  BlogComment,
  BlogCommentStatus,
  BlogData,
  BlogPost,
  BlogTag,
} from './types';

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
  getCommentsForPost: (postId: string, includeNonApproved?: boolean) => BlogComment[];
  submitComment: (input: {
    postId: string;
    authorName: string;
    authorEmail?: string;
    content: string;
  }) => void;
  setCommentStatus: (commentId: string, status: BlogCommentStatus) => void;
  deleteComment: (commentId: string) => void;
  addComment: (input: {
    postId: string;
    authorName: string;
    authorEmail?: string;
    content: string;
    status?: BlogCommentStatus;
  }) => void;
};

export const BlogContext = createContext<BlogContextValue | null>(null);
