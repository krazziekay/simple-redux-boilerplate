import React, { useState, useEffect } from 'react';
import QuickActions from './QuickActions';
import { Colors } from '../../common/colors';
import CardInfo from '../../common/cardInfo';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


const styles = {
  rightSideBar: {
    backgroundColor: '#F1F3F4',
    paddingLeft: 12
  },
  jobText: {
    padding: '0 24px'
  }
};

const RightSideBar = ({ heightStyle }) => {

  return (
    <div>
      <Paper style={heightStyle} className="desktop">
        <div className="no-scroll-bar-div" style={styles.rightSideBar}>
          <div className="sales-summary">
            <CardInfo index={'Sold'} value={'$112,500.5'} valueColor={Colors.primary}/>
            <CardInfo index={'Paid'} value={'$12,500.5'} valueColor={Colors.success}/>
            <CardInfo index={'Credit'} value={'$0'} valueColor={Colors.warning}/>
            <CardInfo index={'Balance'} value={'$100,000.00'} valueColor={Colors.danger}/>
          </div>
          <Divider style={styles.divider}/>
          <div style={styles.jobText}>
            <Typography>Plumbing / Blocked Drain</Typography>
            <Typography>
              Average Ticket Sale - <span className="text-muted">$2,586</span>
            </Typography>
            <Typography style={{ color: Colors.primary }}>Total Sold - $2,400</Typography>
            <Typography style={{ color: Colors.success2 }}>Revenue VS Target - 83%</Typography>
          </div>
          <Divider/>
          <QuickActions/>
        </div>
      </Paper>


      <Paper style={heightStyle} className="mobile">
        <div className="" style={styles.rightSideBar}>
          <div className="sales-summary">
            <CardInfo index={'Sold'} value={'$112,500.5'} valueColor={Colors.primary}/>
            <CardInfo index={'Paid'} value={'$12,500.5'} valueColor={Colors.success}/>
            <CardInfo index={'Credit'} value={'$0'} valueColor={Colors.warning}/>
            <CardInfo index={'Balance'} value={'$100,000.00'} valueColor={Colors.danger}/>
          </div>
          <Divider/>
          <div style={styles.jobText}>
            <Typography>Plumbing / Blocked Drain</Typography>
            <Typography>
              Average Ticket Sale - <span className="text-muted">$2,586</span>
            </Typography>
            <Typography style={{ color: Colors.primary }}>Total Sold - $2,400</Typography>
            <Typography style={{ color: Colors.success2 }}>Revenue VS Target - 83%</Typography>
          </div>
          <Divider/>
          <QuickActions/>
        </div>
      </Paper>
    </div>
  );
};

export default RightSideBar;
