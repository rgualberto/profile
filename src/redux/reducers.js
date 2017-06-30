import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {profilesReducer} from '../containers/profiles/profilesReducer';

const reducers = combineReducers({
  routerReducer,
  profilesReducer
});

export default reducers;
