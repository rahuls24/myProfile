import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  bigAvatar: {
    width: 60,
    height: 60
  }
}));

export default function MyAvatar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
      <Avatar
        alt='Remy Sharp'
        src='/static/images/avatar/1.jpg'
        className={classes.bigAvatar}
      />
      <Typography
        variant='h6'
        className={classes.title}
        style={{ color: '#fff' }}
      >
        Home
      </Typography>
    </div>
  );
}
