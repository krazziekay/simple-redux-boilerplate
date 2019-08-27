import React from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Grid from '@material-ui/core/Grid';
import { Colors } from './colors';
import { makeStyles } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

const useStyle = makeStyles(theme => ({
  actionButtons: {
    textAlign: 'right',
    padding: '18px 0'
  },
  cancelIcon: {
    color: Colors.danger,
    fontSize: 18,
    marginRight: 8
  },
  saveIcon: {
    color: Colors.success,
    fontSize: 18,
    marginRight: 8
  },
  buttonStyle: {
    marginLeft: 12,
    borderRadius: 50,
    border: '1px solid #ccc',
    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2)'
  }
}));


const ActionButtons = ({ onCancel, onSave }) => {
  const classes = useStyle();
  return (<Grid item xs={12} className={classes.actionButtons}>
    <Button className={classes.buttonStyle} onClick={onCancel} color="inherit" size="medium" variant="outlined">
      <ClearIcon className={classes.cancelIcon}/>Cancel
    </Button>
    <Button className={classes.buttonStyle} onClick={onSave} color="inherit" size="medium" variant="outlined">
      <SaveIcon className={classes.saveIcon}/>Save
    </Button>
  </Grid>);
};

export default ActionButtons;
