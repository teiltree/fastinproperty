import { Link } from 'react-router-dom';
import { Plus, Pencil, Star } from 'lucide-react';
import { useHouses } from '@/houses/useHouses';
import { formatListingDate } from '@/houses/utils';
import type { HouseListingStatus } from '@/houses/types';

const statusStyles: Record<HouseListingStatus, string> = {
  draft: 'bg-gray-100 text-gray-700',
  coming_soon: 'bg-amber-100 text-amber-800',
  live: 'bg-emerald-100 text-emerald-800',
  sold: 'bg-blue-100 text-blue-800',
};

const statusLabels: Record<HouseListingStatus, string> = {
  draft: 'Draft',
  coming_soon: 'Coming soon',
  live: 'Live',
  sold: 'Sold',
};

export default function HousesAdminListings() {
  const { data } = useHouses();
  const listings = [...data.listings].sort((a, b) => {
    if (a.sortOrder !== b.sortOrder) return a.sortOrder - b.sortOrder;
    return a.updatedAt < b.updatedAt ? 1 : -1;
  });

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Property Listings</h1>
          <p className="text-gray-600 mt-1">
            Add houses going live on the homepage with photos and auction links.
          </p>
        </div>
        <Link
          to="/houses/admin/listings/new"
          className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold px-5 py-3 rounded-xl"
        >
          <Plus className="w-5 h-5" /> Add property
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-5 py-4 font-bold text-gray-600">Property</th>
              <th className="px-5 py-4 font-bold text-gray-600 hidden md:table-cell">Auction date</th>
              <th className="px-5 py-4 font-bold text-gray-600">Status</th>
              <th className="px-5 py-4 font-bold text-gray-600 hidden lg:table-cell">Homepage</th>
              <th className="px-5 py-4 font-bold text-gray-600"></th>
            </tr>
          </thead>
          <tbody>
            {listings.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-5 py-12 text-center text-gray-500">
                  No properties yet. Add your first listing for the homepage.
                </td>
              </tr>
            ) : (
              listings.map(listing => (
                <tr key={listing.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      {listing.image ? (
                        <img
                          src={listing.image}
                          alt=""
                          className="w-14 h-14 rounded-lg object-cover shrink-0"
                        />
                      ) : (
                        <div className="w-14 h-14 rounded-lg bg-gray-100 shrink-0" />
                      )}
                      <div>
                        <div className="font-bold text-blue-900 flex items-center gap-2">
                          {listing.featured && (
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          )}
                          {listing.title}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {listing.subtitle || listing.address || '—'} · Updated{' '}
                          {formatListingDate(listing.updatedAt)}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 hidden md:table-cell text-gray-700">
                    {listing.auctionDate ? formatListingDate(listing.auctionDate) : '—'}
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`text-xs font-bold uppercase px-2 py-1 rounded-full ${statusStyles[listing.status]}`}
                    >
                      {statusLabels[listing.status]}
                    </span>
                  </td>
                  <td className="px-5 py-4 hidden lg:table-cell text-gray-700">
                    {listing.status === 'coming_soon' || listing.status === 'live' ? 'Visible' : 'Hidden'}
                  </td>
                  <td className="px-5 py-4 text-right">
                    <Link
                      to={`/houses/admin/listings/${listing.id}/edit`}
                      className="inline-flex items-center gap-1 text-blue-900 font-semibold hover:text-yellow-600"
                    >
                      <Pencil className="w-4 h-4" /> Edit
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
