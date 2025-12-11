import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-white">
               <Scissors size={20} />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-xl font-bold tracking-wide ${isScrolled ? 'text-brand-dark' : 'text-stone-800'}`}>
                Aisha Butt Salon
              </span>
              <span className="text-xs tracking-widest uppercase text-brand-gold font-semibold">by Ridaz</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide hover:text-brand-gold transition-colors ${
                  isScrolled ? 'text-stone-700' : 'text-stone-800'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="https://wa.me/923046663204"
              target="_blank"
              rel="noreferrer"
              className="bg-brand-dark text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-brand-gold transition-colors duration-300 shadow-lg"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-800 hover:text-brand-gold transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg absolute w-full shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-stone-700 hover:text-brand-gold hover:bg-rose-50 rounded-md w-full text-center"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/923046663204"
              target="_blank"
              rel="noreferrer"
              className="mt-4 block w-full text-center bg-brand-gold text-white px-6 py-3 rounded-full font-bold"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;