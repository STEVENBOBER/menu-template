import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from '@/lib/registry'
// import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';



const font = Oswald({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Absinthe Menu',
  description: 'Amazing bar menu template',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth' >
      <body className={`${font.className}  bg-gray-950 text-white relative`}>
        <StyledComponentsRegistry>
          {children}
          <Analytics />
          {/* <SpeedInsights /> */}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
