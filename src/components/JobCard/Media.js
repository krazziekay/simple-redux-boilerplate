import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import * as MediaActions from './../../actions/MediaActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { themeStyler } from '../../helper/helper';
import JobDetailsHeader from '../../common/JobDetailsHeader';
import Button from '@material-ui/core/Button';
import UploadIcon from '@material-ui/icons/CloudUpload';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const useStyle = makeStyles(theme => themeStyler(theme));

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Media = ({ jobDetails, media, fetchMedia }) => {
  const classes = useStyle();
  useEffect(() => {
    fetchMedia();
  }, []);

  return (
    <div className="p-l-24 p-r-24 p-t-12 p-b-12">
      <JobDetailsHeader classes={classes}/>

      <div>

        {/*Pictures*/}
        <div>
          <div className={classes.headerTitle}>
            <span className={classes.subHeaderStyle}>Photos</span>
            <Button className={classes.buttonStyle} color="inherit" size="medium" variant="outlined">
              <UploadIcon className={`${classes.iconStyle} ${classes.primaryStyle}`}/>Upload Photo
            </Button>
          </div>
          <Carousel responsive={responsive}>
            <div style={{ height: 200, width: 200, margin: 12, border: '1px solid red' }}>Item 1</div>
            <div style={{ height: 200, width: 200, margin: 12, border: '1px solid green' }}>Item 2</div>
            <div style={{ height: 200, width: 200, margin: 12, border: '1px solid blue' }}>Item 3</div>
            <div style={{ height: 200, width: 200, margin: 12, border: '1px solid yellow' }}>Item 4</div>
            <div style={{ height: 200, width: 200, margin: 12, border: '1px solid red' }}>Item 1</div>
            <div style={{ height: 200, width: 200, margin: 12, border: '1px solid green' }}>Item 2</div>
            <div style={{ height: 200, width: 200, margin: 12, border: '1px solid blue' }}>Item 3</div>
            <div style={{ height: 200, width: 200, margin: 12, border: '1px solid yellow' }}>Item 4</div>
            <div style={{ height: 200, width: 200, margin: 12, border: '1px solid red' }}>Item 1</div>
            <div style={{ height: 200, width: 200, margin: 12, border: '1px solid green' }}>Item 2</div>
            <div style={{ height: 200, width: 200, margin: 12, border: '1px solid blue' }}>Item 3</div>
            <div style={{ height: 200, width: 200, margin: 12, border: '1px solid yellow' }}>Item 4</div>
          </Carousel>
        </div>

        <hr/>

        {/*Videos*/}
        <div>
          <div className={classes.headerTitle}>
            <span className={classes.subHeaderStyle}>Videos</span>
            <Button className={classes.buttonStyle} color="inherit" size="medium" variant="outlined">
              <UploadIcon className={`${classes.iconStyle} ${classes.primaryStyle}`}/>Upload Video
            </Button>
          </div>
        </div>
        <hr/>

        {/*Documents*/}
        <div>
          <div className={classes.headerTitle}>
            <span className={classes.subHeaderStyle}>Videos</span>
            <Button className={classes.buttonStyle} color="inherit" size="medium" variant="outlined">
              <UploadIcon className={`${classes.iconStyle} ${classes.primaryStyle}`}/>Upload Video
            </Button>
          </div>
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
