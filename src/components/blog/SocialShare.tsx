import { Facebook, Link2, Linkedin, Mail, Twitter } from 'lucide-react';

type SocialShareProps = {
  url: string;
  title: string;
  description?: string;
};

export default function SocialShare({ url, title, description = '' }: SocialShareProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedText = encodeURIComponent(description || title);

  const links = [
    {
      label: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: Facebook,
    },
    {
      label: 'X (Twitter)',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: Twitter,
    },
    {
      label: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: Linkedin,
    },
    {
      label: 'Email',
      href: `mailto:?subject=${encodedTitle}&body=${encodedText}%0A%0A${encodedUrl}`,
      icon: Mail,
    },
  ];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      window.prompt('Copy this link:', url);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-bold text-blue-900 uppercase tracking-wider">Share</span>
      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${label}`}
          className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center hover:bg-yellow-400 hover:text-blue-950 transition-colors"
        >
          <Icon className="w-4 h-4" />
        </a>
      ))}
      <button
        type="button"
        onClick={copyLink}
        aria-label="Copy link"
        className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center hover:bg-yellow-400 hover:text-blue-950 transition-colors"
      >
        <Link2 className="w-4 h-4" />
      </button>
    </div>
  );
}
