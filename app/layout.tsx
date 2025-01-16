import './globals.css'
import { Inter } from 'next/font/google'
import { ToasterProvider } from '@/components/toaster-provider'
import { CrispProvider } from '@/components/crisp-provider'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head> 
        <title> Deriv AI Affiliate </title>
        <meta name="title" content="Deriv AI" />
        <meta name="description" content="Deriv AI" />
      </head>
   
      <body className={inter.className}>
        <ToasterProvider />
        <Analytics />
        {children}
      </body>
    </html>
  )
}