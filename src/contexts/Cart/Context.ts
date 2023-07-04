import { createContext } from 'react'

export interface Coffee {
  id: string
  imageUrl: string
  title: string
  tags: string[]
  description: string
  price: number
  amountInCart?: number
}

export interface AddToCartData {
  coffee: Coffee
  amount: number
}

interface CartContextType {
  coffeeList: Coffee[]
  totalCoffeeUnitsInCart: number
  valueOfItemsInCart: number
  addCoffeeToCart: ({ coffee, amount }: AddToCartData) => void
  removeCoffeeFromCart: (id: Coffee['id']) => void
  updateCoffeeAmount: (
    id: Coffee['id'],
    updateType: 'increase' | 'decrease',
  ) => void
}

export const CartContext = createContext({} as CartContextType)
