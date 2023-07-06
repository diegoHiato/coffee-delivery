/* eslint-disable no-unused-vars */
import { Coffee } from '../../contexts/Cart/Context'

export enum CartReducerActionType {
  AddToCart = 'ADD_COFFEE_TO_CART',
  UpdateAmount = 'UPDATE_CURRENT_AMOUNT_BY_ONE',
  RemoveFromCart = 'REMOVE_COFFEE_FROM_CART',
  ClearCart = 'CLEAR_CART',
}

export function addCoffeeToCartAction(coffeeToAdd: Coffee) {
  return {
    type: CartReducerActionType.AddToCart,
    payload: {
      coffeeToAdd,
    },
  }
}

export function updateAmountByOneAction(
  id: Coffee['id'],
  updateType: 'increase' | 'decrease',
) {
  return {
    type: CartReducerActionType.UpdateAmount,
    payload: { id, updateType },
  }
}

export function removeCoffeeFromCartAction(id: Coffee['id']) {
  return {
    type: CartReducerActionType.RemoveFromCart,
    payload: { id },
  }
}

export function clearCartAction() {
  return {
    type: CartReducerActionType.ClearCart,
  }
}
