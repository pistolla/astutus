import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import { findByTestAttr, findByElementTestAttr, checkProps, testStore } from './utils';
import App from './App';

const setup = (initialState = {}) => {
    const store = testStore(initialState);
    const component = shallow(<App store={store} />).childAt(0).dive();
    return component;
}
const renderer = (initialState = {}, entry = {}) => {
    const store = testStore(initialState);
    const component = mount(
        <MemoryRouter initialEntries={[entry]}>
            <App store={store} />
        </MemoryRouter>
    );
    return component;
}
const initialState = [{
    url: 'path/to/url/1',
    title: 'A fancy name',
    sources: 5,
    mentions: 9,
    dateCreated: '455678998765'
}, {
    url: 'path/to/url/1',
    title: 'A fancy name',
    sources: 5,
    mentions: 9,
    dateCreated: '455678998765'
}, {
    url: 'path/to/url/1',
    title: 'A fancy name',
    sources: 5,
    mentions: 9,
    dateCreated: '455678998765'
}, {
    url: 'path/to/url/1',
    title: 'A fancy name',
    sources: 5,
    mentions: 9,
    dateCreated: '455678998765'
}];
describe('App Component', () => {

    // describe('Checking prop types', () => {

    //     describe('Should not throw a warning', () => {
    //         const expectedProps = {

    //         }
    //         const propRes = checkProps(App, expectedProps);
    //         expect(propRes).toBeUndefined();
    //     })
    // })

    describe('Renders without error', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setup(initialState);
        });

        it('Should render without error', () => {
            const component = findByTestAttr(wrapper, 'AppComponent');
            expect(component.length).toBe(1);
        })
    })

    describe('Navigation', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = renderer({ initialState: initialState, entry: "/" });
        });

        it('Should navigate to landing page on main link event', () => {
            const link = findByElementTestAttr(wrapper, 'a', 'mainlink');
            console.log(link.debug());
            link.simulate('click');
            const main = findByTestAttr(wrapper, 'MainComponent');
            expect(main.length).toBe(1);

        });

        // it('Should navigate to links page on Medialinks event', async => {

        // });

        // it('Should navigate to account page on account link event', async => {

        // });
    })
})
