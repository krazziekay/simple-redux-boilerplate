import React, { useState } from 'react';

const JobDetails = () => {
  const [details, setDetails] = useState('T');

  return (
    <div>
      {details}
    </div>
  );
};

export default JobDetails;
