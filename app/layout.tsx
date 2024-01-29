import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.svg'

  },
  title: 'Romina Douk Portfolio',
  description: 'A personal portfolio developed by Romina Douk.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={`${inter.className} font-cabin text-dark-green bg-off-white`}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
