import checkPropTypes from 'check-prop-types';
import rootReducer from '../store/reducers';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export const findByAttr = (component, name) => {
    return component.find('[data-test=\''+name+'\']');
};

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
};

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...[thunk])(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
};