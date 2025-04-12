
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Clock, CalendarDays, Gift } from 'lucide-react';

const promotions = [
  {
    id: 1,
    title: "New Client Special",
    description: "First-time clients receive 20% off any hair service. Experience the StylunVip difference at a special introductory rate.",
    expiryDate: "December 31, 2023",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
    isLimited: true
  },
  {
    id: 2,
    title: "Spa Day Package",
    description: "Book any two spa services and receive a complimentary aromatherapy treatment. The perfect way to rejuvenate your body and mind.",
    expiryDate: "November 30, 2023",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    isLimited: true
  },
  {
    id: 3,
    title: "Loyalty Program",
    description: "Join our loyalty program and earn points with every visit. Redeem points for products, services, or exclusive experiences.",
    expiryDate: "Ongoing",
    image: "https://images.unsplash.com/photo-1607008829749-c0f284a49904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    isLimited: false
  },
  {
    id: 4,
    title: "Product Bundle Savings",
    description: "Purchase any three StylunVip products and save 15%. Maintain your salon-fresh look with professional-grade products at home.",
    expiryDate: "While supplies last",
    image: "https://images.unsplash.com/photo-1571646750134-a6636d262d8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
    isLimited: true
  }
];

const Promotions = () => {
  return (
    <div>
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1669&q=80"
          alt="Special Promotions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Special Promotions</h1>
        </div>
      </div>
      
      {/* Promotions Section */}
      <section className="py-16">
        <div className="salon-container">
          <div className="text-center mb-12">
            <h2 className="section-title">Current Offers</h2>
            <p className="text-salon-brown max-w-2xl mx-auto">
              Take advantage of our special promotions and exclusive offers
            </p>
          </div>
          
          <div className="space-y-12">
            {promotions.map((promo, index) => (
              <div 
                key={promo.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="rounded-lg overflow-hidden shadow-xl h-80 relative">
                    <img
                      src={promo.image}
                      alt={promo.title}
                      className="w-full h-full object-cover"
                    />
                    {promo.isLimited && (
                      <div className="absolute top-4 right-4 bg-salon-gold text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        Limited Time
                      </div>
                    )}
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-2xl font-bold text-salon-brown mb-4">{promo.title}</h3>
                  <p className="text-salon-brown mb-6">
                    {promo.description}
                  </p>
                  
                  <div className="flex items-center mb-6">
                    <CalendarDays className="w-5 h-5 text-salon-gold mr-2" />
                    <span className="text-salon-brown">Valid until: {promo.expiryDate}</span>
                  </div>
                  
                  <div className="space-x-4">
                    <button className="btn-primary">Book Now</button>
                    <button className="text-salon-brown underline hover:text-salon-gold transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gift Cards Section */}
      <section className="py-16 bg-salon-cream">
        <div className="salon-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Gift Cards</h2>
              <p className="text-salon-brown mb-6">
                Share the gift of luxury and relaxation with a StylunVip gift card. Perfect for birthdays, anniversaries, holidays, or just because.
              </p>
              <p className="text-salon-brown mb-6">
                Our digital and physical gift cards are available in any denomination and can be used for all services and products at any of our locations.
              </p>
              <div className="space-x-4">
                <button className="btn-primary">Purchase Gift Card</button>
                <button className="text-salon-brown underline hover:text-salon-gold transition-colors">
                  Check Balance
                </button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-1 bg-gradient-to-r from-salon-gold to-salon-pink rounded-lg blur opacity-30"></div>
                <div className="relative bg-white p-6 rounded-lg shadow-xl">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-salon-brown">
                      <span className="text-salon-gold">Stylun</span>Vip
                    </h3>
                    <Gift className="w-8 h-8 text-salon-gold" />
                  </div>
                  
                  <div className="bg-gradient-to-r from-salon-gold/20 to-salon-pink/20 h-40 rounded-md flex items-center justify-center mb-6">
                    <span className="text-3xl font-bold text-salon-brown">GIFT CARD</span>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-salon-brown mb-1">To: Someone Special</p>
                    <p className="text-sm text-salon-brown">From: You</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Promotions;
