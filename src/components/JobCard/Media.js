import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { Colors } from '../../common/colors';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import JobStatusSelector from '../../common/jobStatusSelector';
import * as MediaActions from './../../actions/MediaActions';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const useStyle = makeStyles(theme => ({
  subHeaderStyle: {
    fontSize: 24,
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    }
  },
  headerStyle: {
    fontFamily: 'Quicksand',
    fontSize: 32,
    verticalAlign: 'middle',
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
      fontWeight: 'bold',

    }
  },
  iconStyle: {
    color: Colors.primary,
    fontSize: 18,
    marginRight: 8
  },
  buttonStyle: {
    marginRight: 12,
    borderRadius: 50,
    border: '1px solid #ccc',
    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2)'
  },
  headerTitle: {
    display: 'flex',
    verticalAlign: 'middle',
  },
  spaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    verticalAlign: 'middle',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  third: {
    width: '30%',
    [theme.breakpoints.down('sm')]: {
      width: 'unset',
    }
  },
  positive: {
    color: '#069697'
  },
  negative: {
    color: '#EA3D2F'
  },
  gray: {
    color: '#5e6366',
  },
  spaceAround: {
    display: 'flex',
    verticalAlign: 'middle',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  }
}));

const JobDetailsHeader = ({ classes, jobDetails }) => {

  return (<div className="job-details-header-container">
    <div>
      <Typography variant="span" className={classes.headerStyle}>Job #{jobDetails.job_id}</Typography>
    </div>
    <div className={classes.spaceBetween}>
      <div>
        <Button className={classes.buttonStyle} color="inherit" size="medium" variant="outlined">
          <AddIcon className={classes.iconStyle}/>New Payment
        </Button>
      </div>
      <JobStatusSelector/>
    </div>
  </div>);
};

const Media = ({ jobDetails, media, fetchMedia }) => {
  const classes = useStyle();
  useEffect(() => {
    fetchMedia();
  }, []);

  return (
    <div className="p-l-24 p-r-24 p-t-12 p-b-12">
    <JobDetailsHeader classes={classes} jobDetails={jobDetails}/>
      <Divider/>
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
