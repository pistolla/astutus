import MediaLinks from './MediaLinks';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { findByTestAttr, findByElementTestAttr } from '../../utils';

const setup = (props = {}) => {
    const component = shallow(<MediaLinks {...props} />);

    return component;
}
const renderer = (props = {}) => {
    const component = mount(<MediaLinks {...props} />);
    return component;
}

describe('MediaLinks Component', () => {
    describe('Renders', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setup();
        });
        it('Should render', () => {
            const component = findByTestAttr(wrapper, 'MediaLinksComponent');
            expect(component.length).toBe(1);
        });
    })
    describe('Has list of links', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = renderer();
        });
        it('Should show link components', () => {
            const component = findByElementTestAttr(wrapper, 'Link', 'LinkComponent');
            component.simulate('click');
            expect(wrapper.props('loading')).toEqual(true);
        });
        it('Should update list when state changes', () => {

        });
        it('Should refresh list on refresh button click', () => {


        })
        it('Should loading in progress when fetching', () => {

        })
    })
    // describe('Check Proptypes', () => {
        
    // })
});
