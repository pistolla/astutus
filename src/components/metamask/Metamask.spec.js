import React from 'react';
import { findByTestAttr, checkProps } from '../../utils';
import { shallow } from 'enzyme';
import { MetaMask } from './Metamask';

const setup = (props = {}) => {
    const component = shallow(<MetaMask {...props} />);

    return component;
}

describe('Metamask component', () => {

    describe('Checking prop types', () => {

        describe('Should not throw a warning', () => {
            const expectedProps = {
                setWeb3: (web3) => {
                    console.log(web3)
                }
            }
            const propRes = checkProps(MetaMask, expectedProps);
            expect(propRes).toBeUndefined();
        })
    })

    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setup();
        });

        it('Should not render', () => {
            const component = findByTestAttr(wrapper, 'MeamaskComponent');
            expect(component.length).toBe(0);
        })

        it('Should render without warning', () => {
            const component = findByTestAttr(wrapper, 'MetamaskComponent');
            expect(component.length).toBe(1);
        })
    })

    // describe('Have no props', () => {

    // })
})
