import { testStore } from '../../../utils/tdd';
import { modalShow, modalHide } from '../modal.actions'

describe('Modal actions',()=>{

    let store;
    beforeEach(()=>{
        store = testStore();
    });

    it('modal hide',()=>{
        const expectedState = {
            modalState: false,
            params: null
        };

        store.dispatch(modalHide());
        expect(store.getState().modal).toEqual(expectedState);
    });

    it('modal show',()=>{

        const modalParams = {
            type: 'test',
            message: 'message'
        };

        const expectedState = {
            modalState: true,
            params: modalParams
        };

        store.dispatch(modalShow('test','message'));
        expect(store.getState().modal).toEqual(expectedState);
    });

});