import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import * as MediaActions from './../../actions/MediaActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { themeStyler } from '../../helper/helper';
import JobDetailsHeader from '../../common/JobDetailsHeader';
import MediaTemplate from '../../common/MediaTemplate';
import Button from '@material-ui/core/Button';
import UploadIcon from '@material-ui/icons/CloudUpload';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyle = makeStyles(theme => themeStyler(theme));


const Media = ({
                 jobDetails,
                 images,
                 videos,
                 documents,
                 fetchImages,
                 fetchVideos,
                 fetchDocuments
               }) => {
    const [tab, setTab] = useState(0);
    const classes = useStyle();
    useEffect(() => {
      fetchImages();
      fetchVideos();
      fetchDocuments();
    }, []);

    const handleChange = (event, newValue) => {
      setTab(newValue);
    }

    return (
      <div className="p-l-24 p-r-24 p-t-12 p-b-12">
        <JobDetailsHeader classes={classes}/>

        <div>
          <Tabs
            value={tab}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Pictures" id="scrollable-force-tabpanel-0" aria-controls="scrollable-force-tabpanel-0"/>
            <Tab label="Videos" id="scrollable-force-tabpanel-1" aria-controls="scrollable-force-tabpanel-1"/>
            <Tab label="Documents" id="scrollable-force-tabpanel-2" aria-controls="scrollable-force-tabpanel-2"/>
          </Tabs>

          {/*Pictures*/}
          {
            tab === 0 && <div>
              <div className={classes.headerTitle}>
                <span className={classes.subHeaderStyle}>Photos</span>
                <Button className={classes.buttonStyle} color="inherit" size="medium" variant="outlined">
                  <UploadIcon className={`${classes.iconStyle} ${classes.primaryStyle}`}/>Upload Photo
                </Button>
              </div>
              <Grid container>
                {
                  images.map(image =>
                    <MediaTemplate url={image.public_url} clickUrl={image.public_url} description={image.description} type="image"/>
                  )
                }
              </Grid>

            </div>
          }

          {/*Videos*/}
          {
            tab === 1 && <div>
              <div className={classes.headerTitle}>
                <span className={classes.subHeaderStyle}>Videos</span>
                <Button className={classes.buttonStyle} color="inherit" size="medium" variant="outlined">
                  <UploadIcon className={`${classes.iconStyle} ${classes.primaryStyle}`}/>Upload Video
                </Button>
              </div>
              <Grid container>
                {
                  videos.map(video =>
                    <MediaTemplate url={video.vimeo_embed_html} clickUrl={video.link} description={video.description} type="video"/>
                  )
                }
              </Grid>
            </div>
          }

          {/*Documents*/}
          {
            tab === 2 && <div>
              <div className={classes.headerTitle}>
                <span className={classes.subHeaderStyle}>Documents</span>
                <Button className={classes.buttonStyle} color="inherit" size="medium" variant="outlined">
                  <UploadIcon className={`${classes.iconStyle} ${classes.primaryStyle}`}/>Upload Video
                </Button>
              </div>
              <Grid container>
                {
                  documents.map(document =>
                    <MediaTemplate url={document.public_url} clickUrl={document.public_url} description={document.description} type="document"/>
                  )
                }
              </Grid>
            </div>
          }

        </div>
      </div>
    );
  }
;

export default connect(state => ({
    jobDetails: state.jobDetails.data,
    images: state.media.images,
    videos: state.media.videos,
    documents: state.media.documents
  }), dispatch => ({
    fetchImages: bindActionCreators(MediaActions.fetchImages, dispatch),
    fetchVideos: bindActionCreators(MediaActions.fetchVideos, dispatch),
    fetchDocuments: bindActionCreators(MediaActions.fetchDocuments, dispatch)
  })
)(Media);
