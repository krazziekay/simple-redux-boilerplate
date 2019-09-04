import {
  FETCH_MEDIA,
  ADD_MEDIA,
} from '../constants/Media';


export const addMedia = (data) => ({
  type: ADD_MEDIA,
  payload: data
});

export const fetchMedia = () => ({
  // eslint-disable-next-line no-empty-label
  type: FETCH_MEDIA,
  payload: []
});
