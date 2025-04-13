import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, User, LogOut } from 'lucide-react'; // Added User, LogOut

// Mock data for jewelry products (assuming it's defined elsewhere or keep as is)
const mockProducts = [
  { id: 1, name: 'Diamond Solitaire Ring', description: 'Elegant 1ct diamond ring in 18k white gold.', price: 2500, imageUrl: 'https://placehold.co/300x300/FFF0F5/A0522D?text=Diamond+Ring', category: 'rings' },
  { id: 2, name: 'Gold Hoop Earrings', description: 'Classic 14k yellow gold hoop earrings.', price: 350, imageUrl: 'https://placehold.co/300x300/FFF8DC/B8860B?text=Gold+Hoops', category: 'earrings' },
  { id: 3, name: 'Sapphire Pendant Necklace', description: 'Stunning blue sapphire pendant on a silver chain.', price: 800, imageUrl: 'https://placehold.co/300x300/E0FFFF/4682B4?text=Sapphire+Necklace', category: 'necklaces' },
  { id: 4, name: 'Pearl Bracelet', description: 'Timeless freshwater pearl bracelet with a silver clasp.', price: 450, imageUrl: 'https://placehold.co/300x300/FAF0E6/8B4513?text=Pearl+Bracelet', category: 'bracelets' },
  { id: 5, name: 'Emerald Cut Earrings', description: 'Exquisite emerald earrings set in platinum.', price: 3200, imageUrl: 'https://placehold.co/300x300/F0FFF0/2E8B57?text=Emerald+Earrings', category: 'earrings' },
  { id: 6, name: 'Men\'s Gold Chain', description: 'Solid 14k gold curb link chain necklace.', price: 1200, imageUrl: 'https://placehold.co/300x300/FFFACD/DAA520?text=Gold+Chain', category: 'necklaces' },
];

// --- LoginPage Component ---
function LoginPage({ onLoginSuccess, onNavigate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // --- Handle Login Submission (Simulation) ---
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission
    setError(''); // Clear previous errors

    // --- Basic Validation ---
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // --- Simulate Login Check (Replace with actual API call) ---
    // For this example, let's assume any non-empty email/password is valid
    console.log('Attempting login with:', email);
    // In a real app, you would send email and password to your backend here
    // For now, we just simulate success
    onLoginSuccess(); // Call the function passed from App to update login state
  };

  return (
    <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-white py-20 md:py-32 font-serif flex items-center justify-center min-h-[calc(100vh-200px)]"> {/* Adjust min-height based on header/footer */}
      <div className="container mx-auto px-6 max-w-md">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-8">
            Login to Your Account
          </h2>
          <form onSubmit={handleLogin}>
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                <span className="block sm:inline">{error}</span>
              </div>
            )}
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300"
                required
              />
            </div>
            <div className="mb-8">
              <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300"
                required
              />
              {/* Optional: Add Forgot Password link here */}
              <a href="#" className="text-xs text-purple-600 hover:underline float-right mt-1">Forgot Password?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
            >
              Login
            </button>
          </form>
          <p className="text-center text-gray-600 text-sm mt-8">
            Don't have an account?{' '}
            <a href="#" onClick={(e) => { e.preventDefault(); /* Add navigation to signup page if needed */ }} className="text-purple-600 hover:underline font-semibold">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}


// --- Header Component (Updated) ---
function Header({ onNavigate, isLoggedIn, onLogout, isMobileMenuOpen, toggleMobileMenu }) { // Added isLoggedIn, onLogout
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

        {/* Icons & Login/Logout */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-700 hover:text-purple-600 transition duration-300">
            <Search size={20} />
          </button>
          <button className="text-gray-700 hover:text-purple-600 transition duration-300 relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
          </button>
          {/* --- Conditional Login/Logout Button --- */}
          {isLoggedIn ? (
            <button onClick={onLogout} className="flex items-center text-gray-700 hover:text-purple-600 transition duration-300">
              <LogOut size={20} className="mr-1"/> Logout
            </button>
          ) : (
            <button onClick={() => onNavigate('login')} className="flex items-center text-gray-700 hover:text-purple-600 transition duration-300">
               <User size={20} className="mr-1"/> Login
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
           {/* --- Add Login/Logout to Mobile Icons --- */}
           {isLoggedIn ? (
             <button onClick={onLogout} className="text-gray-700 hover:text-purple-600 mr-3">
               <LogOut size={22} />
             </button>
           ) : (
             <button onClick={() => { onNavigate('login'); toggleMobileMenu(); }} className="text-gray-700 hover:text-purple-600 mr-3">
                <User size={22} />
             </button>
           )}
           <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-purple-600 focus:outline-none">
             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
           </button>
        </div>
      </nav>

       {/* Mobile Menu (Updated) */}
       {isMobileMenuOpen && (
         <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-40">
           <div className="flex flex-col px-6 py-4 space-y-3">
             {/* Navigation Links */}
             <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); toggleMobileMenu(); }} className="block text-gray-700 hover:text-purple-600 transition duration-300">Home</a>
             <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('rings'); toggleMobileMenu(); }} className="block text-gray-700 hover:text-purple-600 transition duration-300">Rings</a>
             {/* ... other category links */}
             <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('bracelets'); toggleMobileMenu(); }} className="block text-gray-700 hover:text-purple-600 transition duration-300">Bracelets</a>

             {/* Icons and Login/Logout for Mobile */}
             <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
               <button className="text-gray-700 hover:text-purple-600 transition duration-300">
                 <Search size={20} />
               </button>
               <button className="text-gray-700 hover:text-purple-600 transition duration-300 relative">
                 <ShoppingBag size={20} />
                 <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
               </button>
               {/* --- Mobile Login/Logout (already handled by icon button above the menu toggle) --- */}
               {/* Kept separate icon button for better UX */}
             </div>
             {/* Optional: Add explicit Login/Logout text link here if desired */}
             {/* {isLoggedIn ? (
                <a href="#" onClick={(e) => { e.preventDefault(); onLogout(); toggleMobileMenu(); }} className="block text-gray-700 hover:text-purple-600 transition duration-300 pt-2 border-t">Logout</a>
             ) : (
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('login'); toggleMobileMenu(); }} className="block text-gray-700 hover:text-purple-600 transition duration-300 pt-2 border-t">Login</a>
             )} */}
           </div>
         </div>
       )}
    </header>
  );
}

// --- Hero Section Component (Unchanged) ---
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

// --- Product Card Component (Unchanged) ---
function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:shadow-xl transition duration-300 group font-serif">
      <div className="relative h-64 overflow-hidden">
         <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition duration-500 ease-in-out transform group-hover:scale-110"
            onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/300x300/cccccc/ffffff?text=Image+Not+Found`; }}
          />
         <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 flex items-center justify-center">
            <button className="bg-white text-purple-700 py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 transform translate-y-4 group-hover:translate-y-0">
                View Details
            </button>
         </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">{product.name}</h3>
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

// --- Product List Component (Unchanged) ---
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

// --- Footer Component (Unchanged) ---
function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-300 py-12 font-serif">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Footer content columns */}
          <div><h4 className="text-lg font-semibold text-white mb-4">Aura Jewels</h4><p className="text-sm">Crafting memories...</p></div>
          <div><h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4><ul className="space-y-2 text-sm"><li><a href="#" className="hover:text-purple-300">About Us</a></li><li><a href="#" className="hover:text-purple-300">Contact</a></li></ul></div>
          <div><h4 className="text-lg font-semibold text-white mb-4">Categories</h4><ul className="space-y-2 text-sm"><li><a href="#" className="hover:text-purple-300">Rings</a></li><li><a href="#" className="hover:text-purple-300">Necklaces</a></li></ul></div>
          <div><h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4><form><input type="email" placeholder="Enter your email" className="w-full px-3 py-2 rounded-md bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"/><button type="submit" className="mt-2 w-full bg-purple-600 hover:bg-purple-700 text-white text-sm py-2 px-4 rounded-md">Subscribe</button></form></div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Aura Jewels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


// --- Main App Component (Updated) ---
function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'rings', 'login', etc.
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- Handle Navigation ---
  const handleNavigate = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
    window.scrollTo(0, 0); // Scroll to top
  };

  // --- Handle Successful Login ---
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setCurrentPage('home'); // Redirect to home page after login
    console.log("Login Successful!"); // Log for debugging
  };

  // --- Handle Logout ---
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home'); // Redirect to home page after logout
    console.log("Logout Successful!"); // Log for debugging
  };

  // --- Toggle Mobile Menu ---
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // --- Render Content Based on Page and Login State ---
  const renderPage = () => {
    // If not logged in and trying to access anything other than login, show login page
    // (Adjust this logic if some pages should be public)
    // For this example, we only force login page if 'login' is the currentPage
    if (currentPage === 'login' && !isLoggedIn) {
       return <LoginPage onLoginSuccess={handleLoginSuccess} onNavigate={handleNavigate} />;
    }

    // If logged in or accessing public pages (like home, categories before login is required)
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
         // If trying to access 'login' page while already logged in, redirect to home
         if (currentPage === 'login' && isLoggedIn) {
             setCurrentPage('home'); // Update state to avoid infinite loop if component re-renders before state update completes
             return (
                <>
                  <HeroSection />
                  <ProductList products={mockProducts} category="all" />
                </>
             );
         }
        // Otherwise show the default home content
        return (
          <>
            <HeroSection />
            <ProductList products={mockProducts} category="all" />
          </>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white"> {/* Ensure base background */}
       <Header
          onNavigate={handleNavigate}
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App; // Export the main App component
