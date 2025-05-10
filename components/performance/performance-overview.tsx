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
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function PerformanceOverview() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Mock data - would be replaced with API data
  const monthlyData = [
    { name: '1-р сар', target: 65, actual: 50 },
    { name: '2-р сар', target: 70, actual: 68 },
    { name: '3-р сар', target: 75, actual: 72 },
    { name: '4-р сар', target: 75, actual: 60 },
    { name: '5-р сар', target: 80, actual: 78 },
    { name: '6-р сар', target: 80, actual: 82 },
    { name: '7-р сар', target: 85, actual: 80 },
    { name: '8-р сар', target: 85, actual: 75 },
    { name: '9-р сар', target: 90, actual: 85 },
    { name: '10-р сар', target: 90, actual: 82 },
    { name: '11-р сар', target: 95, actual: 90 },
    { name: '12-р сар', target: 100, actual: 0 },
  ];
  
  const categoryData = [
    { name: 'Санхүү', value: 85 },
    { name: 'Үйл ажиллагаа', value: 65 },
    { name: 'Үйлчилгээ', value: 75 },
    { name: 'Хөгжил', value: 60 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  if (!mounted) {
    return null;
  }
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Гүйцэтгэлийн харьцуулалт</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="monthly">
          <TabsList className="mb-6">
            <TabsTrigger value="monthly">Сараар</TabsTrigger>
            <TabsTrigger value="category">Ангилалаар</TabsTrigger>
          </TabsList>
          <TabsContent value="monthly">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={monthlyData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis unit="%" />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
                  <Bar dataKey="target" name="Зорилт" fill="hsl(var(--chart-1))" />
                  <Bar dataKey="actual" name="Гүйцэтгэл" fill="hsl(var(--chart-2))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          <TabsContent value="category">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}