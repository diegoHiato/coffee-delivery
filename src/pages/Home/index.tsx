import { Provider, gql, useQuery } from 'urql'
import { Coffee } from '../../contexts/Cart/Context'
import { client } from '../../lib/urql'
import { TitleL } from '../../styles/typography'
import { CoffeeCard } from './components/CoffeeCard'
import { Intro } from './components/Intro'
import { HomeContainer, MenuContainer, MenuContent } from './styles'

const CoffeeQuery = gql`
  query Coffees {
    coffees(locales: pt_BR, first: 14) {
      id
      title
      description
      imageUrl
      price
      tags
    }
  }
`

interface queryResultType {
  coffees: Coffee[]
}

export function Home() {
  const [result] = useQuery<queryResultType>({
    query: CoffeeQuery,
  })
  const { data } = result

  return (
    <Provider value={client}>
      <HomeContainer>
        <Intro />
        <MenuContainer>
          <TitleL>Nossos cafés</TitleL>
          <MenuContent>
            {data?.coffees.map((coffee) => {
              return <CoffeeCard key={coffee.id} coffee={coffee} />
            })}
          </MenuContent>
        </MenuContainer>
      </HomeContainer>
    </Provider>
  )
}
