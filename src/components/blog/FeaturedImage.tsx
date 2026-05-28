type FeaturedImageProps = {
  src: string;
  alt: string;
  className?: string;
  aspect?: 'hero' | 'card';
};

export default function FeaturedImage({
  src,
  alt,
  className = '',
  aspect = 'hero',
}: FeaturedImageProps) {
  const height =
    aspect === 'hero' ? 'h-[240px] md:h-[420px]' : 'h-48 md:h-56';

  return (
    <div
      className={`relative overflow-hidden rounded-3xl shadow-2xl border border-gray-100 bg-gray-100 ${className}`}
    >
      <img src={src} alt={alt} className={`w-full ${height} object-cover`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
