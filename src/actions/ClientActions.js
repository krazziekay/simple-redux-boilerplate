import {
  EDIT_CLIENT,
  EDIT_MAILING_CLIENT,
} from '../constants/ClientActions';


export const editClients = (data) => ({
  type: EDIT_CLIENT,
  payload: data
});

export const editMailingClients = (data) => ({
  // eslint-disable-next-line no-empty-label
  type: EDIT_MAILING_CLIENT,
  payload: data
});
