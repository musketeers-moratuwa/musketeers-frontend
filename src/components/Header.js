import React from 'react';
import { ShoppingBag, Search, Menu, X, User, LogOut } from 'lucide-react';

export default function Header({ onNavigate, isLoggedIn, onLogout, isMobileMenuOpen, toggleMobileMenu, cartItemCount }) {
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
          <button onClick={() => onNavigate('cart')} className="text-gray-700 hover:text-purple-600 relative">
            <ShoppingBag size={20} />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-sans">
                {cartItemCount}
              </span>
            )}
          </button>
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
             </div>
           </div>
         </div>
       )}
    </header>
  );
}
