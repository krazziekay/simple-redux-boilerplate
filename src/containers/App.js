import React, { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import RightSideBar from '../components/RightSideBar';
import MidContent from '../components/MidContent';
import LeftSideBar from '../components/LeftSideBar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const calculatePageHeight = () => {
  let breadCrumbHeight = 36;
  return window.innerHeight - (breadCrumbHeight) + 'px';
};

const columnHeightCss = {
  height: calculatePageHeight(),
  overflowY: 'scroll'
};

const App = () => {
  return (
    <div>
      <Breadcrumb/>
      <div className="container">
        <Grid container>
          <Grid item xs={12} md={3}>
            <Paper style={columnHeightCss}>
              <LeftSideBar/>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper style={columnHeightCss}>
              <MidContent/>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper style={columnHeightCss}>
              <RightSideBar/>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default App;
