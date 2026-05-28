import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useBlog } from '@/blog/useBlog';
import type { BlogTag } from '@/blog/types';
import { slugify, uniqueId } from '@/blog/utils';

export default function BlogAdminTags() {
  const { data, saveData } = useBlog();
  const [name, setName] = useState('');

  const add = () => {
    if (!name.trim()) return;
    const tag: BlogTag = {
      id: uniqueId('tag'),
      slug: slugify(name),
      name: name.trim(),
    };
    saveData({ ...data, tags: [...data.tags, tag] });
    setName('');
  };

  const remove = (id: string) => {
    if (!confirm('Delete this tag?')) return;
    saveData({
      ...data,
      tags: data.tags.filter(t => t.id !== id),
      posts: data.posts.map(p => ({
        ...p,
        tagIds: p.tagIds.filter(tid => tid !== id),
      })),
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-900 mb-2">Tags</h1>
      <p className="text-gray-600 mb-8">Label posts for filtering and SEO.</p>

      <div className="bg-white rounded-2xl shadow-lg border p-6 mb-8 flex gap-3">
        <input
          placeholder="Tag name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl"
          onKeyDown={e => e.key === 'Enter' && add()}
        />
        <button
          type="button"
          onClick={add}
          className="inline-flex items-center gap-2 bg-yellow-500 text-blue-900 font-bold px-5 py-3 rounded-xl shrink-0"
        >
          <Plus className="w-4 h-4" /> Add
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {data.tags.map(t => (
          <span
            key={t.id}
            className="inline-flex items-center gap-2 bg-white border rounded-full pl-4 pr-2 py-2 text-sm font-semibold text-blue-900"
          >
            {t.name}
            <button type="button" onClick={() => remove(t.id)} className="text-red-500 p-1">
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
