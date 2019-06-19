import React from 'react'
import Modal from '../Modal'
import { shallow } from 'enzyme'
import { findByAttr, checkProps, testStore } from '../../../../utils/tdd'

const getComponent = (initialState={}) => {
    const store = testStore(initialState);
    return shallow(<Modal store={store} />).childAt(0).dive();
};

describe('Modal',()=>{

    let component;
    beforeEach(()=>{
    });

    it('Component not rendering by default',()=>{
        component = getComponent({});
        const wrapper = findByAttr(component, 'modal');
        expect(wrapper.length).toBe(0);
    });

    it('Component rendering',()=>{

        component = getComponent({
            modal: {
                modalState: true,
                params: {
                    type: 'alert',
                    message: '123456'
                }
            }
        });

        const wrapper = findByAttr(component, 'modal');
        expect(wrapper.length).toBe(1);

        const wrapperTitle = findByAttr(component, 'title').text();
        expect(wrapperTitle).toBe('Alert');

        const wrapperMsg = findByAttr(component, 'msg').text();
        expect(wrapperMsg).toBe('123456');
    });

});