'use client';

import { useLanguage } from '@/components/providers/language-provider';
import { WeatherCard } from '@/components/dashboard/weather-card';
import { CurrencyCard } from '@/components/dashboard/currency-card';
import { FuelPriceCard } from '@/components/dashboard/fuel-price-card';
import { FoodPriceCard } from '@/components/dashboard/food-price-card';

export function DailyInfoSection() {
  const { t } = useLanguage();
  
  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8">Өдөр тутмын мэдээлэл</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <WeatherCard />
        <CurrencyCard />
        <FuelPriceCard />
        <FoodPriceCard />
      </div>
    </section>
  );
}