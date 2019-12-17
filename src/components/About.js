import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    minHeight: 375,
    backgroundColor: '#6AB04A'
  },
  btn: {
    backgroundColor: '#6AB04A',
    border: '2px solid',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#45CE30',
      color: '#ffffff'
    },
    // marginTop: '2%',
    // marginLeft: '40%',
    margin: 'auto',
    paddingTop: 12,
    paddingBottom: 12
  },
  title: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  }
});

export default function MyAbout() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          variant='h3'
          className={classes.title}
          style={{ color: '#fff' }}
        >
          ABOUT
        </Typography>
        <Typography
          variant='h6'
          style={{ color: '#fff', marginLeft: '24%', marginRight: '24%' }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
          corporis consequuntur eaque quod, quisquam quidem impedit magni ut cum
          ullam eius sunt atque nulla! Ullam repudiandae tempora voluptate
          reprehenderit omnis.
        </Typography>
        <Typography
          variant='h6'
          style={{ color: '#fff', marginLeft: '24%', marginRight: '24%' }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
          corporis consequuntur eaque quod, quisquam quidem impedit magni ut cum
          ullam eius sunt atque nulla! Ullam repudiandae tempora voluptate
          reprehenderit omnis.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant='contained'
          color='default'
          className={classes.btn}
          startIcon={<GetAppIcon />}
          href='https://drive.google.com/open?id=1UzGFDZ-QydWgsPHeIPyw9k4mB14j-soh'
          target='_blank'
        >
          Have a look at my Resume
        </Button>
      </CardActions>
    </Card>
  );
}
