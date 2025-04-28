import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, User, LogOut, ArrowLeft, Plus, Minus, Trash2 } from 'lucide-react'; // Added icons
import { loginUser, fetchCart, updateCart } from './services/api';

// Mock data for jewelry products
const mockProducts = [
  { id: 1, name: 'Diamond Solitaire Ring', description: 'An elegant and timeless 1 carat diamond solitaire ring set in lustrous 18k white gold. Perfect for engagements or special occasions.', price: 2500, imageUrl: 'https://placehold.co/600x600/FFF0F5/A0522D?text=Diamond+Ring', category: 'rings' },
  { id: 2, name: 'Gold Hoop Earrings', description: 'Classic and versatile 14k yellow gold hoop earrings. Lightweight and comfortable for everyday wear, adding a touch of sophistication.', price: 350, imageUrl: 'https://placehold.co/600x600/FFF8DC/B8860B?text=Gold+Hoops', category: 'earrings' },
  { id: 3, name: 'Sapphire Pendant Necklace', description: 'A stunning oval-cut blue sapphire pendant suspended from a delicate sterling silver chain. A beautiful gift idea.', price: 800, imageUrl: 'https://placehold.co/600x600/E0FFFF/4682B4?text=Sapphire+Necklace', category: 'necklaces' },
  { id: 4, name: 'Pearl Bracelet', description: 'Timeless elegance embodied in this freshwater pearl bracelet. Features lustrous pearls secured with a sterling silver clasp.', price: 450, imageUrl: 'https://placehold.co/600x600/FAF0E6/8B4513?text=Pearl+Bracelet', category: 'bracelets' },
  { id: 5, name: 'Emerald Cut Earrings', description: 'Exquisite emerald-cut green gemstone earrings set in polished platinum. A statement piece for formal events.', price: 3200, imageUrl: 'https://placehold.co/600x600/F0FFF0/2E8B57?text=Emerald+Earrings', category: 'earrings' },
  { id: 6, name: 'Men\'s Gold Chain', description: 'A solid and stylish 14k yellow gold curb link chain necklace, 22 inches in length. A classic accessory for men.', price: 1200, imageUrl: 'https://placehold.co/600x600/FFFACD/DAA520?text=Gold+Chain', category: 'necklaces' },
];

// --- Utility Function to Format Currency ---
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
};

// --- LoginPage Component (Unchanged from previous version) ---
function LoginPage({ onLoginSuccess, onNavigate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    console.log('Attempting login with:', email);
    // Simulate success
    onLoginSuccess();
  };

  return (
    <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-white py-20 md:py-32 font-serif flex items-center justify-center min-h-[calc(100vh-200px)]">
      <div className="container mx-auto px-6 max-w-md">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-8">Login</h2>
          <form onSubmit={handleLogin}>
            {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" required />
            </div>
            <div className="mb-8">
              <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" required />
              <a href="#" className="text-xs text-purple-600 hover:underline float-right mt-1">Forgot Password?</a>
            </div>
            <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">Login</button>
          </form>
          <p className="text-center text-gray-600 text-sm mt-8">Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); /* TODO: Navigate to signup */ }} className="text-purple-600 hover:underline font-semibold">Sign Up</a></p>
        </div>
      </div>
    </section>
  );
}

// --- Header Component (Updated) ---
function Header({ onNavigate, isLoggedIn, onLogout, isMobileMenuOpen, toggleMobileMenu, cartItemCount }) { // Added cartItemCount
  return (
    <header className="bg-gradient-to-r from-pink-50 via-white to-purple-50 shadow-md sticky top-0 z-50 font-serif">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-purple-800 cursor-pointer" onClick={() => onNavigate('home')}>
          Aura Jewels
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="text-gray-700 hover:text-purple-600">Home</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('rings'); }} className="text-gray-700 hover:text-purple-600">Rings</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('necklaces'); }} className="text-gray-700 hover:text-purple-600">Necklaces</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('earrings'); }} className="text-gray-700 hover:text-purple-600">Earrings</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('bracelets'); }} className="text-gray-700 hover:text-purple-600">Bracelets</a>
        </div>

        {/* Icons & Login/Logout */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-700 hover:text-purple-600">
            <Search size={20} />
          </button>
          {/* --- Cart Icon --- */}
          <button onClick={() => onNavigate('cart')} className="text-gray-700 hover:text-purple-600 relative">
            <ShoppingBag size={20} />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-sans">
                {cartItemCount}
              </span>
            )}
          </button>
          {/* --- Login/Logout Button --- */}
          {isLoggedIn ? (
            <button onClick={onLogout} className="flex items-center text-gray-700 hover:text-purple-600">
              <LogOut size={20} className="mr-1"/> Logout
            </button>
          ) : (
            <button onClick={() => onNavigate('login')} className="flex items-center text-gray-700 hover:text-purple-600">
               <User size={20} className="mr-1"/> Login
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
           {/* --- Mobile Icons --- */}
           <button onClick={() => onNavigate('cart')} className="text-gray-700 hover:text-purple-600 mr-3 relative">
                <ShoppingBag size={22} />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-sans">
                    {cartItemCount}
                  </span>
                 )}
           </button>
           {isLoggedIn ? (
             <button onClick={onLogout} className="text-gray-700 hover:text-purple-600 mr-3"> <LogOut size={22} /> </button>
           ) : (
             <button onClick={() => { onNavigate('login'); toggleMobileMenu(); }} className="text-gray-700 hover:text-purple-600 mr-3"> <User size={22} /> </button>
           )}
           <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-purple-600 focus:outline-none">
             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
           </button>
        </div>
      </nav>

       {/* Mobile Menu */}
       {isMobileMenuOpen && (
         <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-40">
           <div className="flex flex-col px-6 py-4 space-y-3">
             <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); toggleMobileMenu(); }} className="block text-gray-700 hover:text-purple-600">Home</a>
             <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('rings'); toggleMobileMenu(); }} className="block text-gray-700 hover:text-purple-600">Rings</a>
             <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('necklaces'); toggleMobileMenu(); }} className="block text-gray-700 hover:text-purple-600">Necklaces</a>
             <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('earrings'); toggleMobileMenu(); }} className="block text-gray-700 hover:text-purple-600">Earrings</a>
             <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('bracelets'); toggleMobileMenu(); }} className="block text-gray-700 hover:text-purple-600">Bracelets</a>
             <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
               <button className="text-gray-700 hover:text-purple-600"> <Search size={20} /> </button>
               {/* Cart/Login/Logout icons handled above */}
             </div>
           </div>
         </div>
       )}
    </header>
  );
}

// --- Hero Section Component (Unchanged) ---
function HeroSection() { /* ... same as before ... */
  return (
    <section className="bg-gradient-to-br from-purple-100 via-pink-50 to-white py-20 md:py-32 font-serif">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-purple-900 mb-4 leading-tight">Exquisite Craftsmanship</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">Discover our curated collection.</p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">Shop Collection</button>
      </div>
    </section>
  );
}

// --- Product Card Component (Updated) ---
function ProductCard({ product, onProductSelect, onAddToCart }) { // Added onProductSelect, onAddToCart
  // Handle Add to Cart click - prevent navigation
  const handleAddToCartClick = (e) => {
      e.stopPropagation(); // Prevent card's onClick from firing
      onAddToCart(product);
  };

  return (
    // Make the whole card clickable to view details
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden transform hover:shadow-xl transition duration-300 group font-serif cursor-pointer"
      onClick={() => onProductSelect(product.id)} // Navigate to detail view
    >
      <div className="relative h-64 overflow-hidden">
         <img
            src={product.imageUrl.replace('600x600', '300x300')} // Use smaller image for card
            alt={product.name}
            className="w-full h-full object-cover transition duration-500 ease-in-out transform group-hover:scale-110"
            onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/300x300/cccccc/ffffff?text=Not+Found`; }}
          />
         {/* Overlay for View Details - removed as card is clickable */}
         {/* Add to Cart Button in Overlay */}
         <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-end">
            <button
                onClick={handleAddToCartClick} // Use specific handler
                className="bg-white text-purple-700 p-2 rounded-full shadow-md hover:bg-purple-100 transition duration-300 transform hover:scale-110"
                aria-label={`Add ${product.name} to cart`}
            >
                <ShoppingBag size={20} />
            </button>
         </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate group-hover:text-purple-600 transition-colors">
            {product.name}
        </h3>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-purple-700">{formatCurrency(product.price)}</span>
          {/* Optional: Keep a small cart icon here as well if desired, or rely on overlay */}
          {/* <button onClick={handleAddToCartClick} className="text-purple-600 hover:text-purple-800 transition duration-300">
             <ShoppingBag size={22} />
          </button> */}
        </div>
      </div>
    </div>
  );
}

// --- Product List Component (Updated) ---
function ProductList({ products, category, onProductSelect, onAddToCart }) { // Added onProductSelect, onAddToCart
  const filteredProducts = category === 'all'
    ? products
    : products.filter(p => p.category === category);

  const categoryTitle = category === 'all' ? 'Featured Products' : category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <section className="py-16 bg-gray-50 font-serif">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          {categoryTitle}
        </h2>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                 key={product.id}
                 product={product}
                 onProductSelect={onProductSelect} // Pass down handler
                 onAddToCart={onAddToCart}       // Pass down handler
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No products found in this category yet.</p>
        )}
      </div>
    </section>
  );
}

// --- Product Detail Page Component (New) ---
function ProductDetailPage({ productId, onAddToCart, onNavigate }) {
    const [product, setProduct] = useState(null);

    // Find the product based on ID when the component mounts or ID changes
    useEffect(() => {
        const foundProduct = mockProducts.find(p => p.id === productId);
        setProduct(foundProduct);
        window.scrollTo(0, 0); // Scroll to top when product loads
    }, [productId]); // Re-run effect if productId changes

    if (!product) {
        // Optional: Add a loading state or redirect if product not found
        return <div className="container mx-auto px-6 py-16 text-center font-serif">Loading product details...</div>;
    }

    return (
        <section className="py-16 bg-white font-serif">
            <div className="container mx-auto px-6">
                {/* Back Button */}
                <button
                    onClick={() => window.history.back()} // Simple back navigation
                    className="mb-8 inline-flex items-center text-purple-600 hover:text-purple-800 transition duration-300"
                >
                    <ArrowLeft size={18} className="mr-2" />
                    Back to Products
                </button>

                <div className="flex flex-col md:flex-row gap-12">
                    {/* Product Image */}
                    <div className="md:w-1/2">
                        <img
                            src={product.imageUrl} // Use the larger image URL
                            alt={product.name}
                            className="w-full h-auto rounded-lg shadow-lg object-cover max-h-[500px]" // Constrain height
                            onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/600x600/cccccc/ffffff?text=Image+Not+Available`; }}
                         />
                    </div>

                    {/* Product Details */}
                    <div className="md:w-1/2">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">{product.description}</p>
                        <span className="text-3xl font-bold text-purple-700 mb-8 block">{formatCurrency(product.price)}</span>

                        {/* Add to Cart Button */}
                        <button
                            onClick={() => onAddToCart(product)}
                            className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-10 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 flex items-center justify-center"
                        >
                            <ShoppingBag size={20} className="mr-2" />
                            Add to Cart
                        </button>

                        {/* Optional: Additional details like materials, dimensions etc. */}
                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <h4 className="text-lg font-semibold text-gray-700 mb-2">Details</h4>
                            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                                <li>Category: {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</li>
                                {/* Add more details if available in your data */}
                                <li>Material: High Quality Metals & Gems</li>
                                <li>Shipping: Free Standard Shipping</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// --- Cart Page Component (New) ---
function CartPage({ cart, onUpdateQuantity, onRemoveFromCart, onNavigate }) {
    const calculateSubtotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const subtotal = calculateSubtotal();
    // Add tax, shipping calculations if needed
    const total = subtotal; // Simple total for now

    if (cart.length === 0) {
        return (
            <section className="py-16 bg-gray-50 font-serif min-h-[calc(100vh-200px)] flex items-center justify-center">
                <div className="container mx-auto px-6 text-center">
                    <ShoppingBag size={60} className="mx-auto text-gray-400 mb-4" />
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
                    <p className="text-gray-600 mb-8">Looks like you haven't added any items yet.</p>
                    <button
                        onClick={() => onNavigate('home')}
                        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300"
                    >
                        Continue Shopping
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16 bg-gray-50 font-serif">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Shopping Cart</h2>
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Cart Items */}
                    <div className="lg:w-2/3">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            {cart.map((item) => (
                                <div key={item.id} className="flex items-center p-4 border-b border-gray-200 last:border-b-0 flex-wrap">
                                    {/* Image */}
                                    <img
                                        src={item.imageUrl.replace('600x600', '100x100')}
                                        alt={item.name}
                                        className="w-20 h-20 object-cover rounded-md mr-4"
                                        onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/100x100/cccccc/ffffff?text=N/A`; }}
                                    />
                                    {/* Details */}
                                    <div className="flex-grow mr-4 mb-2 sm:mb-0">
                                        <h3 className="text-lg font-semibold text-gray-800 hover:text-purple-600 cursor-pointer" onClick={() => onNavigate('productDetail', item.id)}>{item.name}</h3>
                                        <p className="text-sm text-gray-500">Unit Price: {formatCurrency(item.price)}</p>
                                    </div>
                                    {/* Quantity Control */}
                                    <div className="flex items-center mr-4 my-2 sm:my-0">
                                        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1} className="p-1 border rounded-md text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
                                            <Minus size={16} />
                                        </button>
                                        <span className="mx-3 font-medium w-8 text-center">{item.quantity}</span>
                                        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="p-1 border rounded-md text-gray-600 hover:bg-gray-100">
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                    {/* Item Total & Remove */}
                                    <div className="flex items-center ml-auto">
                                        <span className="font-semibold text-gray-800 mr-4 w-24 text-right">{formatCurrency(item.price * item.quantity)}</span>
                                        <button onClick={() => onRemoveFromCart(item.id)} className="text-red-500 hover:text-red-700">
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:w-1/3">
                        <div className="bg-white rounded-lg shadow-md p-6 sticky top-24"> {/* Sticky summary */}
                            <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-3">Order Summary</h3>
                            <div className="flex justify-between mb-3 text-gray-600">
                                <span>Subtotal</span>
                                <span>{formatCurrency(subtotal)}</span>
                            </div>
                            <div className="flex justify-between mb-3 text-gray-600">
                                <span>Shipping</span>
                                <span>Free</span> {/* Or calculate shipping */}
                            </div>
                            <div className="flex justify-between mb-6 text-gray-600">
                                <span>Tax</span>
                                <span>Calculated at checkout</span> {/* Or calculate tax */}
                            </div>
                            <div className="flex justify-between font-bold text-xl text-gray-800 pt-4 border-t">
                                <span>Total</span>
                                <span>{formatCurrency(total)}</span>
                            </div>
                            <button className="mt-8 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// --- Footer Component (Unchanged) ---
function Footer() { /* ... same as before ... */
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-300 py-12 font-serif">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
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
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'rings', 'login', 'productDetail', 'cart'
  const [selectedProductId, setSelectedProductId] = useState(null); // Track selected product ID
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cart, setCart] = useState([]); // Cart state
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(null);

  // --- Cart Management Functions ---
  const addToCart = (productToAdd) => {
      setCart(prevCart => {
          const existingItem = prevCart.find(item => item.id === productToAdd.id);
          if (existingItem) {
              // Increment quantity if item already exists
              return prevCart.map(item =>
                  item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
              );
          } else {
              // Add new item with quantity 1
              return [...prevCart, { ...productToAdd, quantity: 1 }];
          }
      });
      // Optional: Add visual feedback (e.g., toast notification)
      console.log(`${productToAdd.name} added to cart!`);
      // Optional: Navigate to cart or keep user on page
      // onNavigate('cart');
  };

  const updateQuantity = (productId, newQuantity) => {
      if (newQuantity < 1) {
          // Remove item if quantity is less than 1
          removeFromCart(productId);
          return;
      }
      setCart(prevCart =>
          prevCart.map(item =>
              item.id === productId ? { ...item, quantity: newQuantity } : item
          )
      );
  };

  const removeFromCart = (productId) => {
      setCart(prevCart => prevCart.filter(item => item.id !== productId));
      console.log(`Item ${productId} removed from cart.`);
  };

  // Calculate total number of items in cart (sum of quantities)
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  // --- Navigation ---
  const handleNavigate = (page, productId = null) => {
    setCurrentPage(page);
    setSelectedProductId(productId); // Set selected product ID if provided
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // --- Auth ---
  const handleLogin = async (username, password) => {
    try {
        const response = await loginUser(username, password);
        setToken(response.token);
        setUser(response.user);
        localStorage.setItem('token', response.token);
        handleNavigate('home');
    } catch (error) {
        console.error('Login failed:', error);
    }
  };

  const handleLoginSuccess = () => { setIsLoggedIn(true); handleNavigate('home'); };
  const handleLogout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    setCart([]);
    handleNavigate('home');
  };
  const toggleMobileMenu = () => { setIsMobileMenuOpen(!isMobileMenuOpen); };

  // Update cart in backend whenever it changes
  useEffect(() => {
    if (token && cart.length > 0) {
        updateCart(cart, token).catch(console.error);
    }
  }, [cart, token]);

  // Fetch cart from backend on login
  useEffect(() => {
    if (token) {
        fetchCart(token)
            .then(cartData => setCart(cartData.items))
            .catch(console.error);
    }
  }, [token]);

  // --- Render Content ---
  const renderPage = () => {
    if (currentPage === 'login' && !isLoggedIn) {
       return <LoginPage onLoginSuccess={handleLoginSuccess} onNavigate={handleNavigate} />;
    }
    // Redirect logged-in users away from login page
    if (currentPage === 'login' && isLoggedIn) {
        handleNavigate('home'); // Use navigate to ensure state consistency
        return null; // Avoid rendering login page briefly
    }

    switch (currentPage) {
      case 'productDetail':
        return <ProductDetailPage productId={selectedProductId} onAddToCart={addToCart} onNavigate={handleNavigate} />;
      case 'cart':
        return <CartPage cart={cart} onUpdateQuantity={updateQuantity} onRemoveFromCart={removeFromCart} onNavigate={handleNavigate} />;
      case 'rings':
        return <ProductList products={mockProducts} category="rings" onProductSelect={(id) => handleNavigate('productDetail', id)} onAddToCart={addToCart} />;
      case 'necklaces':
        return <ProductList products={mockProducts} category="necklaces" onProductSelect={(id) => handleNavigate('productDetail', id)} onAddToCart={addToCart} />;
      case 'earrings':
        return <ProductList products={mockProducts} category="earrings" onProductSelect={(id) => handleNavigate('productDetail', id)} onAddToCart={addToCart} />;
      case 'bracelets':
        return <ProductList products={mockProducts} category="bracelets" onProductSelect={(id) => handleNavigate('productDetail', id)} onAddToCart={addToCart} />;
      case 'home':
      default:
        return (
          <>
            <HeroSection />
            <ProductList products={mockProducts} category="all" onProductSelect={(id) => handleNavigate('productDetail', id)} onAddToCart={addToCart} />
          </>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
       <Header
          onNavigate={handleNavigate}
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
          cartItemCount={cartItemCount} // Pass cart count
        />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
