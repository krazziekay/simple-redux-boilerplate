import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Colors } from '../../common/colors';
import Typography from '@material-ui/core/Typography';
import JobStatusSelector from '../../common/jobStatusSelector';
import { connect } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Accordion from '../../common/Accordion';
import InvoiceActionFooter from "../../common/InvoiceActionFooter";


const useStyle = makeStyles(theme => ({
  subHeaderStyle: {
    fontSize: 24,
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    }
  },
  headerStyle: {
    fontFamily: 'Quicksand',
    fontSize: 32,
    verticalAlign: 'middle',
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
      fontWeight: 'bold',

    }
  },
  iconStyle: {
    color: Colors.primary,
    fontSize: 18,
    marginRight: 8
  },
  buttonStyle: {
    marginRight: 12,
    borderRadius: 50,
    border: '1px solid #ccc',
    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2)'
  },
  headerTitle: {
    display: 'flex',
    verticalAlign: 'middle',
  },
  spaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    verticalAlign: 'middle',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  third: {
    width: '30%',
    [theme.breakpoints.down('sm')]: {
      width: 'unset',
    }
  },
  spaceAround: {
    display: 'flex',
    verticalAlign: 'middle',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },

}));

const JobDetailsHeader = ({ classes, jobDetails }) => {

  return (<div className="job-details-header-container">
    <div>
      <Typography variant="span" className={classes.headerStyle}>Job #{jobDetails.job_id}</Typography>
    </div>
    <div className={classes.spaceBetween}>
      <div>
        <Button className={classes.buttonStyle} color="inherit" size="medium" variant="outlined">
          <AddIcon className={classes.iconStyle}/>New Invoice
        </Button>
      </div>
      <JobStatusSelector/>
    </div>
  </div>);
};

const passActionFooter = (data) => <InvoiceActionFooter data={data}/>;

const SalesInvoices = ({ jobDetails }) => {
  const classes = useStyle();
  return (
    <div className="p-l-24 p-r-24 p-t-24 p-b-24">
      <JobDetailsHeader classes={classes} jobDetails={jobDetails}/>
      <Divider/>

      <div>
        <span className={classes.subHeaderStyle}>Sales & Invoices</span>
        {
          jobDetails.sales.map(data =>
            <Accordion data={data} actionFooter={passActionFooter}/>
          )
        }
      </div>
    </div>
  );
};


export default connect(state => ({
  jobDetails: state.jobDetails.data
}))(SalesInvoices);
