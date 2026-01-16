'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/lib/CartContext';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { itemCount } = useCart();

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/menu', label: 'Menu' },
        { href: '/reservations', label: 'Reservations' },
        { href: '/about', label: 'About' },
        { href: '/gallery', label: 'Gallery' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-orange-500 font-serif">
                        Bella Cucina
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="tel:+15551234567" className="flex items-center text-gray-700 hover:text-orange-500 transition-colors">
                            <Phone size={20} className="mr-2" />
                            <span className="font-medium">(555) 123-4567</span>
                        </a>
                        <Link href="/order">
                            <Button className="relative">
                                <ShoppingCart size={20} className="mr-2" />
                                Order Now
                                {itemCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                                        {itemCount}
                                    </span>
                                )}
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden py-4 border-t">
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link href="/order" onClick={() => setIsMenuOpen(false)}>
                                <Button className="w-full relative">
                                    <ShoppingCart size={20} className="mr-2" />
                                    Order Now
                                    {itemCount > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                                            {itemCount}
                                        </span>
                                    )}
                                </Button>
                            </Link>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}
