import { combineReducers } from 'redux';
import mediaurls from './mediaurls/reducer';
import { connectRouter } from 'connected-react-router'

export default (history) => combineReducers({
  router: connectRouter(history),
  mediaurls
})