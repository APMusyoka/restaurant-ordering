'use client';

import { restaurantInfo } from '@/data/restaurant';

interface GoogleMapProps {
    className?: string;
}

export function GoogleMap({ className = "h-64" }: GoogleMapProps) {
    const address = restaurantInfo.address;
    const addressQuery = encodeURIComponent(
        `${address.street}, ${address.city}, ${address.state} ${address.zipCode}`
    );

    return (
        <div className={`w-full overflow-hidden rounded-xl shadow-lg bg-gray-100 ${className}`}>
            <iframe
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '100%' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${addressQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                title="Restaurant Location"
                className="w-full h-full object-cover"
            ></iframe>
        </div>
    );
}
