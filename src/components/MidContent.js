import React from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper/index';
import { ContentPerMenu } from '../helper/helper';

const MidContent = ({ drawerState, heightStyle }) => {

  return (
    <div>
      { /* For Desktop Views */}
      <Paper style={heightStyle} className="desktop">

        <div className="mid-content no-vertical-scroll-bar">
          <ContentPerMenu currentMenu={drawerState}/>
        </div>
      </Paper>


      { /* For Mobile Views */}
      <Paper className="mobile">
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
