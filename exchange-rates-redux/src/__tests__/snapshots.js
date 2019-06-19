import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import App from '../App';
import Modal from '../components/gui/modal/Modal';
import { mount } from 'enzyme';
import { fetchData } from '../store/actions/exchangeRates.actions'
import moxios from 'moxios';

describe("UI snapshots",()=>{

    let wrapper = mount(<Provider store={store}><App /><Modal /></Provider>);

    beforeEach(()=>{
        moxios.install();
    });

    afterEach(()=>{
        moxios.uninstall();
    });


    it('Initial state', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('Table with real data', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: {"base":"EUR","rates":{"BGN":1.9558,"NZD":1.7259,"ILS":4.0549,"RUB":72.1432,"CAD":1.5069,"USD":1.1234,"PHP":58.703,"CHF":1.1214,"ZAR":16.6463,"AUD":1.6355,"JPY":122.06,"TRY":6.595,"HKD":8.7963,"MYR":4.6913,"THB":35.196,"HRK":7.4055,"NOK":9.7938,"IDR":16103.94,"DKK":7.4674,"CZK":25.56,"HUF":322.29,"GBP":0.89208,"MXN":21.5292,"KRW":1333.25,"ISK":141.5,"SGD":1.54,"BRL":4.3796,"PLN":4.2605,"INR":78.577,"RON":4.728,"CNY":7.7794,"SEK":10.6495},"date":"2019-06-17"}
            })
        });

        return store.dispatch(fetchData())
            .then(() => {
                expect(wrapper.html()).toMatchSnapshot();
            });
    });

});