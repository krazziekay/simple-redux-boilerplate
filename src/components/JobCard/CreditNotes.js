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


const CreditNotes = ({ jobDetails }) => {
  const classes = useStyle();
  return (
    <div className="p-l-24 p-r-24 p-t-12 p-b-12">
      <JobDetailsHeader classes={classes}/>

      <div className={classes.headerTitle}>
        <span className={classes.subHeaderStyle}>Credit & Refunds</span>
        <Button className={classes.buttonStyle} color="inherit" size="medium" variant="outlined">
          <AddIcon className={`${classes.iconStyle} ${classes.primaryStyle}`}/>New Credit
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
              jobDetails.credit_notes.map(creditNote =>
                <TableRow>
                  <TableCell className={classes.gray}>{creditNote.invoice_id}</TableCell>
                  <TableCell align="center">{creditNote.date}</TableCell>
                  <TableCell align="center" className={classes.gray}>{creditNote.user}</TableCell>
                  <TableCell align="center">{creditNote.payment_type}</TableCell>
                  <TableCell className={classes.gray} align="center">{creditNote.receipt}</TableCell>
                  <TableCell className={classes.positive} align="center">${creditNote.amount}</TableCell>
                  <TableCell>
                    <div className={classes.spaceEvenlyForAllScreens}>
                      <StatusLabel status={creditNote.synced} text={creditNote.synced ? 'Synced' : 'Not Synced'}/>
                      <StatusLabel status={creditNote.email_sent} text={creditNote.email_sent ? 'Sent' : 'Not sent'}/>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    <ListOption id={creditNote.id}/>
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
}))(CreditNotes);
