'use client';

import { useState, useEffect } from 'react';
import { Camera, X, ChevronsDown, ChevronsUp, Filter } from 'lucide-react';

const galleryImages = [
    { id: 1, category: 'food', alt: 'Delicious pasta carbonara' },
    { id: 2, category: 'food', alt: 'Wood-fired margherita pizza' },
    { id: 3, category: 'food', alt: 'Fresh bruschetta trio' },
    { id: 4, category: 'interior', alt: 'Cozy dining area' },
    { id: 5, category: 'food', alt: 'Homemade tiramisu' },
    { id: 6, category: 'interior', alt: 'Rustic bar area' },
    { id: 7, category: 'food', alt: 'Grilled salmon with vegetables' },
    { id: 8, category: 'interior', alt: 'Outdoor patio seating' },
    { id: 9, category: 'food', alt: 'Assorted Italian desserts' },
];

const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'food', label: 'Food' },
    { id: 'interior', label: 'Interior' },
    { id: 'events', label: 'Events' },
];

export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [lightboxImage, setLightboxImage] = useState<number | null>(null);
    const [isFiltersOpen, setIsFiltersOpen] = useState(true);
    const [hasAutoCollapsed, setHasAutoCollapsed] = useState(false);

    // Auto-collapse filters on scroll (only once)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100 && !hasAutoCollapsed && isFiltersOpen) {
                setIsFiltersOpen(false);
                setHasAutoCollapsed(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasAutoCollapsed, isFiltersOpen]);

    const filteredImages = selectedCategory === 'all'
        ? galleryImages
        : galleryImages.filter(img => img.category === selectedCategory);

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <Camera size={48} className="mx-auto my-4" />
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-200">Gallery</h1>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                        A visual journey through our dishes and dining experience
                    </p>
                </div>
            </section>

            {/* Category Filter */}
            <section className="bg-white sticky top-16 md:top-20 z-40 shadow-md transition-all duration-300">
                <div className="container mx-auto px-4 py-4">
                    {/* Toggle Bar */}
                    <div className={`max-w-xl mx-auto flex gap-2 items-center transition-all duration-300 ${isFiltersOpen ? 'mb-4' : 'mb-0'}`}>
                        <div
                            className="relative flex-1 bg-gray-50 border-2 border-gray-300 rounded-lg py-3 px-4 flex items-center cursor-pointer hover:border-orange-500 transition-colors"
                            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                        >
                            <Filter className="text-gray-400 mr-3" size={20} />
                            <span className="font-medium text-gray-700">
                                {categories.find(c => c.id === selectedCategory)?.label || 'All Photos'}
                            </span>
                        </div>
                        <button
                            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                            className="p-3 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 hover:text-orange-500 transition-colors"
                            aria-label="Toggle filters"
                        >
                            {isFiltersOpen ? <ChevronsUp size={24} /> : <ChevronsDown size={24} />}
                        </button>
                    </div>

                    {/* Filter Buttons - Collapsible */}
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isFiltersOpen ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0 mb-0'}`}>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-6 py-2 rounded-full font-semibold transition-all border-2 ${selectedCategory === category.id
                                        ? 'bg-orange-500 text-white border-orange-500 shadow-md'
                                        : 'bg-white text-gray-700 border-gray-300 hover:border-orange-500 hover:text-orange-500'
                                        }`}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredImages.map((image) => (
                            <div
                                key={image.id}
                                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all"
                                onClick={() => setLightboxImage(image.id)}
                            >
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                    <img
                                        src={`https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80`}
                                        alt={image.alt}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                    <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                                        {image.alt}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredImages.length === 0 && (
                        <div className="text-center py-20">
                            <Camera size={64} className="mx-auto text-gray-300 mb-4" />
                            <p className="text-xl text-gray-500">No images found in this category</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox */}
            {lightboxImage !== null && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setLightboxImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                        onClick={() => setLightboxImage(null)}
                    >
                        <X size={32} />
                    </button>
                    <div className="max-w-4xl w-full">
                        <img
                            src={`https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80`}
                            alt={galleryImages.find(img => img.id === lightboxImage)?.alt}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>
            )}
        </main>
    );
}
