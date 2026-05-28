import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useBlog } from '@/blog/useBlog';
import type { BlogCategory } from '@/blog/types';
import { slugify, uniqueId } from '@/blog/utils';

export default function BlogAdminCategories() {
  const { data, saveData } = useBlog();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const add = () => {
    if (!name.trim()) return;
    const cat: BlogCategory = {
      id: uniqueId('cat'),
      slug: slugify(name),
      name: name.trim(),
      description: description.trim() || undefined,
    };
    saveData({ ...data, categories: [...data.categories, cat] });
    setName('');
    setDescription('');
  };

  const remove = (id: string) => {
    if (!confirm('Delete this category? Posts using it will need updating.')) return;
    saveData({ ...data, categories: data.categories.filter(c => c.id !== id) });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-900 mb-2">Categories</h1>
      <p className="text-gray-600 mb-8">Organise posts by topic.</p>

      <div className="bg-white rounded-2xl shadow-lg border p-6 mb-8 space-y-3">
        <input
          placeholder="Category name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
        />
        <input
          placeholder="Description (optional)"
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
        />
        <button
          type="button"
          onClick={add}
          className="inline-flex items-center gap-2 bg-yellow-500 text-blue-900 font-bold px-5 py-3 rounded-xl"
        >
          <Plus className="w-4 h-4" /> Add category
        </button>
      </div>

      <ul className="space-y-3">
        {data.categories.map(c => (
          <li
            key={c.id}
            className="bg-white rounded-xl border p-4 flex justify-between items-start gap-4"
          >
            <div>
              <p className="font-bold text-blue-900">{c.name}</p>
              <p className="text-xs text-gray-500 font-mono">/{c.slug}</p>
              {c.description && <p className="text-sm text-gray-600 mt-1">{c.description}</p>}
            </div>
            <button type="button" onClick={() => remove(c.id)} className="text-red-600 p-2">
              <Trash2 className="w-4 h-4" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
