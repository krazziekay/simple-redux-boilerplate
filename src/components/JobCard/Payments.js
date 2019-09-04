import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import StatusLabel from '../../common/StatusLabel';
import ListOption from '../../common/ListMenuOptions';
import { themeStyler } from '../../helper/helper';
import JobDetailsHeader from '../../common/JobDetailsHeader';

const useStyle = makeStyles(theme => themeStyler(theme));


const Payments = ({ jobDetails }) => {
  const classes = useStyle();
  return (
    <div className="p-l-24 p-r-24 p-t-12 p-b-12">
      <JobDetailsHeader classes={classes}/>

      <div>
        <div className={classes.headerTitle}>
          <span className={classes.subHeaderStyle}>Payments</span>
          <Button className={classes.buttonStyle} color="inherit" size="medium" variant="outlined">
            <AddIcon className={classes.iconStyle}/>New Payment
          </Button>
        </div>

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
