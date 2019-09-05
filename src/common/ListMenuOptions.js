import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { makeStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SyncIcon from '@material-ui/icons/Sync';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemText from '@material-ui/core/ListItemText';
import { themeStyler } from '../helper/helper';
import MenuIcon from '@material-ui/icons/MoreVert';


const useStyle = makeStyles(theme => themeStyler(theme, {
  listWrapperStyle: {
    // position: 'relative',
  },
  listStyle: {
    position: 'absolute',
    // top: 0,
    right: 24,
    backgroundColor: '#F7F9FA',
    border: '1px solid #ccc',
    borderRadius: 10,
    margin: '12px 8px',
    zIndex: 1
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
}));

const ListOption = ({ id }) => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyle();

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <div>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div>
          <Button onClick={handleClick}>
            <MenuIcon/>
          </Button>
          {open ? (
            <div className={classes.listWrapperStyle}>
              <List className={classes.listStyle}>
                <ListItem button>
                  <ListItemIcon>
                    <SyncIcon className={classes.bottomMenuListIcons}/>
                  </ListItemIcon>
                  <ListItemText className={classes.bottomMenuList} primary="Sync"/>
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <EditIcon className={classes.bottomMenuListIcons}/>
                  </ListItemIcon>
                  <ListItemText className={classes.bottomMenuList} primary="Edit"/>
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <DeleteIcon className={classes.bottomMenuListIcons}/>
                  </ListItemIcon>
                  <ListItemText className={classes.bottomMenuList} primary="Delete"/>
                </ListItem>
              </List>
            </div>
          ) : null}
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default ListOption;
