import React, { useState, useEffect } from 'react';
import { loginUser, fetchCart, updateCart } from './services/api';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ProductList from './components/ProductList';
import ProductDetailPage from './pages/ProductDetailPage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import { mockProducts } from './data/products';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(null);

  const addToCart = (productToAdd) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productToAdd.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...productToAdd, quantity: 1 }];
      }
    });
    console.log(`${productToAdd.name} added to cart!`);
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    console.log(`Item ${productId} removed from cart.`);
  };

  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  const handleNavigate = (page, productId = null) => {
    setCurrentPage(page);
    setSelectedProductId(productId);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLoginSuccess = async () => {
    setIsLoggedIn(true);
    setCurrentPage('home');
    console.log('Login successful');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    setIsLoggedIn(false);
    setCurrentPage('home');
    setCart([]);
    console.log('Logged out');
  };

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
      console.log('User is logged in, potentially fetch cart');
    }
  }, [token]);

  useEffect(() => {
    if (token && cart.length > 0) {
      console.log('Cart updated, would sync with backend if API was live', cart);
    }
  }, [cart, token]);

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage onLoginSuccess={handleLoginSuccess} onNavigate={handleNavigate} />;
      case 'productDetail':
        return <ProductDetailPage productId={selectedProductId} onAddToCart={addToCart} onNavigate={handleNavigate} />;
      case 'cart':
        return <CartPage cart={cart} onUpdateQuantity={updateQuantity} onRemoveFromCart={removeFromCart} onNavigate={handleNavigate} />;
      case 'rings':
      case 'necklaces':
      case 'earrings':
      case 'bracelets':
        return <ProductList products={mockProducts} category={currentPage} onProductSelect={(id) => handleNavigate('productDetail', id)} onAddToCart={addToCart} />;
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
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header
        onNavigate={handleNavigate}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        cartItemCount={cartItemCount}
      />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
