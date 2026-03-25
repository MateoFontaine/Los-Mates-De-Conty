'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export function Navbar() {
  const { totalItems, openCart } = useCart()

  return (
    <header className="sticky top-0 z-40 bg-crema/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image src="/logo.png" alt="Los Mates de Conty" width={72} height={72} className="object-contain" />
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/catalogo"
            className="text-xs font-medium text-marron/60 hover:text-marron transition-colors tracking-widest uppercase"
          >
            Catálogo
          </Link>

          <button
            onClick={openCart}
            className="relative flex items-center text-marron hover:text-tierra transition-colors"
            aria-label="Abrir carrito"
          >
            <ShoppingBag size={21} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2.5 w-4 h-4 rounded-full bg-tierra text-crema text-[10px] font-semibold flex items-center justify-center">
                {totalItems > 9 ? '9+' : totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}
