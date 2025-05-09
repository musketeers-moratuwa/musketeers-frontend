import React from 'react';

export default function HeroSection() {
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
