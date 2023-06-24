import { CoffeeCard } from './components/CoffeeCard'
import { Intro } from './components/Intro'
import { HomeContainer, MenuContainer, MenuContent } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <MenuContainer>
        <h1>{'Nossos cafés'}</h1>
        <MenuContent>
          <CoffeeCard />
        </MenuContent>
      </MenuContainer>
    </HomeContainer>
  )
}
