import React from 'react';
import { Facebook, Instagram, Scissors } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-stone-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-white">
               <Scissors size={16} />
            </div>
            <span className="font-serif text-xl font-bold text-stone-900">Aisha Butt Salon by Ridaz</span>
          </div>
          
          <div className="flex space-x-6 text-stone-400">
            <a href="#" className="hover:text-brand-rose transition-colors"><Instagram size={24} /></a>
            <a href="#" className="hover:text-blue-600 transition-colors"><Facebook size={24} /></a>
          </div>
        </div>

        <div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} Aisha Butt Salon by Ridaz. All rights reserved.</p>
          <div className="mt-2 md:mt-0 space-x-4">
            <a href="#" className="hover:text-stone-900">Privacy Policy</a>
            <a href="#" className="hover:text-stone-900">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;