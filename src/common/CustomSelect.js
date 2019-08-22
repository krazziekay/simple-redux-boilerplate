import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
    textAlign: 'center'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const BLANKFUNCTION = () => {
};

/**
 *
 * @param options => array of options of object {id, value}
 * @param selected => selected object {id, value}
 * @param styles => css
 * @param lowHeight => for changing the height of the Select(changing the padding spaces)
 * @param selectAction => function to handle the click action on the select
 * @returns {*}
 * @constructor
 */
const CustomSelect = ({ name, options, selected, styles, small, selectAction = BLANKFUNCTION }) => {
  // Options
  const classes = useStyles();
  const [values, setValues] = React.useState(selected);

  // For the label
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = (event) => {
    setValues(options.filter(option => option.id === event.target.value)[0]);
    selectAction(event);
  };

  return (
    <span style={styles}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="jobStatus" ref={inputLabel}>
          Job Status
        </InputLabel>
        <Select
          className={small && 'customSelectLowHeight'}
          value={values.id}
          onChange={handleChange}
          input={<OutlinedInput labelWidth={labelWidth} name={name} id={name}/>}
        >
          {options.map(option =>
            <MenuItem value={option.id}>{option.value}</MenuItem>
          )}
        </Select>
      </FormControl>
    </span>
  );
};

export default CustomSelect;
