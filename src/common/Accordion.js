import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ChevronRight';
import Typography from '@material-ui/core/Typography';
import StatusLabel from './StatusLabel';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    margin: '18px 0'
  },
  wrapper: {
    margin: '16px 0'
  },
  expansionPanel: {
    flexDirection: 'row-reverse',
    padding: 0
  },
  heading: {
    textOverflow: 'ellipsis',
    wordBreak: 'break-all'
  },
  accordionWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: '0 4px',
    alignItems: 'center'
  },
  labelsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
}));

export default ({ data }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <ExpansionPanel style={{ backgroundColor: expanded === data.id ? '#F1F3F4' : '#fff' }} expanded={expanded === data.id} onChange={handleChange(data.id)}>
          <ExpansionPanelSummary
            className={classes.expansionPanel}
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <div className={classes.accordionWrapper}>
              <Typography className={classes.heading}>{data.data}</Typography>
              <div className={classes.labelsWrapper}>
                <StatusLabel status={false} text="Not sent"/>
                <StatusLabel status={true} text="Sent"/>
                <StatusLabel status={false} text="Not synced"/>
                <StatusLabel status={true} text="Synced"/>
              </div>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
              maximus est, id dignissim quam.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </div>
  );
}
