import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
    return (
        <div
            className={cn(
                'bg-white rounded-xl shadow-md overflow-hidden',
                'transition-all duration-300',
                hover && 'hover:shadow-xl hover:-translate-y-1 cursor-pointer',
                className
            )}
        >
            {children}
        </div>
    );
}

export function CardImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
    return (
        <div className={cn('relative w-full h-48 overflow-hidden', className)}>
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
        </div>
    );
}

export function CardContent({ children, className }: { children: ReactNode; className?: string }) {
    return <div className={cn('p-6', className)}>{children}</div>;
}

export function CardHeader({ children, className }: { children: ReactNode; className?: string }) {
    return <div className={cn('p-6 pb-3', className)}>{children}</div>;
}

export function CardFooter({ children, className }: { children: ReactNode; className?: string }) {
    return <div className={cn('p-6 pt-3', className)}>{children}</div>;
}
