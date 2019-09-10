import React, { useEffect, useState } from 'react';
import CustomSelect from './../../common/CustomSelect';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import JobDetailsHeader from '../../common/JobDetailsHeader';
import * as JobDetailsActions from './../../actions/JobDetailsActions';
import ActionButtons from '../../common/actionButtons';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import { themeStyler } from './../../helper/helper';

const useStyle = makeStyles(theme => themeStyler(theme));


const JobDetails = ({ jobDetails, jobDetailsAction }) => {
  const [form, setForm] = useState(jobDetails);
  const [editFlag, setEditFlag] = useState(true);
  const classes = useStyle();
  useEffect(() => {
    setForm(currentForm => Object.assign({ selected_job_type: jobDetails.all_job_types[0].types }, currentForm));
  }, []);

  /**
   * Save the job update
   */
  const submit = () => {
    setEditFlag(true);
    jobDetailsAction.editJobDetails(form);
  };

  const handleChange = (e) => {
    e.persist();
    setForm(currentForm => Object.assign({}, currentForm, { [e.target.name]: e.target.value }));
  };

  /**
   * Function to handle the select option changes
   * @param event
   */
  const selectOption = (event) => {
    setForm(currentForm => Object.assign({}, currentForm, { [event.target.name]: event.target.value }));
  };

  /**
   * Function to toggle the job types according to their respective job category
   * @param event
   */
  const selectJobCategory = (event) => {
    const jobTypesArray = jobDetails.all_job_types.filter(category => category.id === event.target.value)[0];
    setForm(currentForm => Object.assign({}, currentForm, { selected_job_type: jobTypesArray.types }));
    selectOption(event);
  };

  return (<div className="p-l-24 p-r-24 p-t-12 p-b-12">
    <JobDetailsHeader classes={classes}/>
    <div>
      <div className={classes.headerTitle}>
        <span className={classes.subHeaderStyle}>Job Description</span>
        {
          editFlag && <Button className={classes.buttonStyle} onClick={() => setEditFlag(false)} color="inherit" size="medium" variant="outlined">
            <CreateIcon className={`${classes.iconStyle} ${classes.successStyle}`}/>Edit
          </Button>
        }
      </div>
      <form action="">
        <TextField
          label="Job Title"
          name="job_title"
          disabled={editFlag}
          value={form.job_title}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Description"
          rows="4"
          multiline
          disabled={editFlag}
          value={form.job_description}
          name="job_description"
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <div className={classes.spaceBetween}>
          <div className={`${classes.gridWrapper} sz-30`}>
            <CustomSelect label="Job Category"
                          editFlag={editFlag}
                          name="job_category"
                          selected={jobDetails.all_job_category[0]}
                          options={jobDetails.all_job_category}
                          selectAction={selectJobCategory}
            />
          </div>
          <div className={`${classes.gridWrapper} sz-30`}>
            {
              form.selected_job_type &&
              <CustomSelect label="Job Type" name="job_type" selected={form.selected_job_type[0]} options={form.selected_job_type}
                            selectAction={selectOption}/>
            }
          </div>
          <div className={`${classes.gridWrapper} sz-30`}>
            <CustomSelect label="Job Priority" name="job_priority" selected={jobDetails.all_job_priority[0]} options={jobDetails.all_job_priority}
                          selectAction={selectOption}/>
          </div>
        </div>
        <div className={classes.spaceBetween}>
          <div className={`${classes.gridWrapper} sz-65`}>
            <CustomSelect label="Lead Source" name="lead_source" selected={jobDetails.all_lead_source[0]} options={jobDetails.all_lead_source}
                          selectAction={selectOption}/>
          </div>
          <div className={`${classes.gridWrapper} sz-30`}>
            <CustomSelect label="Callout Fee" name="callout_fee" selected={jobDetails.all_callout_fee[0]} options={jobDetails.all_callout_fee}
                          selectAction={selectOption}/>
          </div>
        </div>
        {
          !editFlag && <ActionButtons onCancel={() => setEditFlag(true)} onSave={submit}/>
        }
      </form>
    </div>
  </div>);
};

export default connect(state => ({
  jobDetails: state.jobDetails.data
}), dispatch => ({
  jobDetailsAction: bindActionCreators(JobDetailsActions, dispatch)
}))(JobDetails);
