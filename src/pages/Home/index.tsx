import { TitleL } from '../../styles/typography'
import { CoffeeCard } from './components/CoffeeCard'
import { Intro } from './components/Intro'
import { HomeContainer, MenuContainer, MenuContent } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <MenuContainer>
        <TitleL>Nossos cafés</TitleL>
        <MenuContent>
          <CoffeeCard />
        </MenuContent>
      </MenuContainer>
    </HomeContainer>
  )
}
