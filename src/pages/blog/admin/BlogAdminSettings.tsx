import { useRef } from 'react';
import { Download, Upload, Info } from 'lucide-react';
import { useBlog } from '@/blog/useBlog';

export default function BlogAdminSettings() {
  const { exportData, importData } = useBlog();
  const fileRef = useRef<HTMLInputElement>(null);

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      await importData(file);
      alert('Blog data imported successfully.');
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Import failed.');
    }
    e.target.value = '';
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-900 mb-2">Settings</h1>
      <p className="text-gray-600 mb-8">Backup, restore, and publish blog data for all visitors.</p>

      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-8 flex gap-4">
        <Info className="w-6 h-6 text-blue-900 shrink-0 mt-0.5" />
        <div className="text-sm text-blue-900 space-y-2">
          <p className="font-bold">How publishing works</p>
          <p>
            Changes you save in the CMS are stored in this browser. To show the same posts to all
            visitors after you deploy the site:
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Click <strong>Export posts.json</strong> below.</li>
            <li>
              Place the file at <code className="bg-white px-1 rounded">public/blog/posts.json</code>{' '}
              in the project.
            </li>
            <li>Redeploy the website.</li>
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <button
          type="button"
          onClick={exportData}
          className="inline-flex items-center gap-2 bg-blue-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-800"
        >
          <Download className="w-5 h-5" /> Export posts.json
        </button>
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="inline-flex items-center gap-2 border-2 border-blue-900 text-blue-900 font-bold px-6 py-3 rounded-xl hover:bg-blue-50"
        >
          <Upload className="w-5 h-5" /> Import JSON
        </button>
        <input ref={fileRef} type="file" accept="application/json" className="hidden" onChange={handleImport} />
      </div>

      <p className="text-sm text-gray-500 mt-8">
        Admin PIN is set via <code className="bg-gray-100 px-1 rounded">VITE_BLOG_ADMIN_PIN</code> in
        your environment (default: fastin2026). Change it before going live.
      </p>
    </div>
  );
}
