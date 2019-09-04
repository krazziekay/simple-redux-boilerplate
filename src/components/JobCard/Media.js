import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import * as MediaActions from './../../actions/MediaActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { themeStyler } from '../../helper/helper';
import JobDetailsHeader from '../../common/JobDetailsHeader';


const useStyle = makeStyles(theme => themeStyler(theme));


const Media = ({ jobDetails, media, fetchMedia }) => {
  const classes = useStyle();
  useEffect(() => {
    fetchMedia();
  }, []);

  return (
    <div className="p-l-24 p-r-24 p-t-12 p-b-12">
      <JobDetailsHeader classes={classes}/>
    </div>
  );
};

export default connect(state => ({
    jobDetails: state.jobDetails.data,
    media: state.media
  }), dispatch => ({
    fetchMedia: bindActionCreators(MediaActions.fetchMedia, dispatch)
  })
)(Media);
