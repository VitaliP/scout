import { combineReducers } from 'redux';
import exchangeRates from './exchangeRates.reducer';
import modal from './modal.reducer';

export default combineReducers({
    exchangeRates: exchangeRates,
    modal: modal
});