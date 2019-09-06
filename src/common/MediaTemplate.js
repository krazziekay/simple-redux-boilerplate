import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core';
import { themeStyler } from '../helper/helper';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import Grid from '@material-ui/core/Grid';
import { Colors } from './../common/colors';

const useStyle = makeStyles(theme => themeStyler(theme, {
  card: {
    padding: 8,
    borderRadius: 10,
    margin: '12px 8px',
    boxShadow: 'none',
    '&:hover': {
      boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)'
    },
    cursor: 'pointer'
  },
  cardIndex: {
    fontWeight: 600,
    float: 'left',
  },
  cardValue: {
    fontWeight: 600,
    float: 'right'
  },
  image: {
    height: 150,
    width: '100%',
    objectFit: 'contain'
  },
  imageDesc: {
    fontFamily: 'Roboto',
  },
  pdfIconWrapper: {
    textAlign: 'center'
  },
  pdfIcon: {
    fontSize: 75,
    color: Colors.success
  }
}));


const MediaTemplate = ({
                         url = 'https://www.skeduler.com.au/wp-content/uploads/2019/07/revenue_skeduler.png',
                         clickUrl,
                         description,
                         type = 'image'
                       }) => {
  const classes = useStyle();

  const handleClick = () => {
    window.open(clickUrl, '_blank');
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={2}>
      <Card className={classes.card} onClick={handleClick}>
        {
          type === 'image' && <img className={classes.image} src={url} alt=""/>
        }
        {
          type === 'video' &&
          <div className={`${classes.image} video-iframe-wrapper`} dangerouslySetInnerHTML={{ __html: url }}/>
        }
        {
          type === 'document' &&
          <div className={classes.pdfIconWrapper}>
            <PictureAsPdfIcon className={classes.pdfIcon}/>
          </div>
        }
        <p className={classes.imageDesc}>
          {description}
        </p>
      </Card>
    </Grid>
  );
};

export default MediaTemplate;
