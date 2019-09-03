import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SyncIcon from '@material-ui/icons/Sync';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemText from '@material-ui/core/ListItemText';

const useStyle = makeStyles(theme => ({
  listWrapperStyle: {
    position: 'relative',
  },
  listStyle: {
    position: 'absolute',
    top: 0,
    right: 0,
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
  const [status, setStatus] = useState(false);
  const classes = useStyle();

  return (
    <div>
      <Button onClick={() => setStatus(!status)}>
        <MenuIcon/>
      </Button>
      {
        status &&
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
      }
    </div>
  );
};

export default ListOption;
