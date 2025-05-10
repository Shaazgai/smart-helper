'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/components/providers/language-provider';
import { Droplets } from 'lucide-react';

export function FuelPriceCard() {
  const { t } = useLanguage();
  
  // Mock data - would be replaced with API data
  const fuelData = [
    { type: 'A-92', price: 2150, change: '+50₮' },
    { type: 'A-95', price: 2350, change: '+30₮' },
    { type: 'Дизель', price: 2450, change: '0₮' },
  ];
  
  return (
    <Card>
      <CardHeader className="bg-gradient-to-r from-amber-400 to-orange-500 text-white">
        <CardTitle className="flex items-center justify-between">
          <span>{t('fuel')}</span>
          <Droplets className="h-5 w-5" />
        </CardTitle>
        <p className="font-medium">Дундаж үнэ</p>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid gap-4">
          {fuelData.map((fuel) => (
            <div key={fuel.type} className="flex justify-between items-center">
              <div className="font-medium">{fuel.type}</div>
              <div className="text-right">
                <div className="font-semibold">{fuel.price}₮</div>
                <div className="text-xs text-muted-foreground">{fuel.change}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-xs text-muted-foreground mt-6 text-center">
          Сүүлийн шинэчлэл: 2025.03.10
        </div>
      </CardContent>
    </Card>
  );
}