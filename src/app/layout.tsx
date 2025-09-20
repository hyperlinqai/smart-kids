import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Analytics from '@/components/analytics'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BrightMinds Academy - Nurturing Young Learners for Tomorrow',
  description: 'Premier educational program for children ages 5-15. Personalized learning, creative development, and academic excellence in a supportive environment.',
  openGraph: {
    title: 'BrightMinds Academy - Nurturing Young Learners',
    description: 'Premier educational program for children ages 5-15. Personalized learning and creative development.',
    type: 'website',
    url: 'https://brightmindsacademy.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrightMinds Academy - Nurturing Young Learners',
    description: 'Premier educational program for children ages 5-15. Personalized learning and creative development.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts are loaded via Inter component above */}
        
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX'}');
            `,
          }}
        />

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'G-KR01PLEDZH'}`}
          strategy="afterInteractive"
        />
        <Script
          id="ga-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || 'G-KR01PLEDZH'}', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
          }}
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "BrightMinds Academy",
              "description": "Premier educational program for children ages 5-15. Personalized learning, creative development, and academic excellence.",
              "url": "https://brightmindsacademy.com",
              "telephone": "+1-555-BRIGHT",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Education City",
                "addressRegion": "State",
                "postalCode": "12345",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://facebook.com/brightmindsacademy",
                "https://instagram.com/brightmindsacademy"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX'}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Facebook Pixel noscript - using img for tracking pixel */}
        {process.env.NEXT_PUBLIC_FB_PIXEL_ID && 
         process.env.NEXT_PUBLIC_FB_PIXEL_ID !== 'FB_PIXEL_ID' && 
         process.env.NEXT_PUBLIC_FB_PIXEL_ID === '1187143980003173' && (
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FB_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        )}

        {children}
        <Analytics />
      </body>
    </html>
  )
}
