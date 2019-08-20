import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Fab from '@material-ui/core/Fab';
import CreateIcon from '@material-ui/icons/Create';
import { Colors } from '../../common/colors';
import CustomSelect from './../../common/CustomSelect';

const style = {
  headerStyle: {
    fontFamily: 'Quicksand',
    fontSize: 34,
    verticalAlign: 'middle'
  },
  iconStyle: {
    color: Colors.success,
    fontSize: 18,
    marginRight: 8
  },
  selectStyle: {
    float: 'right',
    height: 32
  },
};

const JOBSTATUSES = [
  { id: 1, value: 'New' },
  { id: 2, value: 'Ongoing' },
  { id: 3, value: 'Completed' },
  { id: 4, value: 'Cancelled' },
  { id: 5, value: 'Callback' },
];

const JobDetails = ({}) => {
  return (
    <div className="p-l-24 p-r-24 p-t-24 p-b-24">
      <div>
        <Typography variant="span" style={style.headerStyle}>Job #12345</Typography>
        <Fab className="m-l-32" color="inherit" size="medium" variant="outlined">
          <CreateIcon style={style.iconStyle}/>Edit
        </Fab>
        <CustomSelect styles={style.selectStyle} options={JOBSTATUSES} selected={JOBSTATUSES[2]}/>
      </div>
      <Divider variant="middle"/>

    </div>
  );
};

export default JobDetails;
