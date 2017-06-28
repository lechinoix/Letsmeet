import { combineReducers } from 'redux';

const appReducer = combineReducers({});

const initialState = {};

const rootReducer = (state = initialState, action) => (appReducer(state, action));

export default rootReducer;
