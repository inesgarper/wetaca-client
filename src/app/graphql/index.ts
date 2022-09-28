import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"

const getAuth = (): string | null => {
  const token = localStorage.getItem('authToken')
  return token ? `bearer ${token}` : null 
}

export const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: new HttpLink({
    headers: {
      authorization: getAuth()
    },
    uri: 'http://localhost:4000'
  })
})


// import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"
// import { setContext } from "apollo-link-context"

// const httpLik = new HttpLink({
//     uri: 'http://localhost:4000'
//   })

// const authLink = setContext(() => {
//   const token = localStorage.getItem('authToken')
//   return {
//     headers: {
//       Authorization: token ? `Bearer ${token}` : ""
//     }
//   }
// })

// export const client = new ApolloClient({
//   connectToDevTools: true,
//   cache: new InMemoryCache(),
//   link: authLink.concat(httpLik)
//   })
// })