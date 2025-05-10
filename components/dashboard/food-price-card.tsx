'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/components/providers/language-provider';
import { ShoppingBasket } from 'lucide-react';

export function FoodPriceCard() {
  const { t } = useLanguage();
  
  // Mock data - would be replaced with API data
  const foodData = [
    { name: 'Гурил (1-р зэрэг)', price: 1850, change: -2.5 },
    { name: 'Хонины мах (кг)', price: 14500, change: 5.2 },
    { name: 'Төмс (кг)', price: 2200, change: 0 },
    { name: 'Элсэн чихэр (кг)', price: 3500, change: 2.1 },
  ];
  
  return (
    <Card>
      <CardHeader className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white">
        <CardTitle className="flex items-center justify-between">
          <span>{t('food')}</span>
          <ShoppingBasket className="h-5 w-5" />
        </CardTitle>
        <p className="font-medium">Дундаж үнэ</p>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-3">
          {foodData.map((item) => (
            <div key={item.name} className="flex justify-between items-center">
              <div className="text-sm">{item.name}</div>
              <div className="text-right">
                <div className="font-semibold">{item.price}₮</div>
                <div className={`text-xs ${
                  item.change > 0 ? 'text-red-500' : 
                  item.change < 0 ? 'text-green-500' : 'text-muted-foreground'
                }`}>
                  {item.change > 0 ? '+' : ''}{item.change}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}