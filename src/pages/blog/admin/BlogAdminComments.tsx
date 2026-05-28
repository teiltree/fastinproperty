import { useMemo, useState } from 'react';
import { Check, Plus, Trash2, X } from 'lucide-react';
import { useBlog } from '@/blog/useBlog';

export default function BlogAdminComments() {
  const { data, setCommentStatus, deleteComment, addComment } = useBlog();
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
  const [postFilter, setPostFilter] = useState('');

  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newPostId, setNewPostId] = useState('');

  const comments = useMemo(() => {
    let list = [...(data.comments ?? [])];
    if (filter !== 'all') list = list.filter(c => c.status === filter);
    if (postFilter) list = list.filter(c => c.postId === postFilter);
    return list.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  }, [data.comments, filter, postFilter]);

  const pendingCount = (data.comments ?? []).filter(c => c.status === 'pending').length;

  const getPostTitle = (postId: string) =>
    data.posts.find(p => p.id === postId)?.title ?? 'Unknown post';

  const handleAdd = () => {
    if (!newPostId || !newName.trim() || !newContent.trim()) return;
    addComment({
      postId: newPostId,
      authorName: newName,
      authorEmail: newEmail || undefined,
      content: newContent,
      status: 'approved',
    });
    setNewName('');
    setNewEmail('');
    setNewContent('');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-900 mb-2">Comments</h1>
      <p className="text-gray-600 mb-8">
        Moderate reader comments. New submissions arrive by email and as{' '}
        <strong>pending</strong> in the CMS — approve them to show on the blog.
        {pendingCount > 0 && (
          <span className="ml-2 text-amber-700 font-semibold">
            ({pendingCount} pending)
          </span>
        )}
      </p>

      <div className="bg-white rounded-2xl shadow-lg border p-6 mb-8 space-y-4">
        <h2 className="font-bold text-blue-900">Add comment manually</h2>
        <select
          value={newPostId}
          onChange={e => setNewPostId(e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
        >
          <option value="">Select post</option>
          {data.posts.map(p => (
            <option key={p.id} value={p.id}>
              {p.title}
            </option>
          ))}
        </select>
        <div className="grid md:grid-cols-2 gap-3">
          <input
            placeholder="Name"
            value={newName}
            onChange={e => setNewName(e.target.value)}
            className="px-4 py-3 border-2 border-gray-200 rounded-xl"
          />
          <input
            placeholder="Email (optional)"
            value={newEmail}
            onChange={e => setNewEmail(e.target.value)}
            className="px-4 py-3 border-2 border-gray-200 rounded-xl"
          />
        </div>
        <textarea
          placeholder="Comment text"
          value={newContent}
          onChange={e => setNewContent(e.target.value)}
          rows={3}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
        />
        <button
          type="button"
          onClick={handleAdd}
          className="inline-flex items-center gap-2 bg-yellow-500 text-blue-900 font-bold px-5 py-3 rounded-xl"
        >
          <Plus className="w-4 h-4" /> Add as approved
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {(['all', 'pending', 'approved', 'rejected'] as const).map(f => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-bold capitalize ${
              filter === f ? 'bg-blue-900 text-white' : 'bg-white border text-gray-700'
            }`}
          >
            {f}
          </button>
        ))}
        <select
          value={postFilter}
          onChange={e => setPostFilter(e.target.value)}
          className="ml-auto px-4 py-2 border rounded-full text-sm font-semibold"
        >
          <option value="">All posts</option>
          {data.posts.map(p => (
            <option key={p.id} value={p.id}>
              {p.title}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-4">
        {comments.length === 0 ? (
          <p className="text-gray-500 text-center py-12 bg-white rounded-2xl border">
            No comments in this view.
          </p>
        ) : (
          comments.map(comment => (
            <div key={comment.id} className="bg-white rounded-xl border p-5 shadow-sm">
              <div className="flex flex-wrap justify-between gap-2 mb-2">
                <div>
                  <span className="font-bold text-blue-900">{comment.authorName}</span>
                  {comment.authorEmail && (
                    <span className="text-sm text-gray-500 ml-2">{comment.authorEmail}</span>
                  )}
                </div>
                <span
                  className={`text-xs font-bold uppercase px-2 py-1 rounded-full ${
                    comment.status === 'approved'
                      ? 'bg-emerald-100 text-emerald-800'
                      : comment.status === 'pending'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {comment.status}
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-2">
                On: <strong>{getPostTitle(comment.postId)}</strong> · {comment.createdAt}
              </p>
              <p className="text-gray-700 whitespace-pre-wrap">{comment.content}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {comment.status !== 'approved' && (
                  <button
                    type="button"
                    onClick={() => setCommentStatus(comment.id, 'approved')}
                    className="inline-flex items-center gap-1 text-sm font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg"
                  >
                    <Check className="w-4 h-4" /> Approve
                  </button>
                )}
                {comment.status !== 'rejected' && (
                  <button
                    type="button"
                    onClick={() => setCommentStatus(comment.id, 'rejected')}
                    className="inline-flex items-center gap-1 text-sm font-bold text-gray-600 bg-gray-100 px-3 py-1.5 rounded-lg"
                  >
                    <X className="w-4 h-4" /> Reject
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => {
                    if (confirm('Delete this comment?')) deleteComment(comment.id);
                  }}
                  className="inline-flex items-center gap-1 text-sm font-bold text-red-700 bg-red-50 px-3 py-1.5 rounded-lg"
                >
                  <Trash2 className="w-4 h-4" /> Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
