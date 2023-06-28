import { Minus, Plus } from 'phosphor-react'
import { Dispatch, SetStateAction } from 'react'
import { TextM } from '../../styles/typography'
import { CoffeeCounterContainer } from './styles'

interface CoffeeCounterProps {
  counter: number
  counterDispatchFunction: Dispatch<SetStateAction<number>>
}

export const CoffeeCounter = ({
  counter,
  counterDispatchFunction,
}: CoffeeCounterProps) => {
  function addToCounter() {
    counterDispatchFunction((prev) => prev + 1)
  }

  function reduceFromCounter() {
    if (counter > 1) {
      counterDispatchFunction((prev) => prev - 1)
    }
  }

  return (
    <CoffeeCounterContainer>
      <button disabled={counter <= 1}>
        <Minus size={14} weight="bold" onClick={reduceFromCounter} />
      </button>
      <TextM>{counter}</TextM>
      <button>
        <Plus size={14} weight="bold" onClick={addToCounter} />
      </button>
    </CoffeeCounterContainer>
  )
}
