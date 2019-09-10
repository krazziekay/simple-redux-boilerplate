import {
  FETCH_TIMELINE
} from '../constants/Timeline';

const fetchTimeline = () => {
  return {
    data: [
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
      },
      {
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
      }],
    collection: {
      "job_status":
        [{
          "job_statusid": "1",
          "description": "New",
          "completion_value": "100",
          "status_color": "#548dd4",
          "job_status_group_id": "0"
        }, {
          "job_statusid": "2",
          "description": "Ongoing",
          "completion_value": "100",
          "status_color": "#e36c09",
          "job_status_group_id": "0"
        }, {
          "job_statusid": "3",
          "description": "Quoted",
          "completion_value": "100",
          "status_color": "#92d050",
          "job_status_group_id": "0"
        }, {
          "job_statusid": "4",
          "description": "Callback",
          "completion_value": "100",
          "status_color": "#205867",
          "job_status_group_id": "0"
        }, {
          "job_statusid": "5",
          "description": "Completed",
          "completion_value": "100",
          "status_color": "#7030a0",
          "job_status_group_id": "0"
        }, {
          "job_statusid": "6",
          "description": "Cancelled",
          "completion_value": "100",
          "status_color": "#002060",
          "job_status_group_id": "0"
        }, {
          "job_statusid": "7",
          "description": "Rejected",
          "completion_value": "100",
          "status_color": "#c4bd97",
          "job_status_group_id": "0"
        }, {
          "job_statusid": "8",
          "description": "No Answer",
          "completion_value": "100",
          "status_color": "#f79646",
          "job_status_group_id": "0"
        }],
      "invoice_template":
        [{
          "id": "1",
          "label": "Template1"
        }, {
          "id": "2",
          "label": "12"
        }, {
          "id": "3",
          "label": "ABC"
        }],
      "dispatch_status":
        [{
          "dispatch_id": "1",
          "dispatch_status": "Undispatched"
        }, {
          "dispatch_id": "2",
          "dispatch_status": "Dispatched"
        }, {
          "dispatch_id": "3",
          "dispatch_status": "Complete"
        }],
      "job_priority":
        [{
          "priority_id": "1",
          "description": "Non Urgent",
          "status": "1"
        }, {
          "priority_id": "2",
          "description": "Emergency",
          "status": "1"
        }, {
          "priority_id": "3",
          "description": "1 hour Response",
          "status": "1"
        }],
      "job_type":
        [{
          "jobtype_id": "1",
          "description": "Blocked Drain",
          "cat_id": "1",
          "status_flag": "1",
          "del_flag": "0",
          "job_value": null
        }, {
          "jobtype_id": "2",
          "description": "Leaking Tap",
          "cat_id": "1",
          "status_flag": "1",
          "del_flag": "0",
          "job_value": null
        }, {
          "jobtype_id": "3",
          "description": "Leaking Pipe",
          "cat_id": "1",
          "status_flag": "1",
          "del_flag": "0",
          "job_value": null
        }, {
          "jobtype_id": "4",
          "description": "Leaking Sink",
          "cat_id": "1",
          "status_flag": "1",
          "del_flag": "0",
          "job_value": null
        }, {
          "jobtype_id": "5",
          "description": "Burst Pipe",
          "cat_id": "1",
          "status_flag": "1",
          "del_flag": "0",
          "job_value": null
        }, {
          "jobtype_id": "6",
          "description": "Hotwater",
          "cat_id": "1",
          "status_flag": "1",
          "del_flag": "0",
          "job_value": null
        }, {
          "jobtype_id": "7",
          "description": "Gas",
          "cat_id": "1",
          "status_flag": "1",
          "del_flag": "0",
          "job_value": null
        }, {
          "jobtype_id": "8",
          "description": "Leaking Toilet",
          "cat_id": "1",
          "status_flag": "1",
          "del_flag": "0",
          "job_value": null
        }, {
          "jobtype_id": "9",
          "description": "Water Meter",
          "cat_id": "1",
          "status_flag": "1",
          "del_flag": "0",
          "job_value": null
        }, {
          "jobtype_id": "10",
          "description": "0ther",
          "cat_id": "1",
          "status_flag": "1",
          "del_flag": "0",
          "job_value": null
        }, {
          "jobtype_id": "11",
          "description": "No Power",
          "cat_id": "2",
          "status_flag": "1",
          "del_flag": "0",
          "job_value": null
        }, {
          "jobtype_id": "12",
          "description": "No lights",
          "cat_id": "2",
          "status_flag": "1",
          "del_flag": "0",
          "job_value": null
        }, {
          "jobtype_id": "13",
          "description": "Switch Trip",
          "cat_id": "2",
          "status_flag": "1",
          "del_flag": "0",
          "job_value": null
        }, {
          "jobtype_id": "14",
          "description": "Ceiling Fan",
          "cat_id": "2",
          "status_flag": "1",
          "del_flag": "0",
          "job_value": null
        }, {
          "jobtype_id": "15",
          "description": "Power Points",
          "cat_id": "2",
          "status_flag": "1",
          "del_flag": "0",
          "job_value": null
        }, {
          "jobtype_id": "16",
          "description": "Electrical Work",
          "cat_id": "2",
          "status_flag": "1",
          "del_flag": "0",
          "job_value": null
        }, {
          "jobtype_id": "17",
          "description": "Wiring",
          "cat_id": "2",
          "status_flag": "1",
          "del_flag": "0",
          "job_value": null
        }, {
          "jobtype_id": "18",
          "description": "Smoke Alarm",
          "cat_id": "2",
          "status_flag": "1",
          "del_flag": "0",
          "job_value": null
        }, {
          "jobtype_id": "19",
          "description": "Light Installation",
          "cat_id": "2",
          "status_flag": "1",
          "del_flag": "0",
          "job_value": null
        }, {
          "jobtype_id": "20",
          "description": "Other",
          "cat_id": "2",
          "status_flag": "1",
          "del_flag": "0",
          "job_value": null
        }],
      "job_category":
        [{
          "cat_id": "1",
          "description": "Plumbing",
          "status_flag": "1",
          "del_flag": "0",
          "department_id": "1"
        }, {
          "cat_id": "2",
          "description": "Electrical",
          "status_flag": "1",
          "del_flag": "0",
          "department_id": "2"
        }, {
          "cat_id": "3",
          "description": "HVAC",
          "status_flag": "1",
          "del_flag": "0",
          "department_id": "3"
        }],
      "api_ad_source":
        [{
          "id": "1",
          "name": "Google Adwords",
          "description": null,
          "apiName": "Google Adwords",
          "status": "1"
        }, {
          "id": "2",
          "name": "Unknown",
          "description": null,
          "apiName": "Unknown",
          "status": "1"
        }, {
          "id": "3",
          "name": "Yellow Pages",
          "description": null,
          "apiName": "Yellow Pages",
          "status": "1"
        }, {
          "id": "4",
          "name": "Local Paper",
          "description": null,
          "apiName": "Local Paper",
          "status": "1"
        }, {
          "id": "5",
          "name": "Fridge Magnet",
          "description": null,
          "apiName": "Fridge Magnet",
          "status": "1"
        }],
      "setting_transaction_type":
        [{
          "id": "1",
          "name": "Bank Transfer",
          "key": "BankTransfer"
        }, {
          "id": "2",
          "name": "Cash",
          "key": "Cash"
        }, {
          "id": "3",
          "name": "Cheque",
          "key": "Cheque"
        }, {
          "id": "4",
          "name": "Credit Card",
          "key": "CreditCard"
        }, {
          "id": "5",
          "name": "Debit Card",
          "key": "DebitCard"
        }, {
          "id": "6",
          "name": "EFTPOS",
          "key": "EFTPOS"
        }, {
          "id": "7",
          "name": "Stripe",
          "key": "Stripe"
        }],
      "technicians":
        [{
          "id": "1",
          "name": "Unassigned"
        }, {
          "id": "2",
          "name": "Oletta Littel"
        }, {
          "id": "3",
          "name": "Albert Bergnaum"
        }, {
          "id": "4",
          "name": "Angela Lueilwitz"
        }, {
          "id": "5",
          "name": "Aida Feeney"
        }, {
          "id": "6",
          "name": "Cloyd Rempel"
        }, {
          "id": "7",
          "name": "Alexa Steuber"
        }, {
          "id": "8",
          "name": "Maya Ondricka"
        }, {
          "id": "9",
          "name": "Deven O'Hara"
        }, {
          "id": "10",
          "name": "Bailey Schneider"
        }, {
          "id": "11",
          "name": "Drew Lind"
        }, {
          "id": "12",
          "name": "Reese Swaniawski"
        }, {
          "id": "13",
          "name": "Elisabeth Ruecker"
        }, {
          "id": "14",
          "name": "Nelson Lueilwitz"
        }, {
          "id": "15",
          "name": "Aurore Rippin"
        }, {
          "id": "16",
          "name": "Astridsss Pacochaas"
        }, {
          "id": "17",
          "name": "Baby Hamill"
        }, {
          "id": "18",
          "name": "Hershel Predovic"
        }, {
          "id": "19",
          "name": "Fritz Bergstrom"
        }, {
          "id": "20",
          "name": "Darrion Pfannerstill"
        }, {
          "id": "21",
          "name": "Kathleen Hackett"
        }, {
          "id": "22",
          "name": "Brook Lehner"
        }, {
          "id": "23",
          "name": "Harold Hodkiewicz"
        }, {
          "id": "24",
          "name": "Otilia Orn"
        }, {
          "id": "25",
          "name": "Demetrius Ritchie"
        }, {
          "id": "26",
          "name": "Cullen Wiegand"
        }, {
          "id": "27",
          "name": "Alexandre Bergnaum"
        }, {
          "id": "28",
          "name": "Wava Ullrich"
        }, {
          "id": "29",
          "name": "Ima Wiegand"
        }, {
          "id": "30",
          "name": "Jace Moen"
        }, {
          "id": "31",
          "name": "Arliesa Littel"
        }, {
          "id": "32",
          "name": "Gonzalo Legros"
        }],
      "ms_schedule":
        [{
          "id": "1",
          "term": "Yearly",
          "MONTH": "12"
        }, {
          "id": "2",
          "term": "Half yearly",
          "MONTH": "6"
        }, {
          "id": "3",
          "term": "Quarterly",
          "MONTH": "4"
        }],
      "ms_district":
        []
    }
  }
};


export default (
  state = { data: [], collection: [] },
  action) => {
  switch (action.type) {
    case FETCH_TIMELINE:
      return fetchTimeline();
    default:
      return state;
  }
};
