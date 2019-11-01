import Link from './Link';
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../utils';

const setup = (props = {}) => {
    const component = shallow(<Link {...props} />);

    return component;
}

describe('About Component', () => {
    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setup();
        });
        it('Should render', () => {
            const component = findByTestAttr(wrapper, 'AboutComponent');
            expect(component.length).toBe(1);
        });
    })
    describe('Renders', () => {

    })
    describe('Check Proptypes', () => {
        
    })
});
