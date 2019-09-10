import { topMenuItems } from '../common/leftSideMenu';
import { Colors } from '../common/colors';
import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import BackspaceIcon from '@material-ui/icons/Backspace';
import moment from 'moment';

export const ContentPerMenu = ({ currentMenu }) => {
  return topMenuItems.filter(menu => menu.id === currentMenu)[0].body;
};

export const ObjectGeneratorForCustomSelect = (id, value = '') => ({ id, value });

export const GetAfterUnderscore = str => str.substr(str.indexOf('_') + 1, str.length);

export const GetBeforeUnderscore = str => str.substr(0, str.indexOf('_'));

/**
 * Function to animate scroll
 * @param destination
 * @param duration
 * @param easing
 * @param callback
 * @returns {number|*}
 */
export const scrollIt = (destination, duration = 200, easing = 'linear', callback) => {

  const easings = {
    linear(t) {
      return t;
    },
    easeInQuad(t) {
      return t * t;
    },
    easeOutQuad(t) {
      return t * (2 - t);
    },
    easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic(t) {
      return (--t) * t * t + 1;
    },
    easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart(t) {
      return 1 - (--t) * t * t * t;
    },
    easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
    },
    easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint(t) {
      return 1 + (--t) * t * t * t * t;
    },
    easeInOutQuint(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
    }
  };

  const start = window.pageYOffset;
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

  const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);
    if (callback) {
      callback();
    }
    return;
  }

  function scroll() {
    const now = 'now' in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, ((now - startTime) / duration));
    const timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

    if (window.pageYOffset === destinationOffsetToScroll) {
      if (callback) {
        callback();
      }
      return;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
};

export const getVisitStatus = (status) => {
  // eslint-disable-next-line radix
  switch (parseInt(status)) {
    case 0:
      return (<div className='visit-status-label' style={{
        background: 'rgba(243, 170, 24, 0.23)',
      }}>
        <HourglassEmptyIcon style={{ color: '#F3AA18', fontSize: 18, verticalAlign: 'middle' }}/>&nbsp;<span>Idle</span>
      </div>);
    case 1:
      return (<div className='visit-status-label' style={{
        background: 'rgba(54, 123, 245, 0.23)',
      }}>
        <AccessTimeIcon style={{ color: '#367BF5', fontSize: 18, verticalAlign: 'middle' }}/>&nbsp;<span>In Progress</span>
      </div>);
    case 2:
      return (<div className='visit-status-label' style={{
        background: 'rgba(47, 168, 79, 0.23)',
      }}>
        <EventAvailableIcon style={{ color: '#2FA84F', fontSize: 18, verticalAlign: 'middle' }}/>&nbsp;<span>Completed</span>
      </div>);
    default:
      return (<div className='visit-status-label' style={{
        background: '#F7F9FA',
      }}>
        <AccessTimeIcon style={{ color: '#F3AA18', fontSize: 18, verticalAlign: 'middle' }}/>&nbsp;<span>Idle</span>
      </div>);
  }
};

/**
 * Function to the icons for timeline
 * 1 -> Added
 * 2 -> Edited
 * 3 -> Deleted
 * @param status
 * @returns {*}
 */
export const getTimelineIcons = (status) => {
  switch (parseInt(status)) {
    case 1:
      return <AddIcon/>;
    case 2:
      return <EditIcon/>;
    case 3:
      return <BackspaceIcon/>;
    default:
      break;
  }
};

/**
 * Function to the css for icons for timeline
 * @param status
 * @returns {{color: string, background: string}}
 */
export const getTimelineIconStyle = (status) => {
  switch (parseInt(status)) {
    case 1:
      return { background: Colors.primary, color: '#fff' };
    case 2:
      return { background: Colors.success, color: '#fff' };
    case 3:
      return { background: Colors.danger, color: '#fff' };
    default:
      break;
  }
};

/**
 * Function to display the timeline changes
 * @param item
 * @param collection
 * @param action_type
 * @returns {boolean|any}
 */
export const timelineChangesFormat = (item, collection, actionType) => {
  let v = Object.assign({}, item);
  const syncFlag = {
    0: 'Not Synced',
    1: 'Synced',
  };
  let foreign_key = 'id';
  let foreign_value = 'name';

  // to get primary index
  if (v.table_name === 'job_status') {
    foreign_key = 'job_statusid';
    foreign_value = 'description';
  }
  if (v.table_name === 'invoice_template') {
    foreign_key = 'id';
    foreign_value = 'label';
  }
  if (v.table_name === 'job_priority') {
    foreign_key = 'priority_id';
    foreign_value = 'description';
  }
  if (v.table_name === 'job_type') {
    foreign_key = 'jobtype_id';
    foreign_value = 'description';
  }
  if (v.table_name === 'job_category') {
    foreign_key = 'cat_id';
    foreign_value = 'description';
  }
  if (v.table_name === 'api_ad_source') {
    foreign_key = 'id';
    foreign_value = 'name';
  }
  if (v.table_name === 'setting_transaction_type') {
    foreign_key = 'id';
    foreign_value = 'name';
  }
  if (v.table_name === 'dispatch_status') {
    foreign_key = 'dispatch_id';
    foreign_value = 'dispatch_status';
  }
  if (v.table_name === 'ms_schedule') {
    foreign_value = 'term';
  }


  if (v.value_type === 'date') {
    if (v.old_value) {
      v.old_value = moment(v.old_value).format('Do MMM, YYYY');
    }
    if (v.new_value) {
      v.new_value = moment(v.new_value).format('Do MMM, YYYY');
    }
  }

  if (v.value_type === 'datetime') {
    if (v.old_value) {
      v.old_value = moment(v.old_value).format('Do MMM, YYYY (HH:mm A)');
    }
    v.new_value = moment(v.new_value).format('Do MMM, YYYY (HH:mm A)');
  }

  if (v.value_type === 'time') {
    if (v.old_value) {
      v.old_value = moment(v.old_value).format('LT');
    }
    v.new_value = moment(v.new_value).format('LT');
  }

  if (v.value_type === 'currency') {
    if (v.old_value) {
      v.old_value = parseFloat(v.old_value).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }
    if (v.new_value !== '-') {
      v.new_value = parseFloat(v.new_value).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }
  }

  // Supported by foreign_key and foreign_value to get data from collection object
  if (v.value_type === 'fk_key') {
    try {
      v.new_value = collection[v.table_name].filter(x => x[foreign_key] === v.new_value).map(x => x[foreign_value])[0];
      if (v.old_value) {
        v.old_value = collection[v.table_name].filter(x => x[foreign_key] === v.old_value).map(x => x[foreign_value])[0];
      }
    } catch (error) {
      // console.log('Error: ', error);
      // console.log('Empty Collection Object for ', v.table_name);
    }
  }

  if (v.value_type === 'sync_flag') {
    v.new_value = syncFlag[v.new_value];
    if (v.old_value) {
      v.old_value = syncFlag[v.old_value];
    }
  }

  // For HTML details
  // if (v.value_type === "html") {
  //   v.new_value = '<a href="' + base_url + 'log/view_html/' + v.id + '" target="_blank">Click to View Message</a>';
  // }

  // Not displaying few items
  if (v.field_name === 'Sales Flag'
    || v.field_name === 'Quote Service Id'
    || v.field_name === 'Option ID'
    || v.field_name === 'Scheduler ID'
    || v.field_name === 'Quote Option Id') {
    return false;
  }

  if (v) {
    return (
      <p>
        {parseInt(actionType) === 3 && <span><b>{v.field_name}</b>: {v.old_value}</span>}
        {parseInt(actionType) === 2 && <span><b>{v.field_name}</b>: {v.old_value} => {v.new_value}</span>}
        {parseInt(actionType) === 1 && <span><b>{v.field_name}</b>: {v.new_value}</span>}
      </p>
    );
  }
};


/**
 * CSS styling, with a default theme
 * @param theme
 * @param addedThemes
 * @returns {any}
 */
export const themeStyler = (theme, addedThemes) => {
  const defaultTheme = {
    // Header styles
    headerStyle: {
      fontFamily: 'Quicksand',
      fontSize: 34,
      verticalAlign: 'middle',
      [theme.breakpoints.down('md')]: {
        fontSize: 24,
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 18,
        fontWeight: 'bold',
      }
    },
    subHeaderStyle: {
      fontSize: 24,
      fontWeight: 500,
      [theme.breakpoints.down('sm')]: {
        fontSize: 16,
      }
    },
    headerTitle: {
      display: 'flex',
      verticalAlign: 'middle',
      margin: '16px 0',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        margin: '14px 0',
      },
      [theme.breakpoints.down('sm')]: {
        margin: '12px 0',
      },
      [theme.breakpoints.down('xs')]: {
        margin: '8px 0',
      },
    },
    iconStyle: {
      fontSize: 18,
      marginRight: 8
    },

    // Flex spacing styles
    spaceBetween: {
      display: 'flex',
      justifyContent: 'space-between',
      verticalAlign: 'middle',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column'
      }
    },
    spaceAround: {
      display: 'flex',
      verticalAlign: 'middle',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column'
      }
    },

    // Width styles
    gridWrapper: {
      transition: '0.5s',
      [theme.breakpoints.down('sm')]: {
        width: 'unset',
      }
    },

    // Button styles
    buttonStyle: {
      marginLeft: 12,
      marginRight: 6,
      borderRadius: 50,
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2)',
      [theme.breakpoints.down('md')]: {
        marginTop: 12,
      }
    },
    // for buttons only
    successButtonStyle: {
      border: `1px solid ${Colors.success}`,
    },
    dangerButtonStyle: {
      border: `1px solid ${Colors.danger}`,
    },
    primaryButtonStyle: {
      border: `1px solid ${Colors.primary}`,
    },
    // for icons inside the buttons
    successStyle: {
      color: Colors.success,
    },
    primaryStyle: {
      color: Colors.primary,
    },
    dangerStyle: {
      color: Colors.danger,
    },

    // Color styles
    positive: {
      color: Colors.positive
    },
    negative: {
      color: Colors.danger
    },
    gray: {
      color: Colors.disabled,
    },

    avatar: {
      height: 50,
      width: 50,
      borderRadius: '50%'
    }

  };
  return Object.assign({}, defaultTheme, addedThemes);
};
