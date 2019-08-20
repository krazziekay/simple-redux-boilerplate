import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import PersonIcon from '@material-ui/icons/Person';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PaymentIcon from '@material-ui/icons/Payment';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import TodayIcon from '@material-ui/icons/Today';
import HistoryIcon from '@material-ui/icons/History';
import Divider from '@material-ui/core/Divider';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  bottom: {
    fontWeight: 'bold'
  },
  helpText: {
    color: '#919699',
    fontWeight: 'bolder',
    fontSize: 16,
    marginTop: 16,
    textAlign: 'center'
  },
  bottomMenuList: {
    color: '#5E6366',
    fontSize: 14
  },
  bottomMenuListIcons: {
    color: '#5E6366',
    fontSize: 14,
    marginLeft: 14
  }
}));

const topMenuItems = [
  {
    icon: <BusinessCenterIcon style={{ color: '#2FA84F' }}/>,
    title: 'Job Details'
  },
  {
    icon: <PersonIcon style={{ color: '#367BF5' }}/>,
    title: 'Customer Details'
  },
  {
    icon: <BusinessCenterIcon style={{ color: '#F3AA18' }}/>,
    title: 'Estimates & Quotes'
  },
  {
    icon: <AttachMoneyIcon style={{ color: '#EA3D2F' }}/>,
    title: 'Sales & Invoices'
  },
  {
    icon: <PaymentIcon style={{ color: '#367BF5' }}/>,
    title: 'Payments'
  },
  {
    icon: <MoneyOffIcon style={{ color: '#ea1c96' }}/>,
    title: 'Credit Notes'
  },
  {
    icon: <PermMediaIcon style={{ color: '#EA3D2F' }}/>,
    title: 'Media'
  },
  {
    icon: <InsertCommentIcon style={{ color: '#2FA84F' }}/>,
    title: 'Notes'
  },
  {
    icon: <TodayIcon style={{ color: '#F3AA18' }}/>,
    title: 'Visits'
  },
  {
    icon: <HistoryIcon style={{ color: '#367BF5' }}/>,
    title: 'History'
  },
];
const bottomMenuItems = [
  { title: 'Tutorial' },
  { title: 'Knowledge Base' },
  { title: 'Chat with support' },
  { title: 'Send Feedback' },
];

const LeftSideBar = ({ actions, data }) => {
  useEffect(() => {
  }, []);

  const classes = useStyles();
  return (
    <div className="no-scroll-bar-div left-side-bar">
      <List className="p-l-12" component="nav" aria-label="main mailbox folders">
        {
          topMenuItems.map(item =>
            <ListItem button>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title}/>
            </ListItem>
          )
        }
      </List>
      <div>
        <Divider variant="middle"/>
        <Typography className={classes.helpText}>Help & Support</Typography>

        <List className="p-l-12" component="nav" aria-label="main mailbox folders">
          {
            bottomMenuItems.map(item =>
              <ListItem button>
                <ListItemIcon>
                  <FiberManualRecordIcon className={classes.bottomMenuListIcons}/>
                </ListItemIcon>
                <ListItemText className={classes.bottomMenuList} primary={item.title}/>
              </ListItem>
            )
          }
        </List>
      </div>
    </div>
  );
};

export default LeftSideBar;
