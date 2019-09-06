import {
  ADD_SALES,
  FETCH_SALES
} from '../constants/Sales';


export const addSales = (data) => ({
  type: ADD_SALES,
  payload: data
});

export const fetchSales = () => ({
  // eslint-disable-next-line no-empty-label
  type: FETCH_SALES,
  payload: []
});
