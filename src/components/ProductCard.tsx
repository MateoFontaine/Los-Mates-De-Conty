'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Plus } from 'lucide-react'
import { Product, CATEGORY_LABELS } from '@/types'
import { useCart } from '@/context/CartContext'
import { ProductModal } from './ProductModal'

function formatPrice(price: number) {
  return `$${price.toLocaleString('es-AR')}`
}

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <article className="group bg-crema rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col border border-border">
        <button
          onClick={() => setModalOpen(true)}
          className="relative aspect-square overflow-hidden bg-surface block w-full text-left cursor-pointer"
          aria-label={`Ver detalles de ${product.name}`}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            unoptimized
          />
          <span className="absolute top-3 left-3 text-xs font-medium bg-crema/90 text-marron px-2.5 py-1 rounded-full backdrop-blur-sm">
            {CATEGORY_LABELS[product.category]}
          </span>
          <div className="absolute inset-0 bg-marron/0 group-hover:bg-marron/10 transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-crema text-xs font-semibold bg-marron/70 px-4 py-2 rounded-full backdrop-blur-sm">
              Ver detalle
            </span>
          </div>
        </button>

        <div className="p-3 sm:p-4 flex flex-col flex-1">
          <button
            onClick={() => setModalOpen(true)}
            className="text-left"
          >
            <h3 className="text-xs sm:text-sm font-semibold text-marron leading-snug hover:text-tierra transition-colors line-clamp-2">
              {product.name}
            </h3>
          </button>
          <p className="hidden sm:block text-marron/50 text-xs mt-1.5 leading-relaxed line-clamp-2 flex-1">
            {product.description}
          </p>

          <div className="flex items-center justify-between mt-3 sm:mt-4">
            <span className="text-marron font-bold text-sm sm:text-base">
              {formatPrice(product.price)}
            </span>
            <button
              onClick={() => addItem(product)}
              className="flex items-center gap-1 sm:gap-1.5 bg-marron hover:bg-tierra text-crema text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full transition-colors"
            >
              <Plus size={11} className="sm:hidden" />
              <Plus size={13} className="hidden sm:block" />
              <span className="hidden sm:inline">Agregar</span>
              
            </button>
          </div>
        </div>
      </article>

      {modalOpen && (
        <ProductModal
          product={product}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  )
}
