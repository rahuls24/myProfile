import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Typed from 'react-typed';
import Particles from 'react-particles-js';
const useStyles = makeStyles({
  card: {
    minWidth: 275,
    minHeight: 375,
    backgroundColor: '#487EB0',
    zIndex: 2
  },
  bigAvatar: {
    width: 150,
    height: 150,
    margin: 'auto',
    //marginLeft: '44%',
    marginTop: '-20%'
  }
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Particles
        style={{ zIndex: 1, maxHeight: 375 }}
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3
              }
            },
            line_linked: {
              enable: false
            },
            move: {
              random: true,
              speed: 1,
              direction: 'top',
              out_mode: 'out'
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'bubble'
              },
              onclick: {
                enable: true,
                mode: 'repulse'
              }
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0
              },
              repulse: {
                distance: 400,
                duration: 4
              }
            }
          }
        }}
      />
      <CardContent style={{ zIndex: 4 }}>
        <Avatar src={require('./dp.png')} className={classes.bigAvatar} />
        <Typography variant='h3' style={{ color: '#fff', textAlign: 'center' }}>
          <Typed strings={['Rahul Kumar']} typeSpeed={100} />
        </Typography>
      </CardContent>

      <CardActions></CardActions>
    </Card>
  );
}
