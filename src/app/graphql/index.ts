import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"

export const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: new HttpLink({
    // headers: {
    //   authorization: getAuth()
    // },
    uri: 'http://localhost:4000'
  })
})