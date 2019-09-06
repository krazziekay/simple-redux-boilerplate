import React, { useState, useEffect } from 'react';
import JobDetailsHeader from '../../common/JobDetailsHeader';
import { makeStyles } from '@material-ui/core';
import { themeStyler } from '../../helper/helper';
import Note from './../../common/Note';
import { connect } from 'react-redux';
import { fetchNotes } from '../../actions/NotesActions';
import { bindActionCreators } from 'redux';
import moment from 'moment';

const useStyle = makeStyles(theme => themeStyler(theme, {
  spaceEvenlyForAllScreens: {
    display: 'flex',
    justifyContent: 'space-evenly',
    verticalAlign: 'middle',
  },

  overflowOnlyX: {
    overflowX: 'scroll',
    overflowY: 'hidden'
  }
}));

const Notes = ({
                 jobDetails,
                 notes,
                 fetchNotes
               }) => {
  const classes = useStyle();
  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="p-l-24 p-r-24 p-t-12 p-b-12">
      <JobDetailsHeader classes={classes}/>

      {
        notes.map(note =>
          <Note noteTechImg="https://app.skeduler.com.au/upload/users/prof-picture-unassigned.jpg"
                noteTech={`${note.first_name} ${note.last_name}`}
                noteTime={moment(note.created_at).format('hh:mm A')}
                noteDetails={note.note}/>
        )
      }
    </div>
  );
};

export default connect(state => ({
    jobDetails: state.jobDetails.data,
    notes: state.notes,
  }), dispatch => ({
    fetchNotes: bindActionCreators(fetchNotes, dispatch)
  })
)(Notes);
