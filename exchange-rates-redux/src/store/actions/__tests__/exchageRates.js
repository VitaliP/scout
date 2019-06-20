import { testStore } from '../../../utils/tdd';
import { loading, fetchData } from '../exchangeRates.actions'
import moxios from 'moxios';

describe('exchangeRates actions',()=>{

    it('loading action',()=>{
        const expectedState = {
            screenState: 'loading',
            sort: {
                sortBy: 'currency',
                sortDirection: 'asc'
            },
            base: null,
            date: null

        };
        const store = testStore();
        store.dispatch(loading());
        expect(store.getState().exchangeRates).toEqual(expectedState);
    });

});

describe('fetchData action',()=>{

    let store;

    beforeEach(()=>{
        store = testStore();
        moxios.install();
    });

    afterEach(()=>{
        moxios.uninstall();
    });

    it('on Success',()=>{

        const responseData = {
            base: 'TEST',
            date: 'DATE',
            rates: {some: 'data'}
        };

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: responseData
            })
        });

        return store.dispatch(fetchData())
            .then(() => {
                const newState = store.getState();
                expect(newState.exchangeRates.base).toEqual(responseData.base);
                expect(newState.exchangeRates.date).toEqual(responseData.date);
                expect(newState.exchangeRates.rates).toEqual(responseData.rates);
            });


    });

    it('on Failed',()=>{

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 400,
                response: {}
            })
        });

        return store.dispatch(fetchData())
            .then(() => {
                const newState = store.getState();
                expect(newState.exchangeRates.screenState).toEqual('error');
            });
    });



});