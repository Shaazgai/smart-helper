// File: components/CategoryFilter.tsx
'use client';

import { categoryNames } from '@/lib/types';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  // Convert the category dictionary to an array for rendering
  const categories = Object.entries(categoryNames).map(([id, name]) => ({ id, name }));

  return (
    <div className="bg-gray-700 p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-lg font-semibold mb-3">Ангилалууд</h2>
      <div className="space-y-2">
        <button
          className={`w-full text-left px-3 py-2 rounded-md transition ${
            selectedCategory === 'all' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
          }`}
          onClick={() => onSelectCategory('all')}
        >
          Бүгд
        </button>
        
        {categories.map(category => (
          <button
            key={category.id}
            className={`w-full text-left px-3 py-2 rounded-md transition ${
              selectedCategory === category.id ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
            }`}
            onClick={() => onSelectCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}