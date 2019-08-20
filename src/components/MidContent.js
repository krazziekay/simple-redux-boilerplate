import React, { useState, useEffect } from 'react';
import JobDetails from './JobDetails';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Paper from '@material-ui/core/Paper';
import * as JobDetailsActions from '../actions/JobDetailsActions';

const MidContent = ({ jobDetailsActions, jobDetails, heightStyle }) => {
  useEffect(() => {
  }, []);

  return (
    <div>
      { /* For Desktop Views */}
      <Paper style={heightStyle} className="desktop">

        <div className="mid-content no-scroll-bar-div">

          {/* eslint-disable-next-line react/jsx-no-undef */}
          <JobDetails actions={jobDetailsActions} data={jobDetails}/>
        </div>
      </Paper>


      { /* For Mobile Views */}
      <Paper style={heightStyle} className="mobile">
        <div className="mid-content">

          {/* eslint-disable-next-line react/jsx-no-undef */}
          <JobDetails actions={jobDetailsActions} data={jobDetails}/>
        </div>
      </Paper>
    </div>
  );
};


const mapStateToProps = (state) => ({
  counter: state.counter,
  jobDetails: state.jobDetails
});


const mapDispatchToProps = dispatch => ({
  // eslint-disable-next-line no-undef
  jobDetailsActions: bindActionCreators(JobDetailsActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MidContent);
