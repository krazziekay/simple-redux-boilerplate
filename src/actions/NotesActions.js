import {
  ADD_NOTES,
  FETCH_NOTES
} from '../constants/Notes';


export const addNotes = (data) => ({
  type: ADD_NOTES,
  payload: data
});

export const fetchNotes = () => ({
  // eslint-disable-next-line no-empty-label
  type: FETCH_NOTES,
  payload: []
});
