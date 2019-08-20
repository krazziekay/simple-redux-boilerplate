import React, { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import RightSideBar from '../components/RightSideBar';
import MidContent from '../components/MidContent';
import LeftSideBar from '../components/LeftSideBar';
import Grid from '@material-ui/core/Grid';


const calculatePageHeight = () => {
  let breadCrumbHeight = 38;
  return window.innerHeight - (breadCrumbHeight) + 'px';
};

const columnHeightCss = {
  height: calculatePageHeight(),
  overflow: 'hidden',
  position: 'relative',
};

const App = () => {
  return (
    <div>
      <Breadcrumb/>
      <div className="container">
        <Grid container>
          <Grid item xs={12} md={2}>
            <LeftSideBar heightStyle={columnHeightCss}/>
          </Grid>
          <Grid item xs={12} md={8}>
            <MidContent heightStyle={columnHeightCss}/>
          </Grid>
          <Grid item xs={12} md={2}>
            <RightSideBar heightStyle={columnHeightCss}/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default App;
