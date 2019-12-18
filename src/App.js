import React from 'react';
import Header from './components/Header';
import DisplayPic from './components/DisplayPic';

import MyAbout from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <DisplayPic />
        </Grid>
        <Grid item xs={12}>
          <MyAbout />
        </Grid>
        <Grid item xs={12}>
          <Project />
        </Grid>
        <Grid item xs={12}>
          <Contact />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}
