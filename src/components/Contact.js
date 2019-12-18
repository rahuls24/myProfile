import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#000000'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#000000'
  },

  title: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
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
            CONTACT
          </Typography>
        </Grid>
      </Grid>
      <Grid
        spacing={3}
        container
        direction='row'
        justify='space-around'
        alignItems='center'
      >
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Typography variant='h5'> ADDRESS</Typography>
            <Typography variant='h6'>
              Silicon Institute of Technology
            </Typography>
            <Typography variant='h6'> Bhubaneswar-751024, India</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Typography variant='h5'> AROUND THE WEB</Typography>
            <span style={{}}>
              <LinkedInIcon fontSize='large' />
              <GitHubIcon fontSize='large' />
              <FacebookIcon fontSize='large' />
              <InstagramIcon fontSize='large' />
            </span>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Typography variant='h5'> URGENT</Typography>
            <span>
              <PhoneIphoneIcon fontSize='large' />
              <WhatsAppIcon fontSize='large' />
              +917992302811
            </span>
            <Typography></Typography>
            <EmailIcon fontSize='large' style={{ marginLeft: '11%' }} />
            rahul080924@outlook.com
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
