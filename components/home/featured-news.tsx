'use client';

import { useLanguage } from '@/components/providers/language-provider';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function FeaturedNews() {
  const { t } = useLanguage();
  
  // Mock data - would be replaced with API data
  const newsItems = [
    {
      id: 1,
      title: 'Улаанбаатар хотын замын хөдөлгөөний шинэчлэл хэрэгжиж эхэллээ',
      category: 'Хотын мэдээ',
      importance: 'high',
      image: 'https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: '2025.03.10',
    },
    {
      id: 2,
      title: 'Өнөөдөр "Дугуйтай өдөрлөг" арга хэмжээ болно',
      category: 'Үйл явдал',
      importance: 'medium',
      image: 'https://images.pexels.com/photos/163491/bike-mountain-mountain-biking-trail-163491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: '2025.03.10',
    },
    {
      id: 3,
      title: 'Ирэх 7 хоногт хүйтний эрч суларна',
      category: 'Цаг агаар',
      importance: 'low',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: '2025.03.09',
    },
  ];
  
  const getImportanceBadge = (importance: string) => {
    switch (importance) {
      case 'high':
        return <Badge variant="destructive">Чухал</Badge>;
      case 'medium':
        return <Badge variant="default">Мэдээ</Badge>;
      case 'low':
        return <Badge variant="secondary">Ердийн</Badge>;
      default:
        return null;
    }
  };
  
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">{t('featured')}</h2>
        <Button variant="ghost" asChild>
          <Link href="/news" className="flex items-center gap-1">
            Бүгдийг үзэх <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((news) => (
          <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video relative">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                {getImportanceBadge(news.importance)}
              </div>
            </div>
            <CardContent className="pt-4">
              <div className="flex justify-between items-center mb-2 text-sm text-muted-foreground">
                <span>{news.category}</span>
                <span>{news.date}</span>
              </div>
              <h3 className="font-semibold text-lg mb-4 line-clamp-2">
                {news.title}
              </h3>
              <Button variant="ghost" asChild className="p-0 h-auto">
                <Link href={`/news/${news.id}`}>
                  Дэлгэрэнгүй үзэх
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}