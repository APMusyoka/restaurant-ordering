'use client';

import { useCart } from '@/lib/CartContext';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { formatPrice } from '@/lib/utils';
import { Minus, Plus, Trash2, ShoppingCart, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function OrderPage() {
    const { items, updateQuantity, removeItem, cartTotal, clearCart } = useCart();
    const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');

    if (items.length === 0) {
        return (
            <main className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center px-4 py-20">
                    <ShoppingCart size={80} className="mx-auto text-gray-300 mb-6" />
                    <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Add some delicious items from our menu to get started!
                    </p>
                    <Link href="/menu">
                        <Button size="lg">
                            Browse Menu
                            <ArrowRight className="ml-2" size={20} />
                        </Button>
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-8">Your Order</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {items.map((item) => (
                            <div key={item.id} className="bg-white rounded-xl shadow-md p-6">
                                <div className="flex gap-4">
                                    {/* Image */}
                                    <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
                                        <img
                                            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&q=80"
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Details */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="text-lg font-bold">{item.name}</h3>
                                                <p className="text-sm text-gray-600 line-clamp-1">{item.description}</p>
                                            </div>
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="text-red-500 hover:text-red-700 p-2"
                                                aria-label="Remove item"
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        </div>

                                        {/* Quantity and Price */}
                                        <div className="flex items-center justify-between mt-4">
                                            <div className="flex items-center gap-3">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors"
                                                    aria-label="Decrease quantity"
                                                >
                                                    <Minus size={16} />
                                                </button>
                                                <span className="text-lg font-semibold w-8 text-center">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors"
                                                    aria-label="Increase quantity"
                                                >
                                                    <Plus size={16} />
                                                </button>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-lg font-bold text-orange-500">
                                                    {formatPrice(item.price * item.quantity)}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    {formatPrice(item.price)} each
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Clear Cart Button */}
                        <button
                            onClick={clearCart}
                            className="text-red-500 hover:text-red-700 font-medium"
                        >
                            Clear Cart
                        </button>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                            {/* Order Type Selection */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Order Type
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={() => setOrderType('delivery')}
                                        className={`py-3 px-4 rounded-lg font-semibold transition-all ${orderType === 'delivery'
                                                ? 'bg-orange-500 text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        Delivery
                                    </button>
                                    <button
                                        onClick={() => setOrderType('pickup')}
                                        className={`py-3 px-4 rounded-lg font-semibold transition-all ${orderType === 'pickup'
                                                ? 'bg-orange-500 text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        Pickup
                                    </button>
                                </div>
                            </div>

                            {/* Price Breakdown */}
                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-gray-700">
                                    <span>Subtotal</span>
                                    <span>{formatPrice(cartTotal.subtotal)}</span>
                                </div>
                                {orderType === 'delivery' && (
                                    <div className="flex justify-between text-gray-700">
                                        <span>Delivery Fee</span>
                                        <span>{formatPrice(cartTotal.deliveryFee)}</span>
                                    </div>
                                )}
                                <div className="flex justify-between text-gray-700">
                                    <span>Tax</span>
                                    <span>{formatPrice(cartTotal.tax)}</span>
                                </div>
                                <div className="border-t pt-3 flex justify-between text-xl font-bold">
                                    <span>Total</span>
                                    <span className="text-orange-500">
                                        {formatPrice(orderType === 'delivery' ? cartTotal.total : cartTotal.total - cartTotal.deliveryFee)}
                                    </span>
                                </div>
                            </div>

                            {/* Checkout Button */}
                            <Button className="w-full mb-3" size="lg">
                                Proceed to Checkout
                                <ArrowRight className="ml-2" size={20} />
                            </Button>

                            <Link href="/menu">
                                <Button variant="outline" className="w-full">
                                    Continue Shopping
                                </Button>
                            </Link>

                            {/* Estimated Time */}
                            <div className="mt-6 p-4 bg-orange-50 rounded-lg text-center">
                                <p className="text-sm text-gray-600 mb-1">Estimated {orderType} time</p>
                                <p className="text-lg font-bold text-orange-600">30-45 minutes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
