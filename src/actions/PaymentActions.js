import {
  ADD_PAYMENT,
  FETCH_PAYMENT
} from '../constants/Payments';


export const addPayments = (data) => ({
  type: ADD_PAYMENT,
  payload: data
});

export const fetchPayments = () => ({
  // eslint-disable-next-line no-empty-label
  type: FETCH_PAYMENT,
  payload: []
});
