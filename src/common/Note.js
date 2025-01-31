import React from 'react';
import { makeStyles } from '@material-ui/core';
import { themeStyler } from '../helper/helper';
import { Colors } from './../common/colors';

const useStyle = makeStyles(theme => themeStyler(theme, {
  noteWrapper: {
    display: 'flex',
    padding: '12px 0',
  },
  noteDetails: {
    marginLeft: 12
  },
  tech: {
    fontFamily: 'Quicksand',
    paddingLeft: 12
  },
  muted: {
    color: Colors.disabled
  },
  note: {
    fontFamily: 'Roboto',
    margin: '12px 0',
    color: '#3E4345',
    fontSize: 14,
    background: '#f5f5f5',
    padding: '8px 12px;',
    borderRadius: 24
  }
}));

const Note = ({
                noteTechImg,
                noteTech,
                noteTime,
                noteDetails
              }) => {
  const classes = useStyle();

  return (
    <div>
      <div className={classes.noteWrapper}>
        <img src={noteTechImg} className={classes.avatar} alt=""/>
        <div className={classes.noteDetails}>
          <div className={classes.tech}>
            <b>{noteTech}</b>&nbsp;<span className={classes.muted}>{noteTime}</span>
          </div>
          <div className={classes.note}>{noteDetails}</div>
        </div>


      </div>
    </div>
  );
};

export default Note;
