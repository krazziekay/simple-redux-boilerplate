import React, { useState, useEffect, useRef } from 'react';
import JobDetailsHeader from '../../common/JobDetailsHeader';
import { makeStyles } from '@material-ui/core';
import Note from './../../common/Note';
import { connect } from 'react-redux';
import { fetchNotes, addNotes } from '../../actions/NotesActions';
import { bindActionCreators } from 'redux';
import { scrollIt, themeStyler } from '../../helper/helper';
import SendIcon from '@material-ui/icons/Send';
import moment from 'moment';
import Button from '@material-ui/core/Button';


const SAMPLENOTE = {
  "id": "34448",
  "user_id": "181",
  "sch_id": "29394",
  "job_id": "13903",
  "note": '',
  "created_at": "2019-09-06 08:55:18",
  "updated_at": "2019-09-06 08:55:18",
  "first_name": "kAy",
  "last_name": ".",
  "photo": "1550537985.png"
};

const calculateNoteHeight = () => {
  let breadCrumbHeight = 53, jobDetailsHeaderHeight = 76, paddingHeight = 24, footerHeight = 120;
  return window.innerHeight - (breadCrumbHeight + jobDetailsHeaderHeight + paddingHeight + footerHeight) + 'px';
};

const useStyle = makeStyles(theme => themeStyler(theme, {
  spaceEvenlyForAllScreens: {
    display: 'flex',
    justifyContent: 'space-evenly',
    verticalAlign: 'middle',
  },

  overflowOnlyX: {
    overflowX: 'scroll',
    overflowY: 'hidden'
  },
  notesListWrapper: {
    height: calculateNoteHeight(),
    overflowY: 'scroll',
    position: 'relative',
    transition: '0.5s',
    [theme.breakpoints.down('sm')]: {
      height: 'unset',
      overflowY: 'hidden',
    },

  },
  noteSendWrapper: {
    borderRadius: 4,
    border: '1px solid #ccc',
    overflow: 'hidden',
  },
  noteField: {
    background: '#fff',
    width: '100%',
    padding: '12px 8px',
    border: 'none',
    fontFamily: 'Roboto',
    '&:focus': {
      outline: 'none'
    }
  },
  buttonWrapper: {
    textAlign: 'right',
    background: '#F7F9FA',
    padding: '12px 8px'
  },
  sendBtn: {
    borderRadius: 4,
    boxShadow: '0px 1px 2px rgba(8, 35, 48, 0.24), 0px 2px 6px rgba(8, 35, 48, 0.16)',
    background: '#5E6366',
    color: '#fff',
    '&:hover': {
      background: '#45484a',
    }
  },
}));

const columnHeightCss = {};


const Notes = ({
                 notes,
                 fetchNotes,
                 addNotes
               }) => {
  const classes = useStyle();
  const notesList = useRef();
  const [note, setNote] = useState('');
  useEffect(() => {
    fetchNotes();
  }, []);

  const getNote = (e) => {
    e.persist();
    setNote(e.target.value);
  };

  const saveNote = () => {
    if (note.length < 1) return;
    let clone = Object.assign({}, SAMPLENOTE);
    clone.note = note;
    addNotes(clone);
    setNote('');
  };

  return (
    <div className="p-l-24 p-r-24 p-t-12 p-b-12">
      <JobDetailsHeader classes={classes}/>
      <div className={classes.noteContainerWrapper}>
        <div className={classes.notesListWrapper} ref={notesList}>
          {
            notes.map(note =>
              <Note noteTechImg="https://app.skeduler.com.au/upload/users/prof-picture-unassigned.jpg"
                    noteTech={`${note.first_name} ${note.last_name}`}
                    noteTime={moment(note.created_at).format('hh:mm A')}
                    noteDetails={note.note}/>
            )
          }
        </div>
        <div className={classes.noteSendWrapper}>
          <textarea className={classes.noteField} onChange={getNote}
                    placeholder="Type here what's on you mind..."
                    value={note}
          />
          <div className={classes.buttonWrapper}>
            <Button className={classes.sendBtn} color="inherit" size="small" onClick={saveNote}>
              SEND&nbsp;<SendIcon className={`${classes.iconStyle}`}/>
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default connect(state => ({
    jobDetails: state.jobDetails.data,
    notes: state.notes,
  }), dispatch => ({
    fetchNotes: bindActionCreators(fetchNotes, dispatch),
    addNotes: bindActionCreators(addNotes, dispatch),
  })
)(Notes);
