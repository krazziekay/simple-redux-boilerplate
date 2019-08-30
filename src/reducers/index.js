import { combineReducers } from 'redux';
import jobDetails from './JobDetails';
import drawerState from './drawerState';
// import estimates from './Estimates';

const rootReducer = combineReducers({
  jobDetails,
  drawerState,
  // estimates
});

export default rootReducer;
