
import React from 'react';

const CallToAction = () => {
  return (
    <section 
      className="py-20 bg-cover bg-center relative"
      style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1498735599329-e8dd824d8055?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80")' 
      }}
    >
      <div className="absolute inset-0 bg-salon-brown/70"></div>
      <div className="salon-container relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Luxury Hair Care?</h2>
          <p className="text-lg mb-8">
            Book your appointment today and let our expert stylists help you achieve the look you've always wanted.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn-primary bg-salon-gold hover:bg-salon-gold/90">
              Book an Appointment
            </button>
            <button className="py-2 px-6 rounded-md border-2 border-white text-white hover:bg-white/10 transition-colors">
              View Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
