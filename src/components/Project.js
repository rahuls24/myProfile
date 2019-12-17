import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ProjectList from './ProjectList';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    minHeight: 375,
    backgroundColor: '#487EB0'
  },
  title: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  }
});

export default function Project() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          variant='h3'
          className={classes.title}
          style={{ color: '#fff' }}
        >
          PROJECTS
        </Typography>
        <ProjectList />
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
