import {
  ADD_NOTES,
  FETCH_NOTES
} from '../constants/Notes';

const fetchNotes = () => {
  return [
    {
      "id": "34448",
      "user_id": "181",
      "sch_id": "29394",
      "job_id": "13903",
      "note": "Tennanted property his relative owns just wanted jet only",
      "created_at": "2019-09-06 08:55:18",
      "updated_at": "2019-09-06 08:55:18",
      "first_name": "David S",
      "last_name": ".",
      "photo": "1550537985.png"
    },
    {
      "id": "34432",
      "user_id": "181",
      "sch_id": "29394",
      "job_id": "13903",
      "note": "Rita brooks change invoice name and re issue email",
      "created_at": "2019-09-06 08:14:54",
      "updated_at": "2019-09-06 08:14:54",
      "first_name": "David S",
      "last_name": ".",
      "photo": "1550537985.png"
    },
    {
      "id": "34433",
      "user_id": "181",
      "sch_id": "29394",
      "job_id": "13903",
      "note": "Rita brooks change invoice name and re issue email",
      "created_at": "2019-09-06 08:14:54",
      "updated_at": "2019-09-06 08:14:54",
      "first_name": "David S",
      "last_name": ".",
      "photo": "1550537985.png"
    },
    {
      "id": "34434",
      "user_id": "181",
      "sch_id": "29394",
      "job_id": "13903",
      "note": "Rita brooks change invoice name and re issue email",
      "created_at": "2019-09-06 08:14:54",
      "updated_at": "2019-09-06 08:14:54",
      "first_name": "David S",
      "last_name": ".",
      "photo": "1550537985.png"
    }
  ];
};

export default (
  state = [],
  action) => {
  switch (action.type) {
    case ADD_NOTES:
      return state;
    case FETCH_NOTES:
      return fetchNotes();
    default:
      return state;
  }
};
