
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-salon-brown text-white">
      <div className="salon-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-salon-gold">Stylun</span>Vip
            </h3>
            <p className="mb-4">
              Luxury hair salon and spa providing premium services for those who appreciate excellence and style.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-salon-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-salon-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-salon-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-salon-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-salon-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-salon-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-salon-gold transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/shop/products" className="hover:text-salon-gold transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-salon-gold transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-salon-gold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>info@stylunvip.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Luxury Lane, Beverly Hills, CA 90210</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-salon-gold">Opening Hours</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Clock size={18} className="mr-2 flex-shrink-0" />
                <div>
                  <span className="block">Monday - Friday</span>
                  <span className="text-sm text-salon-gold">9:00 AM - 8:00 PM</span>
                </div>
              </li>
              <li className="flex items-center">
                <Clock size={18} className="mr-2 flex-shrink-0" />
                <div>
                  <span className="block">Saturday</span>
                  <span className="text-sm text-salon-gold">9:00 AM - 6:00 PM</span>
                </div>
              </li>
              <li className="flex items-center">
                <Clock size={18} className="mr-2 flex-shrink-0" />
                <div>
                  <span className="block">Sunday</span>
                  <span className="text-sm text-salon-gold">10:00 AM - 5:00 PM</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-4 border-t border-white/20">
        <div className="salon-container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} StylunVip. All rights reserved.</p>
            <div className="mt-2 md:mt-0">
              <Link to="/privacy" className="text-sm hover:text-salon-gold mr-4">Privacy Policy</Link>
              <Link to="/terms" className="text-sm hover:text-salon-gold">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
