import {
  FETCH_TIMELINE
} from '../constants/Timeline';

const fetchTimeline = () => {
  return [
    {
      'id': 3351,
      'job_id': 2161,
      'action_type': 2,
      'title': 'Visit Update',
      'description': null,
      'created_at': '2019-09-03 10:06:47',
      'user_id': 2,
      'log_priority': 3,
      'log_changes': [{
        'id': 11131,
        'log_action_id': 3351,
        'field_name': 'Dispatch Status',
        'old_value': '1',
        'new_value': '2',
        'value_type': 'fk_key',
        'table_name': 'dispatch_status'
      }],
      'user': {
        'id': 2,
        'email': 'demo2@skeduler.com.au',
        'remember_code': null,
        'active': 1,
        'first_name': 'Petras',
        'last_name': 'Kemmer',
        'company': '0',
        'phone': '0422 222 222',
        'photo': '',
        'address': null
      }
    }, {
      'id': 3350,
      'job_id': 2161,
      'action_type': 1,
      'title': 'Add Ongoing Job',
      'description': null,
      'created_at': '2019-09-03 10:06:41',
      'user_id': 2,
      'log_priority': 3,
      'log_changes': [{
        'id': 11126,
        'log_action_id': 3350,
        'field_name': 'Start Time',
        'old_value': null,
        'new_value': '2019-09-03 10:00:00',
        'value_type': 'datetime',
        'table_name': 'scheduler'
      }, {
        'id': 11127,
        'log_action_id': 3350,
        'field_name': 'End Time',
        'old_value': null,
        'new_value': '2019-09-03 12:00:00',
        'value_type': 'datetime',
        'table_name': 'scheduler'
      }, {
        'id': 11128,
        'log_action_id': 3350,
        'field_name': 'Technician',
        'old_value': null,
        'new_value': '23',
        'value_type': 'fk_key',
        'table_name': 'technicians'
      }, {
        'id': 11129,
        'log_action_id': 3350,
        'field_name': 'Technician',
        'old_value': null,
        'new_value': 'Mike',
        'value_type': 'default',
        'table_name': 'Technician'
      }, {
        'id': 11130,
        'log_action_id': 3350,
        'field_name': 'Dispatch Status',
        'old_value': null,
        'new_value': '1',
        'value_type': 'fk_key',
        'table_name': 'dispatch_status'
      }],
      'user': {
        'id': 2,
        'email': 'demo2@skeduler.com.au',
        'remember_code': null,
        'active': 1,
        'first_name': 'Petras',
        'last_name': 'Kemmer',
        'company': '0',
        'phone': '0422 222 222',
        'photo': '',
        'address': null
      }
    }, {
      'id': 3106,
      'job_id': 2161,
      'action_type': 3,
      'title': 'Delete Visit',
      'description': null,
      'created_at': '2019-08-09 13:33:36',
      'user_id': 2,
      'log_priority': 1,
      'log_changes': [{
        'id': 10430,
        'log_action_id': 3106,
        'field_name': 'Start Time',
        'old_value': '2019-08-09 07:00:00',
        'new_value': '-',
        'value_type': 'datetime',
        'table_name': 'scheduler'
      }, {
        'id': 10431,
        'log_action_id': 3106,
        'field_name': 'End Time',
        'old_value': '2019-08-09 09:00:00',
        'new_value': '-',
        'value_type': 'datetime',
        'table_name': 'scheduler'
      }, {
        'id': 10432,
        'log_action_id': 3106,
        'field_name': 'Technician',
        'old_value': '24',
        'new_value': '-',
        'value_type': 'fk_key',
        'table_name': 'technicians'
      }, {
        'id': 10433,
        'log_action_id': 3106,
        'field_name': 'Technician',
        'old_value': 'Jerrold',
        'new_value': '-',
        'value_type': 'default',
        'table_name': 'Technician'
      }, {
        'id': 10434,
        'log_action_id': 3106,
        'field_name': 'Dispatch Status',
        'old_value': '1',
        'new_value': '-',
        'value_type': 'fk_key',
        'table_name': 'dispatch_status'
      }],
      'user': {
        'id': 2,
        'email': 'demo2@skeduler.com.au',
        'remember_code': null,
        'active': 1,
        'first_name': 'Petras',
        'last_name': 'Kemmer',
        'company': '0',
        'phone': '0422 222 222',
        'photo': '',
        'address': null
      }
    }, {
      'id': 3098,
      'job_id': 2161,
      'action_type': 1,
      'title': 'Add Ongoing Job',
      'description': null,
      'created_at': '2019-08-09 11:24:13',
      'user_id': 2,
      'log_priority': 3,
      'log_changes': [{
        'id': 10394,
        'log_action_id': 3098,
        'field_name': 'Start Time',
        'old_value': null,
        'new_value': '2019-08-09 07:30:00',
        'value_type': 'datetime',
        'table_name': 'scheduler'
      }, {
        'id': 10395,
        'log_action_id': 3098,
        'field_name': 'End Time',
        'old_value': null,
        'new_value': '2019-08-09 09:30:00',
        'value_type': 'datetime',
        'table_name': 'scheduler'
      }, {
        'id': 10396,
        'log_action_id': 3098,
        'field_name': 'Technician',
        'old_value': null,
        'new_value': '23',
        'value_type': 'fk_key',
        'table_name': 'technicians'
      }, {
        'id': 10397,
        'log_action_id': 3098,
        'field_name': 'Technician',
        'old_value': null,
        'new_value': 'Mike',
        'value_type': 'default',
        'table_name': 'Technician'
      }, {
        'id': 10398,
        'log_action_id': 3098,
        'field_name': 'Dispatch Status',
        'old_value': null,
        'new_value': '1',
        'value_type': 'fk_key',
        'table_name': 'dispatch_status'
      }],
      'user': {
        'id': 2,
        'email': 'demo2@skeduler.com.au',
        'remember_code': null,
        'active': 1,
        'first_name': 'Petras',
        'last_name': 'Kemmer',
        'company': '0',
        'phone': '0422 222 222',
        'photo': '',
        'address': null
      }
    }, {
      'id': 3097,
      'job_id': 2161,
      'action_type': 1,
      'title': 'Add Ongoing Job',
      'description': null,
      'created_at': '2019-08-09 11:24:10',
      'user_id': 2,
      'log_priority': 3,
      'log_changes': [{
        'id': 10389,
        'log_action_id': 3097,
        'field_name': 'Start Time',
        'old_value': null,
        'new_value': '2019-08-09 07:00:00',
        'value_type': 'datetime',
        'table_name': 'scheduler'
      }, {
        'id': 10390,
        'log_action_id': 3097,
        'field_name': 'End Time',
        'old_value': null,
        'new_value': '2019-08-09 09:00:00',
        'value_type': 'datetime',
        'table_name': 'scheduler'
      }, {
        'id': 10391,
        'log_action_id': 3097,
        'field_name': 'Technician',
        'old_value': null,
        'new_value': '24',
        'value_type': 'fk_key',
        'table_name': 'technicians'
      }, {
        'id': 10392,
        'log_action_id': 3097,
        'field_name': 'Technician',
        'old_value': null,
        'new_value': 'Jerrold',
        'value_type': 'default',
        'table_name': 'Technician'
      }, {
        'id': 10393,
        'log_action_id': 3097,
        'field_name': 'Dispatch Status',
        'old_value': null,
        'new_value': '1',
        'value_type': 'fk_key',
        'table_name': 'dispatch_status'
      }],
      'user': {
        'id': 2,
        'email': 'demo2@skeduler.com.au',
        'remember_code': null,
        'active': 1,
        'first_name': 'Petras',
        'last_name': 'Kemmer',
        'company': '0',
        'phone': '0422 222 222',
        'photo': '',
        'address': null
      }
    }, {
      'id': 3079,
      'job_id': 2161,
      'action_type': 1,
      'title': 'Sales',
      'description': '{\'sales_id\':null}',
      'created_at': '2019-08-08 11:43:40',
      'user_id': 2,
      'log_priority': 2,
      'log_changes': [{
        'id': 10313,
        'log_action_id': 3079,
        'field_name': 'Total Cost',
        'old_value': null,
        'new_value': '5045',
        'value_type': 'currency',
        'table_name': null
      }, {
        'id': 10314,
        'log_action_id': 3079,
        'field_name': 'Sales Flag',
        'old_value': null,
        'new_value': '1',
        'value_type': 'default',
        'table_name': null
      }, {
        'id': 10315,
        'log_action_id': 3079,
        'field_name': 'XERO Sync Flag',
        'old_value': null,
        'new_value': '0',
        'value_type': 'sync_flag',
        'table_name': null
      }],
      'user': {
        'id': 2,
        'email': 'demo2@skeduler.com.au',
        'remember_code': null,
        'active': 1,
        'first_name': 'Petras',
        'last_name': 'Kemmer',
        'company': '0',
        'phone': '0422 222 222',
        'photo': '',
        'address': null
      }
    }, {
      'id': 3076,
      'job_id': 2161,
      'action_type': 1,
      'title': 'Invoice Update',
      'description': '{\'quote_id\':null}',
      'created_at': '2019-08-08 11:43:39',
      'user_id': 2,
      'log_priority': 2,
      'log_changes': [{
        'id': 10301,
        'log_action_id': 3076,
        'field_name': 'Option ID',
        'old_value': null,
        'new_value': '0',
        'value_type': 'fk_key',
        'table_name': null
      }, {
        'id': 10302,
        'log_action_id': 3076,
        'field_name': 'Scheduler ID',
        'old_value': null,
        'new_value': '2412',
        'value_type': 'fk_key',
        'table_name': 'scheduler'
      }, {
        'id': 10303,
        'log_action_id': 3076,
        'field_name': 'Title',
        'old_value': null,
        'new_value': 'Deposit amount',
        'value_type': 'default',
        'table_name': null
      }, {
        'id': 10304,
        'log_action_id': 3076,
        'field_name': 'Invoice Date',
        'old_value': null,
        'new_value': '2019-08-08',
        'value_type': 'date',
        'table_name': null
      }, {
        'id': 10305,
        'log_action_id': 3076,
        'field_name': 'Invoice Template ID',
        'old_value': null,
        'new_value': '1',
        'value_type': 'fk_key',
        'table_name': 'invoice_template'
      }],
      'user': {
        'id': 2,
        'email': 'demo2@skeduler.com.au',
        'remember_code': null,
        'active': 1,
        'first_name': 'Petras',
        'last_name': 'Kemmer',
        'company': '0',
        'phone': '0422 222 222',
        'photo': '',
        'address': null
      }
    }, {
      'id': 3077,
      'job_id': 2161,
      'action_type': 1,
      'title': 'Quote Services',
      'description': '{\'option_id\':false,\'quote_service_id\':false}',
      'created_at': '2019-08-08 11:43:39',
      'user_id': 2,
      'log_priority': 3,
      'log_changes': [{
        'id': 10306,
        'log_action_id': 3077,
        'field_name': 'Quote Option Id',
        'old_value': null,
        'new_value': '2363',
        'value_type': 'fk_key',
        'table_name': 'quote_options'
      }, {
        'id': 10307,
        'log_action_id': 3077,
        'field_name': 'Service Title',
        'old_value': null,
        'new_value': 'Callout Fee',
        'value_type': 'default',
        'table_name': null
      }, {
        'id': 10308,
        'log_action_id': 3077,
        'field_name': 'Service Cost',
        'old_value': null,
        'new_value': '45',
        'value_type': 'currency',
        'table_name': null
      }],
      'user': {
        'id': 2,
        'email': 'demo2@skeduler.com.au',
        'remember_code': null,
        'active': 1,
        'first_name': 'Petras',
        'last_name': 'Kemmer',
        'company': '0',
        'phone': '0422 222 222',
        'photo': '',
        'address': null
      }
    }, {
      'id': 3078,
      'job_id': 2161,
      'action_type': 1,
      'title': 'Quote Services',
      'description': '{\'option_id\':false,\'quote_service_id\':false}',
      'created_at': '2019-08-08 11:43:39',
      'user_id': 2,
      'log_priority': 3,
      'log_changes': [{
        'id': 10309,
        'log_action_id': 3078,
        'field_name': 'Quote Option Id',
        'old_value': null,
        'new_value': '2363',
        'value_type': 'fk_key',
        'table_name': 'quote_options'
      }, {
        'id': 10310,
        'log_action_id': 3078,
        'field_name': 'Service Title',
        'old_value': null,
        'new_value': '50% payment for bathroom renovation',
        'value_type': 'default',
        'table_name': null
      }, {
        'id': 10311,
        'log_action_id': 3078,
        'field_name': 'Service Description',
        'old_value': null,
        'new_value': '50% payment for bathroom renovation',
        'value_type': 'default',
        'table_name': null
      }, {
        'id': 10312,
        'log_action_id': 3078,
        'field_name': 'Service Cost',
        'old_value': null,
        'new_value': '5000',
        'value_type': 'currency',
        'table_name': null
      }],
      'user': {
        'id': 2,
        'email': 'demo2@skeduler.com.au',
        'remember_code': null,
        'active': 1,
        'first_name': 'Petras',
        'last_name': 'Kemmer',
        'company': '0',
        'phone': '0422 222 222',
        'photo': '',
        'address': null
      }
    }, {
      'id': 3075,
      'job_id': 2161,
      'action_type': 1,
      'title': 'Payment',
      'description': '{\'payment_id\':null,\'sales_id\':\'1232\',\'payment_type\':\'1\'}',
      'created_at': '2019-08-08 11:40:39',
      'user_id': 2,
      'log_priority': 2,
      'log_changes': [{
        'id': 10297,
        'log_action_id': 3075,
        'field_name': 'Date',
        'old_value': null,
        'new_value': '2019-08-08',
        'value_type': 'date',
        'table_name': null
      }, {
        'id': 10298,
        'log_action_id': 3075,
        'field_name': 'Receipt Number',
        'old_value': null,
        'new_value': '0',
        'value_type': 'default',
        'table_name': null
      }, {
        'id': 10299,
        'log_action_id': 3075,
        'field_name': 'Amount',
        'old_value': null,
        'new_value': '45',
        'value_type': 'currency',
        'table_name': null
      }, {
        'id': 10300,
        'log_action_id': 3075,
        'field_name': 'Payment Type',
        'old_value': null,
        'new_value': '1',
        'value_type': 'fk_key',
        'table_name': 'setting_transaction_type'
      }],
      'user': {
        'id': 2,
        'email': 'demo2@skeduler.com.au',
        'remember_code': null,
        'active': 1,
        'first_name': 'Petras',
        'last_name': 'Kemmer',
        'company': '0',
        'phone': '0422 222 222',
        'photo': '',
        'address': null
      }
    }, {
      'id': 3071,
      'job_id': 2161,
      'action_type': 2,
      'title': 'Visit Update',
      'description': null,
      'created_at': '2019-08-08 09:18:53',
      'user_id': 2,
      'log_priority': 3,
      'log_changes': [{
        'id': 10284,
        'log_action_id': 3071,
        'field_name': 'Dispatch Status',
        'old_value': '1',
        'new_value': '2',
        'value_type': 'fk_key',
        'table_name': 'dispatch_status'
      }],
      'user': {
        'id': 2,
        'email': 'demo2@skeduler.com.au',
        'remember_code': null,
        'active': 1,
        'first_name': 'Petras',
        'last_name': 'Kemmer',
        'company': '0',
        'phone': '0422 222 222',
        'photo': '',
        'address': null
      }
    }, {
      'id': 3067,
      'job_id': 2161,
      'action_type': 1,
      'title': 'Add Ongoing Job',
      'description': null,
      'created_at': '2019-08-08 09:16:46',
      'user_id': 2,
      'log_priority': 3,
      'log_changes': [{
        'id': 10264,
        'log_action_id': 3067,
        'field_name': 'Start Time',
        'old_value': null,
        'new_value': '2019-08-08 09:30:00',
        'value_type': 'datetime',
        'table_name': 'scheduler'
      }, {
        'id': 10265,
        'log_action_id': 3067,
        'field_name': 'End Time',
        'old_value': null,
        'new_value': '2019-08-08 11:30:00',
        'value_type': 'datetime',
        'table_name': 'scheduler'
      }, {
        'id': 10266,
        'log_action_id': 3067,
        'field_name': 'Technician',
        'old_value': null,
        'new_value': '22',
        'value_type': 'fk_key',
        'table_name': 'technicians'
      }, {
        'id': 10267,
        'log_action_id': 3067,
        'field_name': 'Technician',
        'old_value': null,
        'new_value': 'Davins',
        'value_type': 'default',
        'table_name': 'Technician'
      }, {
        'id': 10268,
        'log_action_id': 3067,
        'field_name': 'Dispatch Status',
        'old_value': null,
        'new_value': '1',
        'value_type': 'fk_key',
        'table_name': 'dispatch_status'
      }],
      'user': {
        'id': 2,
        'email': 'demo2@skeduler.com.au',
        'remember_code': null,
        'active': 1,
        'first_name': 'Petras',
        'last_name': 'Kemmer',
        'company': '0',
        'phone': '0422 222 222',
        'photo': '',
        'address': null
      }
    }, {
      'id': 3065,
      'job_id': 2161,
      'action_type': 1,
      'title': 'Credit Note Added:',
      'description': null,
      'created_at': '2019-08-07 16:31:45',
      'user_id': 2,
      'log_priority': 3,
      'log_changes': [{
        'id': 10256,
        'log_action_id': 3065,
        'field_name': 'Client',
        'old_value': null,
        'new_value': '2070',
        'value_type': 'fk_key',
        'table_name': 'clients'
      }, {
        'id': 10257,
        'log_action_id': 3065,
        'field_name': 'Total Credits',
        'old_value': null,
        'new_value': '12',
        'value_type': 'currency',
        'table_name': null
      }, {
        'id': 10258,
        'log_action_id': 3065,
        'field_name': 'Remaining Credits',
        'old_value': null,
        'new_value': '12',
        'value_type': 'currency',
        'table_name': null
      }, {
        'id': 10259,
        'log_action_id': 3065,
        'field_name': 'Description',
        'old_value': null,
        'new_value': 'architecto ullam labore',
        'value_type': 'default',
        'table_name': null
      }, {
        'id': 10260,
        'log_action_id': 3065,
        'field_name': 'Date',
        'old_value': null,
        'new_value': '2019-08-07 00:00:00',
        'value_type': 'date',
        'table_name': null
      }],
      'user': {
        'id': 2,
        'email': 'demo2@skeduler.com.au',
        'remember_code': null,
        'active': 1,
        'first_name': 'Petras',
        'last_name': 'Kemmer',
        'company': '0',
        'phone': '0422 222 222',
        'photo': '',
        'address': null
      }
    }, {
      'id': 3064,
      'job_id': 2161,
      'action_type': 1,
      'title': 'Sales',
      'description': '{\'sales_id\':null}',
      'created_at': '2019-08-07 14:57:31',
      'user_id': 2,
      'log_priority': 2,
      'log_changes': [{
        'id': 10253,
        'log_action_id': 3064,
        'field_name': 'Total Cost',
        'old_value': null,
        'new_value': '45',
        'value_type': 'currency',
        'table_name': null
      }, {
        'id': 10254,
        'log_action_id': 3064,
        'field_name': 'Sales Flag',
        'old_value': null,
        'new_value': '0',
        'value_type': 'default',
        'table_name': null
      }, {
        'id': 10255,
        'log_action_id': 3064,
        'field_name': 'XERO Sync Flag',
        'old_value': null,
        'new_value': '0',
        'value_type': 'sync_flag',
        'table_name': null
      }],
      'user': {
        'id': 2,
        'email': 'demo2@skeduler.com.au',
        'remember_code': null,
        'active': 1,
        'first_name': 'Petras',
        'last_name': 'Kemmer',
        'company': '0',
        'phone': '0422 222 222',
        'photo': '',
        'address': null
      }
    }, {
      'id': 3062,
      'job_id': 2161,
      'action_type': 1,
      'title': 'Invoice Update',
      'description': '{\'quote_id\':null}',
      'created_at': '2019-08-07 14:57:29',
      'user_id': 2,
      'log_priority': 2,
      'log_changes': [{
        'id': 10245,
        'log_action_id': 3062,
        'field_name': 'Option ID',
        'old_value': null,
        'new_value': '0',
        'value_type': 'fk_key',
        'table_name': null
      }, {
        'id': 10246,
        'log_action_id': 3062,
        'field_name': 'Scheduler ID',
        'old_value': null,
        'new_value': '2410',
        'value_type': 'fk_key',
        'table_name': 'scheduler'
      }, {
        'id': 10247,
        'log_action_id': 3062,
        'field_name': 'Title',
        'old_value': null,
        'new_value': 'Corporate Interactions Strategist',
        'value_type': 'default',
        'table_name': null
      }, {
        'id': 10248,
        'log_action_id': 3062,
        'field_name': 'Invoice Date',
        'old_value': null,
        'new_value': '2019-08-07',
        'value_type': 'date',
        'table_name': null
      }, {
        'id': 10249,
        'log_action_id': 3062,
        'field_name': 'Invoice Template ID',
        'old_value': null,
        'new_value': '1',
        'value_type': 'fk_key',
        'table_name': 'invoice_template'
      }],
      'user': {
        'id': 2,
        'email': 'demo2@skeduler.com.au',
        'remember_code': null,
        'active': 1,
        'first_name': 'Petras',
        'last_name': 'Kemmer',
        'company': '0',
        'phone': '0422 222 222',
        'photo': '',
        'address': null
      }
    }, {
      'id': 3063,
      'job_id': 2161,
      'action_type': 1,
      'title': 'Quote Services',
      'description': '{\'option_id\':false,\'quote_service_id\':false}',
      'created_at': '2019-08-07 14:57:29',
      'user_id': 2,
      'log_priority': 3,
      'log_changes': [{
        'id': 10250,
        'log_action_id': 3063,
        'field_name': 'Quote Option Id',
        'old_value': null,
        'new_value': '2357',
        'value_type': 'fk_key',
        'table_name': 'quote_options'
      }, {
        'id': 10251,
        'log_action_id': 3063,
        'field_name': 'Service Title',
        'old_value': null,
        'new_value': 'Callout Fee',
        'value_type': 'default',
        'table_name': null
      }, {
        'id': 10252,
        'log_action_id': 3063,
        'field_name': 'Service Cost',
        'old_value': null,
        'new_value': '45',
        'value_type': 'currency',
        'table_name': null
      }],
      'user': {
        'id': 2,
        'email': 'demo2@skeduler.com.au',
        'remember_code': null,
        'active': 1,
        'first_name': 'Petras',
        'last_name': 'Kemmer',
        'company': '0',
        'phone': '0422 222 222',
        'photo': '',
        'address': null
      }
    }, {
      'id': 3058,
      'job_id': 2161,
      'action_type': 1,
      'title': 'Add Visit',
      'description': null,
      'created_at': '2019-08-07 12:23:26',
      'user_id': 2,
      'log_priority': 3,
      'log_changes': [{
        'id': 10225,
        'log_action_id': 3058,
        'field_name': 'Start Time',
        'old_value': null,
        'new_value': '2019-08-07 12:00',
        'value_type': 'datetime',
        'table_name': 'scheduler'
      }, {
        'id': 10226,
        'log_action_id': 3058,
        'field_name': 'End Time',
        'old_value': null,
        'new_value': '2019-08-07 13:30',
        'value_type': 'datetime',
        'table_name': 'scheduler'
      }, {
        'id': 10227,
        'log_action_id': 3058,
        'field_name': 'Visit Note',
        'old_value': null,
        'new_value': '',
        'value_type': 'default',
        'table_name': 'scheduler'
      }, {
        'id': 10228,
        'log_action_id': 3058,
        'field_name': 'Technician',
        'old_value': null,
        'new_value': '2',
        'value_type': 'fk_key',
        'table_name': 'technicians'
      }, {
        'id': 10229,
        'log_action_id': 3058,
        'field_name': 'Technician',
        'old_value': null,
        'new_value': 'Angeline',
        'value_type': 'default',
        'table_name': 'Technician'
      }, {
        'id': 10230,
        'log_action_id': 3058,
        'field_name': 'Dispatch Status',
        'old_value': null,
        'new_value': '2',
        'value_type': 'fk_key',
        'table_name': 'dispatch_status'
      }],
      'user': {
        'id': 2,
        'email': 'demo2@skeduler.com.au',
        'remember_code': null,
        'active': 1,
        'first_name': 'Petras',
        'last_name': 'Kemmer',
        'company': '0',
        'phone': '0422 222 222',
        'photo': '',
        'address': null
      }
    }, {
      'id': 3057,
      'job_id': 2161,
      'action_type': 2,
      'title': 'Visit Update',
      'description': null,
      'created_at': '2019-08-07 12:23:07',
      'user_id': 2,
      'log_priority': 3,
      'log_changes': [{
        'id': 10224,
        'log_action_id': 3057,
        'field_name': 'Dispatch Status',
        'old_value': '2',
        'new_value': '1',
        'value_type': 'fk_key',
        'table_name': 'dispatch_status'
      }],
      'user': {
        'id': 2,
        'email': 'demo2@skeduler.com.au',
        'remember_code': null,
        'active': 1,
        'first_name': 'Petras',
        'last_name': 'Kemmer',
        'company': '0',
        'phone': '0422 222 222',
        'photo': '',
        'address': null
      }
    }, {
      'id': 3053,
      'job_id': 2161,
      'action_type': 1,
      'title': 'Add maintenance installation details.',
      'description': null,
      'created_at': '2019-08-07 12:18:46',
      'user_id': 2,
      'log_priority': 3,
      'log_changes': [{
        'id': 10207,
        'log_action_id': 3053,
        'field_name': 'Job ID',
        'old_value': null,
        'new_value': '2161',
        'value_type': 'default',
        'table_name': null
      }, {
        'id': 10208,
        'log_action_id': 3053,
        'field_name': 'Maintenance Interval',
        'old_value': null,
        'new_value': '1',
        'value_type': 'fk_key',
        'table_name': 'ms_schedule'
      }, {
        'id': 10209,
        'log_action_id': 3053,
        'field_name': 'Description',
        'old_value': null,
        'new_value': '',
        'value_type': 'default',
        'table_name': null
      }, {
        'id': 10210,
        'log_action_id': 3053,
        'field_name': 'Maintenance Due Date',
        'old_value': null,
        'new_value': '2020-08-07 00:00:00',
        'value_type': 'date',
        'table_name': null
      }, {
        'id': 10211,
        'log_action_id': 3053,
        'field_name': 'Installation Date',
        'old_value': null,
        'new_value': '2019-08-07',
        'value_type': 'date',
        'table_name': null
      }, {
        'id': 10212,
        'log_action_id': 3053,
        'field_name': 'District',
        'old_value': null,
        'new_value': '',
        'value_type': 'fk_key',
        'table_name': 'ms_district'
      }],
      'user': {
        'id': 2,
        'email': 'demo2@skeduler.com.au',
        'remember_code': null,
        'active': 1,
        'first_name': 'Petras',
        'last_name': 'Kemmer',
        'company': '0',
        'phone': '0422 222 222',
        'photo': '',
        'address': null
      }
    }, {
      'id': 3052,
      'job_id': 2161,
      'action_type': 1,
      'title': 'Add Visit',
      'description': null,
      'created_at': '2019-08-07 12:18:45',
      'user_id': 2,
      'log_priority': 3,
      'log_changes': [{
        'id': 10201,
        'log_action_id': 3052,
        'field_name': 'Start Time',
        'old_value': null,
        'new_value': '2019-08-07 10:30:00',
        'value_type': 'datetime',
        'table_name': 'scheduler'
      }, {
        'id': 10202,
        'log_action_id': 3052,
        'field_name': 'End Time',
        'old_value': null,
        'new_value': '2019-08-07 13:00:00',
        'value_type': 'datetime',
        'table_name': 'scheduler'
      }, {
        'id': 10203,
        'log_action_id': 3052,
        'field_name': 'Visit Note',
        'old_value': null,
        'new_value': 'In tenetur ad maiores est rerum. Omnis et quibusdam nihil minus repellat. Dolore laborum qui vero nobis laudantium fugit praesentium laboriosam.\r\n Perspiciatis ea sit. Ut ut accusamus voluptas sit voluptas. Quaerat quaerat ratione pariatur sit accusamus eum.\r\n Aliquam eveniet deleniti vero eveniet earum laboriosam. Quia sit in vel praesentium nulla non cupiditate sint. Eum similique dolor dolorum omnis est esse perferendis vitae.',
        'value_type': 'default',
        'table_name': 'scheduler'
      }, {
        'id': 10204,
        'log_action_id': 3052,
        'field_name': 'Technician',
        'old_value': null,
        'new_value': '8',
        'value_type': 'fk_key',
        'table_name': 'technicians'
      }, {
        'id': 10205,
        'log_action_id': 3052,
        'field_name': 'Technician',
        'old_value': null,
        'new_value': 'Dell',
        'value_type': 'default',
        'table_name': 'Technician'
      }, {
        'id': 10206,
        'log_action_id': 3052,
        'field_name': 'Dispatch Status',
        'old_value': null,
        'new_value': '2',
        'value_type': 'fk_key',
        'table_name': 'dispatch_status'
      }],
      'user': {
        'id': 2,
        'email': 'demo2@skeduler.com.au',
        'remember_code': null,
        'active': 1,
        'first_name': 'Petras',
        'last_name': 'Kemmer',
        'company': '0',
        'phone': '0422 222 222',
        'photo': '',
        'address': null
      }
    }, {
      'id': 3051,
      'job_id': 2161,
      'action_type': 1,
      'title': 'Job',
      'description': null,
      'created_at': '2019-08-07 12:18:45',
      'user_id': 2,
      'log_priority': 3,
      'log_changes': [{
        'id': 10193,
        'log_action_id': 3051,
        'field_name': 'Job Title',
        'old_value': null,
        'new_value': 'International Marketing Assistant',
        'value_type': 'default',
        'table_name': 'jobs'
      }, {
        'id': 10194,
        'log_action_id': 3051,
        'field_name': 'Job Description',
        'old_value': null,
        'new_value': 'Omnis est consequuntur. Aliquid cum fuga ducimus quo repudiandae qui corporis officiis. Deleniti accusantium veniam.',
        'value_type': 'default',
        'table_name': 'jobs'
      }, {
        'id': 10195,
        'log_action_id': 3051,
        'field_name': 'Call Out Fee',
        'old_value': null,
        'new_value': '45',
        'value_type': 'currency',
        'table_name': 'jobs'
      }, {
        'id': 10196,
        'log_action_id': 3051,
        'field_name': 'Job Status',
        'old_value': null,
        'new_value': '1',
        'value_type': 'fk_key',
        'table_name': 'job_status'
      }, {
        'id': 10197,
        'log_action_id': 3051,
        'field_name': 'Job Priority',
        'old_value': null,
        'new_value': '1',
        'value_type': 'fk_key',
        'table_name': 'job_priority'
      }, {
        'id': 10198,
        'log_action_id': 3051,
        'field_name': 'Job Type',
        'old_value': null,
        'new_value': '1',
        'value_type': 'fk_key',
        'table_name': 'job_type'
      }, {
        'id': 10199,
        'log_action_id': 3051,
        'field_name': 'Job Cateogry',
        'old_value': null,
        'new_value': '1',
        'value_type': 'fk_key',
        'table_name': 'job_category'
      }, {
        'id': 10200,
        'log_action_id': 3051,
        'field_name': 'LeadSource',
        'old_value': null,
        'new_value': '1',
        'value_type': 'fk_key',
        'table_name': 'api_ad_source'
      }],
      'user': {
        'id': 2,
        'email': 'demo2@skeduler.com.au',
        'remember_code': null,
        'active': 1,
        'first_name': 'Petras',
        'last_name': 'Kemmer',
        'company': '0',
        'phone': '0422 222 222',
        'photo': '',
        'address': null
      }
    }];
};


export default (
  state = [],
  action) => {
  switch (action.type) {
    case FETCH_TIMELINE:
      return fetchTimeline();
    default:
      return state;
  }
};
