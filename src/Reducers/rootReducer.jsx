// rootReducer.jsx

import { combineReducers } from 'redux';
import reducers from '../components/reducers';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  user: reducers,
  auth: authReducer,
});

export default rootReducer;
