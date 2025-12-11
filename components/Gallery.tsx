import React from 'react';

const Gallery: React.FC = () => {
  // Using picsum with specific IDs for stability, normally these would be local assets
  const images = [
    'https://picsum.photos/600/600?random=50',
    'https://picsum.photos/600/800?random=51',
    'https://picsum.photos/600/600?random=52',
    'https://picsum.photos/600/800?random=53',
    'https://picsum.photos/600/600?random=54',
    'https://picsum.photos/600/800?random=55',
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-brand-rose font-bold tracking-widest uppercase text-sm">Portfolio</span>
            <h2 className="text-4xl font-serif font-bold text-stone-900 mt-2">Our Masterpieces</h2>
          </div>
          <a href="#" className="hidden md:block text-brand-gold font-bold hover:text-stone-900 transition-colors">Follow us on Instagram</a>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <div key={index} className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer">
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <span className="text-white font-serif text-xl italic">View Look</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <a href="#" className="text-brand-gold font-bold hover:text-stone-900 transition-colors">Follow us on Instagram</a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;