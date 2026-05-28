import { useState, type FormEvent } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { useBlog } from '@/blog/useBlog';
import { formatBlogDate, isFormSubmitSuccess } from '@/blog/utils';
import type { BlogPost } from '@/blog/types';

const CONTACT_EMAIL = 'info@fastinpropertyauctions.com';
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

type CommentSectionProps = {
  post: BlogPost;
};

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export default function CommentSection({ post }: CommentSectionProps) {
  const { getCommentsForPost, submitComment } = useBlog();
  const comments = getCommentsForPost(post.id);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email: email || 'Not provided',
          message: content,
          post: post.title,
          post_slug: post.slug,
          _subject: `Blog comment on: ${post.title}`,
          _replyto: email || undefined,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !isFormSubmitSuccess(data.success)) {
        throw new Error(
          typeof data.message === 'string' ? data.message : 'Failed to submit comment'
        );
      }

      submitComment({
        postId: post.id,
        authorName: name,
        authorEmail: email || undefined,
        content,
      });

      setStatus('success');
      setName('');
      setEmail('');
      setContent('');
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'Could not submit your comment. Please try again.'
      );
    }
  };

  return (
    <section className="mt-10 bg-white rounded-3xl shadow-xl border border-gray-100 p-7 md:p-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-11 h-11 rounded-xl bg-blue-900 text-white flex items-center justify-center">
          <MessageCircle className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-blue-900">Comments</h3>
          <p className="text-sm text-gray-600">
            {comments.length === 0
              ? 'Be the first to share your thoughts.'
              : `${comments.length} comment${comments.length === 1 ? '' : 's'}`}
          </p>
        </div>
      </div>

      {comments.length > 0 && (
        <ul className="space-y-6 mb-10 pb-10 border-b border-gray-100">
          {comments.map(comment => (
            <li key={comment.id} className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-900 to-blue-700 text-white flex items-center justify-center font-bold shrink-0">
                {comment.authorName.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="font-bold text-blue-900">{comment.authorName}</span>
                  <span className="text-xs text-gray-500">{formatBlogDate(comment.createdAt)}</span>
                </div>
                <p className="text-gray-700 mt-2 leading-relaxed whitespace-pre-wrap">
                  {comment.content}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}

      <h4 className="text-lg font-bold text-blue-900 mb-4">Leave a comment</h4>

      {status === 'success' && (
        <div
          role="status"
          className="mb-6 rounded-xl border-2 border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-900 text-sm"
        >
          Thank you! Your comment has been received and will appear after our team reviews it.
        </div>
      )}

      {status === 'error' && (
        <div
          role="alert"
          className="mb-6 rounded-xl border-2 border-red-200 bg-red-50 px-4 py-3 text-red-900 text-sm"
        >
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            required
            placeholder="Your name *"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-900/10"
          />
          <input
            type="email"
            placeholder="Email (optional)"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-900/10"
          />
        </div>
        <textarea
          required
          placeholder="Your comment *"
          value={content}
          onChange={e => setContent(e.target.value)}
          rows={4}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-900/10 resize-none"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 disabled:bg-gray-400 text-white font-bold px-6 py-3 rounded-xl transition-colors"
        >
          <Send className="w-4 h-4" />
          {status === 'loading' ? 'Submitting…' : 'Post comment'}
        </button>
        <p className="text-xs text-gray-500">
          Comments are moderated before they appear publicly.
        </p>
      </form>
    </section>
  );
}
