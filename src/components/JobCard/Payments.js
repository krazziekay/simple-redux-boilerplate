import React, { useEffect, useState } from 'react';
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
import { fetchPayments } from '../../actions/PaymentActions';
import { bindActionCreators } from 'redux';


const useStyle = makeStyles(theme => themeStyler(theme, {
  spaceEvenlyForAllScreens: {
    display: 'flex',
    justifyContent: 'space-evenly',
    verticalAlign: 'middle',
  },

  overflowOnlyX: {
    overflowX: 'scroll',
    overflowY: 'hidden'
  }
}));


const Payments = ({
                    jobDetails,
                    payments,
                    fetchPayments
                  }) => {
  const classes = useStyle();
  useEffect(() => {
    fetchPayments();
  }, []);
  return (
    <div className="p-l-24 p-r-24 p-t-12 p-b-12">
      <JobDetailsHeader classes={classes}/>

      <div>
        <div className={classes.headerTitle}>
          <span className={classes.subHeaderStyle}>Payments</span>
          <Button className={classes.buttonStyle} color="inherit" size="medium" variant="outlined">
            <AddIcon className={`${classes.iconStyle} ${classes.primaryStyle}`}/>New Payment
          </Button>
        </div>

        <div className={classes.overflowOnlyX}>
          <Table className={`custom-table`} size="small">
            <TableHead>
              <TableRow>
                <TableCell>Invoice</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">User</TableCell>
                <TableCell align="center">Payment Method</TableCell>
                <TableCell align="center">Receipt</TableCell>
                <TableCell align="center">Amount</TableCell>
                <TableCell align="center">Tags</TableCell>
                <TableCell/>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                payments.map(payment =>
                  <TableRow>
                    <TableCell className={classes.gray}>{payment.invoice_id}</TableCell>
                    <TableCell align="center">{payment.date}</TableCell>
                    <TableCell align="center" className={classes.gray}>{payment.user}</TableCell>
                    <TableCell align="center">{payment.payment_type}</TableCell>
                    <TableCell className={classes.gray} align="center">{payment.receipt}</TableCell>
                    <TableCell className={classes.positive} align="center">${payment.amount}</TableCell>
                    <TableCell>
                      <div className={classes.spaceEvenlyForAllScreens}>
                        <StatusLabel status={payment.synced} text={payment.synced ? 'Synced' : 'Not Synced'}/>
                        <StatusLabel status={payment.email_sent} text={payment.email_sent ? 'Sent' : 'Not sent'}/>
                      </div>
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
    </div>
  );
};


export default connect(state => ({
    jobDetails: state.jobDetails.data,
    payments: state.payments
  }), dispatch => ({
    fetchPayments: bindActionCreators(fetchPayments, dispatch)
  })
)(Payments);
