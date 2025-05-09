import React from 'react';
import { ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { formatCurrency } from '../utils/formatCurrency';

export default function CartPage({ cart, onUpdateQuantity, onRemoveFromCart, onNavigate }) {
    const calculateSubtotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const subtotal = calculateSubtotal();
    const total = subtotal; // Assuming no tax/shipping for now

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
                    <div className="lg:w-2/3">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            {cart.map((item) => (
                                <div key={item.id} className="flex items-center p-4 border-b border-gray-200 last:border-b-0 flex-wrap">
                                    <img
                                        src={item.imageUrl.replace('600x600', '100x100')}
                                        alt={item.name}
                                        className="w-20 h-20 object-cover rounded-md mr-4"
                                        onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/100x100/cccccc/ffffff?text=N/A`; }}
                                    />
                                    <div className="flex-grow mr-4 mb-2 sm:mb-0">
                                        <h3 className="text-lg font-semibold text-gray-800 hover:text-purple-600 cursor-pointer" onClick={() => onNavigate('productDetail', item.id)}>{item.name}</h3>
                                        <p className="text-sm text-gray-500">Unit Price: {formatCurrency(item.price)}</p>
                                    </div>
                                    <div className="flex items-center mr-4 my-2 sm:my-0">
                                        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1} className="p-1 border rounded-md text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
                                            <Minus size={16} />
                                        </button>
                                        <span className="mx-3 font-medium w-8 text-center">{item.quantity}</span>
                                        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="p-1 border rounded-md text-gray-600 hover:bg-gray-100">
                                            <Plus size={16} />
                                        </button>
                                    </div>
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
                    <div className="lg:w-1/3">
                        <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                            <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-3">Order Summary</h3>
                            <div className="flex justify-between mb-3 text-gray-600">
                                <span>Subtotal</span>
                                <span>{formatCurrency(subtotal)}</span>
                            </div>
                            <div className="flex justify-between mb-3 text-gray-600">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className="flex justify-between mb-6 text-gray-600">
                                <span>Tax</span>
                                <span>Calculated at checkout</span>
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
