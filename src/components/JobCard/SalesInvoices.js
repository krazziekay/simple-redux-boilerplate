import React from 'react';
import { makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Accordion from '../../common/Accordion';
import InvoiceActionFooter from '../../common/InvoiceActionFooter';
import { themeStyler } from '../../helper/helper';
import JobDetailsHeader from '../../common/JobDetailsHeader';


const useStyle = makeStyles(theme => themeStyler(theme));


const passActionFooter = (data) => <InvoiceActionFooter data={data}/>;

const SalesInvoices = ({ jobDetails }) => {
  const classes = useStyle();
  return (
    <div className="p-l-24 p-r-24 p-t-12 p-b-12">
      <JobDetailsHeader classes={classes}/>
      <div>
        <div className={classes.headerTitle}>
          <span className={classes.subHeaderStyle}>Sales & Invoices</span>
          <Button className={classes.buttonStyle} color="inherit" size="medium" variant="outlined">
            <AddIcon className={classes.iconStyle}/>New Invoice
          </Button>
        </div>


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
