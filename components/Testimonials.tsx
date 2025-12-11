import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const reviews: Testimonial[] = [
  {
    id: '1',
    name: 'Ayesha Khan',
    rating: 5,
    comment: 'Highly satisfied with kerabond and base color. Rida makes clients feel calm and comfortable. The results were beyond my expectations!'
  },
  {
    id: '2',
    name: 'Sana Ahmed',
    rating: 5,
    comment: 'Visited 3 times, always satisfied and happy with services. The staff is professional and the environment is very relaxing.'
  },
  {
    id: '3',
    name: 'Fatima Malik',
    rating: 5,
    comment: 'Owner is very kind and cooperative, staff is amazing. Best salon in Zia Colony for party makeup!'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-rose-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">Client Love</h2>
          <div className="flex justify-center items-center gap-2">
            <span className="text-stone-600 font-medium">5.0 Rating on Google</span>
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl shadow-xl shadow-stone-200/50 relative">
              <Quote className="absolute top-6 right-6 text-brand-rose/20" size={48} />
              <div className="flex text-yellow-500 mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-stone-600 italic mb-6 relative z-10">"{review.comment}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-beige rounded-full flex items-center justify-center font-bold text-brand-gold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">{review.name}</h4>
                  <span className="text-xs text-stone-400">Verified Client</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;