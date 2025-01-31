import {
  SELECT_OPTION,
} from '../constants/DrawerState';


const INITIAL = 1;


export default (state = INITIAL, action) => {
  switch (action.type) {
    case SELECT_OPTION:
      return action.payload;
    default:
      return state;
  }
};
