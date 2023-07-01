import { ReactNode, useReducer } from 'react'
import {
  addCoffeeToCartAction,
  updateCurrentAmountAction,
} from '../../reducers/cart/actions'
import { cartReducer } from '../../reducers/cart/reducer'
import { AddToCartData, CartContext, Coffee } from './Context'

interface CartProviderProps {
  children: ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, {
    coffeeList: [],
  })
  const { coffeeList } = state

  function addCoffeeToCart({ coffee, amount }: AddToCartData) {
    const newCoffeeToCart: Coffee = {
      ...coffee,
      amountInCart: amount,
    }
    const coffeeAlreadyInCart = coffeeList.find((v) => v.id === coffee.id)

    if (coffeeAlreadyInCart) {
      dispatch(updateCurrentAmountAction(newCoffeeToCart))
    } else {
      dispatch(addCoffeeToCartAction(newCoffeeToCart))
    }
  }

  return (
    <CartContext.Provider value={{ coffeeList, addCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  )
}
