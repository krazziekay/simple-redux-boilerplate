import React from 'react';
import { makeStyles } from '@material-ui/core';
import JobDetailsHeader from '../../common/JobDetailsHeader';
import { connect } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Accordion from '../../common/Accordion';
import EstimateActionFooter from '../../common/EstimateActionFooter';
import { themeStyler } from '../../helper/helper';

const useStyle = makeStyles(theme => themeStyler(theme));

const passActionFooter = (data) => <EstimateActionFooter data={data}/>;

const EstimateQuotes = ({ jobDetails }) => {
  const classes = useStyle();
  return (
    <div className="p-l-24 p-r-24 p-t-12 p-b-12">
      <JobDetailsHeader classes={classes}/>

      <div>
        <div className={classes.headerTitle}>
          <span className={classes.subHeaderStyle}>Estimates & Quotes</span>
          <Button className={classes.buttonStyle} color="inherit" size="medium" variant="outlined">
            <AddIcon className={classes.iconStyle}/>New Estimate
          </Button>
        </div>
        {
          jobDetails.estimates.map(data =>
            <Accordion data={data} actionFooter={passActionFooter}/>
          )
        }
      </div>
    </div>
  );
};


export default connect(state => ({
  jobDetails: state.jobDetails.data
}))(EstimateQuotes);
