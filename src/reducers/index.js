import { combineReducers } from 'redux';
import jobDetails from './JobDetails';
import drawerState from './drawerState';
import estimates from './Estimates';
import sales from './Sales';
import creditNotes from './CreditNotes';
import payments from './Payments';
import media from './Media';
import notes from './Notes';
import visits from './Visits';

const rootReducer = combineReducers({
  jobDetails,
  drawerState,
  estimates,
  sales,
  media,
  payments,
  creditNotes,
  notes,
  visits
});

export default rootReducer;
