import { SELECT_DATE, SELECT_CURRENCY, ADD_DATA, FETCH_DATA, SCREEN_STATE, SCREEN_SORT } from '../actions'

const initialState = {
    screenState: 'init',
    sort: {
        sortBy: 'currency',
        sortDirection: 'asc'
    },
    base: null,
    date: null
};

export default function(state = initialState, action) {

    switch (action.type) {

        case ADD_DATA:

            return {
                ...state,
                screenData: {
                    ...state.screenData,
                    rates: {
                        ...state.screenData.rates,
                        [action.payload.currency]: parseFloat(action.payload.rate)
                    }
                }
            };

        case SCREEN_SORT:
            return {
                ...state,
                sort: {
                    sortBy: action.payload.field,
                    sortDirection: action.payload.direction
                }
            };

        case FETCH_DATA:
            return {
                ...state,
                screenState: 'display',
                base: action.payload.base,
                date: action.payload.date,
                rates: action.payload.rates
            };
        case SCREEN_STATE:
            return {
                ...state,
                screenState: action.payload
            };

        case SELECT_DATE:
            return {
                ...state,
                date: action.payload
            };

        case SELECT_CURRENCY:
            return {
                ...state,
                base: action.payload
            };

        default:
            return state;
    }
}