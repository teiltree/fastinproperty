import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { BlogContext, type BlogContextValue } from './blog-store';
import {
  exportDataFile,
  getSeedData,
  importDataFile,
  loadFromLocalStorage,
  loadFromPublicFile,
  mergeBlogData,
  saveToLocalStorage,
} from './storage';
import type { BlogComment, BlogCommentStatus } from './types';
import { uniqueId } from './utils';

export function BlogProvider({ children }: { children: ReactNode }) {
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
      setData(mergeBlogData(getSeedData(), file, local));
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
    const merged = mergeBlogData(getSeedData(), imported, imported);
    setData(merged);
  }, []);

  const publishedPosts = useMemo(
    () =>
      [...data.posts]
        .filter(p => p.status === 'published')
        .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1)),
    [data.posts]
  );

  const getPostBySlug = useCallback(
    (slug: string, includeDrafts = false) => {
      const match = data.posts.find(p => p.slug === slug);
      if (!match) return null;
      if (!includeDrafts && match.status !== 'published') return null;
      return match;
    },
    [data.posts]
  );

  const getAuthor = useCallback(
    (id: string) => data.authors.find(a => a.id === id),
    [data.authors]
  );

  const getCategory = useCallback(
    (id: string) => data.categories.find(c => c.id === id),
    [data.categories]
  );

  const getTag = useCallback(
    (id: string) => data.tags.find(t => t.id === id),
    [data.tags]
  );

  const getPostsByCategory = useCallback(
    (categorySlug: string) => {
      const cat = data.categories.find(c => c.slug === categorySlug);
      if (!cat) return [];
      return publishedPosts.filter(p => p.categoryId === cat.id);
    },
    [data.categories, publishedPosts]
  );

  const getPostsByTag = useCallback(
    (tagSlug: string) => {
      const tag = data.tags.find(t => t.slug === tagSlug);
      if (!tag) return [];
      return publishedPosts.filter(p => p.tagIds.includes(tag.id));
    },
    [data.tags, publishedPosts]
  );

  const getCommentsForPost = useCallback(
    (postId: string, includeNonApproved = false) => {
      const list = (data.comments ?? []).filter(c => c.postId === postId);
      const filtered = includeNonApproved ? list : list.filter(c => c.status === 'approved');
      return filtered.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
    },
    [data.comments]
  );

  const addComment = useCallback(
    (input: {
      postId: string;
      authorName: string;
      authorEmail?: string;
      content: string;
      status?: BlogCommentStatus;
    }) => {
      const comment: BlogComment = {
        id: uniqueId('comment'),
        postId: input.postId,
        authorName: input.authorName.trim(),
        authorEmail: input.authorEmail?.trim() || undefined,
        content: input.content.trim(),
        createdAt: new Date().toISOString().slice(0, 10),
        status: input.status ?? 'approved',
      };
      saveData({
        ...data,
        comments: [...(data.comments ?? []), comment],
      });
    },
    [data, saveData]
  );

  const submitComment = useCallback(
    (input: {
      postId: string;
      authorName: string;
      authorEmail?: string;
      content: string;
    }) => {
      addComment({ ...input, status: 'pending' });
    },
    [addComment]
  );

  const setCommentStatus = useCallback(
    (commentId: string, status: BlogCommentStatus) => {
      saveData({
        ...data,
        comments: (data.comments ?? []).map(c => (c.id === commentId ? { ...c, status } : c)),
      });
    },
    [data, saveData]
  );

  const deleteComment = useCallback(
    (commentId: string) => {
      saveData({
        ...data,
        comments: (data.comments ?? []).filter(c => c.id !== commentId),
      });
    },
    [data, saveData]
  );

  const value = useMemo<BlogContextValue>(
    () => ({
      data,
      loading,
      publishedPosts,
      saveData,
      exportData,
      importData,
      getPostBySlug,
      getAuthor,
      getCategory,
      getTag,
      getPostsByCategory,
      getPostsByTag,
      getCommentsForPost,
      submitComment,
      setCommentStatus,
      deleteComment,
      addComment,
    }),
    [
      data,
      loading,
      publishedPosts,
      saveData,
      exportData,
      importData,
      getPostBySlug,
      getAuthor,
      getCategory,
      getTag,
      getPostsByCategory,
      getPostsByTag,
      getCommentsForPost,
      submitComment,
      setCommentStatus,
      deleteComment,
      addComment,
    ]
  );

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
}
