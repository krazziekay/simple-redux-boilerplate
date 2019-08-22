import { topMenuItems } from '../common/leftSideMenu';
import { useState } from 'react';


export const ContentPerMenu = ({ currentMenu }) => {
  return topMenuItems.filter(menu => menu.id === currentMenu)[0].body;
};

