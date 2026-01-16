import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Home, ArrowLeft, Search, UtensilsCrossed } from 'lucide-react';

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100">
            <div className="container mx-auto px-4 py-20 text-center">
                <div className="max-w-2xl mx-auto">
                    {/* 404 Icon */}
                    <div className="mb-8">
                        <UtensilsCrossed
                            size={80}
                            className="mx-auto text-orange-500 mt-4"
                            strokeWidth={1.5}
                        />
                        <h1 className="text-9xl font-bold text-orange-500 mb-4">404</h1>
                    </div>

                    {/* Error Message */}
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
                        Looks like this page took a wrong turn in the kitchen.
                        Let&apos;s get you back to something delicious!
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Link href="/">
                            <Button size="lg" className="w-full sm:w-auto">
                                <Home className="mr-2" size={20} />
                                Back to Home
                            </Button>
                        </Link>
                        <Link href="/menu">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto">
                                <Search className="mr-2" size={20} />
                                Browse Menu
                            </Button>
                        </Link>
                    </div>

                    {/* Popular Links */}
                    <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
                        <h3 className="text-xl font-bold mb-4 text-gray-800">
                            Popular Pages
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/menu"
                                    className="text-orange-500 hover:text-orange-600 font-medium flex items-center justify-center"
                                >
                                    <ArrowLeft className="mr-2" size={16} />
                                    View Our Menu
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/reservations"
                                    className="text-orange-500 hover:text-orange-600 font-medium flex items-center justify-center"
                                >
                                    <ArrowLeft className="mr-2" size={16} />
                                    Make a Reservation
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/order"
                                    className="text-orange-500 hover:text-orange-600 font-medium flex items-center justify-center"
                                >
                                    <ArrowLeft className="mr-2" size={16} />
                                    Order Online
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-orange-500 hover:text-orange-600 font-medium flex items-center justify-center"
                                >
                                    <ArrowLeft className="mr-2" size={16} />
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Fun Message */}
                    <p className="mt-8 text-gray-500 italic">
                        &quot;Not all who wander are lost... but this page definitely is!&quot; 🍕
                    </p>
                </div>
            </div>
        </main>
    );
}
