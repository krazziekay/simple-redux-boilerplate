import { topMenuItems } from '../common/leftSideMenu';


export const ContentPerMenu = ({ currentMenu }) => {
  return topMenuItems.filter(menu => menu.id === currentMenu)[0].body;
};
