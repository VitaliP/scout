import { MODAL_SHOW, MODAL_HIDE } from '../actions'

const initialState = {
    modalState: false,
    params: null
};

export default function(state = initialState, action) {

    switch (action.type) {
        case MODAL_SHOW:
            return {
                ...state,
                params: action.payload,
                modalState: true
            };
        case MODAL_HIDE:
            return {
                ...state,
                params: null,
                modalState: false
            };
        default:
            return state;
    }
}