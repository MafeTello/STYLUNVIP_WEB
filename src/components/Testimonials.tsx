
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Emily Johnson",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    quote: "StylunVip completely transformed my hair! The stylists are true artists who listen and deliver exactly what you want. Worth every penny!",
    rating: 5
  },
  {
    name: "Sarah Williams",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "The spa services here are absolutely heavenly. I left feeling completely renewed and pampered. The staff is professional and attentive.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    quote: "As someone who's particular about their haircuts, I was impressed by the attention to detail and skill at StylunVip. It's my go-to place now!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="salon-container">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="text-salon-brown max-w-2xl mx-auto">
            Don't just take our word for it - hear what our satisfied clients have to say about their experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-salon-cream p-8 rounded-lg shadow-md flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-salon-gold">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-salon-gold text-salon-gold" />
                ))}
              </div>
              <p className="text-salon-brown italic mb-4 text-center">"{testimonial.quote}"</p>
              <h4 className="font-bold text-salon-brown">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
