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
  const totalCoffeeUnitsInCart = coffeeList?.reduce((accumulator, coffee) => {
    if (coffee.amountInCart) {
      return accumulator + coffee.amountInCart
    }
    return accumulator
  }, 0)
  const valueOfItemsInCart = coffeeList?.reduce((accumulator, coffee) => {
    return accumulator + coffee.price
  }, 0)

  function addCoffeeToCart({ coffee, amount }: AddToCartData) {
    const newCoffeeToCart: Coffee = {
      ...coffee,
      amountInCart: amount,
    }
    const coffeeAlreadyInCart = coffeeList.find((c) => c.id === coffee.id)

    if (coffeeAlreadyInCart) {
      dispatch(updateCurrentAmountAction(newCoffeeToCart))
    } else {
      dispatch(addCoffeeToCartAction(newCoffeeToCart))
    }
  }

  return (
    <CartContext.Provider
      value={{
        coffeeList,
        totalCoffeeUnitsInCart,
        valueOfItemsInCart,
        addCoffeeToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
