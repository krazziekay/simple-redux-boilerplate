import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ChevronRight';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import StatusLabel from './StatusLabel';
import { Colors } from './colors';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    margin: '18px 0'
  },
  quickFont: {
    fontFamily: 'Quicksand'
  },
  expandedHeading: {
    color: '#000',
    fontWeight: 500
  },
  wrapper: {
    margin: '16px 0'
  },
  expansionPanel: {
    flexDirection: 'row-reverse',
    padding: 0,
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
    alignItems: 'center',
    color: '#5e6366',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    }
  },
  labelsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    }
  },
  buttonStyle: {
    marginRight: 12,
    borderRadius: 50,
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2)'
  },
  iconStyle: {
    color: Colors.primary,
    fontSize: 18,
    marginRight: 8
  },
  accordionTableWrapper: {
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      padding: '8px 0',
    }
  },
  totalWrapper: {
    margin: '0 12px',
    textAlign: 'right'
  },
  positive: {
    color: '#069697'
  },
  negative: {
    color: '#EA3D2F'
  },
  gray: {
    color: '#5e6366',
  },
  bottomOptions: {
    marginTop: 12,
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    }
  },
  mobileEstimateList: {
    padding: 12
  }
}));

export default ({ data, actionFooter }) => {
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
              <Typography className={` ${expanded === data.id && classes.expandedHeading} ${classes.heading} ${classes.quickFont}`}>{data.data}</Typography>
              <div className={classes.labelsWrapper}>
                <StatusLabel status={false} text="Not sent"/>
                <StatusLabel status text="Sent"/>
                <Typography className={`${expanded === data.id && classes.expandedHeading} ${classes.totalWrapper} ${classes.quickFont}`}>Total: ${data.total.toLocaleString()}</Typography>
              </div>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.accordionTableWrapper}>
            <div className="desktop">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Service Title</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Cost</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.sales.map((row, i) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        Service Title Goes Here
                      </TableCell>
                      <TableCell className={classes.gray}>Description of service goes here</TableCell>
                      <TableCell className={classes.gray} align="right">1</TableCell>
                      <TableCell align="right"><span className={i > 1 ? classes.positive : classes.negative}>$0.75</span></TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell/>
                    <TableCell/>
                    <TableCell className={classes.gray} align="right">Total</TableCell>
                    <TableCell align="right"><span className={classes.positive}>$0.75</span></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className={`${classes.mobileEstimateList} mobile`}>
              {data.sales.map((row, i) => (
                <div>
                  <p>
                    Services Title Goes Here - <span className={i > 1 ? classes.positive : classes.negative}>$0.75</span>
                  </p>
                  <p className={classes.gray}>Description of service goes here</p>
                  <Divider/>
                </div>
              ))}
            </div>
            {actionFooter(data)}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </div>
  );
};
