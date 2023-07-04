import { cacheExchange, createClient, fetchExchange } from 'urql'
import { hygraphContentApiUrl } from '../../envrionmentVariables'

export const client = createClient({
  url: `${hygraphContentApiUrl}`,
  exchanges: [cacheExchange, fetchExchange],
})
