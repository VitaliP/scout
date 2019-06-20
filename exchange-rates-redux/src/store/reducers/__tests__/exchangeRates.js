import { FETCH_DATA, SCREEN_STATE } from '../../actions'
import exchangeRates from '../exchangeRates.reducer';



describe('exchangeRates Reducer', ()=>{

    it('Return default state',()=>{
        const newState = exchangeRates(undefined, {});
        expect(newState).toEqual({
            screenState: 'init',
            sort: {
                sortBy: 'currency',
                sortDirection: 'asc'
            },
            base: null,
            date: null
        });
    });

    it('Screen state update',()=>{
        const newState = exchangeRates(undefined, {
            type: SCREEN_STATE,
            payload: 'test'
        });
        expect(newState.screenState).toBe('test');
    });

    it('Fetch data',()=>{
        const newState = exchangeRates(undefined, {
            type: FETCH_DATA,
            payload: {
                base: 'EUR',
                date: '2019-06-20',
                rates: { some: 'data'}
            }
        });

        expect(newState.screenState).toBe('display');
        expect(newState.base).toBe('EUR');
        expect(newState.date).toBe('2019-06-20');
        expect(newState.rates).toEqual({some: 'data'});
    });

});