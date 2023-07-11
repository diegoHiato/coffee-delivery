import { cacheExchange, createClient, fetchExchange } from 'urql'

export const client = createClient({
  url: `${import.meta.env.VITE_HYGRAPH_CONTENT_API_KEY}`,
  exchanges: [cacheExchange, fetchExchange],
})
