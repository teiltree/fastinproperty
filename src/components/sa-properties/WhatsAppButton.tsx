import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/sa-properties/constants';

type WhatsAppButtonProps = {
  developmentName?: string;
  className?: string;
  variant?: 'primary' | 'outline';
};

export default function WhatsAppButton({
  developmentName,
  className = '',
  variant = 'primary',
}: WhatsAppButtonProps) {
  const message = developmentName
    ? `Hi Fastin, I'd like to enquire about ${developmentName} (Central Developments / SA property).`
    : 'Hi Fastin, I\'d like to enquire about buying South African property from Zimbabwe.';

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  const base =
    variant === 'primary'
      ? 'bg-[#25D366] hover:bg-[#20BD5A] text-white'
      : 'bg-white border-2 border-[#25D366] text-[#128C7E] hover:bg-green-50';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 font-bold px-6 py-3 rounded-xl transition-all ${base} ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      WhatsApp Chat
    </a>
  );
}
