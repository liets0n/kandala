import React from 'react'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import './../styles/global.scss'

export const metadata: Metadata = {
  title: 'Kandala - Landing Page',
  description: 'Transforme Seu Cuidado Pessoal com Inteligência Digital'
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins'
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt' className={poppins.variable}>
      <body>{children}</body>
    </html>
  )
}
