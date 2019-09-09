import React, { useState, useEffect } from 'react';
import JobDetailsHeader from '../../common/JobDetailsHeader';
import { makeStyles } from '@material-ui/core';
import { themeStyler } from '../../helper/helper';
import { connect } from 'react-redux';
import { addVisits, fetchVisits } from '../../actions/VisitsActions';
import { bindActionCreators } from 'redux';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import { getVisitStatus } from '../../helper/helper';

const useStyle = makeStyles(theme => themeStyler(theme, {
  visitWrapper: {
    fontFamily: 'Roboto',
    backgroundColor: '#F7F9FA',
    borderRadius: 4,
    margin: 8,
    padding: 8,
  },
  visitDetails: {
    marginLeft: 8
  },
  smallFont: {
    fontSize: 14
  },

}));

const VisitCard = ({ visit, classes }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <div className={classes.visitWrapper}>
        <div className={classes.spaceAround}>
          <img className={classes.avatar} src="https://app.skeduler.com.au/upload/users/prof-picture-unassigned.jpg" alt=""/>
          <div className={classes.visitDetails}>
            <div>{visit.first_name} {visit.last_name}</div>
            <div className={`p-t-8 ${classes.gray} ${classes.smallFont}`}>
              {moment(visit.job_starttime).format('ddd, D MMMM YYYY')}
            </div>
            <div className={`p-t-8 ${classes.successStyle} ${classes.smallFont}`}>
              {moment(visit.job_starttime).format('H:MM A')} -
              {moment(visit.job_endtime).format('H:MM A')}
            </div>
            <div className={`p-t-8 ${classes.gray} ${classes.smallFont}`}>{visit.visit_note ? visit.visit_note : '-'}</div>
          </div>
        </div>
        <div className={`p-t-8  ${classes.smallFont} center-align`}>{getVisitStatus(visit.jsa_check)}</div>
      </div>
    </Grid>
  );
};

const Visits = ({
                  visits,
                  addVisits,
                  fetchVisits
                }) => {
  const classes = useStyle();

  useEffect(() => {
    fetchVisits();
  }, []);

  return (
    <div className="p-l-24 p-r-24 p-t-12 p-b-12">
      <JobDetailsHeader classes={classes}/>
      <Grid container>
        {
          visits.length && visits.map(visit =>
            <VisitCard classes={classes} visit={visit}/>
          )
        }
      </Grid>
    </div>
  );
};


export default connect(state => ({
    jobDetails: state.jobDetails.data,
    visits: state.visits,
  }), dispatch => ({
    addVisits: bindActionCreators(addVisits, dispatch),
    fetchVisits: bindActionCreators(fetchVisits, dispatch),
  })
)(Visits);
