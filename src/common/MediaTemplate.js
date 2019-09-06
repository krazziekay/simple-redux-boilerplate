import React from 'react';
import Card from '@material-ui/core/Card';

const styles = {
  card: {
    padding: 12,
    borderRadius: 10,
    margin: '12px 8px'
  },
  cardIndex: {
    fontWeight: 600,
    float: 'left',
  },
  cardValue: {
    fontWeight: 600,
    float: 'right'
  }
};


const MediaTemplate = ({ index, value, valueColor }) => {
  return (
    <Card style={styles.card}>
      <span style={styles.cardIndex}>{index}</span>
      <span style={styles.cardValue}><span style={{ color: valueColor }}>{value}</span></span>
    </Card>
  );
};

export default MediaTemplate;
