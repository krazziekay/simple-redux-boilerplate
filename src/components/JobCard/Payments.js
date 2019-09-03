import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Colors } from '../../common/colors';
import Typography from '@material-ui/core/Typography';
import JobStatusSelector from '../../common/jobStatusSelector';
import { connect } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import MenuIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import StatusLabel from '../../common/StatusLabel';
import ListOption from "../../common/ListMenuOptions";

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
  positive: {
    color: '#069697'
  },
  negative: {
    color: '#EA3D2F'
  },
  gray: {
    color: '#5e6366',
  },
  spaceAround: {
    display: 'flex',
    verticalAlign: 'middle',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  }
}));


const JobDetailsHeader = ({ classes, jobDetails }) => {

  return (<div className="job-details-header-container">
    <div>
      <Typography variant="span" className={classes.headerStyle}>Job #{jobDetails.job_id}</Typography>
    </div>
    <div className={classes.spaceBetween}>
      <div>
        <Button className={classes.buttonStyle} color="inherit" size="medium" variant="outlined">
          <AddIcon className={classes.iconStyle}/>New Payment
        </Button>
      </div>
      <JobStatusSelector/>
    </div>
  </div>);
};

const Payments = ({ jobDetails }) => {
  const classes = useStyle();
  return (
    <div className="p-l-24 p-r-24 p-t-24 p-b-24">
      <JobDetailsHeader classes={classes} jobDetails={jobDetails}/>
      <Divider/>

      <div>
        <span className={classes.subHeaderStyle}>Payments</span>
        <Table className={`custom-table`} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Invoice</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell>Receipt</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Tags</TableCell>
              <TableCell/>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              jobDetails.payments.map(payment =>
                <TableRow>
                  <TableCell className={classes.gray}>{payment.invoice_id}</TableCell>
                  <TableCell>{payment.date}</TableCell>
                  <TableCell className={classes.gray}>{payment.user}</TableCell>
                  <TableCell>{payment.payment_type}</TableCell>
                  <TableCell className={classes.gray}>{payment.receipt}</TableCell>
                  <TableCell className={classes.positive}>${payment.amount}</TableCell>
                  <TableCell>
                    <StatusLabel status={payment.synced} text={payment.synced ? 'Synced' : 'Not Synced'}/>
                    <StatusLabel status={payment.email_sent} text={payment.email_sent ? 'Sent' : 'Not sent'}/>
                  </TableCell>
                  <TableCell align="right">
                    <ListOption id={payment.id}/>
                  </TableCell>
                </TableRow>
              )
            }
          </TableBody>
        </Table>
      </div>
    </div>
  );
};


export default connect(state => ({
  jobDetails: state.jobDetails.data
}))(Payments);
