import React from 'react';
import CustomSelect from './CustomSelect';
import { connect } from 'react-redux';
import * as JobDetailsActions from '../actions/JobDetailsActions';
import { bindActionCreators } from 'redux';


const JobStatusSelector = ({ jobDetails, jobDetailsAction }) => {

  const handleChange = (e) => {
    e.persist();
    console.log('Save ', e.target.name, e.target.value);
    jobDetailsAction.editJobStatus(e.target.value);
  };

  return (<div>
    <CustomSelect label="Job Status"
      name="job_status"
      small options={jobDetails.all_job_status}
      selected={jobDetails.all_job_status[2]}
      selectAction={handleChange}
    />
  </div>);
};

export default connect(state => ({
  jobDetails: state.jobDetails.data
}), dispatch => ({
  jobDetailsAction: bindActionCreators(JobDetailsActions, dispatch)
}))(JobStatusSelector);
