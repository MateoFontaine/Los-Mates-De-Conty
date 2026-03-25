export const WHATSAPP_NUMBER = '542984366692' // Reemplazá con el número de Conty

export function buildWhatsAppMessage(productName: string, price: number) {
  return encodeURIComponent(
    `Hola! Me interesa el producto "${productName}" ($${price.toLocaleString('es-AR')}). ¿Tienen disponibilidad?`
  )
}
