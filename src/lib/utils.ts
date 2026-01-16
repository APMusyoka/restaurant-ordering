import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
    return clsx(inputs);
}

export function formatPrice(price: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(price);
}

export function formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(date);
}

export function formatTime(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    }).format(date);
}

export function isRestaurantOpen(
    currentTime: Date,
    hours: { open: string; close: string; closed?: boolean }
): boolean {
    if (hours.closed) return false;

    const current = currentTime.getHours() * 60 + currentTime.getMinutes();
    const [openHour, openMin] = parseTime(hours.open);
    const [closeHour, closeMin] = parseTime(hours.close);

    const openTime = openHour * 60 + openMin;
    const closeTime = closeHour * 60 + closeMin;

    return current >= openTime && current <= closeTime;
}

function parseTime(timeStr: string): [number, number] {
    const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (!match) return [0, 0];

    let hour = parseInt(match[1]);
    const minute = parseInt(match[2]);
    const period = match[3].toUpperCase();

    if (period === 'PM' && hour !== 12) hour += 12;
    if (period === 'AM' && hour === 12) hour = 0;

    return [hour, minute];
}

export function generateId(prefix: string = 'id'): string {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export function calculateCartTotal(
    subtotal: number,
    deliveryFee: number = 0,
    taxRate: number = 0.08
): { subtotal: number; tax: number; deliveryFee: number; total: number } {
    const tax = subtotal * taxRate;
    const total = subtotal + tax + deliveryFee;

    return {
        subtotal,
        tax,
        deliveryFee,
        total,
    };
}
