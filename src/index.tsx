import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import { ApolloProvider } from '@apollo/client'
import { client } from './app/graphql';
import { AuthProviderWrapper } from './app/contexts/auth.context';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <AuthProviderWrapper>
          <App />
        </AuthProviderWrapper>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);

