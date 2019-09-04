import React from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Grid from '@material-ui/core/Grid';
import { Colors } from './colors';
import { makeStyles } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { themeStyler } from '../helper/helper';

const useStyle = makeStyles(theme => themeStyler(theme, {
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
