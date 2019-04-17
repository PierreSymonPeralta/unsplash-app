import { createStore, combineReducers } from 'redux';

import homeReducer from '../containers/HomePage/reducers';
import userReducer from '../containers/UserPage/reducers';

const rootReducer = combineReducers({homeReducer, userReducer });

export default createStore(rootReducer);