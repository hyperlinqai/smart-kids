// src/lib/analytics.ts
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-KR01PLEDZH';
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-KSW9H36R';
export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || '1310145566652864';

export const isPlaceholder = (value: string) => {
  return value === 'G-KR01PLEDZH' || value === 'GTM-XXXXXXX' || value === 'FB_PIXEL_ID';
};

// --------- Google Analytics (gtag) helpers ----------
export const pageview = (url: string) => {
  if (typeof window === 'undefined') return;
  if (!GA_ID || GA_ID === 'G-KR01PLEDZH') return; // skip if placeholder
  
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function(...args: any[]) { 
    window.dataLayer.push(args); 
  };
  window.gtag('config', GA_ID, { page_path: url });
};

export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window === 'undefined') return;
  window.gtag = window.gtag || function(...args: any[]) { 
    window.dataLayer.push(args); 
  };
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};

// ---------- Facebook Pixel ----------
export const fbqInit = () => {
  if (typeof window === 'undefined') return;
  if ((window as any).fbq) return;
  
  !(function(f: any, b: any, e: any, v: any, n: any, t: any, s: any){
    if (f.fbq) return; 
    n = f.fbq = function(...args: any[]) { 
      n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args) 
    };
    if (!f._fbq) f._fbq = n; 
    n.push = n; 
    n.loaded = !0; 
    n.version = '2.0'; 
    n.queue = [];
    t = b.createElement(e); 
    t.async = !0; 
    t.src = v; 
    s = b.getElementsByTagName(e)[0]; 
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

  if (!FB_PIXEL_ID || FB_PIXEL_ID === 'FB_PIXEL_ID') return;
  (window as any).fbq('init', FB_PIXEL_ID);
  (window as any).fbq('track', 'PageView');
};

export const fbqTrack = (eventName: string, params: any = {}) => {
  if (typeof window === 'undefined' || !(window as any).fbq) return;
  (window as any).fbq('track', eventName, params);
};

// ---------- Google Tag Manager helper ----------
export const gtmPush = (obj: any) => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(obj);
};

// Declare global types
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
  }
}
