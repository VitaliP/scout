import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from '../App';

import { shallow } from 'enzyme';
import { findByAttr, testStore} from '../utils/tdd';

const initWrapper = (initialState={}) => {
    const store = testStore(initialState);

    const wrapper = shallow(
        <App store={store}/>
    ).dive();

    return wrapper;
};


describe('Main App',()=>{

    let wrapper;

    beforeEach(()=>{
        const initialState = {};
        wrapper = initWrapper(initialState);
    });

    it('Renders without errors',() => {
         const component = findByAttr(wrapper, 'app');
         expect(component.length).toBe(1);
    })

});