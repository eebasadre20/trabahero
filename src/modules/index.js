import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import trabahero from '../reducers/trabahero'

export default combineReducers({
  trabahero,
  routing: routerReducer
})