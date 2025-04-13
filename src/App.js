import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';

// Mock data for jewelry products
const mockProducts = [
  {
    id: 1,
    name: 'Diamond Solitaire Ring',
    description: 'Elegant 1ct diamond ring in 18k white gold.',
    price: 2500,
    imageUrl: 'https://placehold.co/300x300/FFF0F5/A0522D?text=Diamond+Ring',
    category: 'rings',
  },
  {
    id: 2,
    name: 'Gold Hoop Earrings',
    description: 'Classic 14k yellow gold hoop earrings.',
    price: 350,
    imageUrl: 'https://placehold.co/300x300/FFF8DC/B8860B?text=Gold+Hoops',
    category: 'earrings',
  },
  {
    id: 3,
    name: 'Sapphire Pendant Necklace',
    description: 'Stunning blue sapphire pendant on a silver chain.',
    price: 800,
    imageUrl: 'https://placehold.co/300x300/E0FFFF/4682B4?text=Sapphire+Necklace',
    category: 'necklaces',
  },
  {
    id: 4,
    name: 'Pearl Bracelet',
    description: 'Timeless freshwater pearl bracelet with a silver clasp.',
    price: 450,
    imageUrl: 'https://placehold.co/300x300/FAF0E6/8B4513?text=Pearl+Bracelet',
    category: 'bracelets',
  },
   {
    id: 5,
    name: 'Emerald Cut Earrings',
    description: 'Exquisite emerald earrings set in platinum.',
    price: 3200,
    imageUrl: 'https://placehold.co/300x300/F0FFF0/2E8B57?text=Emerald+Earrings',
    category: 'earrings',
  },
  {
    id: 6,
    name: 'Men\'s Gold Chain',
    description: 'Solid 14k gold curb link chain necklace.',
    price: 1200,
    imageUrl: 'https://placehold.co/300x300/FFFACD/DAA520?text=Gold+Chain',
    category: 'necklaces',
  },
];

// Header Component
function Header({ onNavigate, isMobileMenuOpen, toggleMobileMenu }) {
  return (
    <header className="bg-gradient-to-r from-pink-50 via-white to-purple-50 shadow-md sticky top-0 z-50 font-serif">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-purple-800 cursor-pointer" onClick={() => onNavigate('home')}>
          Aura Jewels
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="text-gray-700 hover:text-purple-600 transition duration-300">Home</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('rings'); }} className="text-gray-700 hover:text-purple-600 transition duration-300">Rings</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('necklaces'); }} className="text-gray-700 hover:text-purple-600 transition duration-300">Necklaces</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('earrings'); }} className="text-gray-700 hover:text-purple-600 transition duration-300">Earrings</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('bracelets'); }} className="text-gray-700 hover:text-purple-600 transition duration-300">Bracelets</a>
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-700 hover:text-purple-600 transition duration-300">
            <Search size={20} />
          </button>
          <button className="text-gray-700 hover:text-purple-600 transition duration-300 relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
           <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-purple-600 focus:outline-none">
             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
           </button>
        </div>
      </nav>

       {/* Mobile Menu */}
       {isMobileMenuOpen && (
         <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-40">
           <div className="flex flex-col px-6 py-4 space-y-3">
             <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); toggleMobileMenu(); }} className="block text-gray-700 hover:text-purple-600 transition duration-300">Home</a>
             <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('rings'); toggleMobileMenu(); }} className="block text-gray-700 hover:text-purple-600 transition duration-300">Rings</a>
             <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('necklaces'); toggleMobileMenu(); }} className="block text-gray-700 hover:text-purple-600 transition duration-300">Necklaces</a>
             <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('earrings'); toggleMobileMenu(); }} className="block text-gray-700 hover:text-purple-600 transition duration-300">Earrings</a>
             <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('bracelets'); toggleMobileMenu(); }} className="block text-gray-700 hover:text-purple-600 transition duration-300">Bracelets</a>
             <div className="flex space-x-4 pt-4 border-t border-gray-200">
               <button className="text-gray-700 hover:text-purple-600 transition duration-300">
                 <Search size={20} />
               </button>
               <button className="text-gray-700 hover:text-purple-600 transition duration-300 relative">
                 <ShoppingBag size={20} />
                 <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
               </button>
             </div>
           </div>
         </div>
       )}
    </header>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-purple-100 via-pink-50 to-white py-20 md:py-32 font-serif">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-purple-900 mb-4 leading-tight">
          Exquisite Craftsmanship, Timeless Elegance
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Discover our curated collection of fine jewelry, designed to celebrate life's special moments.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
          Shop Collection
        </button>
      </div>
    </section>
  );
}

// Product Card Component
function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:shadow-xl transition duration-300 group font-serif">
      <div className="relative h-64 overflow-hidden">
         <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition duration-500 ease-in-out transform group-hover:scale-110"
            // Basic fallback using placehold.co in case the primary image fails
            onError={(e) => {
                e.target.onerror = null; // Prevent infinite loop if fallback also fails
                e.target.src=`https://placehold.co/300x300/cccccc/ffffff?text=Image+Not+Found`;
             }}
          />
         <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 flex items-center justify-center">
            <button className="bg-white text-purple-700 py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 transform translate-y-4 group-hover:translate-y-0">
                View Details
            </button>
         </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">{product.name}</h3>
        {/* <p className="text-gray-600 text-sm mb-3 h-10 overflow-hidden">{product.description}</p> */}
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-purple-700">${product.price.toFixed(2)}</span>
          <button className="text-purple-600 hover:text-purple-800 transition duration-300">
            <ShoppingBag size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}

// Product List Component
function ProductList({ products, category }) {
  const filteredProducts = category === 'all'
    ? products
    : products.filter(p => p.category === category);

  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <section className="py-16 bg-gray-50 font-serif">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          {category === 'all' ? 'Featured Products' : categoryTitle}
        </h2>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No products found in this category yet.</p>
        )}
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-300 py-12 font-serif">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Aura Jewels</h4>
            <p className="text-sm">Crafting memories with exquisite jewelry since 1998. Find timeless pieces for every occasion.</p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-300 transition duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-purple-300 transition duration-300">Contact</a></li>
              <li><a href="#" className="hover:text-purple-300 transition duration-300">FAQ</a></li>
              <li><a href="#" className="hover:text-purple-300 transition duration-300">Shipping & Returns</a></li>
            </ul>
          </div>
          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-300 transition duration-300">Rings</a></li>
              <li><a href="#" className="hover:text-purple-300 transition duration-300">Necklaces</a></li>
              <li><a href="#" className="hover:text-purple-300 transition duration-300">Earrings</a></li>
              <li><a href="#" className="hover:text-purple-300 transition duration-300">Bracelets</a></li>
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-sm mb-3">Subscribe for exclusive offers and updates.</p>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-md bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button type="submit" className="mt-2 w-full bg-purple-600 hover:bg-purple-700 text-white text-sm py-2 px-4 rounded-md transition duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Aura Jewels. All rights reserved.</p>
          {/* Add social media icons here if needed */}
        </div>
      </div>
    </footer>
  );
}


// Main App Component
function App() {
  // State to manage the current view/page (simulating navigation)
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'rings', 'necklaces', etc.
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to handle navigation changes
  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

   // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  // Render content based on the current page state
  const renderPage = () => {
    switch (currentPage) {
      case 'rings':
        return <ProductList products={mockProducts} category="rings" />;
      case 'necklaces':
        return <ProductList products={mockProducts} category="necklaces" />;
      case 'earrings':
        return <ProductList products={mockProducts} category="earrings" />;
      case 'bracelets':
        return <ProductList products={mockProducts} category="bracelets" />;
      case 'home':
      default:
        return (
          <>
            <HeroSection />
            <ProductList products={mockProducts} category="all" />
          </>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
       <Header onNavigate={handleNavigate} isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App; // Export the main App component
