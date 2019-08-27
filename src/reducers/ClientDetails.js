import {
  EDIT_CLIENT,
  EDIT_MAILING_CLIENT,
} from '../constants/ClientActions';

const editClients = (state, payload) => {
  const newClient = Object.assign({}, state);
  newClient.data.client = payload;
  return newClient;
};


const editMailingClient = (state, payload) => {
  const newClient = Object.assign({}, state);
  newClient.data.mailing_client = payload;
  return newClient;
};

export default (state, action) => {
  switch (action.type) {
    case EDIT_CLIENT:
      return editClients(state, action.payload);
    case EDIT_MAILING_CLIENT:
      return editMailingClient(state, action.payload);
    default:
      return state;
  }
};
