import { FETCH_DATA, SCREEN_STATE, MODAL_SHOW } from './';
import axios from 'axios';

export const loading = () => dispatch => {
    dispatch({
        type: SCREEN_STATE,
        payload: 'loading'
    });
};

export const fetchData = () => dispatch => {

    // return axios.get('https://api.exchangeratesapi.io/latest-')
    return axios.get('https://api.exchangeratesapi.io/latest')
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