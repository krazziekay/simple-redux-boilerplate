import { combineReducers } from 'redux';
import jobDetails from './JobDetails';
import drawerState from './drawerState';
// import estimates from './Estimates';
import media from './Media';

const rootReducer = combineReducers({
  jobDetails,
  drawerState,
  // estimates,
  media
});

export default rootReducer;
