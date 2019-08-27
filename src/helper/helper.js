import { topMenuItems } from '../common/leftSideMenu';


export const ContentPerMenu = ({ currentMenu }) => {
  return topMenuItems.filter(menu => menu.id === currentMenu)[0].body;
};

export const ObjectGeneratorForCustomSelect = (id, value = '') => ({ id, value });

export const GetAfterUnderscore = str => str.substr(str.indexOf('_') + 1, str.length);

export const GetBeforeUnderscore = str => str.substr(0, str.indexOf('_'));
