import React from 'react';
import { Scissors, Palette, Sparkles, UserCheck, Sun, Gem } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Bridal Makeup',
    description: 'Bespoke bridal looks that make your special day unforgettable. Traditional to contemporary styles.',
    icon: Sparkles,
    image: 'https://picsum.photos/400/300?random=30'
  },
  {
    id: '2',
    title: 'Party Makeup',
    description: 'Glamorous makeovers for events, parties, and dinners. Glow with confidence.',
    icon: UserCheck,
    image: 'https://picsum.photos/400/300?random=31'
  },
  {
    id: '3',
    title: 'Hair Color & Kerabond',
    description: 'Expert hair coloring, highlights, and restorative Kerabond treatments for silky hair.',
    icon: Palette,
    image: 'https://picsum.photos/400/300?random=32'
  },
  {
    id: '4',
    title: 'Haircuts & Styling',
    description: 'Trendy cuts and signature blow-dries tailored to your face shape.',
    icon: Scissors,
    image: 'https://picsum.photos/400/300?random=33'
  },
  {
    id: '5',
    title: 'Signature Facials',
    description: 'Deep cleansing, skin polish, and hydra-facials for radiant, youthful skin.',
    icon: Sun,
    image: 'https://picsum.photos/400/300?random=34'
  },
  {
    id: '6',
    title: 'Mehndi & Treatments',
    description: 'Intricate Mehndi designs and protein treatments for damaged hair.',
    icon: Gem,
    image: 'https://picsum.photos/400/300?random=35'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-rose font-bold tracking-widest uppercase text-sm">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mt-2 mb-6">Premium Services</h2>
          <p className="text-stone-500 text-lg">
            From essential grooming to luxurious transformations, we offer a complete range of beauty services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white rounded-2xl border border-stone-100 shadow-lg hover:shadow-2xl hover:shadow-rose-100 transition-all duration-300 overflow-hidden"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full z-20 shadow-md">
                  <service.icon className="text-brand-gold" size={20} />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-stone-900 mb-3 group-hover:text-brand-rose transition-colors">
                  {service.title}
                </h3>
                <p className="text-stone-500 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <a href="#contact" className="text-sm font-bold uppercase tracking-wider text-brand-gold hover:text-brand-dark transition-colors flex items-center gap-2">
                  Book This Service
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <a 
              href="https://wa.me/923046663204"
              className="inline-block px-10 py-4 border-2 border-stone-900 text-stone-900 font-bold rounded-full hover:bg-stone-900 hover:text-white transition-all duration-300"
            >
              View Full Price List
            </a>
        </div>
      </div>
    </section>
  );
};

export default Services;