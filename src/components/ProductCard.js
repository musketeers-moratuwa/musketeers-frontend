import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { formatCurrency } from '../utils/formatCurrency';

export default function ProductCard({ product, onProductSelect, onAddToCart }) {
  const handleAddToCartClick = (e) => {
      e.stopPropagation();
      onAddToCart(product);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden transform hover:shadow-xl transition duration-300 group font-serif cursor-pointer"
      onClick={() => onProductSelect(product.id)}
    >
      <div className="relative h-64 overflow-hidden">
         <img
            src={product.imageUrl.replace('600x600', '300x300')}
            alt={product.name}
            className="w-full h-full object-cover transition duration-500 ease-in-out transform group-hover:scale-110"
            onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/300x300/cccccc/ffffff?text=Not+Found`; }}
          />
         <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-end">
            <button
                onClick={handleAddToCartClick}
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
        </div>
      </div>
    </div>
  );
}
