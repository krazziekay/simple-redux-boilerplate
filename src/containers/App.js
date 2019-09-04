import React, { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import RightSideBar from '../components/RightSideBar';
import MidContent from '../components/MidContent';
import LeftSideBar from '../components/LeftSideBar';
import Grid from '@material-ui/core/Grid';
import { themeStyler } from '../helper/helper';
import { makeStyles } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';


const calculatePageHeight = () => {
  let breadCrumbHeight = 53;
  return window.innerHeight - (breadCrumbHeight) + 'px';
};

const columnHeightCss = {
  height: calculatePageHeight(),
  overflow: 'hidden',
  position: 'relative',
  transition: '0.5s'
};

const useStyle = makeStyles(theme => themeStyler(theme, {
  relative: {
    position: 'relative'
  },
  sideBarToggler: {
    position: 'absolute',
    right: '-36px',
    zIndex: 2,
    padding: 0,
    minWidth: 8
  }
}));

const App = () => {
  const classes = useStyle();
  const [toggleStatus, setToggleStatus] = useState(false);
  const [leftSide, setLeftSide] = useState('sz-20');
  const [midSide, setMidSide] = useState('sz-65');
  const [rightSide, setRightSide] = useState('sz-15');

  const toggleSideBar = () => {
    if (!toggleStatus) {
      setLeftSide('sz-0');
      setMidSide('sz-85');
    } else {
      setLeftSide('sz-20');
      setMidSide('sz-65');
    }
    setToggleStatus(!toggleStatus);
  };

  return (
    <div>
      <div className="desktop">
        <Breadcrumb/>
      </div>
      <div className={classes.spaceAround}>
        <div className={`${leftSide} ${classes.relative} ${classes.gridWrapper}`}>
          <div className="desktop">
            <Button className={classes.sideBarToggler}>
              {
                toggleStatus ? <ArrowForwardIcon onClick={toggleSideBar}/>
                  : <ArrowBackIcon onClick={toggleSideBar}/>
              }
            </Button>
          </div>
          <LeftSideBar heightStyle={columnHeightCss}/>
        </div>
        <div className={`${midSide}  ${classes.gridWrapper}`}>
          <MidContent heightStyle={columnHeightCss}/>
        </div>
        <div className={`${rightSide} ${classes.gridWrapper}`}>
          <RightSideBar heightStyle={columnHeightCss}/>
        </div>
      </div>
    </div>
  );
};

export default App;
