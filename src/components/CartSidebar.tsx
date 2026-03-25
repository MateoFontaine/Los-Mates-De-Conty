'use client'

import Image from 'next/image'
import { X, Trash2, Plus, Minus, MessageCircle } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { WHATSAPP_NUMBER } from '@/lib/config'

function formatPrice(price: number) {
  return `$${price.toLocaleString('es-AR')}`
}

function buildCartWhatsAppMessage(
  items: ReturnType<typeof useCart>['items'],
  total: number
) {
  const lines = items
    .map(
      (item) =>
        `• ${item.product.name} (x${item.quantity}): ${formatPrice(
          item.product.price * item.quantity
        )}`
    )
    .join('\n')

  return encodeURIComponent(
    `Hola! Me interesan los siguientes productos de Los Mates de Conty:\n\n${lines}\n\nTotal: ${formatPrice(total)}\n\n¿Tienen disponibilidad?`
  )
}

export function CartSidebar() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } =
    useCart()

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildCartWhatsAppMessage(
    items,
    totalPrice
  )}`

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-marron/20 z-40 backdrop-blur-sm"
          onClick={closeCart}
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[380px] bg-crema z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out border-l border-border ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="text-sm font-bold text-marron">Tu pedido</h2>
          <button
            onClick={closeCart}
            className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-marron/50 hover:text-marron transition-colors"
            aria-label="Cerrar carrito"
          >
            <X size={16} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-3">
              <span className="text-4xl">🧉</span>
              <p className="text-marron/40 text-sm">Tu carrito está vacío</p>
            </div>
          ) : (
            <ul className="flex flex-col gap-3">
              {items.map((item) => (
                <li
                  key={item.product.id}
                  className="flex gap-3 bg-surface rounded-2xl p-3"
                >
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-marron leading-snug">
                      {item.product.name}
                    </p>
                    <p className="text-tierra font-bold text-sm mt-0.5">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-6 h-6 rounded-full border border-border flex items-center justify-center hover:bg-border transition-colors text-marron"
                      >
                        <Minus size={10} />
                      </button>
                      <span className="text-xs font-semibold text-marron w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-6 h-6 rounded-full border border-border flex items-center justify-center hover:bg-border transition-colors text-marron"
                      >
                        <Plus size={10} />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="text-marron/20 hover:text-terracota transition-colors self-start mt-0.5"
                    aria-label="Eliminar producto"
                  >
                    <Trash2 size={14} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-border">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs text-marron/50 font-medium">Total estimado</span>
              <span className="text-marron font-bold text-lg">
                {formatPrice(totalPrice)}
              </span>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1DAE55] text-white font-semibold py-3.5 rounded-full transition-colors text-sm"
            >
              <MessageCircle size={18} />
              Consultar por WhatsApp
            </a>
          </div>
        )}
      </aside>
    </>
  )
}
