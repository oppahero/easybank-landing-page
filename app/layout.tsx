import type { Metadata } from 'next'
import { Public_Sans } from 'next/font/google'
import './globals.css'
const publicSans = Public_Sans({ subsets: ['latin-ext'], weight: [ '400', '700', '300'] })

export const metadata: Metadata = {
  title: 'EasyBank landing page by María López',
  description: 'Challenge from Frontend Mentor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={publicSans.className}>{children}</body>
    </html>
  )
}