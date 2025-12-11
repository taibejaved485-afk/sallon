import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?random=10" 
          alt="Beauty Model" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl space-y-8 animate-fade-in-up">
          
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm border border-rose-100">
            <span className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </span>
            <span className="text-sm font-medium text-stone-600">Trusted by 32+ Happy Clients</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 leading-tight">
            Where Beauty <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-rose">Meets Perfection</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-600 max-w-lg leading-relaxed">
            Experience premium salon services at Aisha Butt Salon by Ridaz. A space designed for elegance, comfort, and your absolute confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="https://wa.me/923046663204"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-stone-900 text-white rounded-full font-medium hover:bg-brand-gold transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
            >
              Book Appointment
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 bg-white text-stone-900 border border-stone-200 rounded-full font-medium hover:bg-rose-50 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Explore Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-t from-brand-pink/30 to-transparent blur-3xl rounded-full translate-y-1/2 translate-x-1/2"></div>
    </div>
  );
};

export default Hero;