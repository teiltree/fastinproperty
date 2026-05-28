import { Mail } from 'lucide-react';
import type { BlogAuthor } from '@/blog/types';

type AuthorCardProps = {
  author: BlogAuthor;
};

export default function AuthorCard({ author }: AuthorCardProps) {
  return (
    <div className="flex gap-5 items-start bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
      {author.avatarUrl && (
        <img
          src={author.avatarUrl}
          alt={author.name}
          className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-md shrink-0"
        />
      )}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-yellow-600">Written by</p>
        <h4 className="text-xl font-bold text-blue-900 mt-1">{author.name}</h4>
        <p className="text-sm text-gray-600 font-medium">{author.role}</p>
        <p className="text-gray-700 mt-3 leading-relaxed">{author.bio}</p>
        {author.email && (
          <a
            href={`mailto:${author.email}`}
            className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-blue-900 hover:text-yellow-600"
          >
            <Mail className="w-4 h-4" />
            {author.email}
          </a>
        )}
      </div>
    </div>
  );
}
