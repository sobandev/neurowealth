import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
})

export const metadata: Metadata = {
  title: 'NeuroWealth - AI-Powered Investment Intelligence',
  description: 'Grow your wealth with AI-driven investing. Personalized portfolios, real-time insights, and 24/7 monitoring for smarter investment decisions.',
  keywords: 'AI investing, wealth management, investment platform, portfolio optimization, fintech',
  authors: [{ name: 'NeuroWealth Team' }],
  openGraph: {
    title: 'NeuroWealth - AI-Powered Investment Intelligence',
    description: 'Grow your wealth with AI-driven investing. Start your free 7-day trial today.',
    url: 'https://neurowealth.com',
    siteName: 'NeuroWealth',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NeuroWealth AI Investment Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeuroWealth - AI-Powered Investment Intelligence',
    description: 'Grow your wealth with AI-driven investing. Start your free 7-day trial today.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1A1A2E" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}