import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import PrintIcon from '@material-ui/icons/Print';
import SendIcon from '@material-ui/icons/Send';
import PencilIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core';
import { themeStyler } from '../helper/helper';

const useStyle = makeStyles(theme => themeStyler(theme, {
  labelsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    }
  },
  bottomOptions: {
    marginTop: 12,
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
    }
  },
}));


const FooterActions = ({ data }) => {
  const classes = useStyle();
  console.log('Passed props', data);

  return (
    <div className={classes.bottomOptions}>
      <Button className={classes.buttonStyle} color="inherit" size="medium" variant="outlined">
        <AddIcon className={`${classes.iconStyle} ${classes.primaryStyle}`}/>Add Inspection Report
      </Button>
      <Button className={classes.buttonStyle} color="inherit" size="medium" variant="outlined">
        <PrintIcon className={`${classes.iconStyle} ${classes.primaryStyle}`}/>Print
      </Button>
      <Button className={classes.buttonStyle} color="inherit" size="medium" variant="outlined">
        <SendIcon className={`${classes.iconStyle} ${classes.primaryStyle}`}/>Send
      </Button>
      <Button className={classes.buttonStyle} color="inherit" size="medium" variant="outlined">
        <PencilIcon className={`${classes.iconStyle} ${classes.primaryStyle}`}/>Edit
      </Button>
    </div>
  );
};

export default FooterActions;
