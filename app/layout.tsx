import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSansFont = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://czechiasporttours.com'),
  title: {
    default: 'CzechiaSportTours – Sportovni zajezdy po Cesku a Evrope',
    template: '%s | CzechiaSportTours',
  },
  description: 'Premiumove sportovni zajezdy po Ceske republice a cele Evrope. Fotbal, hokej, cyklistika, tenis a dalsi sporty.',
  keywords: ['sportovni zajezdy', 'ceska republika', 'fotbal', 'hokej', 'Praha', 'Brno', 'Evropa'],
  authors: [{ name: 'CzechiaSportTours', url: 'https://czechiasporttours.com' }],
  creator: 'CzechiaSportTours',
  publisher: 'CzechiaSportTours',
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://czechiasporttours.com',
    siteName: 'CzechiaSportTours',
    title: 'CzechiaSportTours',
    description: 'Premiumove sportovni zajezdy po Ceske republice a cele Evrope.',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#1a2744',
  width: 'device-width',
  initialScale: 1,
}

type Props = { children: React.ReactNode }

export default function RootLayout({ children }: Props) {
  const fonts = `${cormorantGaramond.variable} ${dmSansFont.variable}`
  return (
    <html lang="cs" data-scroll-behavior="smooth">
      <body className={`${fonts} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
