import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { CheckoutFormData } from '../..'
import { viaCepAPI } from '../../../../services/viaCepAPI'
import { TextM, TextS, TitleXS } from '../../../../styles/typography'
import { Input } from './Input'
import { MaskedInput } from './MaskedInput'
import {
  AddressCardContainer,
  AddressFormContainer,
  CardTitleContainer,
  CheckoutFormContainer,
  PaymentMethodCardContainer,
} from './styles'

export const CheckoutForm = () => {
  const { register, formState, watch, setError, clearErrors, setValue } =
    useFormContext<CheckoutFormData>()
  const cepInputValue = watch('address.cep')?.replace(/[^0-9]/g, '')

  useEffect(() => {
    if (cepInputValue?.length === 8) {
      viaCepAPI
        .get(`${cepInputValue}/json`)
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
        <AddressCardContainer>
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
              disabled={cepInputValue?.length !== 8}
              {...register('address.street')}
            />

            <Input
              id="streetNumber"
              type="text"
              placeholder="Número"
              error={formState.errors.address?.streetNumber}
              disabled={cepInputValue?.length !== 8}
              {...register('address.streetNumber')}
            />

            <Input
              optional
              type="text"
              placeholder="Complemento"
              error={formState.errors.address?.complement}
              disabled={cepInputValue?.length !== 8}
              {...register('address.complement')}
            />

            <Input
              type="text"
              placeholder="Bairro"
              error={formState.errors.address?.neighborhood}
              disabled={cepInputValue?.length !== 8}
              {...register('address.neighborhood')}
            />

            <Input
              type="text"
              placeholder="Cidade"
              error={formState.errors.address?.city}
              disabled={cepInputValue?.length !== 8}
              {...register('address.city')}
            />

            <Input
              type="text"
              placeholder="UF"
              error={formState.errors.address?.state}
              disabled={cepInputValue?.length !== 8}
              {...register('address.state')}
            />
          </AddressFormContainer>
        </AddressCardContainer>

        <PaymentMethodCardContainer>
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

          <div></div>
        </PaymentMethodCardContainer>
      </section>
    </CheckoutFormContainer>
  )
}