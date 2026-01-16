'use client';

import { useState } from 'react';
import { Camera, X } from 'lucide-react';

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

    const filteredImages = selectedCategory === 'all'
        ? galleryImages
        : galleryImages.filter(img => img.category === selectedCategory);

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <Camera size={48} className="mx-auto mb-4" />
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Gallery</h1>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                        A visual journey through our dishes and dining experience
                    </p>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 bg-white sticky top-20 z-40 shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-2 rounded-full font-semibold transition-all ${selectedCategory === category.id
                                        ? 'bg-orange-500 text-white shadow-md'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {category.label}
                            </button>
                        ))}
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
