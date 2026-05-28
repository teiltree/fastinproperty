import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { useBlog } from "@/blog/useBlog";
import { formatBlogDate } from "@/blog/utils";
import AuthorCard from "@/components/blog/AuthorCard";
import FeaturedImage from "@/components/blog/FeaturedImage";
import { renderBlogContent } from "@/components/blog/renderContent";
import SeoHead from "@/components/blog/SeoHead";
import SocialShare from "@/components/blog/SocialShare";
import CommentSection from "@/components/blog/CommentSection";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { getPostBySlug, publishedPosts, getCategory, getAuthor, getTag, loading } = useBlog();

  const post = slug ? getPostBySlug(slug) : null;
  const category = post ? getCategory(post.categoryId) : undefined;
  const author = post ? getAuthor(post.authorId) : undefined;
  const tags = useMemo(() => {
    if (!post) return [];
    return post.tagIds
      .map(id => getTag(id))
      .filter((t): t is NonNullable<ReturnType<typeof getTag>> => Boolean(t));
  }, [post, getTag]);

  const morePosts = useMemo(
    () => publishedPosts.filter(p => p.slug !== slug).slice(0, 3),
    [publishedPosts, slug]
  );

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center text-blue-900 font-semibold">
        Loading…
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-10 text-center">
            <p className="text-2xl font-bold text-blue-900">Post not found.</p>
            <p className="text-gray-600 mt-2">The link may be wrong or the post was removed.</p>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center mt-8 bg-blue-900 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-xl"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <SeoHead
        title={post.seo.metaTitle || `${post.title} | Fastin`}
        description={post.seo.metaDescription || post.excerpt}
        keywords={post.seo.keywords}
        image={post.featuredImage}
        url={shareUrl}
        type="article"
      />

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

            <h1 className="text-3xl md:text-5xl font-bold mt-5 leading-tight">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-blue-100">
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatBlogDate(post.publishedAt)}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTimeMinutes} min read
              </span>
              {category && (
                <Link
                  to="/blog"
                  className="bg-yellow-500 text-blue-900 px-3 py-1 rounded-full font-bold hover:bg-yellow-400"
                >
                  {category.name}
                </Link>
              )}
            </div>

            {author && (
              <p className="mt-4 text-blue-200 text-sm">
                By <span className="text-white font-semibold">{author.name}</span>
                {author.role ? ` · ${author.role}` : ""}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="max-w-4xl mx-auto">
          {post.featuredImage && (
            <FeaturedImage
              src={post.featuredImage}
              alt={post.featuredImageAlt || post.title}
            />
          )}

          <article className="mt-10 bg-white rounded-3xl shadow-xl border border-gray-100 p-7 md:p-12 space-y-6">
            {renderBlogContent(post.content)}

            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100">
                {tags.map(tag => (
                  <span
                    key={tag.id}
                    className="text-xs font-bold uppercase tracking-wide bg-blue-50 text-blue-900 px-3 py-1.5 rounded-full"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            )}

            <div className="pt-6 border-t border-gray-100">
              <SocialShare url={shareUrl} title={post.title} description={post.excerpt} />
            </div>
          </article>

          {author && (
            <div className="mt-10">
              <AuthorCard author={author} />
            </div>
          )}

          <CommentSection post={post} />

          <div className="mt-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-3xl p-8 md:p-10 text-blue-900">
            <h3 className="text-2xl md:text-3xl font-bold">Need help right now?</h3>
            <p className="mt-3 text-blue-900/90 text-lg">
              Contact our team and we’ll guide you through buying, selling, and online bidding.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center mt-6 bg-blue-900 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-xl"
            >
              Contact Us
            </Link>
          </div>

          {morePosts.length > 0 && (
            <div className="mt-14">
              <h4 className="text-2xl font-bold text-blue-900 mb-6">More posts</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {morePosts.map(p => (
                  <Link
                    key={p.id}
                    to={`/blog/${p.slug}`}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="text-xs font-bold tracking-widest uppercase text-yellow-600">
                      {getCategory(p.categoryId)?.name}
                    </div>
                    <div className="mt-2 font-bold text-blue-900 leading-snug">{p.title}</div>
                    <p className="mt-3 text-sm text-gray-600 line-clamp-3">{p.excerpt}</p>
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
