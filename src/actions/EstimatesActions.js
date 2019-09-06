import {
  ADD_ESTIMATES,
  FETCH_ESTIMATES
} from '../constants/Estimates';


export const addEstimates = (data) => ({
  type: ADD_ESTIMATES,
  payload: data
});

export const fetchEstimates = () => ({
  // eslint-disable-next-line no-empty-label
  type: FETCH_ESTIMATES,
  payload: []
});
