import { Coffee } from '../../contexts/Cart/Context'
import { TitleL } from '../../styles/typography'
import { CoffeeCard } from './components/CoffeeCard'
import { Intro } from './components/Intro'
import { HomeContainer, MenuContainer, MenuContent } from './styles'

const fakeApiResponse: Coffee[] = [
  {
    id: 'ea6f772e-3130-4ade-8e04-3266598eb1cf',
    imageUrl: 'https://i.imgur.com/kPQDG56.png',
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    tags: ['tradicional'],
    amountInCart: 0,
  },
  {
    id: '1731e81a-5260-4f80-a85c-1770afa82cf2',
    imageUrl: 'https://i.imgur.com/fgEe5YH.png',
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 8.75,
    tags: ['tradicional'],
    amountInCart: 0,
  },
]

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <MenuContainer>
        <TitleL>Nossos cafés</TitleL>
        <MenuContent>
          {fakeApiResponse.map((coffee) => {
            return <CoffeeCard key={coffee.id} coffee={coffee} />
          })}
        </MenuContent>
      </MenuContainer>
    </HomeContainer>
  )
}
