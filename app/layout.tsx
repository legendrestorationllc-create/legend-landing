import type { Metadata } from 'next'
import { Sora, DM_Sans } from 'next/font/google'
import { LanguageProvider } from '@/providers/LanguageProvider'
import { StickyMobileCTA } from '@/components/StickyMobileCTA'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { LiveFeed } from '@/components/LiveFeed'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-sora',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'Legend Restoration — ¿Tu seguro paga tu techo nuevo? | Connecticut',
  description: 'Descubre si tu seguro puede cubrir el reemplazo completo de tu techo en Connecticut. Inspección gratuita. Solo pagas tu deducible. Hablamos español.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${sora.variable} ${dmSans.variable}`}>
        <LanguageProvider>
          {children}
          <StickyMobileCTA />
          <WhatsAppButton />
          <LiveFeed />
        </LanguageProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=document.createElement('script');s.src='https://maps.googleapis.com/maps/api/js?key=AIzaSyC3RW6kkremu3hCwMdvehg0nBRjQpN7hgk&libraries=places,marker&callback=Function.prototype';s.async=true;s.defer=true;s.onload=function(){window.dispatchEvent(new Event('google-maps-ready'))};document.head.appendChild(s);})();`,
          }}
        />
      </body>
    </html>
  )
}
