import React from 'react';
import { Star, ShieldCheck, Heart, Crown } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    id: '1',
    title: '5.0 Google Rating',
    description: 'Rated perfectly by over 32 happy clients for our consistency and quality.',
    icon: Star
  },
  {
    id: '2',
    title: 'Hygienic Environment',
    description: 'We adhere to strict sanitation protocols to ensure your safety and comfort.',
    icon: ShieldCheck
  },
  {
    id: '3',
    title: 'Cooperative Owner',
    description: 'Rida Api is known for her kindness and dedication to client satisfaction.',
    icon: Heart
  },
  {
    id: '4',
    title: 'Premium Products',
    description: 'We use only top-tier international brands for hair and skin treatments.',
    icon: Crown
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <div className="absolute right-0 top-0 w-96 h-96 bg-brand-gold rounded-full blur-3xl"></div>
         <div className="absolute left-0 bottom-0 w-96 h-96 bg-brand-rose rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Why Choose Us?</h2>
          <p className="text-stone-400 max-w-2xl mx-auto">We don't just offer services; we build relationships based on trust and results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="bg-brand-gold/20 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-brand-gold">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;