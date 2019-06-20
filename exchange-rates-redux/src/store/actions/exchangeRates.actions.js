import { SELECT_CURRENCY, SELECT_DATE, ADD_DATA, FETCH_DATA, SCREEN_STATE, MODAL_SHOW, SCREEN_SORT} from './';
import axios from 'axios';
import store from '../store';

export const loading = () => dispatch => {
    dispatch({
        type: SCREEN_STATE,
        payload: 'loading'
    });
};

export const sortAction = (field, direction) => dispatch => {

    dispatch({
        type: SCREEN_SORT,
        payload: {
            field,
            direction
        }
    });
};

export const fetchData = () => dispatch => {

    const { base, date } = store.getState().exchangeRates;

    let uri = 'https://api.exchangeratesapi.io/';

    if (date) {
        uri += date
    } else {
        uri += 'latest'
    }

    if (base) {
        uri += '?base=' + base
    }

    // return axios.get('https://api.exchangeratesapi.io/latest-')
    return axios.get(uri)
        .then(res => {

            dispatch({
                type: FETCH_DATA,
                payload: res.data
            })

        })
        .catch(error => {
            dispatch({
                type: SCREEN_STATE,
                payload: 'error'
            });

            dispatch({
                type: MODAL_SHOW,
                payload: {
                    type: 'alert',
                    message: 'Error fetching data | Error code = ' + error.response.status
                }
            });

        } );

};


export const newExchangeRate = (currency, rate) => dispatch => {

    dispatch({
        type: ADD_DATA,
        payload: {
            currency,
            rate
        }
    });
};


export const selectCurrency = (currency) => dispatch => {
    dispatch({
        type: SELECT_CURRENCY,
        payload: currency
    });
};

export const selectDate  = (date) => dispatch => {
    dispatch({
        type: SELECT_DATE,
        payload: date
    });
};
