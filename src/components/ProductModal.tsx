'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { X, ShoppingBag, MessageCircle } from 'lucide-react'
import { Product, CATEGORY_LABELS } from '@/types'
import { useCart } from '@/context/CartContext'
import { WHATSAPP_NUMBER, buildWhatsAppMessage } from '@/lib/config'

interface ProductModalProps {
  product: Product
  onClose: () => void
}

function formatPrice(price: number) {
  return `$${price.toLocaleString('es-AR')}`
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const { addItem } = useCart()

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage(
    product.name,
    product.price
  )}`

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      aria-modal="true"
      role="dialog"
    >
      <div
        className="absolute inset-0 bg-marron/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-crema rounded-3xl overflow-hidden shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col sm:flex-row">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-crema/90 backdrop-blur-sm flex items-center justify-center text-marron/60 hover:text-marron transition-colors shadow-sm"
          aria-label="Cerrar"
        >
          <X size={17} />
        </button>

        {/* Imagen */}
        <div className="relative w-full sm:w-1/2 aspect-square sm:aspect-auto sm:min-h-[420px] flex-shrink-0 bg-surface">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            unoptimized
            priority
          />
          <span className="absolute top-4 left-4 text-xs font-semibold bg-crema/90 text-marron px-3 py-1 rounded-full backdrop-blur-sm">
            {CATEGORY_LABELS[product.category]}
          </span>
        </div>

        {/* Detalles */}
        <div className="flex flex-col flex-1 p-6 sm:p-8 overflow-y-auto">
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl font-bold text-marron leading-tight">
              {product.name}
            </h2>
            <p className="mt-4 text-marron/60 text-sm leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-xs text-marron/40 uppercase tracking-widest mb-1">Precio</p>
            <p className="text-3xl font-bold text-marron">
              {formatPrice(product.price)}
            </p>

            <div className="flex flex-col gap-3 mt-6">
              <button
                onClick={() => {
                  addItem(product)
                  onClose()
                }}
                className="flex items-center justify-center gap-2 w-full bg-marron hover:bg-tierra text-crema font-semibold py-3.5 rounded-full transition-colors text-sm"
              >
                <ShoppingBag size={17} />
                Agregar al carrito
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1DAE55] text-white font-semibold py-3.5 rounded-full transition-colors text-sm"
              >
                <MessageCircle size={17} />
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
