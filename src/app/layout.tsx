import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kandala - Landing Page',
  description: 'Transforme Seu Cuidado Pessoal com Inteligência Digital'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt'>
      <body>{children}</body>
    </html>
  )
}
