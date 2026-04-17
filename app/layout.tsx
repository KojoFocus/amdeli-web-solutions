import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Amdeli Web Solutions - Build Your Digital Safety Net',
  description: 'Professional web solutions for businesses in Ghana. Get your website, online store, and digital presence.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, background: '#0a0a0a', color: '#999' }}>
        {children}
      </body>
    </html>
  )
}
