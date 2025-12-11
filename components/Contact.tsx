import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Contact Info */}
          <div className="lg:w-1/3 p-10 bg-stone-900 text-white flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-3xl font-serif font-bold mb-6">Get in Touch</h3>
              <p className="text-stone-400 mb-8">Ready for your transformation? Book your appointment today or visit us directly.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-gold shrink-0 mt-1" />
                <div>
                  <h5 className="font-bold text-lg">Address</h5>
                  <p className="text-stone-300 text-sm">No.1 Hassan Commercial Market, Behind Silver Spoon, Zia Colony, Faisalabad</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-brand-gold shrink-0 mt-1" />
                <div>
                  <h5 className="font-bold text-lg">Phone</h5>
                  <p className="text-stone-300 text-sm">+92 304 6663204</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-brand-gold shrink-0 mt-1" />
                <div>
                  <h5 className="font-bold text-lg">Hours</h5>
                  <p className="text-stone-300 text-sm">Open Daily till 7:00 PM</p>
                </div>
              </div>
            </div>

            <div className="pt-6 space-y-3">
              <a 
                href="https://wa.me/923046663204"
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold transition-colors"
              >
                Chat on WhatsApp
              </a>
              <a 
                href="tel:+923046663204"
                className="block w-full text-center bg-white text-stone-900 hover:bg-stone-200 py-3 rounded-lg font-bold transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="lg:w-2/3 min-h-[400px] relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.6!2d73.0!3d31.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI1JzE4LjIiTiA3M8KwMDUnNDUuNiJF!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              className="absolute inset-0 w-full h-full"
              title="Salon Location"
            ></iframe>
            {/* Custom overlay hint if map allows interaction */}
            <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
               <Navigation size={16} className="text-blue-600" />
               <span className="text-xs font-bold text-stone-800">C4RP+7G Faisalabad</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;