import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'
import { useCart } from '../../contexts/Hooks/useCart'
import { CheckoutCart } from './components/Cart'
import { CheckoutForm } from './components/Form'
import { CheckoutContainer } from './styles'

const checkoutValidationSchema = zod.object({
  address: zod.object({
    cep: zod
      .string()
      .min(1, 'Campo obrigatório')
      .transform((value) => value.replace(/[^0-9]/g, '')),
    street: zod.string().min(1, 'Campo obrigatório'),
    streetNumber: zod.string().min(1, 'Campo obrigatório'),
    complement: zod.string().optional(),
    neighborhood: zod.string().min(1, 'Campo obrigatório'),
    city: zod.string().min(1, 'Campo obrigatório'),
    state: zod.string().min(1, 'Campo obrigatório'),
  }),
  paymentMethod: zod.string().min(1, 'Campo obrigatório'),
})

export type CheckoutFormData = zod.infer<typeof checkoutValidationSchema>

export const Checkout = () => {
  const { totalCoffeeUnitsInCart } = useCart()
  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutValidationSchema),
  })
  const navigate = useNavigate()
  const checkoutFormMethods = checkoutForm

  function handleCheckout(data: CheckoutFormData) {
    console.log(data)
  }

  useEffect(() => {
    if (totalCoffeeUnitsInCart < 1) {
      navigate('/')
    }
  }, [navigate, totalCoffeeUnitsInCart])

  return (
    <CheckoutContainer>
      <FormProvider {...checkoutForm}>
        <form onSubmit={checkoutFormMethods.handleSubmit(handleCheckout)}>
          <CheckoutForm />
          <CheckoutCart />
        </form>
      </FormProvider>
    </CheckoutContainer>
  )
}
