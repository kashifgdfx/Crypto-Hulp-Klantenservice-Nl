import { Analytics } from '@vercel/analytics/next'
import { Geist, Geist_Mono } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import { Phone } from 'lucide-react'

const geist = Geist({ subsets: ['latin'] })
const geistMono = Geist_Mono({ subsets: ['latin'] })
import './globals.css'

export const metadata: Metadata = {
  title: 'Crypto Problemen? Hulp & Klantenservice Nederland',
  description: 'Problemen met crypto, wallet, transactie of account? Lees veilige oplossingen en ontdek hoe u officiële crypto-ondersteuning vindt in Nederland.',

  icons: {
    icon: [
      // {
      //   url: '/icon-light-32x32.png',
      //   media: '(prefers-color-scheme: light)',
      // },
      // {
      //   url: '/icon-dark-32x32.png',
      //   media: '(prefers-color-scheme: dark)',
      // },
        {
        url: '/icon.png',
      },
    
    ],
     
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f4f7f5',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className="bg-background">
      <body className={`${geist.className} ${geistMono.variable} antialiased`}>
        {children}
        
        {/* Floating Right-Side Call Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="tel:+31202254839"
            className="flex items-center gap-2.5 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-2xl transition-transform hover:scale-105"
            aria-label="Bel klantenservice"
          >
            <Phone size={18} />
            <span>+31-20-225-4839</span>
          </a>
        </div>

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}