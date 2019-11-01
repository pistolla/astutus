import SearchLink from './SearchLink';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { findByTestAttr, findByElementTestAttr } from '../../utils';

const setup = (props = {}) => {
    const component = shallow(<SearchLink {...props} />);

    return component;
}
const renderer = (props = {}) => {
    const component = mount(<SearchLink {...props} />);
    return component;
}

describe('SearchLink Component', () => {
    describe('Renders', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setup();
        });
        it('Should render', () => {
            const component = findByTestAttr(wrapper, 'SearchLinkComponent');
            expect(component.length).toBe(1);
        });
    })
    describe('Searches', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = renderer();
        });
        it('Should set loading active when button clicked', () => {
            const component = findByElementTestAttr(wrapper, 'button', 'button');
            component.simulate('click');
            expect(wrapper.props('loading')).toEqual(true);
        });
    })
    // describe('Check Proptypes', () => {
        
    // })
});
