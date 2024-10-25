'use client';

import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_MAIN_API_DOMAIN}/graphql`,
  credentials: 'include',
});

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem('token') || '';
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
      'erxes-app-token': process.env.NEXT_PUBLIC_ERXES_APP_TOKEN,
    },
  };
});

const httpLinkWithMiddleware = authLink.concat(httpLink);

const client = new ApolloClient({
  ssrMode: false, // Explicitly set to false for client-side rendering
  cache: new InMemoryCache(),
  link: httpLinkWithMiddleware,
});

const Apollo = ({ children }: React.PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Apollo;
