import React from 'react';

// import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { ApolloProvider } from '@apollo/client'
import { client } from './app/graphql';
import { AuthProviderWrapper } from './app/contexts/auth.context';
import { CartProviderWrapper } from './app/contexts/cart.context';


const root = document.getElementById('root')!;
// const root = createRoot(container);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <AuthProviderWrapper>
          <CartProviderWrapper>
            <App />
          </CartProviderWrapper>
          </AuthProviderWrapper>
        </Provider>
      </ApolloProvider>
    </Router>
  </React.StrictMode>,
  root
);

