import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
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
    padding: theme.spacing(3, 2),
    minWidth: 275,
    minHeight: 375,
    backgroundColor: '#6AB04A'
  },
  temp: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    color: '#fff',
    marginTop: '4%'
  },
  temp1: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    color: '#fff',
    marginTop: '1%'
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
    <Paper className={classes.root}>
      <Typography
        variant='h3'
        className={classes.title}
        style={{ color: '#fff' }}
      >
        CONTACT
      </Typography>
      <Typography variant='h5' className={classes.temp}>
        <Typography variant='h5'> ADDRESS</Typography>
        <Typography variant='h5'>AROUND THE WEB</Typography>
        <Typography variant='h5'> URGENT</Typography>
      </Typography>
      <Divider />
      <Typography
        variant='h5'
        className={classes.temp1}
        style={{ marginLeft: '-5%' }}
      >
        <Typography style={{ marginLeft: '2%' }}>
          <Typography variant='h5'>Silicon Institute of Technology</Typography>
          <Typography variant='h5'>Bhubaneswar-751024, India</Typography>
        </Typography>
        <span style={{ marginLeft: '14%' }}>
          <LinkedInIcon fontSize='large' />
          <GitHubIcon fontSize='large' />
          <FacebookIcon fontSize='large' />
          <InstagramIcon fontSize='large' />
        </span>

        <span
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            marginLeft: '14%'
          }}
        >
          <PhoneIphoneIcon fontSize='large' />
          <WhatsAppIcon fontSize='large' />
          <Typography variant='h5'>+917992302811</Typography>
        </span>
      </Typography>

      <EmailIcon
        fontSize='large'
        style={{ color: '#fff', marginLeft: '80%' }}
      />
      <Typography
        style={{ marginTop: '-2.3%', marginLeft: '83%', color: '#fff' }}
        variant='h6'
      >
        rahul080924@outlook.com
      </Typography>
    </Paper>
  );
}
