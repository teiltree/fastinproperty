import { useRef, useState } from 'react';
import { ImagePlus, Link as LinkIcon, Upload } from 'lucide-react';
import { readImageFileAsDataUrl } from '@/houses/utils';

type ImageUploadFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  alt?: string;
  onAltChange?: (value: string) => void;
  required?: boolean;
};

export default function ImageUploadField({
  label,
  value,
  onChange,
  alt,
  onAltChange,
  required,
}: ImageUploadFieldProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Please choose an image file (JPG, PNG, WebP).');
      e.target.value = '';
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError('Image must be under 5 MB.');
      e.target.value = '';
      return;
    }

    setUploading(true);
    setError('');
    try {
      const dataUrl = await readImageFileAsDataUrl(file);
      onChange(dataUrl);
    } catch {
      setError('Could not read that image. Try another file or paste a URL.');
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  };

  return (
    <div className="space-y-3">
      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500">
        {label}
        {required && ' *'}
      </label>

      <div className="flex flex-wrap gap-2">
        <input
          type="url"
          value={value.startsWith('data:') ? '' : value}
          onChange={e => onChange(e.target.value)}
          placeholder="https://… or upload below"
          className="flex-1 min-w-[200px] px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-900/10"
        />
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          disabled={uploading}
          className="inline-flex items-center gap-2 border-2 border-blue-900 text-blue-900 font-bold px-4 py-3 rounded-xl hover:bg-blue-50 disabled:opacity-50"
        >
          <Upload className="w-4 h-4" />
          {uploading ? 'Uploading…' : 'Upload image'}
        </button>
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
      </div>

      {value.startsWith('data:') && (
        <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 flex items-start gap-2">
          <LinkIcon className="w-4 h-4 shrink-0 mt-0.5" />
          Image saved from upload. For production, host on postimg.cc or add to{' '}
          <code className="bg-white px-1 rounded">public/houses/</code> and use a URL before exporting.
        </p>
      )}

      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      {onAltChange && (
        <input
          type="text"
          value={alt ?? ''}
          onChange={e => onAltChange(e.target.value)}
          placeholder="Image description (for accessibility)"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-900/10"
        />
      )}

      {value ? (
        <div className="relative rounded-xl overflow-hidden border-2 border-gray-200 bg-gray-50">
          <img src={value} alt={alt || label} className="w-full max-h-64 object-cover" />
        </div>
      ) : (
        <div className="rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 p-8 text-center text-gray-400">
          <ImagePlus className="w-10 h-10 mx-auto mb-2 opacity-50" />
          <p className="text-sm">Paste an image URL or upload a photo</p>
        </div>
      )}
    </div>
  );
}
