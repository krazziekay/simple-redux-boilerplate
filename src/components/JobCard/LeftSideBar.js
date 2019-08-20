import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { topMenuItems, bottomMenuItems } from '../../common/leftSideMenu';
import Divider from '@material-ui/core/Divider';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import * as DrawerStateActions from '../../actions/DrawerStateAction';

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
    fontSize: 12
  },
  bottomMenuListIcons: {
    color: '#5E6366',
    fontSize: 12,
    marginLeft: 14
  }
}));


const LeftSideBar = ({ drawerStateActions, heightStyle }) => {
  useEffect(() => {
  }, []);

  const classes = useStyles();
  return (
    <div>
      { /* For Desktop Views */}
      <Paper style={heightStyle} className="desktop">
        <div className="no-scroll-bar-div left-side-bar ">
          <List className="p-l-12" component="nav" aria-label="main mailbox folders">
            {
              topMenuItems.map(item =>
                <ListItem button onClick={() => drawerStateActions.selectOption(item.id)}>
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
      </Paper>

      { /* For Mobile Views */}
      <div className="left-side-bar mobile">
        <List className="p-l-12" component="nav" aria-label="main mailbox folders">
          {
            topMenuItems.map(item =>
              <ListItem button onClick={() => drawerStateActions.selectOption(item.id)}>
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
    </div>
  );
};

export default connect(state => ({
    drawerState: state.drawerState
  }),
  dispatch => ({
    drawerStateActions: bindActionCreators(DrawerStateActions, dispatch),
  })
)(LeftSideBar);
