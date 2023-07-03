/* eslint-disable no-unused-vars */
import { Coffee } from '../../contexts/Cart/Context'

export enum CartReducerActionType {
  AddToCart = 'ADD_COFFEE_TO_CART',
  UpdateAmount = 'UPDATE_CURRENT_AMOUNT',
  RemoveFromCart = 'REMOVE_COFFEE_FROM_CART',
}

export function addCoffeeToCartAction(coffeeToAdd: Coffee) {
  return {
    type: CartReducerActionType.AddToCart,
    payload: {
      coffeeToAdd,
    },
  }
}

export function updateCurrentAmountAction(coffeeToUpdate: Coffee) {
  return {
    type: CartReducerActionType.UpdateAmount,
    payload: {
      coffeeToUpdate,
    },
  }
}

export function removeCoffeeFromCartAction(id: Coffee['id']) {
  return {
    type: CartReducerActionType.RemoveFromCart,
    payload: {
      id,
    },
  }
}
