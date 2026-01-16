import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { restaurantInfo } from '@/data/restaurant';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-bold text-orange-500 mb-4 font-serif">Bella Cucina</h3>
                        <p className="text-gray-300 mb-4">
                            Authentic Italian cuisine crafted with passion and the finest ingredients. Come experience the taste of Italy in every bite.
                        </p>
                        <div className="flex space-x-4">
                            {restaurantInfo.socialMedia.facebook && (
                                <a
                                    href={restaurantInfo.socialMedia.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-orange-500 transition-colors"
                                    aria-label="Facebook"
                                >
                                    <Facebook size={24} />
                                </a>
                            )}
                            {restaurantInfo.socialMedia.instagram && (
                                <a
                                    href={restaurantInfo.socialMedia.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-orange-500 transition-colors"
                                    aria-label="Instagram"
                                >
                                    <Instagram size={24} />
                                </a>
                            )}
                            {restaurantInfo.socialMedia.twitter && (
                                <a
                                    href={restaurantInfo.socialMedia.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-orange-500 transition-colors"
                                    aria-label="Twitter"
                                >
                                    <Twitter size={24} />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/menu" className="text-gray-300 hover:text-orange-500 transition-colors">
                                    Menu
                                </Link>
                            </li>
                            <li>
                                <Link href="/order" className="text-gray-300 hover:text-orange-500 transition-colors">
                                    Order Online
                                </Link>
                            </li>
                            <li>
                                <Link href="/reservations" className="text-gray-300 hover:text-orange-500 transition-colors">
                                    Reservations
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-orange-500 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="text-gray-300 hover:text-orange-500 transition-colors">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-orange-500 transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-200">Opening Hours</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex justify-between">
                                <span>Mon - Thu:</span>
                                <span>{restaurantInfo.hours.monday.open} - {restaurantInfo.hours.monday.close}</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Fri:</span>
                                <span>{restaurantInfo.hours.friday.open} - {restaurantInfo.hours.friday.close}</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sat:</span>
                                <span>{restaurantInfo.hours.saturday.open} - {restaurantInfo.hours.saturday.close}</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sun:</span>
                                <span>{restaurantInfo.hours.sunday.open} - {restaurantInfo.hours.sunday.close}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-200">Contact Us</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start">
                                <MapPin size={20} className="mr-2 mt-0.5 flex-shrink-0" />
                                <span>
                                    {restaurantInfo.address.street}<br />
                                    {restaurantInfo.address.city}, {restaurantInfo.address.state} {restaurantInfo.address.zipCode}
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={20} className="mr-2 flex-shrink-0" />
                                <a href={`tel:${restaurantInfo.phone}`} className="hover:text-orange-500 transition-colors">
                                    {restaurantInfo.phone}
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Mail size={20} className="mr-2 flex-shrink-0" />
                                <a href={`mailto:${restaurantInfo.email}`} className="hover:text-orange-500 transition-colors">
                                    {restaurantInfo.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {currentYear} Bella Cucina. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
