import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
} from 'react'

import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'
import { InputContainer, InputOptional } from './styles'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>
  optional?: boolean
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, error = null, name, optional, ...rest },
  ref,
) => {
  return (
    <InputContainer $error={!!error}>
      {!!label && <label htmlFor={name}>{label}</label>}
      <input name={name} id={name} ref={ref} {...rest} />
      {optional && !rest.value && <InputOptional>{'Opcional'}</InputOptional>}
    </InputContainer>
  )
}

export const Input = forwardRef(InputBase)
