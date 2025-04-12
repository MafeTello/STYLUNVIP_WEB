
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleShopMenu = () => {
    setIsShopOpen(!isShopOpen);
  };

  return (
    <nav className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="salon-container">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-salon-brown">
              <span className="text-salon-gold">Stylun</span>Vip
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-salon-brown hover:text-salon-gold transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-salon-brown hover:text-salon-gold transition-colors font-medium">
              About Us
            </Link>
            <Link to="/locations" className="text-salon-brown hover:text-salon-gold transition-colors font-medium">
              Locations
            </Link>
            <div className="relative group">
              <button
                className="text-salon-brown hover:text-salon-gold transition-colors font-medium flex items-center"
                onClick={toggleShopMenu}
              >
                Shop
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link
                  to="/shop/products"
                  className="block px-4 py-2 text-sm text-salon-brown hover:bg-salon-cream hover:text-salon-gold"
                >
                  Products
                </Link>
                <Link
                  to="/shop/promotions"
                  className="block px-4 py-2 text-sm text-salon-brown hover:bg-salon-cream hover:text-salon-gold"
                >
                  Promotions
                </Link>
              </div>
            </div>
            <Link to="/contact" className="text-salon-brown hover:text-salon-gold transition-colors font-medium">
              Contact Us
            </Link>
            <button className="btn-primary">Book Now</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-salon-brown hover:text-salon-gold"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-salon-brown hover:text-salon-gold transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-salon-brown hover:text-salon-gold transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/locations"
                className="text-salon-brown hover:text-salon-gold transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Locations
              </Link>
              <div>
                <button
                  className="text-salon-brown hover:text-salon-gold transition-colors font-medium flex items-center"
                  onClick={toggleShopMenu}
                >
                  Shop
                  <ChevronDown size={16} className="ml-1" />
                </button>
                {isShopOpen && (
                  <div className="mt-2 ml-4 flex flex-col space-y-2 animate-fade-in">
                    <Link
                      to="/shop/products"
                      className="text-salon-brown hover:text-salon-gold transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Products
                    </Link>
                    <Link
                      to="/shop/promotions"
                      className="text-salon-brown hover:text-salon-gold transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Promotions
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/contact"
                className="text-salon-brown hover:text-salon-gold transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <button 
                className="btn-primary w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
