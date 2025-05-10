'use client';

import { useLanguage } from '@/components/providers/language-provider';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroBanner() {
  const { t } = useLanguage();
  
  return (
    <div className="relative bg-muted overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-90" />
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1619569/pexels-photo-1619569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-center bg-cover opacity-20 mix-blend-overlay" />
      <div className="relative container mx-auto px-4 py-24 sm:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Мэдээлэл. Туслалцаа. Шийдэл.
          </h1>
          <p className="mt-6 text-xl text-white/80">
            Өдөр тутмын мэдээлэл, ухаалаг туслах, гүйцэтгэлийн шинжилгээ, бүгд нэг платформд.
          </p>
          <div className="mt-10 flex gap-4">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-white/90">
              <Link href="/chat">
                Туслахтай ярилцах
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-blue-600 border-white hover:bg-white/10">
              <Link href="/news">
                Мэдээ үзэх
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}