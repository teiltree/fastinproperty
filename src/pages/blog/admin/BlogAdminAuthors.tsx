import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useBlog } from '@/blog/useBlog';
import type { BlogAuthor } from '@/blog/types';
import { slugify, uniqueId } from '@/blog/utils';

export default function BlogAdminAuthors() {
  const { data, saveData } = useBlog();
  const [form, setForm] = useState({
    name: '',
    role: '',
    bio: '',
    email: '',
    avatarUrl: '',
  });

  const add = () => {
    if (!form.name.trim()) return;
    const author: BlogAuthor = {
      id: uniqueId('author'),
      slug: slugify(form.name),
      name: form.name.trim(),
      role: form.role.trim() || 'Contributor',
      bio: form.bio.trim(),
      email: form.email.trim() || undefined,
      avatarUrl: form.avatarUrl.trim() || undefined,
    };
    saveData({ ...data, authors: [...data.authors, author] });
    setForm({ name: '', role: '', bio: '', email: '', avatarUrl: '' });
  };

  const remove = (id: string) => {
    if (!confirm('Delete this author profile?')) return;
    saveData({ ...data, authors: data.authors.filter(a => a.id !== id) });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-900 mb-2">Authors</h1>
      <p className="text-gray-600 mb-8">Author profiles shown on blog posts.</p>

      <div className="bg-white rounded-2xl shadow-lg border p-6 mb-8 space-y-3">
        <input
          placeholder="Full name"
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
        />
        <input
          placeholder="Role / title"
          value={form.role}
          onChange={e => setForm(f => ({ ...f, role: e.target.value }))}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
        />
        <textarea
          placeholder="Bio"
          value={form.bio}
          onChange={e => setForm(f => ({ ...f, bio: e.target.value }))}
          rows={3}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
        />
        <input
          placeholder="Email"
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
        />
        <input
          placeholder="Avatar image URL"
          value={form.avatarUrl}
          onChange={e => setForm(f => ({ ...f, avatarUrl: e.target.value }))}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
        />
        <button
          type="button"
          onClick={add}
          className="inline-flex items-center gap-2 bg-yellow-500 text-blue-900 font-bold px-5 py-3 rounded-xl"
        >
          <Plus className="w-4 h-4" /> Add author
        </button>
      </div>

      <div className="grid gap-4">
        {data.authors.map(a => (
          <div key={a.id} className="bg-white rounded-xl border p-5 flex gap-4">
            {a.avatarUrl && (
              <img src={a.avatarUrl} alt="" className="w-14 h-14 rounded-xl object-cover" />
            )}
            <div className="flex-1">
              <p className="font-bold text-blue-900">{a.name}</p>
              <p className="text-sm text-gray-600">{a.role}</p>
              <p className="text-sm text-gray-700 mt-2 line-clamp-2">{a.bio}</p>
            </div>
            <button type="button" onClick={() => remove(a.id)} className="text-red-600">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
