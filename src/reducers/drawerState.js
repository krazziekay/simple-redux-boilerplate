import {
  SELECT_OPTION,
} from '../constants/DrawerState';


const INITIAL = 2;


export default (state = INITIAL, action) => {
  switch (action.type) {
    case SELECT_OPTION:
      return action.payload;
    default:
      return state;
  }
};
