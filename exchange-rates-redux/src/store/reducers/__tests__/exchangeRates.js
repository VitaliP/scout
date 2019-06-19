import { FETCH_DATA, SCREEN_STATE } from '../../actions'
import exchangeRates from '../exchangeRates.reducer';



describe('exchangeRates Teducer', ()=>{

    it('Return default state',()=>{
        const newState = exchangeRates(undefined, {});
        expect(newState).toEqual({
            screenState: 'init',
            screenData: null
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
            payload: {some: 'data'}
        });

        expect(newState).toEqual({
            screenState: 'display',
            screenData: {some: 'data'}
        });
    });

});