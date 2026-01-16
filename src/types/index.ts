// Menu Types
export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    category: MenuCategory;
    image: string;
    dietary?: DietaryTag[];
    spiceLevel?: 0 | 1 | 2 | 3;
    popular?: boolean;
    available?: boolean;
}

export type MenuCategory =
    | 'appetizers'
    | 'mains'
    | 'desserts'
    | 'beverages'
    | 'specials';

export type DietaryTag =
    | 'vegetarian'
    | 'vegan'
    | 'gluten-free'
    | 'dairy-free'
    | 'nut-free';

// Cart Types
export interface CartItem extends MenuItem {
    quantity: number;
    customizations?: string;
    specialInstructions?: string;
}

export interface Cart {
    items: CartItem[];
    subtotal: number;
    deliveryFee: number;
    tax: number;
    total: number;
}

// Order Types
export interface Order {
    id: string;
    items: CartItem[];
    customer: CustomerInfo;
    orderType: 'delivery' | 'pickup';
    status: OrderStatus;
    total: number;
    createdAt: Date;
    estimatedTime?: Date;
}

export type OrderStatus =
    | 'pending'
    | 'confirmed'
    | 'preparing'
    | 'ready'
    | 'out-for-delivery'
    | 'delivered'
    | 'cancelled';

// Customer Types
export interface CustomerInfo {
    name: string;
    email: string;
    phone: string;
    address?: Address;
}

export interface Address {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    instructions?: string;
}

// Reservation Types
export interface Reservation {
    id: string;
    customer: CustomerInfo;
    date: Date;
    time: string;
    partySize: number;
    specialRequests?: string;
    status: ReservationStatus;
}

export type ReservationStatus =
    | 'pending'
    | 'confirmed'
    | 'seated'
    | 'completed'
    | 'cancelled'
    | 'no-show';

// Review Types
export interface Review {
    id: string;
    customerName: string;
    rating: 1 | 2 | 3 | 4 | 5;
    comment: string;
    date: Date;
    verified?: boolean;
}

// Restaurant Info Types
export interface RestaurantInfo {
    name: string;
    phone: string;
    email: string;
    address: Address;
    hours: OperatingHours;
    socialMedia: SocialMedia;
}

export interface OperatingHours {
    monday: DayHours;
    tuesday: DayHours;
    wednesday: DayHours;
    thursday: DayHours;
    friday: DayHours;
    saturday: DayHours;
    sunday: DayHours;
}

export interface DayHours {
    open: string;
    close: string;
    closed?: boolean;
}

export interface SocialMedia {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
}

// Gallery Types
export interface GalleryImage {
    id: string;
    src: string;
    alt: string;
    category: GalleryCategory;
    caption?: string;
}

export type GalleryCategory =
    | 'food'
    | 'interior'
    | 'events'
    | 'team';
