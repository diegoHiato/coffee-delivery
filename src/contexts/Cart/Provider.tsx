import { ReactNode, useReducer } from 'react'
import {
  addCoffeeToCartAction,
  removeCoffeeFromCartAction,
  updateAmountByOneAction,
} from '../../reducers/cart/actions'
import { cartReducer } from '../../reducers/cart/reducer'
import { getValueByPriceTimesAmount } from '../../utils/getValueByPriceTimesAmount'
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
    const valueOfPriceTimesAmount = getValueByPriceTimesAmount(
      coffee.price,
      coffee.amountInCart as number,
    )
    return accumulator + valueOfPriceTimesAmount
  }, 0)

  function addCoffeeToCart({ coffee, amount }: AddToCartData) {
    const newCoffeeToCart: Coffee = {
      ...coffee,
      amountInCart: amount,
    }
    dispatch(addCoffeeToCartAction(newCoffeeToCart))
  }

  function updateCoffeeAmount(
    id: Coffee['id'],
    updateType: 'increase' | 'decrease',
  ) {
    dispatch(updateAmountByOneAction(id, updateType))
  }

  function removeCoffeeFromCart(id: Coffee['id']) {
    dispatch(removeCoffeeFromCartAction(id))
  }

  return (
    <CartContext.Provider
      value={{
        coffeeList,
        totalCoffeeUnitsInCart,
        valueOfItemsInCart,
        addCoffeeToCart,
        removeCoffeeFromCart,
        updateCoffeeAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
