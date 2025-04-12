
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MapPin, Phone, Clock } from 'lucide-react';

const locations = [
  {
    name: "Beverly Hills Flagship",
    address: "123 Luxury Lane, Beverly Hills, CA 90210",
    phone: "(123) 456-7890",
    hours: {
      weekdays: "9:00 AM - 8:00 PM",
      saturday: "9:00 AM - 6:00 PM",
      sunday: "10:00 AM - 5:00 PM"
    },
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26430.393553120906!2d-118.43209236443518!3d34.08880244349805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1649087050556!5m2!1sen!2sus"
  },
  {
    name: "Santa Monica Beachside",
    address: "456 Ocean Avenue, Santa Monica, CA 90401",
    phone: "(123) 456-7891",
    hours: {
      weekdays: "9:00 AM - 8:00 PM",
      saturday: "9:00 AM - 6:00 PM",
      sunday: "10:00 AM - 5:00 PM"
    },
    image: "https://images.unsplash.com/photo-1470259078422-826894b933aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13219.848430854807!2d-118.50204233022462!3d34.01499889999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4cec2910019%3A0xb4170ab5ff23f5a8!2s456%20Ocean%20Ave%2C%20Santa%20Monica%2C%20CA%2090402!5e0!3m2!1sen!2sus!4v1649087295281!5m2!1sen!2sus"
  },
  {
    name: "West Hollywood Chic",
    address: "789 Sunset Boulevard, West Hollywood, CA 90069",
    phone: "(123) 456-7892",
    hours: {
      weekdays: "9:00 AM - 8:00 PM",
      saturday: "9:00 AM - 6:00 PM",
      sunday: "10:00 AM - 5:00 PM"
    },
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13222.960582402624!2d-118.38847203022464!3d34.09019279999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b93cca9c7ab1%3A0xe92878314ab336d2!2sSunset%20Blvd%2C%20West%20Hollywood%2C%20CA%2090069!5e0!3m2!1sen!2sus!4v1649087450281!5m2!1sen!2sus"
  }
];

const Locations = () => {
  return (
    <div>
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80"
          alt="Our Locations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Locations</h1>
        </div>
      </div>
      
      {/* Locations Section */}
      <section className="py-16">
        <div className="salon-container">
          <div className="text-center mb-12">
            <h2 className="section-title">Visit Us</h2>
            <p className="text-salon-brown max-w-2xl mx-auto">
              With multiple locations throughout Los Angeles, luxury hair care is always close by
            </p>
          </div>
          
          <div className="space-y-16">
            {locations.map((location, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="rounded-lg overflow-hidden shadow-xl h-80">
                    <img
                      src={location.image}
                      alt={location.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-2xl font-bold text-salon-brown mb-4">{location.name}</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-salon-gold mr-3 mt-1" />
                      <span className="text-salon-brown">{location.address}</span>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-salon-gold mr-3 mt-1" />
                      <span className="text-salon-brown">{location.phone}</span>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-salon-gold mr-3 mt-1" />
                      <div>
                        <p className="text-salon-brown">Monday - Friday: {location.hours.weekdays}</p>
                        <p className="text-salon-brown">Saturday: {location.hours.saturday}</p>
                        <p className="text-salon-brown">Sunday: {location.hours.sunday}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-x-4">
                    <button className="btn-primary">Book at {location.name}</button>
                    <button className="text-salon-brown underline hover:text-salon-gold transition-colors">
                      Get Directions
                    </button>
                  </div>
                </div>
                
                <div className="lg:col-span-2 h-[300px] rounded-lg overflow-hidden shadow-lg mt-8">
                  <iframe
                    src={location.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={location.name}
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Coming Soon */}
      <section className="py-16 bg-salon-cream">
        <div className="salon-container">
          <div className="text-center">
            <h2 className="section-title">Coming Soon</h2>
            <p className="text-salon-brown max-w-2xl mx-auto mb-8">
              We're expanding to bring the StylunVip experience to more locations. Stay tuned for our newest salon openings.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-salon-brown mb-2">Malibu Oceanview</h3>
                <p className="text-salon-brown">Opening Fall 2023</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-salon-brown mb-2">Downtown LA Loft</h3>
                <p className="text-salon-brown">Opening Winter 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Locations;
