import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';
import { findByTestAttr } from '../../utils';

const setup = (props = {}) => {
    const component = shallow(<Main {...props} />);

    return component;
}

describe('Main Component', () => {
    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setup();
        });
        it('Should render', () => {
            const component = findByTestAttr(wrapper, 'MainComponent');
            expect(component.length).toBe(1);
        });
    })

});
