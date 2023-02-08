import counterReducer from '../reducer/CounterReducer'
import IsloggedReducer from '../reducer/IsloggedReducer'
import {combineReducers}from 'redux'

const allreducer = combineReducers({
    counter : counterReducer,
    islogged : IsloggedReducer
});

export default allreducer;