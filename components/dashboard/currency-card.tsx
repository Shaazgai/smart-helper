'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/components/providers/language-provider';
import { DollarSign, TrendingUp, TrendingDown } from 'lucide-react';

export function CurrencyCard() {
  const { t } = useLanguage();
  
  // Mock data - would be replaced with API data
  const currencyData = [
    { code: 'USD', name: 'Ам.Доллар', rate: 3572.07, change: 1.2 },
    { code: 'EUR', name: 'Евро', rate: 4058.59, change: 2.62 },
    { code: 'CNY', name: 'Юань', rate: 494.2, change: 4.14 },
    { code: 'RUB', name: 'Рубль', rate: 44.21, change: 1.06 },
  ];
  
  return (
    <Card>
      <CardHeader className="bg-gradient-to-r from-emerald-400 to-green-500 text-white">
        <CardTitle className="flex items-center justify-between">
          <span>{t('currency')}</span>
          <DollarSign className="h-5 w-5" />
        </CardTitle>
        <p className="font-medium">Банкны дундаж ханш</p>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-3">
          {currencyData.map((currency) => (
            <div key={currency.code} className="flex justify-between items-center">
              <div>
                <div className="font-medium">{currency.code}</div>
                <div className="text-xs text-muted-foreground">{currency.name}</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">{currency.rate}₮</span>
                <div className={`flex items-center text-xs ${
                  currency.change >= 0 ? 'text-green-500' : 'text-red-500'
                }`}>
                  {currency.change >= 0 ? 
                    <TrendingUp className="h-3 w-3 mr-1" /> : 
                    <TrendingDown className="h-3 w-3 mr-1" />
                  }
                  {Math.abs(currency.change)}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}