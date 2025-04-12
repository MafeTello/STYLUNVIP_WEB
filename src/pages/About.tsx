
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
          alt="About StylunVip"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
        </div>
      </div>
      
      {/* About Content */}
      <section className="py-16">
        <div className="salon-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="mb-4 text-salon-brown">
                Founded in 2010, StylunVip began with a simple vision: to create a luxurious sanctuary where clients could receive exceptional hair and beauty services in an elegant environment.
              </p>
              <p className="mb-4 text-salon-brown">
                What started as a small boutique salon has grown into a premier destination for those seeking top-tier hair styling, cutting-edge treatments, and rejuvenating spa services.
              </p>
              <p className="text-salon-brown">
                Despite our growth, we've maintained our commitment to personalized service, ensuring every client who walks through our doors feels valued and leaves looking and feeling their absolute best.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80"
                alt="StylunVip Salon Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="py-16 bg-salon-cream">
        <div className="salon-container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Mission & Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-salon-gold mb-4">Excellence</h3>
              <p className="text-salon-brown">
                We strive for excellence in everything we do, from the services we provide to the products we use and the environment we create.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-salon-gold mb-4">Innovation</h3>
              <p className="text-salon-brown">
                We continuously seek out the latest techniques, trends, and technologies to ensure our clients receive the most current and effective treatments.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-salon-gold mb-4">Client Care</h3>
              <p className="text-salon-brown">
                Every client deserves personalized attention and care. We take the time to understand your needs and deliver results that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16">
        <div className="salon-container">
          <div className="text-center mb-12">
            <h2 className="section-title">Meet Our Expert Team</h2>
            <p className="text-salon-brown max-w-2xl mx-auto">
              Our talented professionals bring years of experience and passion to every service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4 border-4 border-salon-gold">
                <img
                  src="https://randomuser.me/api/portraits/women/32.jpg"
                  alt="Sophia Martinez"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-salon-brown">Sophia Martinez</h3>
              <p className="text-salon-gold">Founder & Master Stylist</p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4 border-4 border-salon-gold">
                <img
                  src="https://randomuser.me/api/portraits/men/52.jpg"
                  alt="James Wilson"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-salon-brown">James Wilson</h3>
              <p className="text-salon-gold">Color Specialist</p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4 border-4 border-salon-gold">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="Emma Thompson"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-salon-brown">Emma Thompson</h3>
              <p className="text-salon-gold">Spa Director</p>
            </div>
            
            {/* Team Member 4 */}
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4 border-4 border-salon-gold">
                <img
                  src="https://randomuser.me/api/portraits/men/36.jpg"
                  alt="Daniel Kim"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-salon-brown">Daniel Kim</h3>
              <p className="text-salon-gold">Senior Stylist</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
