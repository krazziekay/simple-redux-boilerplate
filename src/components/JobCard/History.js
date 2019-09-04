import React, { useState, useEffect } from 'react';
import JobDetailsHeader from '../../common/JobDetailsHeader';
import { makeStyles } from '@material-ui/core';
import { themeStyler } from '../../helper/helper';

const useStyle = makeStyles(theme => themeStyler(theme));

const History = ({}) => {
  const classes = useStyle();
  useEffect(() => {
  }, []);

  return (
    <div>
      <JobDetailsHeader classes={classes}/>

    </div>
  );
};

export default History;
