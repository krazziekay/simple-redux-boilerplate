import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import FindInPageIcon from '@material-ui/icons/FindInPage';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 2),
    backgroundColor: '#F7F9FA',
  },
  link: {
    display: 'flex',
    fontSize: 12,
  },
  icon: {
    marginRight: theme.spacing(0.5),
    color: '#2D9CDB',
    width: 16,
    height: 16,
  },
}));

const Breadcrumb = () => {
  useEffect(() => {
  }, []);
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small"/>} aria-label="breadcrumb">
        <Link color="inherit" href="/" className={classes.link}>
          <HomeIcon className={classes.icon}/>Home
        </Link>
        <Link color="inherit" href="/getting-started/installation/" className={classes.link}>
          <FindInPageIcon className={classes.icon}/>Job Search
        </Link>
        <Typography color="textPrimary" className={classes.link}>
          <HomeIcon className={classes.icon}/>Job #123456789
        </Typography>
      </Breadcrumbs>
    </Paper>
  );
};

export default Breadcrumb;
