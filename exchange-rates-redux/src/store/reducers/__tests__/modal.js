import { MODAL_SHOW, MODAL_HIDE } from '../../actions'
import reducer from '../modal.reducer';

describe('modal Reducer', ()=>{

    it('Return default state',()=>{
        const newState = reducer(undefined, {});
        expect(newState).toEqual({
            modalState: false,
            params: null
        });
    });

    it('Modal hide',()=>{
        const newState = reducer(undefined, {
            type: MODAL_HIDE
        });
        expect(newState).toEqual({
            params: null,
            modalState: false
        });
    });

    it('Modal show',()=>{
        const newState = reducer(undefined, {
            type: MODAL_SHOW,
            payload: {
                type: 'm-type',
                message: 'm-message'
            }
        });
        expect(newState).toEqual({
            params: {
                type: 'm-type',
                message: 'm-message'
            },
            modalState: true
        });
    });

});