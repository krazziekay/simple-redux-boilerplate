import React, { useState, useEffect } from 'react';
import JobDetailsHeader from '../../common/JobDetailsHeader';
import { makeStyles } from '@material-ui/core';
import {
  themeStyler,
  getTimelineIcons,
  getTimelineIconStyle,
  timelineChangesFormat
} from '../../helper/helper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVisits } from '../../actions/TimelineActions';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import moment from 'moment';
import Divider from '@material-ui/core/Divider';

const useStyle = makeStyles(theme => themeStyler(theme, {
  timelineWrapper: {
    background: '#F7F9FA'
  },
  timelineDetails: {
    fontFamily: 'Roboto',
  }
}));


const History = ({
                   jobDetails,
                   timeline,
                   fetchVisits
                 }) => {
  const classes = useStyle();
  useEffect(() => {
    fetchVisits();
  }, []);

  return (
    <div className="p-l-24 p-r-24 p-t-12 p-b-12">
      <JobDetailsHeader classes={classes}/>

      <div className={classes.timelineWrapper}>
        <VerticalTimeline>
          {
            timeline.data.map(event =>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={moment(event.created_at).format('DD MMM, YYYY')}
                iconStyle={getTimelineIconStyle(event.action_type)}
                icon={getTimelineIcons(event.action_type)}
              >
                <h3 className="vertical-timeline-element-title">{event.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{event.user.first_name} {event.user.last_name}</h4>
                <Divider/>
                <div className={classes.timelineDetails}>
                  {event.log_changes.map(change => timelineChangesFormat(change, timeline.collection, event.action_type))}
                </div>
              </VerticalTimelineElement>
            )
          }
        </VerticalTimeline>
      </div>

    </div>
  );
};


export default connect(state => ({
    jobDetails: state.jobDetails.data,
    timeline: state.timeline,
  }), dispatch => ({
    fetchVisits: bindActionCreators(fetchVisits, dispatch),
  })
)(History);
