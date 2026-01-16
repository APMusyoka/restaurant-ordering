'use client';

import { useState } from 'react';
import { MenuCategory } from '@/types';
import { menuCategories } from '@/data/menu';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
    selectedCategory: MenuCategory | 'all';
    onCategoryChange: (category: MenuCategory | 'all') => void;
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
    return (
        <div className="flex flex-wrap gap-3 justify-center">
            {menuCategories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => onCategoryChange(category.id as MenuCategory | 'all')}
                    className={cn(
                        'px-6 py-3 rounded-full font-semibold transition-all duration-300',
                        'border-2',
                        selectedCategory === category.id
                            ? 'bg-orange-500 text-white border-orange-500 shadow-lg'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-orange-500 hover:text-orange-500'
                    )}
                >
                    {category.label}
                </button>
            ))}
        </div>
    );
}
