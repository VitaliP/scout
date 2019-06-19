import { FETCH_DATA, SCREEN_STATE } from '../actions'

const initialState = {
    screenState: 'init',
    screenData: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                screenData: action.payload,
                screenState: 'display'
            };
        case SCREEN_STATE:
            return {
                ...state,
                screenState: action.payload
            };
        default:
            return state;
    }
}