import React from 'react';
import ProductCard from './ProductCard';

export default function ProductList({ products, category, onProductSelect, onAddToCart }) {
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
                 onProductSelect={onProductSelect}
                 onAddToCart={onAddToCart}
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
