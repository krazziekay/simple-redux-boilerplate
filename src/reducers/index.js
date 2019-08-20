import { combineReducers } from 'redux';
import jobDetails from './JobDetails';
import drawerState from './drawerState';

const rootReducer = combineReducers({
  jobDetails,
  drawerState,
});

export default rootReducer;
