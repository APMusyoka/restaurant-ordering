import { restaurantInfo } from '@/data/restaurant';
import { Button } from '@/components/ui/Button';
import { Users, Award, Heart, UtensilsCrossed, ChefHat } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex justify-center my-4">
                        <ChefHat size={48} />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-200">Our Story</h1>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                        A passion for authentic Italian cuisine since 1985
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="pb-20 pt-2">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                        <h2 className="text-4xl font-bold mb-6 text-center">Welcome to Bella Cucina</h2>
                        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                            <p>
                                For over three decades, Bella Cucina has been serving authentic Italian cuisine to our beloved community.
                                What started as a small family kitchen has grown into a cherished dining destination, but our commitment
                                to quality and tradition remains unchanged.
                            </p>
                            <p>
                                Our founder, Giuseppe Romano, brought his grandmother&apos;s recipes from Naples, Italy, with a dream
                                to share the flavors of his homeland. Every dish we serve honors that legacy, prepared with the same
                                care and attention to detail that Giuseppe learned as a young boy in his nonna&apos;s kitchen.
                            </p>
                            <p>
                                We source the finest local ingredients and import specialty items directly from Italy to ensure
                                authenticity in every bite. From our wood-fired pizzas to our hand-rolled pasta, each dish is
                                crafted with love and respect for Italian culinary traditions.
                            </p>
                            <p>
                                Today, Bella Cucina continues to be a family affair. Giuseppe&apos;s children and grandchildren work
                                alongside our talented team of chefs, all united by a passion for creating memorable dining experiences.
                                When you dine with us, you&apos;re not just a customer—you&apos;re part of our extended family.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <UtensilsCrossed size={32} className="text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Authenticity</h3>
                            <p className="text-gray-600">
                                Traditional recipes passed down through generations, staying true to Italian culinary heritage
                            </p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award size={32} className="text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Quality</h3>
                            <p className="text-gray-600">
                                Only the finest ingredients, sourced locally and from trusted Italian suppliers
                            </p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users size={32} className="text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Family</h3>
                            <p className="text-gray-600">
                                A welcoming atmosphere where every guest is treated like family
                            </p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Heart size={32} className="text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Passion</h3>
                            <p className="text-gray-600">
                                Love for cooking and serving delicious food that brings people together
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-4">Meet Our Team</h2>
                    <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                        The heart and soul behind every delicious dish
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
                        <div className="w-full max-w-sm bg-white rounded-xl shadow-md overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=880&auto=format&fit=crop"
                                alt="Giuseppe Romano"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold mb-1">Giuseppe Romano</h3>
                                <p className="text-orange-500 font-medium mb-2">Founder & Head Chef</p>
                                <p className="text-gray-600 text-sm">
                                    Over 40 years of culinary excellence bringing authentic Italian flavors to life
                                </p>
                            </div>
                        </div>

                        <div className="w-full max-w-sm bg-white rounded-xl shadow-md overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1449818841066-458e2db9db7f?q=80&w=880&auto=format&fit=crop"
                                alt="Maria Romano"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold mb-1">Maria Romano</h3>
                                <p className="text-orange-500 font-medium mb-2">Executive Chef</p>
                                <p className="text-gray-600 text-sm">
                                    Trained in Milan, bringing modern techniques to traditional recipes
                                </p>
                            </div>
                        </div>

                        <div className="w-full max-w-sm bg-white rounded-xl shadow-md overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1583394293211-45718f7eb6b0?q=80&w=880&auto=format&fit=crop"
                                alt="Antonio Romano"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold mb-1">Antonio Romano</h3>
                                <p className="text-orange-500 font-medium mb-2">Pastry Chef</p>
                                <p className="text-gray-600 text-sm">
                                    Creating exquisite desserts that transport you straight to Italy
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-200">Visit Us Today</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Experience the warmth of Italian hospitality and the taste of authentic cuisine
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/reservations">
                            <Button size="lg" variant="secondary">
                                Make a Reservation
                            </Button>
                        </Link>
                        <Link href="/menu">
                            <Button size="lg" variant="secondary">
                                View Our Menu
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
