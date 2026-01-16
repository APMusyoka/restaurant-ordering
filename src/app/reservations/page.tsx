'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Calendar, Clock, Users, CalendarDays } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface ReservationForm {
    name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    partySize: number;
    specialRequests?: string;
}

export default function ReservationsPage() {
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [selectedTime, setSelectedTime] = useState<string>('');
    const [submitted, setSubmitted] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<ReservationForm>();

    const timeSlots = [
        '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
        '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
        '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
        '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
        '9:00 PM', '9:30 PM',
    ];

    const partySizes = [1, 2, 3, 4, 5, 6, 7, 8];

    const onSubmit = (data: ReservationForm) => {
        console.log('Reservation submitted:', { ...data, date: selectedDate, time: selectedTime });
        setSubmitted(true);
        // Reset form after submission
        setTimeout(() => {
            setSubmitted(false);
            reset();
            setSelectedDate('');
            setSelectedTime('');
        }, 3000);
    };

    if (submitted) {
        return (
            <main className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center px-4 py-20 max-w-md">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CalendarDays size={40} className="text-green-600" />
                    </div>
                    <h1 className="text-4xl font-bold mb-4 text-green-600">Reservation Confirmed!</h1>
                    <p className="text-xl text-gray-600 mb-4">
                        Thank you for your reservation. We&apos;ve sent a confirmation email to your inbox.
                    </p>
                    <p className="text-gray-500">
                        We look forward to serving you!
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
                    <CalendarDays size={48} className="mx-auto mb-4" />
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-200">Reserve a Table</h1>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                        Book your table for an unforgettable Italian dining experience
                    </p>
                </div>
            </section>

            {/* Reservation Form */}
            <section className="py-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl shadow-lg p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Date Selection */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Select Date <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="date"
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                    min={new Date().toISOString().split('T')[0]}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all"
                                />
                            </div>

                            {/* Time Selection */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Select Time <span className="text-red-500">*</span>
                                </label>
                                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                                    {timeSlots.map((time) => (
                                        <button
                                            key={time}
                                            type="button"
                                            onClick={() => setSelectedTime(time)}
                                            className={`py-2 px-3 rounded-lg font-medium text-sm transition-all ${selectedTime === time
                                                ? 'bg-orange-500 text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                }`}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Party Size */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Party Size <span className="text-red-500">*</span>
                                </label>
                                <div className="flex gap-2 flex-wrap">
                                    {partySizes.map((size) => (
                                        <label
                                            key={size}
                                            className="flex items-center cursor-pointer"
                                        >
                                            <input
                                                type="radio"
                                                value={size}
                                                {...register('partySize', { required: true })}
                                                className="sr-only peer"
                                            />
                                            <div className="w-14 h-14 flex items-center justify-center rounded-lg border-2 border-gray-300 peer-checked:bg-orange-500 peer-checked:text-white peer-checked:border-orange-500 hover:border-orange-300 transition-all font-semibold">
                                                {size}
                                            </div>
                                        </label>
                                    ))}
                                    <label className="flex items-center cursor-pointer">
                                        <input
                                            type="radio"
                                            value="9+"
                                            {...register('partySize', { required: true })}
                                            className="sr-only peer"
                                        />
                                        <div className="w-14 h-14 flex items-center justify-center rounded-lg border-2 border-gray-300 peer-checked:bg-orange-500 peer-checked:text-white peer-checked:border-orange-500 hover:border-orange-300 transition-all font-semibold text-sm">
                                            9+
                                        </div>
                                    </label>
                                </div>
                                {errors.partySize && (
                                    <p className="mt-2 text-sm text-red-600">Please select party size</p>
                                )}
                            </div>

                            {/* Name */}
                            <div>
                                <Input
                                    label="Full Name"
                                    type="text"
                                    {...register('name', { required: 'Name is required' })}
                                    error={errors.name?.message}
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div>
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
                            </div>

                            {/* Phone */}
                            <div className="md:col-span-2">
                                <Input
                                    label="Phone Number"
                                    type="tel"
                                    {...register('phone', { required: 'Phone number is required' })}
                                    error={errors.phone?.message}
                                    required
                                />
                            </div>

                            {/* Special Requests */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Special Requests
                                </label>
                                <textarea
                                    {...register('specialRequests')}
                                    rows={4}
                                    placeholder="Any special occasions, dietary requirements, or seating preferences..."
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all resize-none"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-8">
                            <Button
                                type="submit"
                                size="lg"
                                className="w-full"
                                disabled={!selectedDate || !selectedTime}
                            >
                                <CalendarDays className="mr-2" size={20} />
                                Confirm Reservation
                            </Button>
                            {(!selectedDate || !selectedTime) && (
                                <p className="mt-2 text-sm text-gray-500 text-center">
                                    Please select a date and time to continue
                                </p>
                            )}
                        </div>
                    </form>

                    {/* Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        <div className="bg-white rounded-xl shadow-md p-6 text-center">
                            <Calendar size={32} className="mx-auto mb-3 text-orange-500" />
                            <h3 className="font-bold mb-2">Easy Booking</h3>
                            <p className="text-sm text-gray-600">
                                Simple and quick online reservation system
                            </p>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6 text-center">
                            <Clock size={32} className="mx-auto mb-3 text-orange-500" />
                            <h3 className="font-bold mb-2">Instant Confirmation</h3>
                            <p className="text-sm text-gray-600">
                                Receive confirmation email immediately
                            </p>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6 text-center">
                            <Users size={32} className="mx-auto mb-3 text-orange-500" />
                            <h3 className="font-bold mb-2">Group Friendly</h3>
                            <p className="text-sm text-gray-600">
                                Perfect for families and large parties
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
