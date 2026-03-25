import { HeroSection } from '@/components/HeroSection'
import { ProductCard } from '@/components/ProductCard'
import { featuredProducts } from '@/data/products'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section id="destacados" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-medium text-marron/40 uppercase tracking-widest mb-2">
              Selección especial
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-marron">
              Destacados
            </h2>
          </div>
          <Link
            href="/catalogo"
            className="hidden sm:inline-flex text-xs font-medium text-marron/50 hover:text-marron transition-colors tracking-widest uppercase"
          >
            Ver todos →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/catalogo"
            className="text-xs font-medium text-marron/50 hover:text-marron transition-colors tracking-widest uppercase"
          >
            Ver todos los productos →
          </Link>
        </div>
      </section>

      <section className="bg-surface border-y border-border py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {[
            { label: 'Artesanal', desc: 'Cada pieza hecha con dedicación y materiales naturales seleccionados.' },
            { label: 'Envíos a todo el país', desc: 'Coordinamos el envío a donde estés, con cuidado.' },
            { label: 'Atención personalizada', desc: 'Consultanos por WhatsApp, te asesoramos sin apuro.' },
          ].map((item) => (
            <div key={item.label} className="py-8 sm:py-0 sm:px-10 first:pl-0 last:pr-0">
              <p className="text-xs font-semibold text-marron tracking-widest uppercase mb-2">{item.label}</p>
              <p className="text-marron/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
