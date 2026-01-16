'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { restaurantInfo } from '@/data/restaurant';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface ContactForm {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
}

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>();

    const onSubmit = (data: ContactForm) => {
        console.log('Contact form submitted:', data);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            reset();
        }, 3000);
    };

    if (submitted) {
        return (
            <main className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center px-4 py-20 max-w-md">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Send size={40} className="text-green-600" />
                    </div>
                    <h1 className="text-4xl font-bold mb-4 text-green-600">Message Sent!</h1>
                    <p className="text-xl text-gray-600 mb-4">
                        Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <Mail size={48} className="mx-auto my-4" />
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-200">Contact Us</h1>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                        We&apos;d love to hear from you. Get in touch with us today!
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <Input
                                    label="Name"
                                    {...register('name', { required: 'Name is required' })}
                                    error={errors.name?.message}
                                    required
                                />

                                <Input
                                    label="Email"
                                    type="email"
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Invalid email address'
                                        }
                                    })}
                                    error={errors.email?.message}
                                    required
                                />

                                <Input
                                    label="Phone (Optional)"
                                    type="tel"
                                    {...register('phone')}
                                />

                                <Input
                                    label="Subject"
                                    {...register('subject', { required: 'Subject is required' })}
                                    error={errors.subject?.message}
                                    required
                                />

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        {...register('message', { required: 'Message is required' })}
                                        rows={6}
                                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all resize-none"
                                    />
                                    {errors.message && (
                                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                                    )}
                                </div>

                                <Button type="submit" size="lg" className="w-full">
                                    <Send className="mr-2" size={20} />
                                    Send Message
                                </Button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div className="bg-white rounded-xl shadow-lg p-8">
                                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <MapPin className="mr-4 mt-1 text-orange-500 flex-shrink-0" size={24} />
                                        <div>
                                            <h3 className="font-semibold mb-1">Address</h3>
                                            <p className="text-gray-600">
                                                {restaurantInfo.address.street}<br />
                                                {restaurantInfo.address.city}, {restaurantInfo.address.state} {restaurantInfo.address.zipCode}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <Phone className="mr-4 mt-1 text-orange-500 flex-shrink-0" size={24} />
                                        <div>
                                            <h3 className="font-semibold mb-1">Phone</h3>
                                            <a
                                                href={`tel:${restaurantInfo.phone}`}
                                                className="text-gray-600 hover:text-orange-500 transition-colors"
                                            >
                                                {restaurantInfo.phone}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <Mail className="mr-4 mt-1 text-orange-500 flex-shrink-0" size={24} />
                                        <div>
                                            <h3 className="font-semibold mb-1">Email</h3>
                                            <a
                                                href={`mailto:${restaurantInfo.email}`}
                                                className="text-gray-600 hover:text-orange-500 transition-colors"
                                            >
                                                {restaurantInfo.email}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <Clock className="mr-4 mt-1 text-orange-500 flex-shrink-0" size={24} />
                                        <div>
                                            <h3 className="font-semibold mb-2">Hours</h3>
                                            <div className="space-y-1 text-gray-600 text-sm">
                                                <p>Mon - Thu: {restaurantInfo.hours.monday.open} - {restaurantInfo.hours.monday.close}</p>
                                                <p>Fri: {restaurantInfo.hours.friday.open} - {restaurantInfo.hours.friday.close}</p>
                                                <p>Sat: {restaurantInfo.hours.saturday.open} - {restaurantInfo.hours.saturday.close}</p>
                                                <p>Sun: {restaurantInfo.hours.sunday.open} - {restaurantInfo.hours.sunday.close}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="h-64 bg-gray-200 flex items-center justify-center">
                                    <p className="text-gray-500">Google Maps integration here</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
