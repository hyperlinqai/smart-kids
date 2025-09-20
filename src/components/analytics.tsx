'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import * as analytics from '@/lib/analytics';

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize Facebook Pixel
    analytics.fbqInit();
    
    // Track initial pageview
    analytics.pageview(pathname);
    
    // Track GTM pageview
    analytics.gtmPush({ event: 'pageview', page: pathname });
  }, [pathname]);

  return null;
}
