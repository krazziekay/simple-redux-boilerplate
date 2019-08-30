import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    margin: '18px 0'
  },
  wrapper: {
    display: 'table',
    marginLeft: 8

  },
  status: {
    display: 'table-cell',
    borderRadius: 4,
    color: '#3E4345',
    fontFamily: 'Roboto',
    fontSize: 14,
    lineHeight: '20px',
    height: '20px',
    padding: '4px 12px 4px 4px',
    overflow: 'hidden',
    textAlign: 'center',
  },
  okStatus: {
    backgroundColor: '#def1e3',
  },
  notOkStatus: {
    backgroundColor: '#fae0de'
  },

  labelIcon: {
    height: 18
  },
  okIconStatus: {
    color: '#2FA84F',
  },
  notOkIconStatus: {
    color: '#EA3D2F'
  },
}));

export default ({ status, text }) => {
  const classes = useStyles();

  return (
    <span className={classes.wrapper}>
      <span className={`${classes.status} ${status ? classes.okStatus : classes.notOkStatus}`}>
        {status ? <CheckCircleIcon className={`${classes.labelIcon} ${classes.okIconStatus}`}/> : <ErrorIcon className={` ${classes.labelIcon} ${classes.notOkIconStatus}`}/>}
        {text}
      </span>
    </span>

  );
};
