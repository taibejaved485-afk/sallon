import React from 'react';
import { Sparkles, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-beige relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://picsum.photos/600/800?random=20" 
                alt="Salon Interior" 
                className="rounded-2xl shadow-xl w-full h-80 object-cover mt-8 transform hover:-translate-y-2 transition-transform duration-500"
              />
              <img 
                src="https://picsum.photos/600/800?random=21" 
                alt="Makeup Art" 
                className="rounded-2xl shadow-xl w-full h-80 object-cover transform hover:-translate-y-2 transition-transform duration-500"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-xl shadow-2xl text-center">
              <span className="block text-4xl font-serif font-bold text-brand-gold">5.0</span>
              <span className="text-xs text-stone-500 uppercase tracking-widest">Star Rating</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h4 className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-2">About Us</h4>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
                Redefining Elegance in <br/>Faisalabad
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed">
                Welcome to <strong>Aisha Butt Salon by Ridaz</strong>, a woman-owned sanctuary located in the heart of Zia Colony. We believe beauty is more than just a service; it is an experience of self-care and confidence.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-rose-100 p-3 rounded-full text-brand-rose">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">Women-Owned & Led</h4>
                  <p className="text-stone-500">A safe, comfortable, and friendly environment dedicated to ladies.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-rose-100 p-3 rounded-full text-brand-rose">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">Professional Staff</h4>
                  <p className="text-stone-500">Cooperative team led by Rida Api, aiming to make every client happy.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-rose-100 p-3 rounded-full text-brand-rose">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">Quality Assured</h4>
                  <p className="text-stone-500">Premium products and hygienic tools for the perfect look.</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="inline-block border-b-2 border-brand-gold pb-1 text-stone-900 font-medium hover:text-brand-gold transition-colors">
              Visit our Salon
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;