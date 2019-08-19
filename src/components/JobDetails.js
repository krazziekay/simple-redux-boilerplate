import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';

const JobDetails = ({ actions, data }) => {
  useEffect(() => {
    actions.fetchJobDetails();
  }, []);

  return (
    <div>
      Title:
      <TextField
        label="Name"
        margin="normal"
      />
      {data.data.job_title}
    </div>
  );
};

export default JobDetails;
