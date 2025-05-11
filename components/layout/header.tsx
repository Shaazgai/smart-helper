'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Search, Sun, Moon, Globe } from 'lucide-react';
import { useLanguage } from '@/components/providers/language-provider';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { MainNav } from '@/components/layout/main-nav';

export function Header() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-50 px-8 md:px-24 w-full transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b'
          : 'bg-transparent'
      )}
    >
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-6 md:gap-10">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="flex flex-col gap-6">
                <Link
                  href="/"
                  className="flex items-center space-x-2 font-bold text-xl"
                >
                  <Globe className="h-6 w-6 text-primary" />
                  <span>{t('app.title')}</span>
                </Link>
                <div className="grid gap-3 py-4">
                  <Link
                    href="/"
                    className={cn(
                      'flex items-center gap-3 px-3 py-2 text-lg font-medium rounded-md',
                      pathname === '/'
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted'
                    )}
                  >
                    {t('dashboard')}
                  </Link>
                  <Link
                    href="/news"
                    className={cn(
                      'flex items-center gap-3 px-3 py-2 text-lg font-medium rounded-md',
                      pathname === '/news'
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted'
                    )}
                  >
                    {t('news')}
                  </Link>
                  <Link
                    href="/chat"
                    className={cn(
                      'flex items-center gap-3 px-3 py-2 text-lg font-medium rounded-md',
                      pathname === '/chat'
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted'
                    )}
                  >
                    {t('chat')}
                  </Link>
                  <Link
                    href="/performance"
                    className={cn(
                      'flex items-center gap-3 px-3 py-2 text-lg font-medium rounded-md',
                      pathname === '/performance'
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted'
                    )}
                  >
                    {t('performance')}
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center space-x-2 hidden md:flex">
            <Globe className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">{t('app.title')}</span>
          </Link>
          <MainNav className="hidden md:flex" />
        </div>
        <div className="flex items-center gap-2">
          {/* <div className="relative hidden md:flex w-40 lg:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder={t('search')}
              className="w-full rounded-md pl-8"
            />
          </div> */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
                <span className="sr-only">{t('languages')}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage('mn')}>
                <span className={language === 'mn' ? 'font-bold' : ''}>
                  Монгол
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('en')}>
                <span className={language === 'en' ? 'font-bold' : ''}>
                  English
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                {theme === 'light' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
                <span className="sr-only">{t('theme')}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme('light')}>
                {t('light')}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                {t('dark')}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>
                {t('system')}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="default" asChild>
            <Link href="/login">{t('signin')}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}