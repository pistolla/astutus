import { types } from '../../actions/types';

 export default (state={all:[],watchlist: []}, action) => {
     switch (action.type) {
         case types.GET_MEDIA_URLS:
             return {all: action.payload, watchlist: []};
        case types.GET_MY_MEDIA_URLS:
             return {all: [], watchlist: action.payload};
         default:
             return state;
     }
 }