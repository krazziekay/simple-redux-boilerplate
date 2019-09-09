import {
  ADD_VISITS,
  FETCH_VISITS
} from '../constants/Visits';

const fetchVisits = () => {
  return [
    {
      'job_id': '162',
      'scheduler_id': '753',
      'job_starttime': '2019-09-06 08:00:00',
      'job_endtime': '2019-09-06 10:00:00',
      'work_status': '0',
      'actual_job_starttime': null,
      'actual_job_endtime': null,
      'jsa_check': '0',
      'visit_note': null,
      'technician_id': '16',
      'user_id': '22',
      'first_name': 'Astridsss',
      'last_name': 'Pacochaas',
      'photo': '0'
    },
    {
      'job_id': '162',
      'scheduler_id': '752',
      'job_starttime': '2019-09-03 06:00:00',
      'job_endtime': '2019-09-03 08:00:00',
      'work_status': '0',
      'actual_job_starttime': null,
      'actual_job_endtime': null,
      'jsa_check': '0',
      'visit_note': null,
      'technician_id': '32',
      'user_id': '40',
      'first_name': 'Gonzalo',
      'last_name': 'Legros',
      'photo': '0'
    },
    {
      'job_id': '162',
      'scheduler_id': '751',
      'job_starttime': '2019-08-28 07:00:00',
      'job_endtime': '2019-08-28 16:30:00',
      'work_status': '1',
      'actual_job_starttime': '2019-08-28 11:39:15',
      'actual_job_endtime': null,
      'jsa_check': '1',
      'visit_note': '',
      'technician_id': '2',
      'user_id': '4',
      'first_name': 'Oletta',
      'last_name': 'Littel',
      'photo': '0'
    },
    {
      'job_id': '162',
      'scheduler_id': '751',
      'job_starttime': '2019-08-28 07:00:00',
      'job_endtime': '2019-08-28 16:30:00',
      'work_status': '1',
      'actual_job_starttime': '2019-08-28 11:39:15',
      'actual_job_endtime': null,
      'jsa_check': '2',
      'visit_note': '',
      'technician_id': '2',
      'user_id': '4',
      'first_name': 'Oletta',
      'last_name': 'Littel',
      'photo': '0'
    },
    {
      'job_id': '162',
      'scheduler_id': '751',
      'job_starttime': '2019-08-28 07:00:00',
      'job_endtime': '2019-08-28 16:30:00',
      'work_status': '1',
      'actual_job_starttime': '2019-08-28 11:39:15',
      'actual_job_endtime': null,
      'jsa_check': '1',
      'visit_note': '',
      'technician_id': '2',
      'user_id': '4',
      'first_name': 'Oletta',
      'last_name': 'Littel',
      'photo': '0'
    },
    {
      'job_id': '162',
      'scheduler_id': '751',
      'job_starttime': '2019-08-28 07:00:00',
      'job_endtime': '2019-08-28 16:30:00',
      'work_status': '1',
      'actual_job_starttime': '2019-08-28 11:39:15',
      'actual_job_endtime': null,
      'jsa_check': '1',
      'visit_note': '',
      'technician_id': '2',
      'user_id': '4',
      'first_name': 'Oletta',
      'last_name': 'Littel',
      'photo': '0'
    },
    {
      'job_id': '162',
      'scheduler_id': '751',
      'job_starttime': '2019-08-28 07:00:00',
      'job_endtime': '2019-08-28 16:30:00',
      'work_status': '1',
      'actual_job_starttime': '2019-08-28 11:39:15',
      'actual_job_endtime': null,
      'jsa_check': '1',
      'visit_note': '',
      'technician_id': '2',
      'user_id': '4',
      'first_name': 'Oletta',
      'last_name': 'Littel',
      'photo': '0'
    },
  ];
};

const addVisit = (state, data) => {
  let clone = Object.assign([], state);
  return clone;
};

export default (
  state = [],
  action) => {
  switch (action.type) {
    case ADD_VISITS:
      return addVisit(state, action.payload);
    case FETCH_VISITS:
      return fetchVisits();
    default:
      return state;
  }
};
