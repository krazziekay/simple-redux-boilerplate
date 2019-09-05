import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import * as MediaActions from './../../actions/MediaActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { themeStyler } from '../../helper/helper';
import JobDetailsHeader from '../../common/JobDetailsHeader';
import Button from '@material-ui/core/Button';
import UploadIcon from '@material-ui/icons/CloudUpload';


const useStyle = makeStyles(theme => themeStyler(theme));


const Media = ({ jobDetails, media, fetchMedia }) => {
  const classes = useStyle();
  useEffect(() => {
    fetchMedia();
  }, []);

  return (
    <div className="p-l-24 p-r-24 p-t-12 p-b-12">
      <JobDetailsHeader classes={classes}/>

      <div>
        <div className={classes.headerTitle}>
          <span className={classes.subHeaderStyle}>Photos</span>
          <Button className={classes.buttonStyle} color="inherit" size="medium" variant="outlined">
            <UploadIcon className={`${classes.iconStyle} ${classes.primaryStyle}`}/>Upload Photo
          </Button>
        </div>


      </div>
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
