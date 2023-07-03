import { produce } from 'immer'
import { Coffee } from '../../contexts/Cart/Context'
import { CartReducerActionType } from './actions'

interface CartReducerState {
  coffeeList: Coffee[]
}

export function cartReducer(state: CartReducerState, action: any) {
  switch (action.type) {
    case CartReducerActionType.AddToCart:
      return produce(state, (draft) => {
        draft.coffeeList.push(action.payload.coffeeToAdd)
      })

    case CartReducerActionType.UpdateAmount:
      return produce(state, (draft) => {
        const coffeeIndex = draft.coffeeList.findIndex(
          (c) => c.id === action.payload.coffeeToUpdate.id,
        )
        const oldAmount = draft.coffeeList[coffeeIndex].amountInCart
        draft.coffeeList[coffeeIndex].amountInCart =
          oldAmount + action.payload.coffeeToUpdate.amountInCart
      })

    case CartReducerActionType.RemoveFromCart:
      return produce(state, (draft) => {
        const coffeeIndex = draft.coffeeList.findIndex(
          (c) => c.id === action.payload.id,
        )
        if (coffeeIndex !== -1) draft.coffeeList.splice(coffeeIndex, 1)
      })

    default:
      return state
  }
}
