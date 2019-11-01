import React from 'react';
import moxios from 'moxios';
import { testStore } from '../utils';
import  { fetchMediaUrls } from '../actions';

describe('fetchmedia action', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    })

    test('Store is updated correctly', () => {
        const expectedState = [{
            url: 'path/to/url/1',
            title: 'A fancy name',
            sources: 5,
            mentions: 9,
            dateCreated: '455678998765'
        },{
            url: 'path/to/url/1',
            title: 'A fancy name',
            sources: 5,
            mentions: 9,
            dateCreated: '455678998765'
        },{
            url: 'path/to/url/1',
            title: 'A fancy name',
            sources: 5,
            mentions: 9,
            dateCreated: '455678998765'
        },{
            url: 'path/to/url/1',
            title: 'A fancy name',
            sources: 5,
            mentions: 9,
            dateCreated: '455678998765'
        }];
        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        });

        return store.dispatch(fetchMediaUrls())
        .then(() => {
            const newState = store.getState();
            expect(newState.mediaurls).toBe(expectedState);
        })
    })
})
