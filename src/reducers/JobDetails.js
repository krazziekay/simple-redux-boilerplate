import {
  EDIT_JOB_DETAILS,
  ERROR_JOB_DETAILS,
  FETCHING_JOB_DETAILS,
  GET_JOB_DETAILS
} from '../constants/JobDetails';


const INITIAL = {
  data: {
    job_id: 1,
    job_title: 'Dummy',
  },
  fetching: false,
  error: ''
};


const loadJobs = (state, payload) => {
  const fetchingJobs = Object.assign({}, state);
  fetchingJobs.data = payload;
  return fetchingJobs;
};

const fetchingJob = (state) => {
  const fetchingJobs = Object.assign({}, state);
  fetchingJobs.fetching = true;
  return fetchingJobs;
};

const errorsInJob = (obj) => {
  const fetchingJobs = Object.assign({}, obj);
  fetchingJobs.error = 'Oops, something went wrong';
  return fetchingJobs;
};

export default (state = INITIAL, action) => {
  switch (action.type) {
    case GET_JOB_DETAILS:
      return loadJobs(state, action.payload);
    case EDIT_JOB_DETAILS:
      return state;
    case FETCHING_JOB_DETAILS:
      return fetchingJob(state);
    case ERROR_JOB_DETAILS:
      return errorsInJob(state);
    default:
      return state;
  }
};
