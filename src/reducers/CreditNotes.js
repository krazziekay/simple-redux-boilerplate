import {
  ADD_CREDIT_NOTES,
  FETCH_CREDIT_NOTES
} from '../constants/CreditNotes';
import moment from 'moment';


const fetchCreditNote = () => [
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
    user: 'User 89',
    payment_type: 'Cash',
    receipt: 1245621,
    amount: 100.75,
    synced: true,
    email_sent: false
  },
];

export default (
  state = [],
  action) => {
  switch (action.type) {
    case ADD_CREDIT_NOTES:
      return state;
    case FETCH_CREDIT_NOTES:
      return fetchCreditNote();
    default:
      return state;
  }
};
