import {
  ADD_SALES,
  FETCH_SALES
} from '../constants/Sales';


const fetchSales = () => [
  { id: 1, total: 142000, data: 'Invoice #12345 - Estimate title goes here 1 - 27/08-2019 - by Nick K.', sales: [1, 2, 3] },
  { id: 2, total: 142000, data: 'Invoice #12345 - Estimate title goes here 2 - 27/08-2019 - by Nick K.', sales: [1, 2, 3] },
  { id: 3, total: 142000, data: 'Invoice #12345 - Estimate title goes here 3 - 27/08-2019 - by Nick K.', sales: [1, 2, 3] },
];

export default (
  state = [],
  action) => {
  switch (action.type) {
    case ADD_SALES:
      return state;
    case FETCH_SALES:
      return fetchSales();
    default:
      return state;
  }
};
