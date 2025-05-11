"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Ad, mockAds } from '@/lib/types';
import CategoryFilter from '@/components/categoryFilter';
import AdCard from '@/components/adCard';

export default function Ads() {
  const [ads, setAds] = useState<Ad[]>([]);
  const [filteredAds, setFilteredAds] = useState<Ad[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setAds(mockAds);
    setFilteredAds(mockAds);
    setLoading(false);
  }, []);

  // Filter ads when category or search query changes
  useEffect(() => {
    let results = [...ads];
    
    // Filter by category
    if (selectedCategory !== 'all') {
      results = results.filter(ad => ad.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        ad => 
          ad.title.toLowerCase().includes(query) || 
          ad.description.toLowerCase().includes(query) ||
          ad.location.toLowerCase().includes(query)
      );
    }
    
    setFilteredAds(results);
  }, [ads, selectedCategory, searchQuery]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // The filtering happens in the useEffect
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Хандив</h1>
      
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-lg font-medium text-gray-500">Сүүлд нэмэгдсэн хандивууд</h2>
        <Link href="/ads/create" className="bg-[#015198] hover:bg-blue-600 text-white py-2 px-4 rounded">
          + Хандивлах зүйлсээ нэмэх
        </Link>
      </div>
      
      {/* Search bar */}
      <div className="mb-6">
        <form onSubmit={handleSearch} className="flex">
          <input
            type="text"
            placeholder="Хайх..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-[#015198] text-white px-4 py-2 rounded-r-md hover:bg-[#015198]"
          >
            Хайх
          </button>
        </form>
      </div>
      
      <div className="w-full">
        {/* Category filter */}
        {/* <div className="lg:col-span-1">
          <CategoryFilter 
            selectedCategory={selectedCategory} 
            onSelectCategory={handleCategorySelect} 
          />
        </div> */}
        
        {/* Ad listings */}
        <div className="lg:col-span-3">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : filteredAds.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredAds.map((ad) => (
                <AdCard key={ad.id} ad={ad} />
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <p className="text-lg text-gray-600">Зар олдсонгүй</p>
              {selectedCategory !== 'all' && (
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="mt-4 text-blue-500 hover:text-blue-700"
                >
                  Бүх зарууд харах
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}