import React from 'react';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import PersonIcon from '@material-ui/icons/Person';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PaymentIcon from '@material-ui/icons/Payment';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import TodayIcon from '@material-ui/icons/Today';
import HistoryIcon from '@material-ui/icons/History';
import JobDetails from './../components/JobCard/JobDetails';
import CustomerDetails from './../components/JobCard/CustomerDetails';
import EstimateQuotes from './../components/JobCard/EstimateQuotes';
import SalesInvoices from './../components/JobCard/SalesInvoices';
import Payments from './../components/JobCard/Payments';
import CreditNotes from './../components/JobCard/CreditNotes';
import Media from './../components/JobCard/Media';
import Notes from './../components/JobCard/Notes';
import Visits from './../components/JobCard/Visits';
import History from './../components/JobCard/History';


export const topMenuItems = [
  {
    icon: <BusinessCenterIcon style={{ color: '#2FA84F' }}/>,
    title: 'Job Details',
    body: <JobDetails/>,
    id: 1,
  },
  {
    icon: <PersonIcon style={{ color: '#367BF5' }}/>,
    title: 'Customer Details',
    body: <CustomerDetails/>,
    id: 2,
  },
  {
    icon: <BusinessCenterIcon style={{ color: '#F3AA18' }}/>,
    title: 'Estimates & Quotes',
    body: <EstimateQuotes/>,
    id: 3,
  },
  {
    icon: <AttachMoneyIcon style={{ color: '#EA3D2F' }}/>,
    title: 'Sales & Invoices',
    body: <SalesInvoices/>,
    id: 4,
  },
  {
    icon: <PaymentIcon style={{ color: '#367BF5' }}/>,
    title: 'Payments',
    body: <Payments/>,
    id: 5,
  },
  {
    icon: <MoneyOffIcon style={{ color: '#ea1c96' }}/>,
    title: 'Credit Notes',
    body: <CreditNotes/>,
    id: 6,
  },
  {
    icon: <PermMediaIcon style={{ color: '#EA3D2F' }}/>,
    title: 'Media',
    body: <Media/>,
    id: 7,
  },
  {
    icon: <InsertCommentIcon style={{ color: '#2FA84F' }}/>,
    title: 'Notes',
    body: <Notes/>,
    id: 8,
  },
  {
    icon: <TodayIcon style={{ color: '#F3AA18' }}/>,
    title: 'Visits',
    body: <Visits/>,
    id: 9,
  },
  {
    icon: <HistoryIcon style={{ color: '#367BF5' }}/>,
    title: 'History',
    body: <History/>,
    id: 10
  },
];
export const bottomMenuItems = [
  { title: 'Tutorial' },
  { title: 'Knowledge Base' },
  { title: 'Chat with support' },
  { title: 'Send Feedback' },
];
