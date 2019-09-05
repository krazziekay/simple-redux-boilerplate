import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { topMenuItems, bottomMenuItems } from '../common/leftSideMenu';
import Divider from '@material-ui/core/Divider';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import * as DrawerStateActions from '../actions/DrawerStateAction';
import { themeStyler } from '../helper/helper';

const useStyle = makeStyles(theme => themeStyler(theme, {
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
    fontSize: 12
  },
  bottomMenuListIcons: {
    color: '#5E6366',
    fontSize: 12,
    marginLeft: 14
  },
  listItem: {
    padding: '8px 0'
  }
}));

const LeftSideBar = ({ drawerState, drawerStateActions, heightStyle }) => {
  const classes = useStyle();

  return (
    <div>
      { /* For Desktop Views */}
      <Paper style={heightStyle} className="desktop">
        <div className="no-vertical-scroll-bar left-side-bar ">
          <List className="p-l-12 p-t-26" component="nav" aria-label="main mailbox folders">
            {
              topMenuItems.map(item =>
                <div className={item.id === drawerState ? 'selected' : ''}>
                  <ListItem className={classes.listItem} button onClick={() => drawerStateActions.selectOption(item.id)}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.title}/>
                  </ListItem>
                </div>
              )
            }
          </List>
          <div>
            <Divider variant="middle"/>
            <Typography className={classes.helpText}>Help & Support</Typography>

            <List className="p-l-12" component="nav" aria-label="main mailbox folders">
              {
                bottomMenuItems.map(item =>
                  <ListItem button className={classes.listItem}>
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
      </Paper>

      { /* For Mobile Views */}
      <div className="left-side-bar mobile">
        <AppBar position="static" color="default">
          <Tabs
            value={drawerState - 1}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            {
              topMenuItems.map(item =>
                <Tab label={item.title} icon={item.icon}
                     onClick={() => drawerStateActions.selectOption(item.id)}/>
              )
            }
          </Tabs>
        </AppBar>
      </div>
    </div>
  );
};

export default connect(
  state => ({
    drawerState: state.drawerState
  }),
  dispatch => ({
    drawerStateActions: bindActionCreators(DrawerStateActions, dispatch),
  })
)(LeftSideBar);
