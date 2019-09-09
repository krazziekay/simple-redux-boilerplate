import {
  ADD_VISITS,
  FETCH_VISITS
} from '../constants/Visits';


export const addVisits = (data) => ({
  type: ADD_VISITS,
  payload: data
});

export const fetchVisits = () => ({
  // eslint-disable-next-line no-empty-label
  type: FETCH_VISITS,
  payload: []
});
