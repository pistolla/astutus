import Media from './Media';
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../utils';

const setup = (props = {}) => {
    const component = shallow(<Media {...props} />);

    return component;
}

describe('Link Component', () => {
    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setup();
        });
        it('Should render', () => {
            const component = findByTestAttr(wrapper, 'MediaComponent');
            expect(component.length).toBe(1);
        });
    })

});
