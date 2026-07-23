import { Shield, Award, MapPin, TrendingUp } from 'lucide-react';
import { CORE_POSITIONING } from '@/sa-properties/constants';

const icons = [Shield, Award, MapPin, TrendingUp];

type StrategicPositioningProps = {
  compact?: boolean;
};

export default function StrategicPositioning({ compact = false }: StrategicPositioningProps) {
  return (
    <section className={compact ? 'py-8' : 'py-12 md:py-16'}>
      <div className="text-center mb-8 md:mb-10">
        <p className="text-yellow-600 text-sm font-bold uppercase tracking-widest mb-2">
          Zimbabwe&apos;s official gateway
        </p>
        <h2 className="text-2xl md:text-4xl font-bold text-blue-900">
          South African Property Investment
        </h2>
        <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
          Fastin Property Auctions — mandated by Central Developments, South Africa&apos;s largest
          residential developer.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {CORE_POSITIONING.map((item, i) => {
          const Icon = icons[i];
          return (
            <div
              key={item.title}
              className="bg-white rounded-2xl border-2 border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-900 text-yellow-400 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
