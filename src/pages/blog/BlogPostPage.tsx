import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/blog/posts";

function renderSimpleMarkdown(markdown: string) {
  // Minimal renderer: paragraphs + bullet lists.
  // (Keeps this blog dependency-free; we can swap for a real MD renderer later.)
  const lines = markdown.split("\n");
  const blocks: Array<
    | { type: "p"; text: string }
    | { type: "ul"; items: string[] }
  > = [];

  let para = "";
  let list: string[] | null = null;

  const flushPara = () => {
    const t = para.trim();
    if (t) blocks.push({ type: "p", text: t });
    para = "";
  };

  const flushList = () => {
    if (list && list.length) blocks.push({ type: "ul", items: list });
    list = null;
  };

  for (const raw of lines) {
    const line = raw.replace(/\r$/, "");
    const isBullet = /^\s*-\s+/.test(line);
    const isEmpty = line.trim().length === 0;

    if (isEmpty) {
      flushList();
      flushPara();
      continue;
    }

    if (isBullet) {
      flushPara();
      list ??= [];
      list.push(line.replace(/^\s*-\s+/, "").trim());
      continue;
    }

    flushList();
    para += (para ? " " : "") + line.trim();
  }

  flushList();
  flushPara();

  return blocks.map((b, idx) => {
    if (b.type === "ul") {
      return (
        <ul key={idx} className="list-disc pl-6 space-y-2 text-gray-700">
          {b.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      );
    }

    return (
      <p key={idx} className="text-gray-700 leading-relaxed text-lg">
        {b.text}
      </p>
    );
  });
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : null;
  const morePosts = useMemo(() => getAllPosts().filter(p => p.slug !== slug).slice(0, 3), [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-10 text-center">
            <p className="text-2xl font-bold text-blue-900">Post not found.</p>
            <p className="text-gray-600 mt-2">
              The link may be wrong or the post was removed.
            </p>
            <div className="mt-8">
              <Link
                to="/blog"
                className="inline-flex items-center justify-center bg-blue-900 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-xl transition-colors"
              >
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-blue-100 hover:text-yellow-400 transition-colors font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <h1 className="text-3xl md:text-5xl font-bold mt-5 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-blue-100">
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTimeMinutes} min read
              </span>
              <span className="bg-yellow-500 text-blue-900 px-3 py-1 rounded-full font-bold">
                {post.category}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="max-w-4xl mx-auto">
          {post.heroImage && (
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
              <img
                src={post.heroImage}
                alt={post.title}
                className="w-full h-[240px] md:h-[420px] object-cover"
              />
            </div>
          )}

          <article className="mt-10 bg-white rounded-3xl shadow-xl border border-gray-100 p-7 md:p-12 space-y-6">
            {renderSimpleMarkdown(post.content)}
          </article>

          <div className="mt-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-3xl p-8 md:p-10 text-blue-900">
            <h3 className="text-2xl md:text-3xl font-bold">Need help right now?</h3>
            <p className="mt-3 text-blue-900/90 text-lg">
              Contact our team and we’ll guide you through buying, selling, and online bidding.
            </p>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-blue-900 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-xl transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {morePosts.length > 0 && (
            <div className="mt-14">
              <h4 className="text-2xl font-bold text-blue-900 mb-6">More posts</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {morePosts.map(p => (
                  <Link
                    key={p.slug}
                    to={`/blog/${p.slug}`}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="text-xs font-bold tracking-widest uppercase text-yellow-600">
                      {p.category}
                    </div>
                    <div className="mt-2 font-bold text-blue-900 leading-snug">
                      {p.title}
                    </div>
                    <div className="mt-3 text-sm text-gray-600 line-clamp-3">
                      {p.excerpt}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

