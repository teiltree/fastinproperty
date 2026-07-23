import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Plus, Save, Trash2, X } from 'lucide-react';
import { useHouses } from '@/houses/useHouses';
import ImageUploadField from '@/components/houses/ImageUploadField';
import type { HouseListing, HouseListingStatus } from '@/houses/types';
import { DEFAULT_AUCTION_URL } from '@/houses/types';
import { readImageFileAsDataUrl, uniqueId } from '@/houses/utils';

const emptyListing = (): HouseListing => ({
  id: uniqueId('listing'),
  title: '',
  subtitle: '',
  address: '',
  description: '',
  image: '',
  images: [],
  imageAlt: '',
  auctionDate: '',
  auctionUrl: DEFAULT_AUCTION_URL,
  buttonText: 'View on Auction Platform',
  status: 'coming_soon',
  featured: true,
  sortOrder: 0,
  price: '',
  bedrooms: undefined,
  bathrooms: undefined,
  size: '',
  type: '',
  updatedAt: new Date().toISOString().slice(0, 10),
});

export default function HousesAdminListingEditor() {
  const { id } = useParams<{ id: string }>();
  const isNew = !id;
  const navigate = useNavigate();
  const { data, saveData } = useHouses();
  const galleryFileRef = useRef<HTMLInputElement>(null);

  const existing = useMemo(
    () => (isNew ? null : data.listings.find(l => l.id === id) ?? null),
    [data.listings, id, isNew]
  );

  const [listing, setListing] = useState<HouseListing>(() => existing ?? emptyListing());
  const [galleryUrl, setGalleryUrl] = useState('');

  useEffect(() => {
    if (existing) {
      setListing(existing);
    }
  }, [existing]);

  const update = <K extends keyof HouseListing>(key: K, value: HouseListing[K]) => {
    setListing(l => ({ ...l, [key]: value }));
  };

  const addGalleryUrl = () => {
    const url = galleryUrl.trim();
    if (!url) return;
    update('images', [...listing.images, url]);
    setGalleryUrl('');
  };

  const removeGalleryImage = (index: number) => {
    update(
      'images',
      listing.images.filter((_, i) => i !== index)
    );
  };

  const handleGalleryUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files?.length) return;

    const newImages: string[] = [];
    for (const file of Array.from(files)) {
      if (!file.type.startsWith('image/') || file.size > 5 * 1024 * 1024) continue;
      try {
        newImages.push(await readImageFileAsDataUrl(file));
      } catch {
        /* skip failed files */
      }
    }

    if (newImages.length) {
      update('images', [...listing.images, ...newImages]);
    }
    e.target.value = '';
  };

  const handleSave = () => {
    if (!listing.title.trim()) {
      alert('Please enter a property title.');
      return;
    }
    if (!listing.image.trim()) {
      alert('Please add a main property image.');
      return;
    }
    if (!listing.auctionUrl.trim()) {
      alert('Please enter an auction platform link.');
      return;
    }

    const today = new Date().toISOString().slice(0, 10);
    const next: HouseListing = {
      ...listing,
      title: listing.title.trim(),
      subtitle: listing.subtitle?.trim() || undefined,
      address: listing.address?.trim() || undefined,
      description: listing.description?.trim() || undefined,
      imageAlt: listing.imageAlt.trim() || listing.title.trim(),
      auctionDate: listing.auctionDate?.trim() || undefined,
      auctionUrl: listing.auctionUrl.trim(),
      buttonText: listing.buttonText.trim() || 'View on Auction Platform',
      price: listing.price?.trim() || undefined,
      size: listing.size?.trim() || undefined,
      type: listing.type?.trim() || undefined,
      updatedAt: today,
    };

    const listings = isNew
      ? [...data.listings, next]
      : data.listings.map(l => (l.id === next.id ? next : l));

    saveData({ ...data, listings });
    navigate('/houses/admin');
  };

  const handleDelete = () => {
    if (!confirm('Delete this property listing permanently?')) return;
    saveData({
      ...data,
      listings: data.listings.filter(l => l.id !== listing.id),
    });
    navigate('/houses/admin');
  };

  return (
    <div>
      <Link
        to="/houses/admin"
        className="inline-flex items-center gap-2 text-blue-900 font-semibold hover:text-yellow-600 mb-6"
      >
        <ArrowLeft className="w-4 h-4" /> Back to listings
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">
            {isNew ? 'Add property' : 'Edit property'}
          </h1>
          <p className="text-gray-600 mt-1">
            This listing will appear on the homepage when status is Coming soon or Live.
          </p>
        </div>
        <div className="flex gap-2">
          {!isNew && (
            <button
              type="button"
              onClick={handleDelete}
              className="inline-flex items-center gap-2 border-2 border-red-200 text-red-700 font-bold px-4 py-3 rounded-xl hover:bg-red-50"
            >
              <Trash2 className="w-4 h-4" /> Delete
            </button>
          )}
          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-bold px-5 py-3 rounded-xl"
          >
            <Save className="w-4 h-4" /> Save listing
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <section className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 space-y-5">
          <h2 className="text-lg font-bold text-blue-900">Property details</h2>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
              Title *
            </label>
            <input
              value={listing.title}
              onChange={e => update('title', e.target.value)}
              placeholder="e.g. 3 Bed House, Borrowdale"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-900/10"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                Subtitle
              </label>
              <input
                value={listing.subtitle ?? ''}
                onChange={e => update('subtitle', e.target.value)}
                placeholder="e.g. Premium Properties"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-900/10"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                Address
              </label>
              <input
                value={listing.address ?? ''}
                onChange={e => update('address', e.target.value)}
                placeholder="Full address"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-900/10"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
              Description
            </label>
            <textarea
              value={listing.description ?? ''}
              onChange={e => update('description', e.target.value)}
              rows={4}
              placeholder="Brief description shown on the homepage card"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-900/10"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                Price
              </label>
              <input
                value={listing.price ?? ''}
                onChange={e => update('price', e.target.value)}
                placeholder="e.g. USD 250,000"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-900/10"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                Bedrooms
              </label>
              <input
                type="number"
                min={0}
                value={listing.bedrooms ?? ''}
                onChange={e =>
                  update('bedrooms', e.target.value ? Number(e.target.value) : undefined)
                }
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-900/10"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                Bathrooms
              </label>
              <input
                type="number"
                min={0}
                value={listing.bathrooms ?? ''}
                onChange={e =>
                  update('bathrooms', e.target.value ? Number(e.target.value) : undefined)
                }
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-900/10"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                Size
              </label>
              <input
                value={listing.size ?? ''}
                onChange={e => update('size', e.target.value)}
                placeholder="e.g. 450 m²"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-900/10"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
              Property type
            </label>
            <input
              value={listing.type ?? ''}
              onChange={e => update('type', e.target.value)}
              placeholder="e.g. Residential | House"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-900/10"
            />
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 space-y-5">
          <h2 className="text-lg font-bold text-blue-900">Photos</h2>

          <ImageUploadField
            label="Main photo"
            value={listing.image}
            onChange={v => update('image', v)}
            alt={listing.imageAlt}
            onAltChange={v => update('imageAlt', v)}
            required
          />

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
              Additional photos
            </label>
            <div className="flex flex-wrap gap-2 mb-3">
              <input
                type="url"
                value={galleryUrl}
                onChange={e => setGalleryUrl(e.target.value)}
                placeholder="Image URL"
                className="flex-1 min-w-[200px] px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-900/10"
              />
              <button
                type="button"
                onClick={addGalleryUrl}
                className="inline-flex items-center gap-2 border-2 border-blue-900 text-blue-900 font-bold px-4 py-3 rounded-xl hover:bg-blue-50"
              >
                <Plus className="w-4 h-4" /> Add URL
              </button>
              <button
                type="button"
                onClick={() => galleryFileRef.current?.click()}
                className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 font-bold px-4 py-3 rounded-xl hover:bg-gray-50"
              >
                Upload files
              </button>
              <input
                ref={galleryFileRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleGalleryUpload}
              />
            </div>

            {listing.images.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {listing.images.map((img, index) => (
                  <div key={`${img}-${index}`} className="relative group rounded-xl overflow-hidden">
                    <img src={img} alt="" className="w-full h-28 object-cover" />
                    <button
                      type="button"
                      onClick={() => removeGalleryImage(index)}
                      className="absolute top-2 right-2 p-1 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Remove image"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 space-y-5">
          <h2 className="text-lg font-bold text-blue-900">Auction & homepage</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                Status
              </label>
              <select
                value={listing.status}
                onChange={e => update('status', e.target.value as HouseListingStatus)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-900/10"
              >
                <option value="draft">Draft (hidden)</option>
                <option value="coming_soon">Coming soon (show on homepage)</option>
                <option value="live">Live (show on homepage)</option>
                <option value="sold">Sold (hidden)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                Auction / go-live date
              </label>
              <input
                type="date"
                value={listing.auctionDate ?? ''}
                onChange={e => update('auctionDate', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-900/10"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
              Auction platform link *
            </label>
            <input
              type="url"
              value={listing.auctionUrl}
              onChange={e => update('auctionUrl', e.target.value)}
              placeholder={DEFAULT_AUCTION_URL}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-900/10"
            />
            <p className="text-xs text-gray-500 mt-2">
              Link to the property on iprop.solutions, or the general auction page.
            </p>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
              Button text
            </label>
            <input
              value={listing.buttonText}
              onChange={e => update('buttonText', e.target.value)}
              placeholder="View on Auction Platform"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-900/10"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                Display order
              </label>
              <input
                type="number"
                value={listing.sortOrder}
                onChange={e => update('sortOrder', Number(e.target.value) || 0)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-900/10"
              />
              <p className="text-xs text-gray-500 mt-1">Lower numbers appear first.</p>
            </div>
            <div className="flex items-end">
              <label className="flex items-center gap-3 cursor-pointer pb-3">
                <input
                  type="checkbox"
                  checked={listing.featured}
                  onChange={e => update('featured', e.target.checked)}
                  className="w-5 h-5 rounded border-gray-300 text-blue-900 focus:ring-blue-900"
                />
                <span className="font-semibold text-gray-700">Featured on homepage</span>
              </label>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
