'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/components/providers/language-provider';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
} from 'recharts';

export function RegionalPerformance() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Mock data - would be replaced with API data
  const regionalData = [
    { name: 'Улаанбаатар', performance: 78 },
    { name: 'Дархан', performance: 65 },
    { name: 'Эрдэнэт', performance: 82 },
    { name: 'Ховд', performance: 58 },
    { name: 'Чойбалсан', performance: 72 },
    { name: 'Баянхонгор', performance: 45 },
    { name: 'Өвөрхангай', performance: 62 },
  ];
  
  if (!mounted) {
    return null;
  }
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Бүс нутгийн гүйцэтгэл</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={regionalData}
              margin={{
                top: 5,
                right: 30,
                left: 60,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" unit="%" />
              <YAxis dataKey="name" type="category" width={100} />
              <Tooltip formatter={(value) => `${value}%`} />
              <Bar 
                dataKey="performance" 
                name="Гүйцэтгэл" 
                fill="hsl(var(--chart-3))"
                background={{ fill: '#eee' }}
                radius={[0, 4, 4, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}