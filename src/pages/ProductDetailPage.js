import React, { useState, useEffect } from 'react';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { mockProducts } from '../data/products'; // Assuming mockProducts is moved
import { formatCurrency } from '../utils/formatCurrency';

export default function ProductDetailPage({ productId, onAddToCart, onNavigate }) {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const foundProduct = mockProducts.find(p => p.id === productId);
        setProduct(foundProduct);
        window.scrollTo(0, 0);
    }, [productId]);

    if (!product) {
        return <div className="container mx-auto px-6 py-16 text-center font-serif">Loading product details...</div>;
    }

    return (
        <section className="py-16 bg-white font-serif">
            <div className="container mx-auto px-6">
                <button
                    onClick={() => window.history.back()} // Or onNavigate to a specific previous page
                    className="mb-8 inline-flex items-center text-purple-600 hover:text-purple-800 transition duration-300"
                >
                    <ArrowLeft size={18} className="mr-2" />
                    Back to Products
                </button>

                <div className="flex flex-col md:flex-row gap-12">
                    <div className="md:w-1/2">
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-full h-auto rounded-lg shadow-lg object-cover max-h-[500px]"
                            onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/600x600/cccccc/ffffff?text=Image+Not+Available`; }}
                         />
                    </div>

                    <div className="md:w-1/2">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">{product.description}</p>
                        <span className="text-3xl font-bold text-purple-700 mb-8 block">{formatCurrency(product.price)}</span>

                        <button
                            onClick={() => onAddToCart(product)}
                            className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-10 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 flex items-center justify-center"
                        >
                            <ShoppingBag size={20} className="mr-2" />
                            Add to Cart
                        </button>

                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <h4 className="text-lg font-semibold text-gray-700 mb-2">Details</h4>
                            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                                <li>Category: {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</li>
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
