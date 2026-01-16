import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <button
                className={cn(
                    'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                    'disabled:opacity-50 disabled:cursor-not-allowed',
                    {
                        // Variants
                        'bg-orange-500 text-white hover:bg-orange-600 shadow-md hover:shadow-lg hover:-translate-y-0.5':
                            variant === 'primary',
                        'bg-white text-orange-500 border-2 border-orange-500 hover:bg-orange-50':
                            variant === 'secondary',
                        'border-2 border-gray-300 bg-transparent hover:border-orange-500 hover:text-orange-500':
                            variant === 'outline',
                        'bg-transparent hover:bg-gray-100': variant === 'ghost',

                        // Sizes
                        'text-sm px-4 py-2': size === 'sm',
                        'text-base px-6 py-3': size === 'md',
                        'text-lg px-8 py-4': size === 'lg',
                    },
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';

export { Button };
