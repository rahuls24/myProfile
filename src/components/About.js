import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';
import Grid from '@material-ui/core/Grid';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#6AB04A'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#6AB04A',
    marginLeft: '10%'
  },
  paper1: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#6AB04A'
    // marginLeft: '10%'
  },

  title: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  btn: {
    backgroundColor: '#6AB04A',
    border: '2px solid',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#45CE30',
      color: '#ffffff'
    }
  }
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
      >
        <Grid item xs={12}>
          <Typography
            variant='h3'
            className={classes.title}
            style={{ color: '#fff' }}
          >
            ABOUT
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <Grid
        container
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
      >
        <Grid item xs={12}>
          <Typography
            variant='h5'
            className={classes.title}
            style={{ color: '#fff', marginTop: '1%', marginLeft: '1.7%' }}
          >
            A Quick Introduction !
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction='row'
        justify='space-around'
        alignItems='center'
      >
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} style={{ marginTop: '1%' }}>
            <Typography variant='subtitle1'>
              I am a final year student pursuing BTech in Computer Science and
              Engineering.Development and Travelling kept exciting me always.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} style={{ marginTop: '1%' }}>
            <Typography variant='subtitle1'>
              I employ whatever knowledge I have in solving problems around me.
              I like getting hands dirty with cool technologies and simplifying
              lives...
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paper1} style={{}}>
            <Button
              variant='contained'
              color='default'
              className={classes.btn}
              startIcon={<GetAppIcon />}
              href='https://drive.google.com/file/d/149MQ6ISV0Pj_BWUfLRhnZOnAtk-bCQ_M/view'
              target='_blank'
            >
              Have a look at my Resume
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
