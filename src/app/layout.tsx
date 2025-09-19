import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
