'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Activity, 
  TrendingUp, 
  CheckCircle2, 
  AlertTriangle 
} from 'lucide-react';
import { useLanguage } from '@/components/providers/language-provider';

export function KpiCards() {
  const { t } = useLanguage();
  
  // Mock data - would be replaced with API data
  const kpis = [
    {
      title: 'Нийт биелэлт',
      value: '78%',
      change: '+12%',
      trend: 'up',
      icon: Activity,
      color: 'bg-blue-500',
    },
    {
      title: 'Хэрэгжилтийн явц',
      value: '65%',
      change: '+8%',
      trend: 'up',
      icon: TrendingUp,
      color: 'bg-green-500',
    },
    {
      title: 'Хугацаандаа биелсэн',
      value: '124',
      change: '+28',
      trend: 'up',
      icon: CheckCircle2,
      color: 'bg-indigo-500',
    },
    {
      title: 'Хугацаа хэтэрсэн',
      value: '23',
      change: '-7',
      trend: 'down',
      icon: AlertTriangle,
      color: 'bg-amber-500',
    },
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpis.map((kpi, index) => (
        <Card key={index}>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {kpi.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-3xl font-bold">{kpi.value}</div>
                <div className={`text-xs font-medium ${
                  (kpi.trend === 'up' && kpi.title !== 'Хугацаа хэтэрсэн') || 
                  (kpi.trend === 'down' && kpi.title === 'Хугацаа хэтэрсэн')
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}>
                  {kpi.change} өнгөрсөн сараас
                </div>
              </div>
              <div className={`${kpi.color} p-2 rounded-full text-white`}>
                <kpi.icon className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}