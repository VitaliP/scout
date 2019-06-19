import React from 'react'
import Navbar from '../Navbar'
import { shallow } from 'enzyme'
import { findByAttr } from '../../../../utils/tdd'

const getComponent = (props={}) => {
    return shallow(<Navbar {...props} />);
  };

describe('Navbar',()=>{

    let component;
    beforeEach(()=>{
        component = getComponent()
    });

    it('Component rendering',()=>{
       const wrapper = findByAttr(component, 'nav-bar');
       expect(wrapper.length).toBe(1);
    });

    it('Correct app',()=>{
        const wrapper = findByAttr(component, 'app-name').text();
        expect(wrapper).toBe('ER.redux');
    });

});