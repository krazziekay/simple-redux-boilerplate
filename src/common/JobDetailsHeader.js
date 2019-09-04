import React from 'react';
import Typography from '@material-ui/core/Typography';
import JobStatusSelector from './jobStatusSelector';
import { connect } from 'react-redux';

const JobDetailsHeader = ({ classes, jobDetails }) => {

  return (<div className="job-details-header-container">
    <div>
      <Typography variant="span" className={classes.headerStyle}>Job #{jobDetails.job_id}</Typography>
    </div>
    <div className={classes.spaceBetween}>
      <JobStatusSelector/>
    </div>
  </div>);
};


export default connect(state => ({
  jobDetails: state.jobDetails.data
}))(JobDetailsHeader);
