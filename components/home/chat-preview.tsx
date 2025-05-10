'use client';

import { useLanguage } from '@/components/providers/language-provider';
import { Button } from '@/components/ui/button';
import { MessageSquare, Bot, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function ChatPreview() {
  const { t } = useLanguage();
  
  const sampleQuestions = [
    'Улаанбаатар хотын өнөөдрийн цаг агаарын мэдээ хэд вэ?',
    'Монгол улсын хамгийн том хот аль вэ?',
    'Ирэх 7 хоногийн цаг агаарын урьдчилсан мэдээг хэлнэ үү?',
    'Төрийн үйлчилгээний цахим системд хэрхэн бүртгүүлэх вэ?',
  ];
  
  return (
    <section className="container mx-auto px-4 py-16 bg-muted rounded-xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Ухаалаг туслахтай ярилцаарай</h2>
          <p className="text-lg text-muted-foreground">
            Манай ухаалаг чатбот AI технологид суурилсан бөгөөд таны бүх төрлийн асуултанд хариулах чадвартай.
            Өдөр тутмын мэдээлэл, төрийн үйлчилгээ, статистик мэдээлэл гээд бүх төрлийн асуултаа асуугаарай.
          </p>
          <div className="space-y-3">
            <h3 className="font-medium">Жишээ асуултууд:</h3>
            <ul className="space-y-2">
              {sampleQuestions.map((question, index) => (
                <li key={index} className="flex gap-2">
                  <MessageSquare className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{question}</span>
                </li>
              ))}
            </ul>
          </div>
          <Button asChild size="lg" className="mt-6">
            <Link href="/chat" className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              Чатботтой ярилцах
            </Link>
          </Button>
        </div>
        <div className="bg-card rounded-lg p-6 shadow-lg border">
          <div className="flex flex-col h-80 overflow-hidden">
            <div className="text-center p-4 border-b">
              <h3 className="font-semibold text-lg">Ухаалаг туслах</h3>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <div className="flex justify-start">
                <div className="bg-muted p-3 rounded-lg rounded-tl-none max-w-[80%]">
                  <p>Сайн байна уу? Би таны ухаалаг туслах. Танд хэрхэн туслах вэ?</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-primary text-primary-foreground p-3 rounded-lg rounded-tr-none max-w-[80%]">
                  <p>Өнөөдрийн цаг агаарын мэдээ ямар байна?</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-muted p-3 rounded-lg rounded-tl-none max-w-[80%]">
                  <p>Өнөөдөр Улаанбаатар хотод үүлшинэ, цасан шуурга шуурахгүй. Агаарын температур -2..0 градус байна. Салхи баруун хойноос 4-8 м/с.</p>
                </div>
              </div>
            </div>
            <div className="border-t p-4">
              <div className="relative">
                <input 
                  type="text"
                  placeholder={t('chat.placeholder')}
                  className="w-full rounded-full border px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  disabled
                />
                <Button size="sm" className="absolute right-1 top-1 rounded-full w-8 h-8 p-0" disabled>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}