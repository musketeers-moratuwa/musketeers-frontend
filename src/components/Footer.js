import React from 'react';

export default function Footer() {
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
