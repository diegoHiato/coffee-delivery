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
        const coffeeIndex = draft.coffeeList.findIndex(
          (c) => c.id === action.payload.coffeeToAdd.id,
        )
        if (coffeeIndex !== -1) {
          const oldAmount = draft.coffeeList[coffeeIndex].amountInCart
          draft.coffeeList[coffeeIndex].amountInCart =
            oldAmount + action.payload.coffeeToAdd.amountInCart
        } else {
          draft.coffeeList.push(action.payload.coffeeToAdd)
        }
      })

    case CartReducerActionType.UpdateAmount:
      return produce(state, (draft) => {
        const coffeeIndex = draft.coffeeList.findIndex(
          (c) => c.id === action.payload.id,
        )

        if (coffeeIndex !== -1) {
          switch (action.payload.updateType) {
            case 'increase':
              draft.coffeeList[coffeeIndex].amountInCart =
                (draft.coffeeList[coffeeIndex].amountInCart as number) + 1
              break

            case 'decrease':
              if (draft.coffeeList[coffeeIndex].amountInCart === 1)
                draft.coffeeList.splice(coffeeIndex, 1)
              else {
                draft.coffeeList[coffeeIndex].amountInCart =
                  (draft.coffeeList[coffeeIndex].amountInCart as number) - 1
              }
              break

            default:
              break
          }
        }
      })

    case CartReducerActionType.RemoveFromCart:
      return produce(state, (draft) => {
        const coffeeIndex = draft.coffeeList.findIndex(
          (c) => c.id === action.payload.id,
        )
        if (coffeeIndex !== -1) draft.coffeeList.splice(coffeeIndex, 1)
      })

    case CartReducerActionType.ClearCart:
      return produce(state, (draft) => {
        draft.coffeeList = []
      })

    default:
      return state
  }
}
