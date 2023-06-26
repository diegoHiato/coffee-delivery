import { ForwardRefRenderFunction, forwardRef } from 'react'
import ReactInputMask from 'react-input-mask'
import { InputProps } from './Input'
import { InputContainer } from './styles'

interface MaskedInputProps extends InputProps {
  mask: string
}

const BaseMaskedInput: ForwardRefRenderFunction<
  HTMLInputElement,
  MaskedInputProps
> = ({ label, error = null, name, mask, ...rest }, ref) => {
  return (
    <InputContainer $error={!!error}>
      {!!label && <label htmlFor={name}>{label}</label>}
      <ReactInputMask
        name={name}
        mask={mask}
        id={name}
        inputRef={ref}
        {...rest}
      />
    </InputContainer>
  )
}

export const MaskedInput = forwardRef(BaseMaskedInput)
