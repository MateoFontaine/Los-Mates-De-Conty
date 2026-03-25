import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-marron border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Image
          src="/logo.png"
          alt="Los Mates de Conty"
          width={80}
          height={80}
          className="rounded-full object-contain"
        />

        <p className="text-xs text-crema/30 text-center">
          Hecho con amor en Argentina · © {new Date().getFullYear()}
        </p>

        <a
          href="https://devoys.com.ar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-crema/30 hover:text-crema/60 transition-colors"
        >
          Hecho por Devoys
        </a>
      </div>
    </footer>
  )
}
