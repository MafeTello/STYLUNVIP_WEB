
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
        </div>
      </div>
      
      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="salon-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-salon-brown mb-6">Get in Touch</h2>
              <p className="mb-8 text-salon-brown">
                We'd love to hear from you! Whether you have a question about our services, want to book an appointment, or need any assistance, our team is here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-salon-gold mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-medium text-salon-brown">Phone</h3>
                    <p className="text-salon-brown">(123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-salon-gold mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-medium text-salon-brown">Email</h3>
                    <p className="text-salon-brown">info@stylunvip.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-salon-gold mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-medium text-salon-brown">Address</h3>
                    <p className="text-salon-brown">123 Luxury Lane, Beverly Hills, CA 90210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-salon-gold mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-medium text-salon-brown">Hours</h3>
                    <p className="text-salon-brown">Monday - Friday: 9:00 AM - 8:00 PM</p>
                    <p className="text-salon-brown">Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-salon-brown">Sunday: 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-salon-cream p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-salon-brown mb-6">Send Us a Message</h2>
              
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-salon-brown font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-salon-brown/20 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-gold"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-salon-brown font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-salon-brown/20 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-gold"
                    placeholder="Your email"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-salon-brown font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-salon-brown/20 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-gold"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-salon-brown font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-salon-brown/20 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-gold"
                    placeholder="Subject"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-salon-brown font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-salon-brown/20 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-gold"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="flex items-center justify-center w-full btn-primary"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="py-16 bg-salon-cream">
        <div className="salon-container">
          <div className="text-center mb-8">
            <h2 className="section-title">Find Us</h2>
          </div>
          
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26430.393553120906!2d-118.43209236443518!3d34.08880244349805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1649087050556!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="StylunVip Location"
            ></iframe>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
