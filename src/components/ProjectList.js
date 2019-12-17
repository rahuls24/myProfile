import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
//import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';

import VisibilityIcon from '@material-ui/icons/Visibility';

//import tileData from './tileData';
const tileData = [
  {
    img: 'https://i.ibb.co/P59m6JH/canva-photo-editor-1.png',
    title: 'NoteTakingApp',
    author: 'React Native',
    link: 'https://github.com/rahuls24/noteApp'
  },
  {
    img: 'https://i.ibb.co/kqF1wwR/Backend-For-Note-Taking.png',
    title: 'NoteTakingApp',
    author: 'NodeJs',
    link: 'https://github.com/rahuls24/Mynote'
  },
  {
    img: 'https://i.ibb.co/Js8TMzQ/pexels-photo-230544.jpg',
    title: 'Ecommerce',
    author: 'ReactJs',
    link: 'https://github.com/rahuls24/EcommerceReact'
  },
  {
    img:
      'https://i.ibb.co/vxCZHGS/u-DSfu-WUz-OEs-Ft-Iy07d-Cr-JCg-WUx-T2-P-N5i-KNZ4-P4o-PRTW4-SHADae78zap-E7-Xud8-HQJk-I-w412-h220-rw.png',
    title: 'WeatherFinder',
    author: 'ReactJs',
    link: 'https://github.com/rahuls24/React-Weather-Finder'
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    //  backgroundColor: theme.palette.background.paper,
    backgroundColor: '#487EB0'
  },
  gridList: {
    width: 500,
    height: 450,
    padding: 10,
    spacing: 10
    // backgroundColor: '#1f81db'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  }
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function ProjectList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile
          key='Subheader'
          cols={2}
          style={{ height: 'auto' }}
        ></GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.link}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>{tile.author}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                  href={tile.link}
                  target='_blank'
                >
                  <VisibilityIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
