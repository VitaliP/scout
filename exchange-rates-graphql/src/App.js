import React from 'react';
import './App.scss';


import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import { defaults, resolvers } from "./gql/resolvers";
import { typeDefs } from "./gql/schema"

import ExchangeRates from './components/exchangeRates/ExchangeRates';
import ErrorBoundary from './components/common/ErrorBoundary';
import Navbar from './components/gui/navigation/Navbar';
import Modal from './components/gui/modal/Modal';
import { InMemoryCache } from 'apollo-cache-inmemory';



const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://scout-rfp-rates.glitch.me/",
    clientState: {
        defaults,
        resolvers,
        typeDefs
    }
});

function App() {



  return (
      <ApolloProvider client={client}>
          <div className="App">

              <ErrorBoundary>
                  <Navbar />
              </ErrorBoundary>

              <ErrorBoundary>
                  <ExchangeRates />
              </ErrorBoundary>

              <ErrorBoundary>
                  <Modal />
              </ErrorBoundary>

          </div>
      </ApolloProvider>
  );
}

export default App;
