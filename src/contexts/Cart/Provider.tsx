import { ReactNode, useEffect, useReducer, useState } from 'react'
import {
  addCoffeeToCartAction,
  clearCartAction,
  removeCoffeeFromCartAction,
  updateAmountByOneAction,
} from '../../reducers/cart/actions'
import { cartReducer } from '../../reducers/cart/reducer'
import { getValueByPriceTimesAmount } from '../../utils/getValueByPriceTimesAmount'
import { AddToCartData, Buyer, CartContext, Coffee } from './Context'

interface CartProviderProps {
  children: ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(
    cartReducer,
    {
      coffeeList: [],
    },
    (initialState) => {
      const storedCart = localStorage.getItem('@COFFEE_DELIVERY:CART~1.0.0')
      if (storedCart) {
        const storedCartInJson = JSON.parse(storedCart)
        return storedCartInJson
      }
      return initialState
    },
  )
  const [buyerInformation, setBuyerInformation] = useState<Buyer>({
    address: {
      cep: '',
      street: '',
      streetNumber: '',
      neighborhood: '',
      city: '',
      state: '',
      country: 'BR',
    },
    paymentMethod: undefined,
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
    return Number((accumulator + valueOfPriceTimesAmount).toFixed(2))
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

  function clearCart() {
    dispatch(clearCartAction())
  }

  function updateBuyerInformation(data: Buyer) {
    setBuyerInformation(data)
  }

  function clearBuyerInformation() {
    setBuyerInformation({
      address: {
        cep: '',
        street: '',
        streetNumber: '',
        neighborhood: '',
        city: '',
        state: '',
        country: 'BR',
      },
      paymentMethod: undefined,
    })
  }

  useEffect(() => {
    const cartStateInJsonString = JSON.stringify(state)
    localStorage.setItem('@COFFEE_DELIVERY:CART~1.0.0', cartStateInJsonString)
  }, [state])

  return (
    <CartContext.Provider
      value={{
        buyerInformation,
        updateBuyerInformation,
        clearBuyerInformation,
        coffeeList,
        totalCoffeeUnitsInCart,
        valueOfItemsInCart,
        addCoffeeToCart,
        removeCoffeeFromCart,
        updateCoffeeAmount,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
