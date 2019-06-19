import React from 'react';

import { Provider } from 'react-redux';
import store from './store/store';

import ErrorBoundary from './components/common/ErrorBoundary';
import Navbar from './components/gui/navigation/Navbar';
import ExchangeRates from './components/exchangeRates/ExchangeRates';
import Modal from './components/gui/modal/Modal'

function App() {
    return (

        <Provider store={store}>

            <div className="App" data-test="app">

                <ErrorBoundary>
                    <Navbar />
                </ErrorBoundary>

                <ErrorBoundary>
                    <ExchangeRates />
                </ErrorBoundary>



            </div>

            <Modal />

        </Provider>



    );
}

export default App;
