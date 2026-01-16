'use client';

import { MenuItem } from '@/types';
import { Card, CardContent, CardImage } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';
import { Plus, Leaf, WheatOff, Milk } from 'lucide-react';

interface MenuItemCardProps {
    item: MenuItem;
    onAddToCart?: (item: MenuItem) => void;
}

export function MenuItemCard({ item, onAddToCart }: MenuItemCardProps) {
    const dietaryIcons = {
        vegetarian: <Leaf size={16} className="text-green-600" />,
        vegan: <Leaf size={16} className="text-green-600" />,
        'gluten-free': <WheatOff size={16} className="text-amber-600" />,
        'dairy-free': <Milk size={16} className="text-blue-600" />,
    };

    return (
        <Card hover className="h-full flex flex-col">
            <CardImage
                src={`https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80`}
                alt={item.name}
                className="h-56"
            />
            <CardContent className="flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    {item.popular && (
                        <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded-full">
                            Popular
                        </span>
                    )}
                </div>

                <p className="text-gray-600 text-sm mb-4 flex-1">{item.description}</p>

                {/* Dietary Tags */}
                {item.dietary && item.dietary.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {item.dietary.map((tag) => (
                            <span
                                key={tag}
                                className="flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                                title={tag}
                            >
                                {dietaryIcons[tag as keyof typeof dietaryIcons]}
                                <span className="capitalize">{tag}</span>
                            </span>
                        ))}
                    </div>
                )}

                {/* Spice Level */}
                {item.spiceLevel !== undefined && item.spiceLevel > 0 && (
                    <div className="flex items-center gap-1 mb-4">
                        <span className="text-sm text-gray-600">Spice:</span>
                        {[...Array(3)].map((_, i) => (
                            <span
                                key={i}
                                className={`text-lg ${i < item.spiceLevel! ? 'text-red-500' : 'text-gray-300'
                                    }`}
                            >
                                🌶️
                            </span>
                        ))}
                    </div>
                )}

                <div className="flex items-center justify-between mt-auto pt-4 border-t">
                    <span className="text-2xl font-bold text-orange-500">
                        {formatPrice(item.price)}
                    </span>
                    <Button
                        onClick={() => onAddToCart?.(item)}
                        disabled={!item.available}
                        size="sm"
                    >
                        <Plus size={18} className="mr-1" />
                        {item.available ? 'Add' : 'Unavailable'}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
