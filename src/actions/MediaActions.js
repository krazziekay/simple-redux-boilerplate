import {
  ADD_DOCUMENTS,
  ADD_IMAGES,
  ADD_VIDEOS,
  FETCH_DOCUMENTS,
  FETCH_IMAGES,
  FETCH_VIDEOS
} from '../constants/Media';


export const addImages = (data) => ({
  type: ADD_IMAGES,
  payload: data
});

export const fetchImages = () => ({
  // eslint-disable-next-line no-empty-label
  type: FETCH_IMAGES,
  payload: []
});

export const addVideos = (data) => ({
  type: ADD_VIDEOS,
  payload: data
});

export const fetchVideos = () => ({
  // eslint-disable-next-line no-empty-label
  type: FETCH_VIDEOS,
  payload: []
});

export const addDocuments = (data) => ({
  type: ADD_DOCUMENTS,
  payload: data
});

export const fetchDocuments = () => ({
  // eslint-disable-next-line no-empty-label
  type: FETCH_DOCUMENTS,
  payload: []
});
