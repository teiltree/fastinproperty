import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Save, Trash2 } from 'lucide-react';
import { useBlog } from '@/blog/useBlog';
import type { BlogPost, BlogPostStatus } from '@/blog/types';
import {
  estimateReadTimeMinutes,
  keywordsToString,
  parseKeywords,
  slugify,
  uniqueId,
} from '@/blog/utils';

const emptyPost = (): BlogPost => ({
  id: uniqueId('post'),
  slug: '',
  title: '',
  excerpt: '',
  content: '',
  featuredImage: '',
  featuredImageAlt: '',
  publishedAt: new Date().toISOString().slice(0, 10),
  updatedAt: new Date().toISOString().slice(0, 10),
  status: 'draft',
  featured: false,
  categoryId: '',
  tagIds: [],
  authorId: '',
  readTimeMinutes: 1,
  seo: {
    metaTitle: '',
    metaDescription: '',
    keywords: [],
  },
});

export default function BlogAdminPostEditor() {
  const { id } = useParams<{ id: string }>();
  const isNew = !id;
  const navigate = useNavigate();
  const { data, saveData } = useBlog();

  const existing = useMemo(
    () => (isNew ? null : data.posts.find(p => p.id === id) ?? null),
    [data.posts, id, isNew]
  );

  const [post, setPost] = useState<BlogPost>(() => existing ?? emptyPost());
  const [keywordsInput, setKeywordsInput] = useState(() =>
    keywordsToString(post.seo.keywords)
  );

  useEffect(() => {
    if (existing) {
      setPost(existing);
      setKeywordsInput(keywordsToString(existing.seo.keywords));
    }
  }, [existing]);

  useEffect(() => {
    if (isNew && !post.categoryId && data.categories[0]) {
      setPost(p => ({ ...p, categoryId: data.categories[0].id }));
    }
    if (isNew && !post.authorId && data.authors[0]) {
      setPost(p => ({ ...p, authorId: data.authors[0].id }));
    }
  }, [isNew, data.categories, data.authors, post.categoryId, post.authorId]);

  const update = <K extends keyof BlogPost>(key: K, value: BlogPost[K]) => {
    setPost(p => ({ ...p, [key]: value }));
  };

  const toggleTag = (tagId: string) => {
    setPost(p => ({
      ...p,
      tagIds: p.tagIds.includes(tagId)
        ? p.tagIds.filter(t => t !== tagId)
        : [...p.tagIds, tagId],
    }));
  };

  const handleSave = () => {
    const slug = post.slug.trim() || slugify(post.title);
    const today = new Date().toISOString().slice(0, 10);
    const next: BlogPost = {
      ...post,
      slug,
      updatedAt: today,
      readTimeMinutes: estimateReadTimeMinutes(post.content),
      seo: {
        ...post.seo,
        metaTitle: post.seo.metaTitle || `${post.title} | Fastin Property Auctions`,
        metaDescription: post.seo.metaDescription || post.excerpt,
        keywords: parseKeywords(keywordsInput),
      },
    };

    const posts = isNew
      ? [...data.posts, next]
      : data.posts.map(p => (p.id === next.id ? next : p));

    saveData({ ...data, posts });
    navigate('/blog/admin');
  };

  const handleDelete = () => {
    if (!confirm('Delete this post permanently?')) return;
    saveData({ ...data, posts: data.posts.filter(p => p.id !== post.id) });
    navigate('/blog/admin');
  };

  if (!isNew && !existing) {
    return (
      <div className="text-center py-16">
        <p className="text-xl font-bold text-blue-900">Post not found.</p>
        <Link to="/blog/admin" className="text-yellow-600 font-semibold mt-4 inline-block">
          Back to posts
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link
        to="/blog/admin"
        className="inline-flex items-center gap-2 text-blue-900 font-semibold hover:text-yellow-600 mb-6"
      >
        <ArrowLeft className="w-4 h-4" /> Back to posts
      </Link>

      <h1 className="text-3xl font-bold text-blue-900 mb-8">
        {isNew ? 'New post' : 'Edit post'}
      </h1>

      <div className="space-y-8">
        <section className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 space-y-4">
          <h2 className="font-bold text-blue-900 text-lg">Content</h2>
          <input
            placeholder="Title"
            value={post.title}
            onChange={e => {
              const title = e.target.value;
              setPost(p => ({
                ...p,
                title,
                slug: p.slug || slugify(title),
              }));
            }}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
          />
          <input
            placeholder="URL slug (e.g. how-to-buy-at-auction)"
            value={post.slug}
            onChange={e => update('slug', slugify(e.target.value))}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl font-mono text-sm"
          />
          <textarea
            placeholder="Short excerpt"
            value={post.excerpt}
            onChange={e => update('excerpt', e.target.value)}
            rows={2}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
          />
          <textarea
            placeholder="Post body (paragraphs separated by blank lines; use - for bullet lists)"
            value={post.content}
            onChange={e => update('content', e.target.value)}
            rows={12}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl font-mono text-sm"
          />
        </section>

        <section className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 space-y-4">
          <h2 className="font-bold text-blue-900 text-lg">Featured image</h2>
          <input
            placeholder="Image URL"
            value={post.featuredImage}
            onChange={e => update('featuredImage', e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
          />
          <input
            placeholder="Image alt text (accessibility & SEO)"
            value={post.featuredImageAlt}
            onChange={e => update('featuredImageAlt', e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
          />
          {post.featuredImage && (
            <img
              src={post.featuredImage}
              alt={post.featuredImageAlt || post.title}
              className="w-full max-h-48 object-cover rounded-xl border"
            />
          )}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={post.featured}
              onChange={e => update('featured', e.target.checked)}
              className="w-4 h-4"
            />
            <span className="font-semibold text-gray-700">Feature on blog homepage</span>
          </label>
        </section>

        <section className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 space-y-4">
          <h2 className="font-bold text-blue-900 text-lg">Organisation</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Category</label>
              <select
                value={post.categoryId}
                onChange={e => update('categoryId', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
              >
                <option value="">Select category</option>
                {data.categories.map(c => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Author</label>
              <select
                value={post.authorId}
                onChange={e => update('authorId', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
              >
                <option value="">Select author</option>
                {data.authors.map(a => (
                  <option key={a.id} value={a.id}>
                    {a.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Publish date</label>
              <input
                type="date"
                value={post.publishedAt}
                onChange={e => update('publishedAt', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Status</label>
              <select
                value={post.status}
                onChange={e => update('status', e.target.value as BlogPostStatus)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Tags</label>
            <div className="flex flex-wrap gap-2">
              {data.tags.map(tag => (
                <button
                  key={tag.id}
                  type="button"
                  onClick={() => toggleTag(tag.id)}
                  className={`px-3 py-1.5 rounded-full text-sm font-semibold border-2 transition-colors ${
                    post.tagIds.includes(tag.id)
                      ? 'bg-blue-900 text-white border-blue-900'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'
                  }`}
                >
                  {tag.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 space-y-4">
          <h2 className="font-bold text-blue-900 text-lg">SEO</h2>
          <input
            placeholder="Meta title"
            value={post.seo.metaTitle}
            onChange={e =>
              setPost(p => ({ ...p, seo: { ...p.seo, metaTitle: e.target.value } }))
            }
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
          />
          <textarea
            placeholder="Meta description"
            value={post.seo.metaDescription}
            onChange={e =>
              setPost(p => ({ ...p, seo: { ...p.seo, metaDescription: e.target.value } }))
            }
            rows={3}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
          />
          <input
            placeholder="Keywords (comma-separated)"
            value={keywordsInput}
            onChange={e => setKeywordsInput(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
          />
        </section>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl"
          >
            <Save className="w-5 h-5" /> Save post
          </button>
          {!isNew && (
            <button
              type="button"
              onClick={handleDelete}
              className="inline-flex items-center gap-2 border-2 border-red-200 text-red-700 font-bold px-6 py-3 rounded-xl hover:bg-red-50"
            >
              <Trash2 className="w-5 h-5" /> Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
