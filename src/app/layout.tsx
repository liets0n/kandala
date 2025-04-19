import React from 'react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'

import { Header } from './../layout'

import './../styles/global.scss'

export const metadata: Metadata = {
  title: 'Kandala',
  description: 'Transforme Seu Cuidado Pessoal com Inteligência Digital'
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins'
})

export const miollan = localFont({
  src: './../assets/fonts/Miollan.otf',
  variable: '--font-miollan',
  display: 'swap'
})

export const signatie = localFont({
  src: './../assets/fonts/signatie/Signatie.woff2',
  variable: '--font-signatie',
  display: 'swap'
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='pt'
      className={`
        ${poppins.variable}
        ${miollan.variable}
        ${signatie.variable}
      `}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
