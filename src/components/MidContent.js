import React, { useState, useEffect } from 'react';
import JobDetails from './JobDetails';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as JobDetailsActions from '../actions/JobDetailsActions';

const MidContent = ({ jobDetailsActions, jobDetails }) => {
  useEffect(() => {
  }, []);

  return (
    <div className="mid-content no-scroll-bar-div">

        {/* eslint-disable-next-line react/jsx-no-undef */}
      <JobDetails actions={jobDetailsActions} data={jobDetails}/>
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
