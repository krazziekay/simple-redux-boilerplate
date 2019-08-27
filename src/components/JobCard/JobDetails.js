import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CustomSelect from './../../common/CustomSelect';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import JobStatusSelector from './../../common/jobStatusSelector';
import * as JobDetailsActions from './../../actions/JobDetailsActions';
import ActionButtons from '../../common/actionButtons';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import { Colors } from "../../common/colors";


const useStyle = makeStyles(theme => ({
  headerStyle: {
    fontFamily: 'Quicksand',
    fontSize: 34,
    verticalAlign: 'middle',
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
      fontWeight: 'bold',

    }
  },
  iconStyle: {
    color: Colors.success,
    fontSize: 18,
    marginRight: 8
  },
  buttonStyle: {
    marginLeft: 12,
    borderRadius: 50,
    border: '1px solid #ccc',
    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2)'
  }
}));


const JobDetailsHeader = ({
                            classes,
                            editFlag,
                            setEditFlag,
                            jobDetails,
                          }) => {

  return (<div className="job-details-header-container">
    <div>
      <div>
        <Typography variant="span" className={classes.headerStyle}>Job #{jobDetails.job_id}</Typography>
        {
          editFlag && <Button className={classes.buttonStyle} onClick={() => setEditFlag(false)} color="inherit" size="medium" variant="outlined">
            <CreateIcon className={classes.iconStyle}/>Edit
          </Button>
        }
      </div>
    </div>
    <JobStatusSelector/>
  </div>);
};


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

  return (<div className="p-l-24 p-r-24 p-t-24 p-b-24">
    <JobDetailsHeader classes={classes} editFlag={editFlag} setEditFlag={setEditFlag} jobDetails={jobDetails} form={form} setForm={setForm}/>
    <Divider variant="middle"/>
    <div>
      <form action="">
        <Grid container>
          <Grid item xs={12} md={12}>
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
          </Grid>
          <Grid item xs={12} md={12}>
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
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container>
              <Grid item xs={12} sm={4} md={4}>
                <CustomSelect label="Job Category"
                              editFlag={editFlag}
                              name="job_category"
                              selected={jobDetails.all_job_category[0]}
                              options={jobDetails.all_job_category}
                              selectAction={selectJobCategory}
                />
              </Grid>
              <Grid className="center-align" item xs={12} sm={4} md={4}>
                {
                  form.selected_job_type &&
                  <CustomSelect label="Job Type" name="job_type" selected={form.selected_job_type[0]} options={form.selected_job_type}
                                selectAction={selectOption}/>
                }
              </Grid>
              <Grid className="right-align" item xs={12} sm={4} md={4}>
                <CustomSelect label="Job Priority" name="job_priority" selected={jobDetails.all_job_priority[0]} options={jobDetails.all_job_priority}
                              selectAction={selectOption}/>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container>
              <Grid item xs={12} sm={8} md={8}>
                <CustomSelect label="Lead Source" name="lead_source" selected={jobDetails.all_lead_source[0]} options={jobDetails.all_lead_source}
                              selectAction={selectOption}/>
              </Grid>
              <Grid className="right-align" item xs={12} sm={4} md={4}>
                <CustomSelect label="Callout Fee" name="callout_fee" selected={jobDetails.all_callout_fee[0]} options={jobDetails.all_callout_fee}
                              selectAction={selectOption}/>
              </Grid>
            </Grid>
          </Grid>
          {
            !editFlag && <ActionButtons onCancel={() => setEditFlag(true)} onSave={submit}/>
          }
        </Grid>
      </form>
    </div>
  </div>);
};

export default connect(state => ({
  jobDetails: state.jobDetails.data
}), dispatch => ({
  jobDetailsAction: bindActionCreators(JobDetailsActions, dispatch)
}))(JobDetails);
