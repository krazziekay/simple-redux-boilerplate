import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CreateIcon from '@material-ui/icons/Create';
import { Colors } from '../../common/colors';
import CustomSelect from './../../common/CustomSelect';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const style = {
  headerStyle: {
    fontFamily: 'Quicksand',
    fontSize: 34,
    verticalAlign: 'middle'
  },
  headerStyleMobile: {
    fontFamily: 'Quicksand',
    fontSize: 18,
    fontWeight: 'bold',
    verticalAlign: 'middle'
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
};

const JOBSTATUSES = [
  { id: 1, value: 'New' },
  { id: 2, value: 'Ongoing' },
  { id: 3, value: 'Completed' },
  { id: 4, value: 'Cancelled' },
  { id: 5, value: 'Callback' },
];

const jobCategories = [
  { id: 1, value: 'Plumbing' },
  { id: 2, value: 'Electrical' },
  { id: 3, value: 'HVAC' },
];
const jobTypes = [
  {
    id: 1,
    category: 'Plumbing',
    types: [
      { id: 1, value: 'Blocked Drain' },
      { id: 2, value: 'Blocked Drain 1' },
      { id: 3, value: 'Blocked Drain 2' },
    ]
  },
  {
    id: 2,
    category: 'Electrical',
    types: [
      { id: 1, value: 'Electrical' },
      { id: 2, value: 'Electrical 1' },
      { id: 3, value: 'Electrical 2' },
    ]
  },
  {
    id: 3,
    category: 'HVAC',
    types: [
      { id: 1, value: 'HVAC' },
      { id: 2, value: 'HVAC 1' },
      { id: 3, value: 'HVAC 2' },
    ]
  }
];

const jobPriority = [];
const leadSource = [];
const calloutFee = [];


const JobDetailsHeader = () => <div className="job-details-header-container">
  <div>
    <div className="desktop">
      <Typography variant="span" style={style.headerStyle}>Job #12345</Typography>
      <Button style={style.buttonStyle} color="inherit" size="medium" variant="outlined">
        <CreateIcon style={style.iconStyle}/>Edit
      </Button>
    </div>
    <div className="mobile">
      <Typography variant="span" style={style.headerStyleMobile}>Job #12345</Typography>
      <Button style={style.buttonStyle} color="inherit" size="medium" variant="outlined">
        <CreateIcon style={style.iconStyle}/>Edit
      </Button>
    </div>
  </div>
  <CustomSelect small options={JOBSTATUSES} selected={JOBSTATUSES[2]} selectAction={() => {
  }}/>
</div>;


const JobDetails = ({}) => {
  const [form, setForm] = useState({});

  useEffect(() => {
    if (!form.jobTypes) {
      setForm(currentForm => Object.assign({ job_types: jobTypes[0].types }, currentForm));
    }
  }, []);

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
    const jobTypesArray = jobTypes.filter(category => category.id === event.target.value)[0];
    setForm(currentForm => Object.assign({}, currentForm, { job_types: jobTypesArray.types }));
    selectOption(event);
  };


  return (<div className="p-l-24 p-r-24 p-t-24 p-b-24">
    <JobDetailsHeader/>
    <Divider variant="middle"/>
    <div>
      <form action="">
        <Grid container>
          <Grid item xs={12} md={12}>
            <TextField
              label="Job Title"
              name="job_title"
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
              name="description"
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container>
              <Grid item xs={12} md={4}>
                <CustomSelect name="job_category" selected={jobCategories[0]} options={jobCategories}
                              selectAction={selectJobCategory}/>
              </Grid>
              <Grid item xs={12} md={4}>
                {
                  form.job_types &&
                  <CustomSelect name="job_status" selected={form.job_types[0]} options={form.job_types}
                                selectAction={selectOption}/>
                }
              </Grid>
              <Grid item xs={12} md={4}>
                <div onClick={() => console.log('Formvalues ', form)}>CLick</div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}></Grid>
        </Grid>


      </form>
    </div>
  </div>);
};

export default JobDetails;
