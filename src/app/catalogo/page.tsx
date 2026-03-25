'use client'

import { useState } from 'react'
import { ProductCard } from '@/components/ProductCard'
import { products } from '@/data/products'
import { Category, CATEGORY_LABELS } from '@/types'

const CATEGORIES: Category[] = ['todos', 'calabaza', 'madera', 'vidrio', 'bombilla', 'accesorio']

export default function CatalogoPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('todos')

  const filtered =
    activeCategory === 'todos'
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <p className="text-xs font-medium text-marron/40 uppercase tracking-widest mb-2">
          Todos los productos
        </p>
        <h1 className="font-display text-3xl sm:text-4xl text-marron">
          Catálogo
        </h1>
      </div>

      <div className="flex flex-wrap gap-2 mb-10 border-b border-border pb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-xs font-semibold transition-colors rounded-full border ${
              activeCategory === cat
                ? 'bg-marron text-crema border-marron'
                : 'bg-transparent text-marron/50 border-border hover:border-marron/40 hover:text-marron'
            }`}
          >
            {CATEGORY_LABELS[cat]}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-marron/40 text-center py-16 text-sm">
          No hay productos en esta categoría.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
