'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { CalendarIcon, Clock } from 'lucide-react';

export function NewsGrid() {
  // Mock data - would be replaced with API data
  const newsItems = [
    {
      id: 1,
      title: 'Улаанбаатар хотын замын хөдөлгөөний шинэчлэл хэрэгжиж эхэллээ',
      excerpt: 'Нийслэлийн Засаг даргын захирамжаар Улаанбаатар хотын авто замын хөдөлгөөний шинэчлэл өнөөдрөөс эхлэн хэрэгжиж эхэллээ. Энэхүү шинэчлэлийн хүрээнд...',
      category: 'Хотын мэдээ',
      importance: 'high',
      image: 'https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: '2025.03.10',
      time: '13:45',
    },
    {
      id: 2,
      title: 'Өнөөдөр "Дугуйтай өдөрлөг" арга хэмжээ болно',
      excerpt: 'Өнөөдөр нийслэлийн 6 дүүрэгт "Дугуйтай өдөрлөг" арга хэмжээ зохион байгуулагдана. Энэхүү арга хэмжээнд дугуйтай иргэд, дугуйн клубууд оролцох бөгөөд...',
      category: 'Үйл явдал',
      importance: 'medium',
      image: 'https://images.pexels.com/photos/163491/bike-mountain-mountain-biking-trail-163491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: '2025.03.10',
      time: '10:30',
    },
    {
      id: 3,
      title: 'Ирэх 7 хоногт хүйтний эрч суларна',
      excerpt: 'Ирэх 7 хоногт цаг агаарын байдал дулаарч, хүйтний эрч суларна гэж Цаг уурын хүрээлэнгээс мэдээллээ. Өнөөдрөөс эхлэн агаарын температур аажмаар дээшилж...',
      category: 'Цаг агаар',
      importance: 'low',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: '2025.03.09',
      time: '15:00',
    },
    {
      id: 4,
      title: 'Долларын ханш өсөж, төгрөг суларчээ',
      excerpt: 'Монголбанкны мэдээллээр өнөөдрийн байдлаар төгрөгийн ханш суларч, долларын ханш өсчээ. Арилжааны банкуудын валютын ханшийг харахад 1 ам.доллар 3,450 төгрөг хүрчээ...',
      category: 'Валютын ханш',
      importance: 'medium',
      image: 'https://images.pexels.com/photos/2068975/pexels-photo-2068975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: '2025.03.09',
      time: '11:20',
    },
    {
      id: 5,
      title: 'Шатахууны үнэ өсч байгаад иргэд бухимдаж байна',
      excerpt: 'Сүүлийн саруудад шатахууны үнэ үргэлжлэн өсч байгаад иргэд бухимдаж байна. А-92 бензиний үнэ 50 төгрөгөөр нэмэгдэж, А-95 бензиний үнэ 30 төгрөгөөр өссөн бол...',
      category: 'Шатахууны үнэ',
      importance: 'high',
      image: 'https://images.pexels.com/photos/9796/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: '2025.03.08',
      time: '09:45',
    },
    {
      id: 6,
      title: 'Хүнсний бүтээгдэхүүний үнэ буурч эхэллээ',
      excerpt: 'Зарим төрлийн хүнсний бүтээгдэхүүний үнэ энэ сард буурч эхэлжээ. Тухайлбал, гурил, элсэн чихэр, төмс, лууван зэрэг бүтээгдэхүүний үнэ өмнөх сартай харьцуулахад 2-3 хувиар буурсан байна...',
      category: 'Хүнсний бүтээгдэхүүний үнэ',
      importance: 'medium',
      image: 'https://images.pexels.com/photos/264537/pexels-photo-264537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: '2025.03.08',
      time: '14:30',
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {newsItems.map((news) => (
        <Link key={news.id} href={`/news/${news.id}`} className="block">
          <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
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
            <CardContent className="p-4 flex flex-col h-[calc(100%-12rem)]">
              <div className="flex justify-between items-center mb-2">
                <Badge variant="outline">{news.category}</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CalendarIcon className="h-3 w-3 mr-1" />
                  <span>{news.date}</span>
                  <Clock className="h-3 w-3 ml-2 mr-1" />
                  <span>{news.time}</span>
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                {news.title}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-3">
                {news.excerpt}
              </p>
              <div className="mt-auto pt-4 text-primary text-sm font-medium">
                Дэлгэрэнгүй үзэх →
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}