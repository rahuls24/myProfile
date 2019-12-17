import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  myAppBar: {
    background: 'linear-gradient(45deg, #bdc3c7 30%, #2c3e50 90%)'
  },
  Button1: {
    marginRight: theme.spacing(6),
    border: 0,
    borderRadius: 3,
    color: 'white',
    padding: '0 30px',
    height: 35,
    '&:hover': {
      backgroundColor: '#45CE30',
      color: '#ffffff'
    }
  },
  Button2: {
    marginRight: theme.spacing(6),

    border: 0,
    borderRadius: 3,

    color: 'white',
    padding: '0 30px',
    height: 35,
    '&:hover': {
      backgroundColor: '#45CE30',
      color: '#ffffff'
    }
  },
  title: {
    flexGrow: 1
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.myAppBar}>
        <Toolbar>
          <Typography
            variant='h6'
            className={classes.title}
            style={{ color: '#586776' }}
          >
            Home
          </Typography>
          <Button color='inherit' className={classes.Button1} style={{}}>
            ABOUT
          </Button>
          <Button color='inherit' className={classes.Button2}>
            PROJECT
          </Button>
          <Button color='inherit' className={classes.Button2}>
            CONTACT
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
