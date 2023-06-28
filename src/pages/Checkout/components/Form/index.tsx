import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { CheckoutFormData } from '../..'
import { viaCepAPI } from '../../../../services/viaCepAPI'
import {
  ButtonSmallText,
  TextM,
  TextS,
  TitleXS,
} from '../../../../styles/typography'
import { Input } from './Input'
import { MaskedInput } from './MaskedInput'
import {
  AddressCardContainer,
  AddressFormContainer,
  CardTitleContainer,
  CheckoutFormContainer,
  PaymentMethodCardContainer,
  PaymentMethodContent,
  PaymentMethodInput,
} from './styles'

interface ViaCepResponse {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  ibge: string
  gia: string
  ddd: string
  siafi: string
  erro?: string
}

export const CheckoutForm = () => {
  const { register, formState, watch, setError, clearErrors, setValue } =
    useFormContext<CheckoutFormData>()
  const cepInputValue = watch('address.cep')?.replace(/[^0-9]/g, '')
  const isCepInputFullfilled = cepInputValue?.length === 8
  const paymentMethodInputValue = watch('paymentMethod')
  const isPaymentMethodSelected = !formState.errors.paymentMethod
  const hasErrorOnAddressForm = !!formState.errors.address

  useEffect(() => {
    if (cepInputValue?.length === 8) {
      viaCepAPI
        .get<ViaCepResponse>(`${cepInputValue}/json`)
        .then((response) => {
          const { erro, logradouro, bairro, localidade, uf } = response.data
          if (erro) throw new Error('CEP Inválido')
          clearErrors('address')
          setValue('address.street', String(logradouro))
          setValue('address.neighborhood', String(bairro))
          setValue('address.city', String(localidade))
          setValue('address.state', String(uf))
        })
        .catch((error) => {
          setError('address.cep', error)
        })
    }
  }, [cepInputValue, setError, clearErrors, setValue])

  return (
    <CheckoutFormContainer>
      <TitleXS>{'Complete seu pedido'}</TitleXS>
      <section>
        <AddressCardContainer $error={hasErrorOnAddressForm}>
          <CardTitleContainer>
            <div>
              <MapPinLine size={22} />
            </div>
            <div>
              <TextM>{'Endereço de Entrega'}</TextM>
              <TextS>
                {'Informe o endereço onde deseja receber seu pedido'}
              </TextS>
            </div>
          </CardTitleContainer>
          <AddressFormContainer>
            <MaskedInput
              mask="99999-999"
              type="text"
              placeholder="CEP"
              error={formState.errors.address?.cep}
              {...register('address.cep')}
            />

            <Input
              type="text"
              placeholder="Rua"
              error={formState.errors.address?.street}
              disabled={!isCepInputFullfilled}
              {...register('address.street')}
            />

            <Input
              id="streetNumber"
              type="text"
              placeholder="Número"
              error={formState.errors.address?.streetNumber}
              disabled={!isCepInputFullfilled}
              {...register('address.streetNumber')}
            />

            <Input
              optional
              type="text"
              placeholder="Complemento"
              error={formState.errors.address?.complement}
              disabled={!isCepInputFullfilled}
              {...register('address.complement')}
            />

            <Input
              type="text"
              placeholder="Bairro"
              error={formState.errors.address?.neighborhood}
              disabled={!isCepInputFullfilled}
              {...register('address.neighborhood')}
            />

            <Input
              type="text"
              placeholder="Cidade"
              error={formState.errors.address?.city}
              disabled={!isCepInputFullfilled}
              {...register('address.city')}
            />

            <Input
              type="text"
              placeholder="UF"
              error={formState.errors.address?.state}
              disabled={!isCepInputFullfilled}
              maxLength={2}
              {...register('address.state')}
            />
          </AddressFormContainer>
        </AddressCardContainer>

        <PaymentMethodCardContainer $error={!isPaymentMethodSelected}>
          <CardTitleContainer>
            <div>
              <CurrencyDollar size={22} />
            </div>
            <div>
              <TextM>{'Pagamento'}</TextM>
              <TextS>
                {
                  'O pagamento é feito na entrega. Escolha a forma que deseja pagar'
                }
              </TextS>
            </div>
          </CardTitleContainer>

          <PaymentMethodContent>
            <PaymentMethodInput
              onClick={() => {
                if (paymentMethodInputValue !== 'creditCard') {
                  setValue('paymentMethod', 'creditCard')
                }
                clearErrors('paymentMethod')
              }}
              $checked={paymentMethodInputValue === 'creditCard'}
            >
              <input
                type="radio"
                id="creditCard"
                value={'creditCard'}
                {...register('paymentMethod')}
              />
              <label htmlFor="creditCard">
                <CreditCard size={16} />
                <ButtonSmallText>{'Cartão de Crédito'}</ButtonSmallText>
              </label>
            </PaymentMethodInput>

            <PaymentMethodInput
              onClick={() => {
                if (paymentMethodInputValue !== 'debitCard') {
                  setValue('paymentMethod', 'debitCard')
                }
                clearErrors('paymentMethod')
              }}
              $checked={paymentMethodInputValue === 'debitCard'}
            >
              <input
                type="radio"
                id="debitCard"
                value={'debitCard'}
                {...register('paymentMethod')}
              />
              <label htmlFor="debitCard">
                <Bank size={16} />
                <ButtonSmallText>{'Cartão de Débito'}</ButtonSmallText>
              </label>
            </PaymentMethodInput>

            <PaymentMethodInput
              onClick={() => {
                if (paymentMethodInputValue !== 'cash') {
                  setValue('paymentMethod', 'cash')
                }
                clearErrors('paymentMethod')
              }}
              $checked={paymentMethodInputValue === 'cash'}
            >
              <input
                type="radio"
                id="cash"
                value={'cash'}
                {...register('paymentMethod')}
              />
              <label htmlFor="cash">
                <Money size={16} />
                <ButtonSmallText>{'Dinheiro'}</ButtonSmallText>
              </label>
            </PaymentMethodInput>
          </PaymentMethodContent>
        </PaymentMethodCardContainer>
      </section>
    </CheckoutFormContainer>
  )
}
