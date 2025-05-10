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
      title: '“Дугуйтай Улаанбаатар-2025” олон нийтийн өдөрлөг үргэлжилж байна.',
      category: 'Хотын мэдээ',
      importance: 'high',
      image: 'https://mgl.gogo.mn/newsn/np/2025/05/10/5228626/496801826_122135345408709147_751269370348666996_n-142404-1872354192.jpeg?fbclid=IwZXh0bgNhZW0CMTEAAR7ncUBH_qDNrYhoWFZxD_GZAilVJCMPhsjpP7P2_cilwMurA7OPEWG--EXQ-A_aem_8GM1NCxUILahIYR53IGPKw',
      date: '2025.03.10',
    },
    {
      id: 2,
      title: 'Тусгаарлах зурвас давж эргэн эсрэг урсгалд явсан 4 автомашиныг мөргөжээ.',
      category: 'Үйл явдал',
      importance: 'medium',
      image: 'https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2025/05/330569-10052025-1746864456-1553021869-osol.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR65P_nGVvevSjSaJYamphVYKYjKblFnAKKkHLWgcSkzJYU11d4U-2uS6ZVqww_aem_2DsG_4rihYo2D3z0okkSnw',
      date: '2025.03.10',
    },
    {
      id: 3,
      title: 'Ерөнхийлөгч У.Хүрэлсүх Ялалтын баярын ёслолд оролцлоо.',
      category: 'Үйл явдал',
      importance: 'low',
      image: 'https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2025/05/-10052025-1746856975-553586871-IMG_20250510_094703_472.jpg?fbclid=IwZXh0bgNhZW0CMTEAAR6Uvni0viXn8vIgsHomtghuO2jVsJGzkahyFlFwZ4rddDFAAS2pB3c5sODKnA_aem_KlIKeNyRnned8Z_JGCEsVA',
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