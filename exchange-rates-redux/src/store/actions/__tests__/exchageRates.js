import { testStore } from '../../../utils/tdd';
import { loading, fetchData } from '../exchangeRates.actions'
import moxios from 'moxios';

describe('exchangeRates actions',()=>{

    it('loading action',()=>{
        const expectedState = {screenState: 'loading', screenData: null};
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

        const screenData = [
            { key: 'value' }
        ];

        const expectedState = {
            screenState: 'display',
            screenData: screenData
        };

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: screenData
            })
        });

        return store.dispatch(fetchData())
            .then(() => {
                const newState = store.getState();
                expect(newState.exchangeRates).toEqual(expectedState);
            });


    });

    it('on Failed',()=>{

        const screenData = [
            {
                key: 'value'
            }
        ];

        const expectedState = {
            screenState: 'error',
            screenData: null
        };

        // const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 500,
                response: screenData
            })
        });

        return store.dispatch(fetchData())
            .then(() => {
                const newState = store.getState();
                expect(newState.exchangeRates).toEqual(expectedState);
            });


    });



});