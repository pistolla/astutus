import { types } from '../../actions/types';
import mediaurlsReducer from './reducer'

describe('Mediaurls Reducer', () => {
    it('Should return default state', () => {
        const newState = mediaurlsReducer(undefined, {});
        
        expect(newState).toEqual([]);
    });
    it('Should return new state if receiving type', () => {
        const Mediaurls =  [{url: 'path/to/url/1'},{url: 'path/to/url/2'}];
        const newState = mediaurlsReducer(undefined,{
            type: types.GET_MEDIA_URLS,
            payload: Mediaurls
        });
        expect(newState).toEqual(Mediaurls);
    })
 })