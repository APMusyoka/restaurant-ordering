import { RestaurantInfo, Review } from '@/types';

export const restaurantInfo: RestaurantInfo = {
    name: 'Bella Cucina',
    phone: '+1 (555) 123-4567',
    email: 'info@bellacucina.com',
    address: {
        street: '123 Main Street',
        city: 'San Francisco',
        state: 'CA',
        zipCode: '94105',
    },
    hours: {
        monday: { open: '11:00 AM', close: '10:00 PM' },
        tuesday: { open: '11:00 AM', close: '10:00 PM' },
        wednesday: { open: '11:00 AM', close: '10:00 PM' },
        thursday: { open: '11:00 AM', close: '10:00 PM' },
        friday: { open: '11:00 AM', close: '11:00 PM' },
        saturday: { open: '10:00 AM', close: '11:00 PM' },
        sunday: { open: '10:00 AM', close: '9:00 PM' },
    },
    socialMedia: {
        facebook: 'https://facebook.com/bellacucina',
        instagram: 'https://instagram.com/bellacucina',
        twitter: 'https://twitter.com/bellacucina',
    },
};

export const reviews: Review[] = [
    {
        id: 'rev-1',
        customerName: 'Sarah Johnson',
        rating: 5,
        comment: 'Absolutely amazing! The pasta was perfection and the atmosphere was delightful. Will definitely be back!',
        date: new Date('2024-01-10'),
        verified: true,
    },
    {
        id: 'rev-2',
        customerName: 'Michael Chen',
        rating: 5,
        comment: 'Best Italian food in the city. The tiramisu is to die for. Highly recommend!',
        date: new Date('2024-01-08'),
        verified: true,
    },
    {
        id: 'rev-3',
        customerName: 'Emily Rodriguez',
        rating: 4,
        comment: 'Great food and service. The pizza was wood-fired to perfection. Slightly pricey but worth it.',
        date: new Date('2024-01-05'),
        verified: true,
    },
    {
        id: 'rev-4',
        customerName: 'David Thompson',
        rating: 5,
        comment: 'Fantastic experience from start to finish. The chef\'s special was incredible!',
        date: new Date('2024-01-03'),
        verified: true,
    },
    {
        id: 'rev-5',
        customerName: 'Lisa Anderson',
        rating: 5,
        comment: 'Wonderful authentic Italian cuisine. The staff was attentive and the ambiance was perfect for our anniversary.',
        date: new Date('2023-12-28'),
        verified: true,
    },
    {
        id: 'rev-6',
        customerName: 'James Wilson',
        rating: 4,
        comment: 'Really enjoyed the meal. The carbonara was exceptional. Will be ordering delivery again soon!',
        date: new Date('2023-12-25'),
        verified: true,
    },
];

export const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
