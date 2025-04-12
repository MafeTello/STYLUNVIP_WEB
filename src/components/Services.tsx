
import React from 'react';
import { Scissors, Sparkles, Droplet } from 'lucide-react';

const serviceItems = [
  {
    icon: <Scissors className="w-12 h-12 text-salon-gold mb-4" />,
    title: "Hair Styling",
    description: "Our expert stylists provide cutting-edge haircuts, coloring, and styling services tailored to your unique look and preferences."
  },
  {
    icon: <Sparkles className="w-12 h-12 text-salon-gold mb-4" />,
    title: "Beauty Treatments",
    description: "From facials to makeup applications, our beauty services will enhance your natural features and leave you looking radiant."
  },
  {
    icon: <Droplet className="w-12 h-12 text-salon-gold mb-4" />,
    title: "Spa & Wellness",
    description: "Relax and rejuvenate with our premium spa treatments including massages, body wraps, and aromatherapy sessions."
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-salon-cream">
      <div className="salon-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Premium Services</h2>
          <p className="text-salon-brown max-w-2xl mx-auto">
            Experience the luxury and excellence of our professional salon and spa services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-center transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold text-salon-brown mb-3">{service.title}</h3>
              <p className="text-salon-brown">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">View All Services</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
