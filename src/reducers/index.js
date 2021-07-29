
import trainingReducer from './training'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    training: trainingReducer

})

export default allReducers