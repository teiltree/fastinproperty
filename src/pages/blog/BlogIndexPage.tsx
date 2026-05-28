import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, Settings } from "lucide-react";
import { useBlog } from "@/blog/useBlog";
import { filterPosts } from "@/blog/utils";
import PostCard from "@/components/blog/PostCard";
import SeoHead from "@/components/blog/SeoHead";

export default function BlogIndexPage() {
  const { publishedPosts, data, loading, getCategory, getAuthor } = useBlog();
  const [query, setQuery] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [tagId, setTagId] = useState("");

  const featuredPost = useMemo(
    () => publishedPosts.find(p => p.featured) ?? publishedPosts[0],
    [publishedPosts]
  );

  const filtered = useMemo(() => {
    let posts = publishedPosts.filter(p => p.id !== featuredPost?.id);
    posts = filterPosts(posts, { query, categoryId: categoryId || undefined, tagId: tagId || undefined });
    return posts;
  }, [publishedPosts, featuredPost, query, categoryId, tagId]);

  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center text-blue-900 font-semibold">
        Loading blog…
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <SeoHead
        title="Resources & Blog | Fastin Property Auctions"
        description="Guides, insights, and updates on property auctions in Zimbabwe — buying, selling, finance, and online bidding."
        keywords={["property auction", "Zimbabwe", "real estate", "Fastin"]}
      />

      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-6xl font-bold mb-4 tracking-tight">
            Resources & <span className="text-yellow-400">Blog</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl font-light max-w-3xl mx-auto opacity-90">
            Guides, insights, and updates from Fastin Property Auctions.
          </p>
          <Link
            to="/blog/admin"
            className="inline-flex items-center gap-2 mt-8 text-sm text-blue-200 hover:text-yellow-400 font-semibold"
          >
            <Settings className="w-4 h-4" /> Manage blog (CMS)
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="max-w-6xl mx-auto">
          {featuredPost && (
            <div className="mb-12">
              <PostCard
                post={featuredPost}
                category={getCategory(featuredPost.categoryId)}
                author={getAuthor(featuredPost.authorId)}
                featured
              />
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 md:p-6 mb-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-blue-900 text-white flex items-center justify-center shrink-0">
                <Search className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <label className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">
                  Search
                </label>
                <input
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search posts…"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-900 focus:ring-4 focus:ring-blue-900/10"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setCategoryId("")}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                  !categoryId ? "bg-blue-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All categories
              </button>
              {data.categories.map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setCategoryId(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                    categoryId === cat.id
                      ? "bg-blue-900 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setTagId("")}
                className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                  !tagId ? "bg-yellow-500 text-blue-900" : "bg-gray-50 text-gray-600"
                }`}
              >
                All tags
              </button>
              {data.tags.map(tag => (
                <button
                  key={tag.id}
                  type="button"
                  onClick={() => setTagId(tag.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                    tagId === tag.id
                      ? "bg-yellow-500 text-blue-900"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {tag.name}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-10 text-center">
              <p className="text-xl font-bold text-blue-900">No posts found.</p>
              <p className="text-gray-600 mt-2">Try a different search or filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filtered.map(post => (
                <PostCard
                  key={post.id}
                  post={post}
                  category={getCategory(post.categoryId)}
                  author={getAuthor(post.authorId)}
                />
              ))}
            </div>
          )}

          <div className="mt-14 bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">Need help with an auction?</h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
              Contact our team and we’ll guide you through buying, selling, finance, and online bidding.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-xl transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
