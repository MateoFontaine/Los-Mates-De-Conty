export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: 'calabaza' | 'madera' | 'vidrio' | 'bombilla' | 'accesorio'
  image: string
  featured?: boolean
}

export interface CartItem {
  product: Product
  quantity: number
}

export type Category = Product['category'] | 'todos'

export const CATEGORY_LABELS: Record<Category, string> = {
  todos: 'Todos',
  calabaza: 'Calabaza',
  madera: 'Madera',
  vidrio: 'Vidrio',
  bombilla: 'Bombillas',
  accesorio: 'Accesorios',
}
