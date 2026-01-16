'use client';

import { useState } from 'react';
import { MenuItem, MenuCategory } from '@/types';
import { menuItems } from '@/data/menu';
import { MenuItemCard } from '@/components/menu/MenuItemCard';
import { CategoryFilter } from '@/components/menu/CategoryFilter';
import { Input } from '@/components/ui/Input';
import { Search, UtensilsCrossed } from 'lucide-react';
import { useCart } from '@/lib/CartContext';

export default function MenuPage() {
    const [selectedCategory, setSelectedCategory] = useState<MenuCategory | 'all'>('all');
    const [searchQuery, setSearchQuery] = useState('');
    const { addItem } = useCart();

    // Filter menu items
    const filteredItems = menuItems.filter((item) => {
        const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleAddToCart = (item: MenuItem) => {
        addItem(item);
    };

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex justify-center mb-4">
                        <UtensilsCrossed size={48} />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-200">Our Menu</h1>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                        Explore our delicious selection of authentic Italian dishes, crafted with passion and the finest ingredients
                    </p>
                </div>
            </section>

            {/* Search and Filter Section */}
            <section className="py-12 bg-white sticky top-20 z-40 shadow-md">
                <div className="container mx-auto px-4">
                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto mb-8">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search menu items..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all"
                            />
                        </div>
                    </div>

                    {/* Category Filter */}
                    <CategoryFilter
                        selectedCategory={selectedCategory}
                        onCategoryChange={setSelectedCategory}
                    />
                </div>
            </section>

            {/* Menu Items Grid */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    {/* Results Count */}
                    <div className="mb-6">
                        <p className="text-gray-600">
                            Showing {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
                            {searchQuery && ` for "${searchQuery}"`}
                        </p>
                    </div>

                    {/* Grid */}
                    {filteredItems.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {filteredItems.map((item) => (
                                <MenuItemCard
                                    key={item.id}
                                    item={item}
                                    onAddToCart={handleAddToCart}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <UtensilsCrossed size={64} className="mx-auto text-gray-300 mb-4" />
                            <h3 className="text-2xl font-bold text-gray-400 mb-2">No items found</h3>
                            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-200">
                        Can&apos;t decide? Let us help!
                    </h2>
                    <p className="text-lg mb-6 max-w-2xl mx-auto">
                        Call us at <a href="tel:+15551234567" className="font-bold underline">(555) 123-4567</a> and our friendly staff will recommend the perfect meal for you
                    </p>
                </div>
            </section>
        </main>
    );
}
