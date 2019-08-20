import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core';

const QuickActionsConstant = [
  { title: 'Write a note' },
  { title: 'Book new Visit' },
  { title: 'Add Estimate' },
  { title: 'Add Payment' },
  { title: 'Add Credit Note' },
  { title: 'Upload Pictures' },
  { title: 'Upload Videos' },
  { title: 'Upload Documents' },
  { title: 'Send Email' },
  { title: 'Send SMS' },
];

const useStyles = makeStyles(theme => ({
  menuList: {
    background: '#fff',
    padding: 0,
    margin: '8px 0'
  },
  bottomMenuList: {
    color: '#5E6366',
    fontSize: 14,
    borderBottom: '1px solid #ddd'
  },
}));

const QuickActions = () => {
  const classes = useStyles();
  return (
    <div className="center-align p-r-8">
      <Typography variant="h6">Quick Actions</Typography>
      <List className={classes.menuList} component="nav">
        {
          QuickActionsConstant.map(item =>
            <ListItem className={classes.bottomMenuList} button>
              <ListItemText primary={item.title}/>
            </ListItem>
          )
        }
      </List>
    </div>
  );
};

export default QuickActions;
