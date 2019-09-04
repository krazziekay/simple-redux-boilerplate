import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import PrintIcon from '@material-ui/icons/Print';
import SendIcon from '@material-ui/icons/Send';
import PencilIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core';
import { Colors } from "./colors";

const useStyles = makeStyles(theme => ({
  labelsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    }
  },
  buttonStyle: {
    marginRight: 12,
    borderRadius: 50,
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2)',
    [theme.breakpoints.down('md')]: {
      margin: '12px 8px 0 0'
    }
  },
  iconStyle: {
    color: Colors.primary,
    fontSize: 18,
    marginRight: 8
  },
  bottomOptions: {
    marginTop: 12,
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    }
  },
  successButtonStyle: {
    border: `1px solid ${Colors.success}`,
  },
  dangerButtonStyle: {
    border: `1px solid ${Colors.danger}`,
  },
  successStyle: {
    color: Colors.success,
  },
  dangerStyle: {
    color: Colors.danger,
  }
}));


const FooterActions = ({ data }) => {
  const classes = useStyles();
  console.log('Passed props', data);

  return (
    <div className={classes.bottomOptions}>
      <Button className={classes.buttonStyle} color="inherit" size="medium" variant="outlined">
        <AddIcon className={classes.iconStyle}/>Add Inspection Report
      </Button>
      <Button className={classes.buttonStyle} color="inherit" size="medium" variant="outlined">
        <PrintIcon className={classes.iconStyle}/>Print
      </Button>
      <Button className={classes.buttonStyle} color="inherit" size="medium" variant="outlined">
        <SendIcon className={classes.iconStyle}/>Send
      </Button>
      <Button className={classes.buttonStyle} color="inherit" size="medium" variant="outlined">
        <PencilIcon className={classes.iconStyle}/>Edit
      </Button>
    </div>
  );
};

export default FooterActions;
