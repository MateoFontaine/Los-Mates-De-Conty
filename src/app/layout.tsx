import type { Metadata } from 'next'
import { DM_Serif_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/context/CartContext'
import { Navbar } from '@/components/Navbar'
import { CartSidebar } from '@/components/CartSidebar'
import { Footer } from '@/components/Footer'

const dmSerif = DM_Serif_Display({
  variable: '--font-dm-serif',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
})

// Mantenemos una sola declaración de metadata con el icono incluido
export const metadata: Metadata = {
  title: 'Los Mates de Conty — Mates y bombillas artesanales',
  description:
    'Mates y bombillas artesanales seleccionados con cariño. Encontrá tu mate ideal en Los Mates de Conty.',
  icons: {
    icon: '/logo.png', 
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${dmSerif.variable} ${dmSans.variable} h-full antialiased`}
    >
      {/* Agregué "text-olive-900" que estaba en una de tus versiones, 
          asumo que es el color de fuente para el proyecto de los mates */}
      <body className="min-h-full flex flex-col bg-crema text-olive-900">
        <CartProvider>
          <Navbar />
          <CartSidebar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}