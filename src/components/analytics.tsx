'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import * as analytics from '@/lib/analytics';

export default function Analytics() {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    // Initialize Facebook Pixel
    analytics.fbqInit();
    
    // Track initial pageview
    if (pathname) {
      analytics.pageview(pathname);
      
      // Track GTM pageview
      analytics.gtmPush({ event: 'pageview', page: pathname });
    }
  }, [pathname, isClient]);

  return null;
}
