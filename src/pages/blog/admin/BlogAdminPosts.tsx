import { Link } from 'react-router-dom';
import { Plus, Pencil, Star } from 'lucide-react';
import { useBlog } from '@/blog/useBlog';
import { formatBlogDate } from '@/blog/utils';

export default function BlogAdminPosts() {
  const { data, getCategory, getAuthor } = useBlog();
  const posts = [...data.posts].sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Posts</h1>
          <p className="text-gray-600 mt-1">Create and manage blog articles.</p>
        </div>
        <Link
          to="/blog/admin/posts/new"
          className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold px-5 py-3 rounded-xl"
        >
          <Plus className="w-5 h-5" /> New post
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-5 py-4 font-bold text-gray-600">Title</th>
              <th className="px-5 py-4 font-bold text-gray-600 hidden md:table-cell">Category</th>
              <th className="px-5 py-4 font-bold text-gray-600 hidden lg:table-cell">Author</th>
              <th className="px-5 py-4 font-bold text-gray-600">Status</th>
              <th className="px-5 py-4 font-bold text-gray-600"></th>
            </tr>
          </thead>
          <tbody>
            {posts.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-5 py-12 text-center text-gray-500">
                  No posts yet. Create your first post.
                </td>
              </tr>
            ) : (
              posts.map(post => {
                const category = getCategory(post.categoryId);
                const author = getAuthor(post.authorId);
                return (
                  <tr key={post.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                    <td className="px-5 py-4">
                      <div className="font-bold text-blue-900 flex items-center gap-2">
                        {post.featured && <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />}
                        {post.title}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        /blog/{post.slug} · {formatBlogDate(post.publishedAt)}
                      </p>
                    </td>
                    <td className="px-5 py-4 hidden md:table-cell text-gray-700">
                      {category?.name ?? '—'}
                    </td>
                    <td className="px-5 py-4 hidden lg:table-cell text-gray-700">
                      {author?.name ?? '—'}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`text-xs font-bold uppercase px-2 py-1 rounded-full ${
                          post.status === 'published'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {post.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <Link
                        to={`/blog/admin/posts/${post.id}/edit`}
                        className="inline-flex items-center gap-1 text-blue-900 font-semibold hover:text-yellow-600"
                      >
                        <Pencil className="w-4 h-4" /> Edit
                      </Link>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
