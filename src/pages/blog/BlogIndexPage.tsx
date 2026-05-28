import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, Search } from "lucide-react";
import { getAllPosts } from "@/blog/posts";

export default function BlogIndexPage() {
  const posts = useMemo(() => getAllPosts(), []);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return posts;
    return posts.filter(p => {
      const haystack = `${p.title} ${p.excerpt} ${p.category}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [posts, query]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-6xl font-bold mb-4 tracking-tight">
            Resources & <span className="text-yellow-400">Blog</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl font-light max-w-3xl mx-auto opacity-90">
            Guides, insights, and updates from Fastin Property Auctions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 md:p-6 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-blue-900 text-white flex items-center justify-center">
                <Search className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <label className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">
                  Search
                </label>
                <input
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search posts (e.g. auction, finance, guide)"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-900 focus:ring-4 focus:ring-blue-900/10 transition-all"
                />
              </div>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-10 text-center">
              <p className="text-xl font-bold text-blue-900">No posts found.</p>
              <p className="text-gray-600 mt-2">Try a different search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filtered.map(post => (
                <article
                  key={post.slug}
                  className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  {post.heroImage && (
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <img
                        src={post.heroImage}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4 bg-yellow-500 text-blue-900 text-xs font-bold px-3 py-1.5 rounded-full">
                        {post.category}
                      </div>
                    </div>
                  )}

                  <div className="p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-blue-900 leading-tight">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="hover:text-yellow-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-600">
                      <span className="inline-flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {post.readTimeMinutes} min read
                      </span>
                    </div>

                    <p className="text-gray-700 mt-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="mt-6">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center justify-center bg-blue-900 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl transition-colors"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          <div className="mt-14 bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">Need help with an auction?</h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
              Contact our team and we’ll guide you through buying, selling, finance, and the online bidding process.
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

