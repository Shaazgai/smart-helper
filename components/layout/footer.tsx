'use client';

import { Globe } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/components/providers/language-provider';
import { cn } from '@/lib/utils';

export function Footer({ className }: { className?: string }) {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className={cn('border-t px-8 md:px-12', className)}>
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Globe className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">{t('app.title')}</span>
            </Link>
            <p className="text-muted-foreground">
              Өдөр тутмын мэдээлэл, ухаалаг туслах
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3">
            <nav className="flex flex-col gap-2">
              <h3 className="font-medium">{t('dashboard')}</h3>
              <Link
                href="/news"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {t('news')}
              </Link>
              <Link
                href="/chat"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {t('chat')}
              </Link>
              <Link
                href="/performance"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {t('performance')}
              </Link>
            </nav>
            <nav className="flex flex-col gap-2">
              <h3 className="font-medium">{t('settings')}</h3>
              <Link
                href="/profile"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Профайл
              </Link>
              <Link
                href="/settings"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {t('settings')}
              </Link>
            </nav>
            <nav className="flex flex-col gap-2">
              <h3 className="font-medium">Холбоо барих</h3>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                info@example.mn
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                +976 7755-8899
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {year} {t('app.title')}. Бүх эрх хуулиар хамгаалагдсан.</p>
        </div>
      </div>
    </footer>
  );
}