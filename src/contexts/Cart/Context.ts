import { createContext } from 'react'

export interface Buyer {
  address: {
    cep: string
    street: string
    streetNumber: string
    complement?: string
    neighborhood: string
    city: string
    state: string
    country: string
  }
  paymentMethod: 'cash' | 'creditCard' | 'debitCard' | undefined
}
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
  buyerInformation: Buyer
  coffeeList: Coffee[]
  totalCoffeeUnitsInCart: number
  valueOfItemsInCart: number
  updateBuyerInformation: (data: Buyer) => void
  clearBuyerInformation: () => void
  addCoffeeToCart: ({ coffee, amount }: AddToCartData) => void
  removeCoffeeFromCart: (id: Coffee['id']) => void
  updateCoffeeAmount: (
    id: Coffee['id'],
    updateType: 'increase' | 'decrease',
  ) => void
  clearCart: () => void
}

export const CartContext = createContext({} as CartContextType)
