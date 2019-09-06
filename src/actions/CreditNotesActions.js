import {
  ADD_CREDIT_NOTES,
  FETCH_CREDIT_NOTES
} from '../constants/CreditNotes';


export const addCreditNotes = (data) => ({
  type: ADD_CREDIT_NOTES,
  payload: data
});

export const fetchCreditNotes = () => ({
  // eslint-disable-next-line no-empty-label
  type: FETCH_CREDIT_NOTES,
  payload: []
});
