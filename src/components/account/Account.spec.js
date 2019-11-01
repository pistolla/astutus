import Account from './Account';
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../utils';

const setup = (props = {}) => {
    const component = shallow(<Account {...props} />);

    return component;
}

describe('AddLink Component', () => {
    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setup();
        });
        it('Should render', () => {
            const component = findByTestAttr(wrapper, 'AccountComponent');
            expect(component.length).toBe(1);
        });
    })
    describe('Renders', () => {

    })
    describe('Check Proptypes', () => {
        
    })
});
