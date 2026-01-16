'use client';

import { Toaster } from 'react-hot-toast';

export function ToastProvider() {
    return (
        <Toaster
            position="bottom-right"
            toastOptions={{
                duration: 3000,
                className: '',
                style: {
                    background: '#ffffff',
                    color: '#1f2937', // gray-800
                    border: '1px solid #e5e7eb', // gray-200
                    padding: '16px',
                    borderRadius: '0.75rem', // rounded-xl
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // shadow-lg
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    maxWidth: '400px',
                },
                success: {
                    iconTheme: {
                        primary: '#f97316', // orange-500
                        secondary: '#ffffff',
                    },
                    style: {
                        borderLeft: '4px solid #f97316',
                    },
                },
                error: {
                    iconTheme: {
                        primary: '#ef4444', // red-500
                        secondary: '#ffffff',
                    },
                    style: {
                        borderLeft: '4px solid #ef4444',
                    },
                },
            }}
        />
    );
}
