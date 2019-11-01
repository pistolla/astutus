import FilterMediaLinks from './FilterMediaLinks';
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../utils';

const setup = (props = {}) => {
    const component = shallow(<FilterMediaLinks {...props} />);

    return component;
}

describe('FilterMediaLinks Component', () => {
    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setup();
        });
        it('Should render', () => {
            const component = findByTestAttr(wrapper, 'FilterMediaLinksComponent');
            expect(component.length).toBe(1);
        });
    })
    describe('Renders', () => {

    })
    describe('Check Proptypes', () => {
        
    })
});
