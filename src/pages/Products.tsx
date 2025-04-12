
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ShoppingCart, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Luxurious Hydrating Shampoo",
    price: 38.99,
    rating: 5,
    image: "https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    category: "Hair Care"
  },
  {
    id: 2,
    name: "Revitalizing Conditioner",
    price: 42.99,
    rating: 5,
    image: "https://images.unsplash.com/photo-1589760101878-54aef5559200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    category: "Hair Care"
  },
  {
    id: 3,
    name: "Shine-Enhancing Hair Oil",
    price: 29.99,
    rating: 4,
    image: "https://images.unsplash.com/photo-1617391258031-f8d80b22fb37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    category: "Hair Care"
  },
  {
    id: 4,
    name: "Rejuvenating Face Mask",
    price: 54.99,
    rating: 5,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
    category: "Skin Care"
  },
  {
    id: 5,
    name: "Volume-Boosting Mousse",
    price: 32.99,
    rating: 4,
    image: "https://images.unsplash.com/photo-1611375127722-8ecf37b5ee36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    category: "Styling"
  },
  {
    id: 6,
    name: "Heat Protection Spray",
    price: 27.99,
    rating: 5,
    image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    category: "Styling"
  }
];

const categories = ["All", "Hair Care", "Styling", "Skin Care"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  
  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);
  
  return (
    <div>
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1556229174-5e95563b12a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
          alt="Our Products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Products</h1>
        </div>
      </div>
      
      {/* Products Section */}
      <section className="py-16">
        <div className="salon-container">
          <div className="text-center mb-12">
            <h2 className="section-title">Premium Hair & Beauty Products</h2>
            <p className="text-salon-brown max-w-2xl mx-auto">
              We offer a curated selection of high-quality products used by our professionals
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-salon-gold text-white'
                    : 'bg-salon-cream text-salon-brown hover:bg-salon-gold/20'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2 duration-300">
                <div className="h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <span className="text-sm text-salon-gold font-medium">{product.category}</span>
                  <h3 className="text-xl font-bold text-salon-brown mt-1">{product.name}</h3>
                  
                  <div className="flex items-center mt-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < product.rating ? 'fill-salon-gold text-salon-gold' : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-salon-brown ml-2">(24 reviews)</span>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold text-salon-brown">${product.price}</span>
                    <button className="flex items-center bg-salon-gold text-white px-4 py-2 rounded-md hover:bg-salon-gold/90 transition-colors">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;
