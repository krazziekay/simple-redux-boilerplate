import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { ContentPerMenu } from './../../helper/helper';

const MidContent = ({ drawerState, heightStyle }) => {

  return (
    <div>
      { /* For Desktop Views */}
      <Paper style={heightStyle} className="desktop">

        <div className="mid-content no-scroll-bar-div">
          <ContentPerMenu currentMenu={drawerState}/>
        </div>
      </Paper>


      { /* For Mobile Views */}
      <Paper style={heightStyle} className="mobile">
        <div className="mid-content">
          <ContentPerMenu currentMenu={drawerState}/>
        </div>
      </Paper>
    </div>
  );
};


export default connect(
  state => ({
    drawerState: state.drawerState
  })
)(MidContent);
