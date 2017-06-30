import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {profilesReducer} from '../containers/profiles/profilesReducer';
import {userReducer} from '../components/user/userReducer';

const reducers = combineReducers({
  routerReducer,
  profilesReducer,
  userReducer
});

export default reducers;
