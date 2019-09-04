import moment from 'moment';
import {
  EDIT_JOB_DETAILS, EDIT_JOB_STATUS,
  ERROR_JOB_DETAILS,
  FETCHING_JOB_DETAILS,
  GET_JOB_DETAILS
} from '../constants/JobDetails';

const jobStatus = [
  { id: 1, value: 'New' },
  { id: 2, value: 'Ongoing' },
  { id: 3, value: 'Completed' },
  { id: 4, value: 'Cancelled' },
  { id: 5, value: 'Callback' },
];

const clientTypes = [
  { id: 1, value: 'Landlord' },
  { id: 2, value: 'Tenant' },
  { id: 3, value: 'Owner' },

];
const jobCategories = [
  { id: 1, value: 'Plumbing' },
  { id: 2, value: 'Electrical' },
  { id: 3, value: 'HVAC' },
];
const jobTypes = [
  {
    id: 1,
    category: 'Plumbing',
    types: [
      { id: 1, value: 'Blocked Drain' },
      { id: 2, value: 'Blocked Drain 1' },
      { id: 3, value: 'Blocked Drain 2' },
    ]
  },
  {
    id: 2,
    category: 'Electrical',
    types: [
      { id: 1, value: 'Electrical' },
      { id: 2, value: 'Electrical 1' },
      { id: 3, value: 'Electrical 2' },
    ]
  },
  {
    id: 3,
    category: 'HVAC',
    types: [
      { id: 1, value: 'HVAC' },
      { id: 2, value: 'HVAC 1' },
      { id: 3, value: 'HVAC 2' },
    ]
  }
];

const jobPriorities = [
  { id: 1, value: 'Emergency' },
  { id: 2, value: 'Non-urgent' },
  { id: 3, value: '1 hour Response' },
];
const leadSources = [
  { id: 1, value: 'Lead Source 1' },
  { id: 2, value: 'Lead Source 2' },
  { id: 3, value: 'Lead Source 3' },
];
const calloutFees = [
  { id: 1, value: '$10' },
  { id: 2, value: '$20' },
  { id: 3, value: '$30' },
];


const INITIAL = {
  data: {
    job_id: 1,
    job_title: 'Dummy',
    job_description: 'THIS IS THE DESCRIPTION YO....',
    job_category: 1,
    job_status: 2,
    job_type: 1,
    job_priority: 1,
    lead_source: 1,
    callout_fee: 1,
    client: {
      id: 1,
      first_name: 'Alexander',
      client_type: 1,
      last_name: 'Alexander',
      address: 'Alexander',
      phone: '02 8080 8080',
      mobile: '0404 202 512',
      email: 'somethingemail@somethingemail.com'
    },
    mailing: {
      id: 2,
      first_name: 'Alexander2',
      client_type: 2,
      last_name: 'Alexander2',
      address: 'Alexander2',
      phone: '02 8080 80820',
      mobile: '0404 202 5122',
      email: 'somethingemail@somethingemail2.com'
    },

    all_client_types: clientTypes,
    all_job_category: jobCategories,
    all_job_status: jobStatus,
    all_job_types: jobTypes,
    all_job_priority: jobPriorities,
    all_lead_source: leadSources,
    all_callout_fee: calloutFees,
    estimates: [
      { id: 1, total: 142000, data: 'Quotes #12345 - Estimate title goes here 1 - 27/08-2019 - by Nick K.', sales: [1, 2, 3] },
      { id: 2, total: 142000, data: 'Quotes #12345 - Estimate title goes here 2 - 27/08-2019 - by Nick K.', sales: [1, 2, 3] },
      { id: 3, total: 142000, data: 'Quotes #12345 - Estimate title goes here 3 - 27/08-2019 - by Nick K.', sales: [1, 2, 3] },
    ],
    sales: [
      { id: 1, total: 142000, data: 'Invoice #12345 - Estimate title goes here 1 - 27/08-2019 - by Nick K.', sales: [1, 2, 3] },
      { id: 2, total: 142000, data: 'Invoice #12345 - Estimate title goes here 2 - 27/08-2019 - by Nick K.', sales: [1, 2, 3] },
      { id: 3, total: 142000, data: 'Invoice #12345 - Estimate title goes here 3 - 27/08-2019 - by Nick K.', sales: [1, 2, 3] },
    ],
    payments: [
      {
        id: 1,
        invoice_id: Math.floor(1000 + Math.random() * 9000),
        date: moment().format('DD/MM/YYYY'),
        user: 'User 1',
        payment_type: 'Cash',
        receipt: 1245621,
        amount: 100.75,
        synced: true,
        email_sent: false
      },
      {
        id: 2,
        invoice_id: Math.floor(1000 + Math.random() * 9000),
        date: moment().format('DD/MM/YYYY'),
        user: 'User 2',
        payment_type: 'Cash',
        receipt: 1245621,
        amount: 100.75,
        synced: true,
        email_sent: false
      },
      {
        id: 3,
        invoice_id: Math.floor(1000 + Math.random() * 9000),
        date: moment().format('DD/MM/YYYY'),
        user: 'User 3',
        payment_type: 'Cash',
        receipt: 1245621,
        amount: 100.75,
        synced: true,
        email_sent: false
      },
      {
        id: 4,
        invoice_id: Math.floor(1000 + Math.random() * 9000),
        date: moment().format('DD/MM/YYYY'),
        user: 'User 4',
        payment_type: 'Cash',
        receipt: 1245621,
        amount: 100.75,
        synced: true,
        email_sent: false
      },
      {
        id: 5,
        invoice_id: Math.floor(1000 + Math.random() * 9000),
        date: moment().format('DD/MM/YYYY'),
        user: 'User 5',
        payment_type: 'Cash',
        receipt: 1245621,
        amount: 100.75,
        synced: true,
        email_sent: false
      },
    ],
    credit_notes: [
      {
        id: 1,
        invoice_id: Math.floor(1000 + Math.random() * 9000),
        date: moment().format('DD/MM/YYYY'),
        user: 'User 1',
        payment_type: 'Cash',
        receipt: 1245621,
        amount: 100.75,
        synced: true,
        email_sent: false
      },
      {
        id: 2,
        invoice_id: Math.floor(1000 + Math.random() * 9000),
        date: moment().format('DD/MM/YYYY'),
        user: 'User 2',
        payment_type: 'Cash',
        receipt: 1245621,
        amount: 100.75,
        synced: true,
        email_sent: false
      },
      {
        id: 3,
        invoice_id: Math.floor(1000 + Math.random() * 9000),
        date: moment().format('DD/MM/YYYY'),
        user: 'User 3',
        payment_type: 'Cash',
        receipt: 1245621,
        amount: 100.75,
        synced: true,
        email_sent: false
      },
      {
        id: 4,
        invoice_id: Math.floor(1000 + Math.random() * 9000),
        date: moment().format('DD/MM/YYYY'),
        user: 'User 4',
        payment_type: 'Cash',
        receipt: 1245621,
        amount: 100.75,
        synced: true,
        email_sent: false
      },
      {
        id: 5,
        invoice_id: Math.floor(1000 + Math.random() * 9000),
        date: moment().format('DD/MM/YYYY'),
        user: 'User 5',
        payment_type: 'Cash',
        receipt: 1245621,
        amount: 100.75,
        synced: true,
        email_sent: false
      },
    ],
  },
  fetching: false,
  error: ''
};


const loadJobs = (state, payload) => {
  const fetchingJobs = Object.assign({}, state);
  fetchingJobs.data = payload;
  return fetchingJobs;
};

const fetchingJob = (state) => {
  const fetchingJobs = Object.assign({}, state);
  fetchingJobs.fetching = true;
  return fetchingJobs;
};

const changeJobStatus = (state, newStatus) => {
  const currentJobDetails = Object.assign({}, state);
  currentJobDetails.data.job_status = newStatus;
  return currentJobDetails;
};


const errorsInJob = (obj) => {
  const fetchingJobs = Object.assign({}, obj);
  fetchingJobs.error = 'Oops, something went wrong';
  return fetchingJobs;
};

export default (state = INITIAL, action) => {
  switch (action.type) {
    case GET_JOB_DETAILS:
      return loadJobs(state, action.payload);
    case EDIT_JOB_DETAILS:
      return loadJobs(state, action.payload);
    case FETCHING_JOB_DETAILS:
      return fetchingJob(state);
    case EDIT_JOB_STATUS:
      return changeJobStatus(state, action.payload);
    case ERROR_JOB_DETAILS:
      return errorsInJob(state);
    default:
      return state;
  }
};
