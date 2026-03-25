import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative bg-marron overflow-hidden">
      <Image
        src="https://picsum.photos/1200/400"
        alt="Hero background"
        fill
        className="object-cover opacity-40"
        priority
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-r from-marron/90 via-marron/60 to-marron/20" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-28 sm:py-40 flex flex-col items-start">
        <span className="text-xs font-medium text-crema/50 tracking-widest uppercase mb-6">
          Mates &amp; Bombillas Artesanales
        </span>

        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-crema leading-none max-w-xl">
          Los Mates<br />de Conty
        </h1>

        <p className="mt-6 text-crema/60 text-sm sm:text-base max-w-sm leading-relaxed">
          Piezas seleccionadas con cariño para que cada matecito sea especial.
        </p>

        <div className="flex items-center gap-4 mt-10">
          <Link
            href="/catalogo"
            className="bg-tierra hover:bg-tierra-dark text-crema text-sm font-semibold px-7 py-3.5 rounded-full transition-colors"
          >
            Ver Catálogo
          </Link>
          <a
            href="#destacados"
            className="text-sm font-medium text-crema/50 hover:text-crema transition-colors"
          >
            Ver destacados →
          </a>
        </div>
      </div>
    </section>
  )
}
