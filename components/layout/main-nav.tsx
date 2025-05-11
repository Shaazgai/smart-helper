'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/components/providers/language-provider';

export function MainNav({ className }: { className?: string }) {
  const pathname = usePathname();
  const { t } = useLanguage();

  const routes = [
    {
      href: '/',
      label: t('dashboard'),
      active: pathname === '/',
    },
    {
      href: '/news',
      label: t('news'),
      active: pathname === '/news',
    },
    {
      href: '/chat',
      label: t('chat'),
      active: pathname === '/chat',
    },
    // {
    //   href: '/performance',
    //   label: t('performance'),
    //   active: pathname === '/performance',
    // },
      {
      href: '/ads',
      label: t('ads'),
      active: pathname === '/ads',
    },
    {
      href: '/feed',
      label: t('Санал гомдол'),
      active: pathname === '/feed',
    },
  ];

  return (
    <nav className={cn('flex items-center space-x-6 lg:space-x-8', className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-[#015198]',
            route.active
              ? 'text-[#015198] font-semibold'
              : 'text-muted-foreground'
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}