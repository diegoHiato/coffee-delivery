import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
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
})

export type CheckoutFormData = zod.infer<typeof checkoutValidationSchema>

export const Checkout = () => {
  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutValidationSchema),
  })
  const checkoutFormMethods = checkoutForm

  function handleCheckout(data: CheckoutFormData) {
    console.log(data)
  }

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
