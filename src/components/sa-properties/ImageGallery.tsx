import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, FolderOpen } from 'lucide-react';
import type { SaDevelopment } from '@/sa-properties/constants';
import { SA_MARKETING_FOLDER } from '@/sa-properties/constants';

type ImageGalleryProps = {
  development: SaDevelopment;
};

export default function ImageGallery({ development }: ImageGalleryProps) {
  const [index, setIndex] = useState(0);
  const images = development.galleryImages;

  if (images.length === 0) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl border-2 border-dashed border-blue-200 p-10 text-center">
        <FolderOpen className="w-12 h-12 text-blue-400 mx-auto mb-4" />
        <h3 className="text-lg font-bold text-blue-900 mb-2">Image gallery & marketing materials</h3>
        <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">
          Lifestyle imagery, renders, site development plans, and videos for {development.name} are
          available in the Central Developments marketing folder.
        </p>
        <a
          href={development.marketingFolderUrl || SA_MARKETING_FOLDER}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-800"
        >
          Open marketing folder <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    );
  }

  const prev = () => setIndex(i => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex(i => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div>
      <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-gray-100">
        <img
          src={images[index]}
          alt={`${development.name} — image ${index + 1}`}
          className="w-full h-full object-cover"
        />
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-blue-900" />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-blue-900" />
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {images.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={() => setIndex(i)}
              className={`shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 ${
                i === index ? 'border-yellow-500' : 'border-transparent opacity-70'
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
