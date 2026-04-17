import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Amdeli Tech Solutions - Build Your Digital Safety Net',
  description: 'Professional web solutions for businesses in Ghana. Get your website, online store, and digital presence.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ colorScheme: 'dark' }}>
      <head>
        <meta name="color-scheme" content="dark" />
      </head>
      <body style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, background: '#141414', color: '#999' }}>
        {children}
      </body>
    </html>
  )
}
