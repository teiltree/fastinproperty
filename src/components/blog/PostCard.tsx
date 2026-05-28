import { Link } from 'react-router-dom';
import { Calendar, Clock, User } from 'lucide-react';
import type { BlogAuthor, BlogCategory, BlogPost } from '@/blog/types';
import { formatBlogDate } from '@/blog/utils';

type PostCardProps = {
  post: BlogPost;
  category?: BlogCategory;
  author?: BlogAuthor;
  featured?: boolean;
};

export default function PostCard({ post, category, author, featured = false }: PostCardProps) {
  return (
    <article
      className={`bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      {post.featuredImage && (
        <Link to={`/blog/${post.slug}`} className="block relative overflow-hidden">
          <img
            src={post.featuredImage}
            alt={post.featuredImageAlt || post.title}
            className={`w-full object-cover ${featured ? 'h-64 md:h-80' : 'h-48 md:h-56'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          {category && (
            <span className="absolute top-4 left-4 bg-yellow-500 text-blue-900 text-xs font-bold px-3 py-1.5 rounded-full">
              {category.name}
            </span>
          )}
          {post.featured && (
            <span className="absolute top-4 right-4 bg-blue-900 text-yellow-400 text-xs font-bold px-3 py-1.5 rounded-full">
              Featured
            </span>
          )}
        </Link>
      )}

      <div className="p-6 md:p-8">
        <h2 className={`font-bold text-blue-900 leading-tight ${featured ? 'text-3xl' : 'text-2xl'}`}>
          <Link to={`/blog/${post.slug}`} className="hover:text-yellow-600 transition-colors">
            {post.title}
          </Link>
        </h2>

        <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-600">
          <span className="inline-flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {formatBlogDate(post.publishedAt)}
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {post.readTimeMinutes} min read
          </span>
          {author && (
            <span className="inline-flex items-center gap-2">
              <User className="w-4 h-4" />
              {author.name}
            </span>
          )}
        </div>

        <p className="text-gray-700 mt-4 leading-relaxed">{post.excerpt}</p>

        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center justify-center mt-6 bg-blue-900 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl transition-colors"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}
