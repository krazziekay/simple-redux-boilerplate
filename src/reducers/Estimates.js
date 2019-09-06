import {
  ADD_ESTIMATES,
  FETCH_ESTIMATES
} from '../constants/Estimates';


const fetchEstimates = () => [
  { id: 1, total: 142000, data: 'Quotes #12345 - Estimate title goes here 1 - 27/08-2019 - by Nick K.', sales: [1, 2, 3] },
  { id: 2, total: 142000, data: 'Quotes #12345 - Estimate title goes here 2 - 27/08-2019 - by Nick K.', sales: [1, 2, 3] },
  { id: 3, total: 142000, data: 'Quotes #12345 - Estimate title goes here 3 - 27/08-2019 - by Nick K.', sales: [1, 2, 3] },
];

export default (
  state = [],
  action) => {
  switch (action.type) {
    case ADD_ESTIMATES:
      return state;
    case FETCH_ESTIMATES:
      return fetchEstimates();
    default:
      return state;
  }
};
