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
        defaultValue={data.data.job_title}
        margin="normal"
      />
    </div>
  );
};

export default JobDetails;
