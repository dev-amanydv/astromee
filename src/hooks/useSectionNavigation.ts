'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useApp } from '@/context/AppContext';

export function useSectionNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const { scrollToSection } = useApp();

  const navigateOrScroll = (sectionId: string) => {
    if (pathname === '/') {
      scrollToSection(sectionId);
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  const navigateTo = (sectionId?: string, href?: string) => {
    if (href) {
      router.push(href);
    } else if (sectionId) {
      navigateOrScroll(sectionId);
    }
  };

  return {
    navigateOrScroll,
    navigateTo,
    pathname,
  };
}
